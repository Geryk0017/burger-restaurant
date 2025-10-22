<script setup>
import { RouterView } from 'vue-router'
import { ref, reactive, computed } from 'vue'
import HamburgerMenu from './components/HamburgerMenu.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="sticky bg-bgcolor top-0 z-50 flex justify-between px-5 py-5 w-full h-[100px]">
      <div>
        <h1 class="font-Bowlby  text-black font-bold text-[25px] leading-[50px] md:text-[50px]"> JO'S</h1>
      </div>

      <div class="sticky top-0">
        <HamburgerMenu/>
        <Navbar class="hidden md:block" />
      </div>
  </div>
  <div>
  </div>
  <RouterView />
</template>
