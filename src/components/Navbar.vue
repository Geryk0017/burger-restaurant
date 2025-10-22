<template>
  <div class="flex justify-center items-center">
    <ul class="flex gap-10 leading-[50px] text-[25px] text-black font-bold font-Oswald">
      <li class="font-Oswald"><button @click="scrollTo('home')">HOME</button></li>
      <li class="font-Oswald"><button @click="scrollTo('about')">ABOUT</button></li>
      <li class="font-Oswald"><button @click="scrollTo('menu')">MENU</button></li>
      <li class="font-Oswald"><button @click="scrollTo('reviews')">REVIEWS</button></li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function scrollTo(id) {
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    })
  } else {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
