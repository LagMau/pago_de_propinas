<template>
  <div class="payments-container">
    <h3>Pagos</h3>
    <div v-for="record in records" :key="record.id" class="payment-card">
      <div class="payment-info">
        <font-awesome-icon :icon="getIcon(record.method)" class="payment-icon" />
        <span class="method-text">{{ record.method }}</span>
      </div>
      <span class="amount">{{ formatCurrency(record.amount) }}</span>
      <button class="delete-btn" @click="$emit('removePayment', record.id)">✖</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type PaymentRecord = {
id: number;
method: string;
amount: number;
};

defineProps<{ records: PaymentRecord[] }>();

const formatCurrency = (value: number): string => {
return new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2
}).format(value);
};

const getIcon = (method: string): string => {
return method === "Efectivo" ? "money-bill-wave" : "credit-card";
};
</script>

<style scoped>
.payments-container {
border-radius: 10px;
padding: 15px;
max-height: 300px;
overflow-y: auto;
}

h3 {
margin-top: -17px;
margin-bottom: 10px;
font-family: 'Franklin Gothic Medium';
}

.payment-card {
display: flex;
align-items: center;
padding: 10px;
border-radius: 15px;
border: 1px solid black;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
margin-bottom: 15px;
max-width: 250px;
justify-content: space-between;
}

.payment-info {
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
}

.payment-icon {
font-size: 18px;
}

.method-text {
font-family: 'Franklin Gothic Medium';
}

.amount {
font-family: 'Franklin Gothic Medium';
margin-left: auto;
margin-right: 10px;
}

.delete-btn {
background: none;
border: none;
color: red;
font-size: 12px;
cursor: pointer;
}
</style>
a