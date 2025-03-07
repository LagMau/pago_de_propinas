<script setup>
import { ref } from "vue";

const selectedIcon = ref(null);
  const iconsTop = [
    { name: "chart", icon: "fa-chart-pie" },
    { name: "calc", icon: "fa-calculator" },
    { name: "newspaper", icon: "fa-newspaper" },
    { name: "coin", icon: "fa-circle-dollar-to-slot" },
    { name: "book", icon: "fa-book" },
    { name: "building", icon: "fa-building" },
    { name: "desktop", icon: "fa-desktop" },
    { name: "coins", icon: "fa-coins" },
    { name: "list", icon: "fa-clipboard-list" },
    { name: "user", icon: "fa-user" }
  ];

  const iconsBottom = [
    { name: "settings", icon: "fa-gear" },
    { name: "logout", icon: "fa-right-from-bracket" }
  ];

  const selectIcon = (iconName) => {
    selectedIcon.value = iconName;
  };

</script>

<template>
  <div class='navbar'>
    <img id="logo" src="@/assets/logo.png" alt="logo">
    <ul class="icons-top">
      <li id="icon-top" v-for="(item,index) in iconsTop" :key="index" @click="selectIcon(item.name)" :class="{active: selectedIcon === item.name}">
        <a href="#"><font-awesome-icon :icon="item.icon" /></a>
      </li>
    </ul>
    <ul class="icons-bottom">
      <li id="icon-bottom" v-for="(item,index) in iconsBottom" :key="index">
        <a href="#"><font-awesome-icon :icon="item.icon" /></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .navbar {
    width: 78px;
    height: 100vh;
    position: sticky;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: space-between; 
    padding-top: 10px;
    padding-bottom: 10px;
    border-right: 1px solid grey;
  }

  #logo {
    width: 40px;
    margin-top: 10px;
  }

  .icons-top {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  #icon-top {
    margin: 5px 0;
  }

  .icons-bottom {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  #icon-bottom {
    margin: 3px 0;
  }

  a {
    text-decoration: none;
    color: rgb(156, 150, 150);
    font-size: 24px;
    display: block;
    padding: 2px;
  }

  a:hover {
    color: orangered;
  }

  li.active {
    background-color: orangered;
    border-radius: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  li.active a {
    color: white;
  }
</style>

