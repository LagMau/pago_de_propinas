<script setup lang="ts">
</script>

<template>
  <div class="top-content">
    <button class="back"> &lt; Atras</button>
    <h2 class="title">Pago de Propinas</h2>
    <div class="efectivo-caja">
      <p>Efectivo en caja</p>
      <h2>$5,500.00</h2>
    </div>
  </div>
</template>

<style scoped>
.top-content {
  padding-left: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
}

.efectivo-caja {
  display: flex;
  flex-direction: column;
  margin-left: auto;
}

.efectivo-caja p {
  font-size: small;
  font-family: 'Franklin Gothic Medium';
  color: orangered;
  margin-left: auto;
  margin-bottom: auto;
}

.efectivo-caja h2 {
  font-size: 35px;
  font-family: 'Franklin Gothic Medium';
  color: orangered;
  background-color: #ffe2da;
  padding: 5px 10px;
  border-radius: 10px;
  margin-top: 2px;
}

.title {
  font-family: 'Franklin Gothic Medium';
  padding-left: 25px;
}

.back {
  color: orangered;
  border: none;
  background-color: transparent;
  font-size: small;
  font-family: 'Franklin Gothic Medium';
}

.back:hover {
  color: orange;
}
</style>
