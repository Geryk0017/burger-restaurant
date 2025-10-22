<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import logo from '../assets/images/logo.png'
const isOpen = ref(false)
const route = useRoute()

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

// ✅ Close menu when clicking outside
function handleClickOutside(event) {
  const menu = document.querySelector('#mobileMenu')
  const button = document.querySelector('#hamburgerBtn')
  if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
    isOpen.value = false
  }
}

// ✅ Close when resizing to desktop width
function handleResize() {
  if (window.innerWidth > 768) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

// Cleanup listeners
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})

// ✅ Close on route change
watch(() => route.fullPath, closeMenu)
</script>

<template>
  <nav>
  <div>
    <div class="sticky top-0 bg-black rounded-full md:hidden lg:hidden flex items-center justify-center w-14 h-14">
      <div
        id="hamburgerBtn"
        class="cursor-pointer flex flex-col justify-center items-center space-y-[6px]"
        @click="toggleMenu"
      >
        <div
          class="w-6 h-[3px] bg-white rounded-md transition-all duration-300"
          :class="{ 'rotate-45 translate-y-[9px]': isOpen }"
        ></div>
        <div
          class="w-6 h-[3px] bg-white rounded-md transition-all duration-300"
          :class="{ 'opacity-0': isOpen }"
        ></div>
        <div
          class="w-6 h-[3px] bg-white rounded-md transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-[9px]': isOpen }"
        ></div>
      </div>
    </div>
  </div>
</nav>


  <div
  id="mobileMenu"
  class="backdrop-blur-md bg-bgcolor w-screen h-full backdrop-blur-xl fixed top-[100px] left-0 flex flex-col justify-between"
  v-show="isOpen"
>
  <ul class="p-5 text-black font-bold text-[25px] pt-10 flex flex-col text-center justify-center items-center gap-10">
    <li class="font-Oswald"><RouterLink to="/">HOME</RouterLink></li>
    <li class="font-Oswald"><RouterLink to="/about">ABOUT</RouterLink></li>
    <li class="font-Oswald"><RouterLink to="/menu">MENU</RouterLink></li>
    <li class="font-Oswald"><RouterLink to="/reviews">REVIEWS</RouterLink></li>
    <li class="font-Oswald"><RouterLink to="/social">SOCIAL</RouterLink></li>
    <li>
      <!-- ✅ Logo at bottom center -->
  <img
    :src="logo"
    alt="Logo"
    class="w-50 mt-20 mx-auto"
  />
    </li>
  </ul>
</div>

</template>