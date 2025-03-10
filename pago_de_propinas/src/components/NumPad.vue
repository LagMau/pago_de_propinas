<template>
  <div class="numpad">
      <div class="display">
          <h2>{{ formattedInput }}</h2>
          <button class="clear-button" @click="clearInput">
              <font-awesome-icon icon="delete-left"/>
          </button>
      </div>
      <div class="buttons">
          <button v-for="n in numbers" :key="n" @click="appendNumber(n)">{{ n }}</button>
          <button @click="appendNumber('00')">00</button>
          <button @click="appendNumber('0')">0</button>
          <button class="enter-button" @click="confirmInput">✔</button>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps<{ activeField?: string }>();
const emit = defineEmits<{ 
  (event: "update:totalTip", value: number): void;
  (event: "update:serverNum", value: number): void;
  (event: "update:paymentAmount", value: number): void;
  (event: "clearActiveField"): void;
}>();

const inputValue = ref<string>("");
const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const formattedInput = computed(() => {
  let value = inputValue.value || "0";
  if (props.activeField === "totalTip" || props.activeField === "paymentAmount") {
      return new Intl.NumberFormat("es-MX", {
          style: "currency",
          currency: "MXN",
          minimumFractionDigits: 2,
      }).format(parseFloat(value) || 0);
  }
  return value;
});

const appendNumber = (num: string) => {
  if (props.activeField === "serverNum" && num === "00") return;
  inputValue.value += num;
};

const clearInput = () => {
  inputValue.value = "";
};

const confirmInput = () => {
  let value = parseFloat(inputValue.value) || 0;
  if (props.activeField === "totalTip") {
      emit("update:totalTip", value);
  } else if (props.activeField === "serverNum") {
      emit("update:serverNum", Math.max(1, Math.floor(value)));
  } else {
      emit("update:paymentAmount", value);
  }
  inputValue.value = "";
  emit("clearActiveField");
};
</script>

<style scoped>
.numpad {
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffe2da;
border: 2px solid orangered;
padding: 20px;
border-radius: 10px;
max-width: 270px;
max-height: 450px;
}

.display {
display: flex;
align-items: center;
justify-content: space-between;
width: 200px;
border-bottom: 2px solid black;
}

.display h2 {
font-size: 20px;
margin: 0;
flex-grow: 1;
text-align: right;
font-family: 'Franklin Gothic Medium';
overflow: hidden;
}

.clear-button {
background: none;
border: none;
font-size: 18px;
color: grey;
box-shadow: none;
}

.buttons {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
margin-top: 10px;
}

button {
width: 60px;
height: 60px;
font-size: 25px;
border: none;
background-color: white;
cursor: pointer;
border-radius: 10px;
font-family: 'Franklin Gothic Medium';
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

button:hover {
background-color: #ffe2da;
}

.enter-button {
background-color: orangered;
color: white;
font-weight: bold;
}

.enter-button:hover {
background-color: darkorange;
}
</style>
