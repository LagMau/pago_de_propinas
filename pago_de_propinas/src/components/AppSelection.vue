<template>
  <div class="total-tips">
    <p class="total">Total de Propinas</p>
    <div class="tip-amount">
      <h2>{{ formattedTip }}</h2>
      <button class="edit-button" @click="editTotalTip">
        <font-awesome-icon icon="fa-solid fa-pen" />
      </button>
    </div>
    <div class="question">
      <p><b>¿Entre cuántos quieres dividir las Propinas?</b></p>
    </div>
    <div class="quantity-per-person">
      <input type="text" class="server-num" :value="serverNum || ''" placeholder="0" readonly @click="editServerNum" />
      <p class="x-person">{{ formattedPerPerson }} x Persona</p>
    </div>
    <div class="payment-method">
      <font-awesome-icon icon="wallet" />
      <p>Elige el Método de Pago</p>
    </div>
    <div class="payment-cards">
      <button class="payment-card" :class="{ selected: selectedPayment === 'Efectivo' }" @click="selectPayment('Efectivo')">
        <font-awesome-icon icon="money-bill-wave" class="icon" />
        <p>Efectivo</p>
      </button>
      <button class="payment-card" :class="{ selected: selectedPayment === 'BBVA 1234' }" @click="selectPayment('BBVA 1234')">
        <font-awesome-icon icon="credit-card" class="icon" />
        <p>BBVA 1234</p>
      </button>
      <button class="payment-card card-bottom" :class="{ selected: selectedPayment === 'Santander 1234' }" @click="selectPayment('Santander 1234')">
        <font-awesome-icon icon="credit-card" class="icon" />
        <p>Santander 1234</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits, ref } from "vue";

const props = defineProps<{ totalTip: number; serverNum: number }>();
const emit = defineEmits<{
  (event:"editTotalTip"): void; 
  (event:"editServerNum"): void;
  (event:"updatePaymentMethod", method: string): void;
}>();

const formattedTip = computed((): string => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(props.totalTip || 0);
});

const formattedPerPerson = computed((): string => {
  const perPerson = props.serverNum > 0 ? props.totalTip / props.serverNum : 0;
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(perPerson);
});

const editTotalTip = () => emit("editTotalTip");
const editServerNum = () => emit("editServerNum");

const selectedPayment = ref<string>("");
const selectPayment = (method: string) => {
  selectedPayment.value = method;
  emit("updatePaymentMethod", method);
};
</script>

<style scoped>
.total-tips {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.total {
  font-size: 14px;
  color: orangered;
  font-family: 'Franklin Gothic Medium';
  margin-left: 100px;
  margin-bottom: 0px;
}

.tip-amount {
  display: flex;
  width: 100%;
  margin-left: 100px;
}

.tip-amount h2 {
  font-size: 35px;
  font-family: 'Franklin Gothic Medium';
  color: orangered;
  background-color: #ffe2da;
  padding-left: 15px;
  padding-right: 5px;
  border-radius: 10px;
  width: 180px;
  text-align: right;
  overflow: hidden;
  margin-top: 10px;
}

.edit-button {
  background: none;
  border: none;
  font-size: 20px;
  color: black;
  margin-top: -20px;
}

.edit-button:hover {
  color: orange;
}

.question {
    font-family: 'Franklin Gothic Medium';
    align-self: center;
    font-size: 20px;
    margin-top: -25px;
}

.quantity-per-person {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
}

.quantity-per-person input {
    border-radius: 10px;
    width: 50px;
    height: 25px;
    
}

.x-person {
    font-family: 'Franklin Gothic Medium';
    color: orangered;
    margin-left: 80px;
}

.payment-method {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    margin-left: -65px;
    margin-top: 20px;
}

.payment-method p {
    margin-left: 10px;
    font-family: 'Franklin Gothic Medium';
    font-size: 20px;
}

.payment-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    align-self:center;
}

.payment-cards p {
    font-size: 12px;
}

.payment-card {
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Franklin Gothic Medium";
  width: 150px;
  height: 80px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
}

.payment-card:hover {
  background-color: #ffe2da;
}

.payment-card.selected {
  background-color: orangered;
  color: white;
  border-color: transparent;
}

.icon {
  font-size: 24px;
  margin-top: 4px;
}

.card-bottom {
  grid-column: 1 / span 2;
  justify-self: start;
}
</style>