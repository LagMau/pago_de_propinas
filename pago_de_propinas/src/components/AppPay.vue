<template>
    <div class="bottom-part">
        <div class="quantity">
            <div class="total-bottom">
                <p>Total Pagado</p>
                <p>{{ formattedTotalPaid }}</p>
            </div>
            <div class="debt">
                <p>Restante por Pagar</p>
                <p>{{ formattedRemainingAmount }}</p>
            </div>
        </div>
        <button class="pay" @click="$emit('processPayment')" :disabled="paymentAmount <= 0 || paymentAmount > remainingAmount">{{ paymentButtonText }}</button>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

type Props = {
  paymentAmount: number;
  totalPaid: number;
  remainingAmount: number;
};

const props = defineProps<Props>();

const formattedTotalPaid = computed(() => formatCurrency(props.totalPaid));
const formattedRemainingAmount = computed(() => formatCurrency(props.remainingAmount));
const paymentButtonText = computed(() => props.paymentAmount > 0 
    ? `Pagar ${formatCurrency(props.paymentAmount)} en Propinas` : "Pagar Propinas");

function formatCurrency(value: number): string {
    return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2
    }).format(value);
}
</script>


<style>
.bottom-part {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-evenly;
}

.quantity {
    display: flex;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium';
    font-size: 24px;
    width: 35%;
}

.total-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: orangered;
}

.debt {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -40px;
}

.pay {
    background: none;
    border-radius: 30px;
    width: 400px;
    height: 50px;
    font-family: 'Franklin Gothic Medium';
    font-size: 20px;
}

.pay:hover {
    border: none;
    background-color: orangered;
    color: white;
}
</style>