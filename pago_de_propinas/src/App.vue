<script setup lang="ts">
import { ref, watch } from "vue";
import Navbar from './components/AppNavbar.vue';
import AppTop from './components/AppTop.vue';
import AppSelection from "./components/AppSelection.vue";
import NumPad from "./components/NumPad.vue";
import Payments from "./components/AppPayments.vue";
import Pay from "./components/AppPay.vue";

interface PaymentRecord {
  id: number;
  method: string;
  amount: number;
}

const totalTip = ref<number>(0);
const serverNum = ref<number>(0);
const paymentAmount = ref<number>(0);
const totalPaid = ref<number>(0);
const remainingAmount = ref<number>(0);
const selectedPaymentMethod = ref<string>("");
const paymentRecords = ref<PaymentRecord[]>([]);

const activeField = ref<string>("");

const setActiveField = (field: string) => {
  activeField.value = field;
};

watch(totalTip, (newTip) => {
  remainingAmount.value = newTip;
});

const updatePaymentMethod = (method: string) => {
  selectedPaymentMethod.value = method;
};

const processPayment = () => {
  if (paymentAmount.value > 0) {
    totalPaid.value += paymentAmount.value;
    remainingAmount.value -= paymentAmount.value;
    paymentRecords.value.unshift({
      id: Date.now(),
      method: selectedPaymentMethod.value || "Desconocido",
      amount: paymentAmount.value,
    });
    paymentAmount.value = 0;
  }
};

const removePayment = (id: number) => {
  paymentRecords.value = paymentRecords.value.filter((p) => p.id !== id);
};
</script>

<template>
  <main class="main-app">
    <nav>
      <Navbar />
    </nav>
    <div class="content">
      <AppTop />
      <div class="main-content">
        <div class="left">
          <AppSelection :totalTip="totalTip" :serverNum="serverNum" 
          @editTotalTip="setActiveField('totalTip')" @editServerNum="setActiveField('serverNum')"
          @updatePaymentMethod="updatePaymentMethod"/>
        </div>
        <div class="middle">
          <NumPad :activeField="activeField"
          @update:totalTip="totalTip = $event" @update:serverNum="serverNum = $event" 
          @update:paymentAmount="paymentAmount = $event" @clearActiveField="setActiveField('')"/>
        </div>
        <div class="right">
          <Payments :records="paymentRecords" @removePayment="removePayment"/>
        </div>
      </div>
      <Pay :paymentAmount="paymentAmount" :totalPaid="totalPaid" :remainingAmount="remainingAmount" @processPayment="processPayment"/>
    </div>
  </main>
</template>

<style scoped>
  .main-app {
    display: flex;
    height: 100vh;
  }

  nav {
    flex-shrink: 0;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 20px;
    
  }

  .main-content > * {
    flex: 1;
    margin: 10px;
  }

  .middle {
    flex: 1; 
    display: flex;
    justify-content: center; 
  }

  .right {
    margin-left: auto;
  }
</style>
