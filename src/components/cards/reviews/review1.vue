<script setup>
import review1 from '../../../assets/images/review1.jpg'
</script>
<template>
    <!-- HEADER -->
    <div class="h-[100px] px-5 m-5 flex gap-5">
       <div>
            <img :src="review1" class="w-[100px] h-[100px] rounded-full">
       </div>

       <div>
            <h1 class="font-Oswald text-[20px] leading-[100px]"> UIDELI.COM </h1>
       </div>
    </div>

    <!-- BODY -->

     <div>
          <p class="font-Oswald text-[16px] p-5 m-5">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptate quibusdam placeat, laboriosam cum optio nulla, laborum provident ad quam sequi! Dolorem assumenda similique dignissimos voluptate fuga odit animi placeat.
          </p>
     </div>
</template>