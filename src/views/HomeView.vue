<script setup>
import Browsemenu from '@/components/browsemenu.vue';
import burger from '../assets/images/burger.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import browsemenu from '@/components/browsemenu.vue';
import Shrimpyo from '@/components/cards/burgers/shrimpyo.vue';
import Doubletrouble from '@/components/cards/burgers/doubletrouble.vue';
import Juicyyo from '@/components/cards/burgers/juicyyo.vue';
import Crispychi from '@/components/cards/burgers/crispychi.vue';
import ribbon from '@/components/cards/marquee/ribbon.vue';
import Review1 from '@/components/cards/reviews/review1.vue';
import Review2 from '@/components/cards/reviews/review2.vue';
import Review3 from '@/components/cards/reviews/review3.vue';
import Review4 from '@/components/cards/reviews/review4.vue';
import Review5 from '@/components/cards/reviews/review5.vue';
import Review6 from '@/components/cards/reviews/review6.vue';
</script>

<template>
  <div class="relative md:flex md:justify-between w-full h-[600px] md:h-screen text-black">
    <!-- HOME SECTION -->
    <div class="m-5 md:m-10" id="home">
        <div>
            <h1 class="text-[40px] md:text-[110px] font-Bowlby" data-aos="zoom-in">
                NEW YORK'S <br> FAVORITE <br> BURGER
            </h1>
                <p class="font-Oswald text-[24px] relative z-10" data-aos="fade-up" data-aos-delay="600">
                    In a world so painfully serious, yet so ridiculous, <br>
                    you knew it was only a matter of time before plant- <br>
                    based steak became a thing.
                </p>
        </div>
        <div>
            <img 
            :src="burger"
            alt="Burger"
            class="absolute top-[220px] left-20 w-[300px] h-[300px] z-0 md:block md:top-20 md:left-[1200px]  md:w-[500px] md:h-[500px]"
            />
        </div>

        <div class="hidden md:block w-[250px] h-[70px] m-0 text-center leading-[70px] text-white font-Oswald text-[25px]">
            <div class="my-10" data-aos="fade-up" data-aos-delay="900">
                <browsemenu />
            </div>
        </div>

        
    </div>
  </div>

    <div class="md:hidden w-full h-[70px] m-0 text-center leading-[70px] text-white font-Oswald text-[25px]">
        <div class="mx-10">
            <browsemenu />
        </div>
    </div>

    <!-- ABOUT SECTION -->
    <div class="w-full bg-[#F6F2F0]  mt-10" id="about">
        <div class="px-5 py-10">
            <div data-aos="fade-right">
                <h1 class="text-[25px] font-Bowlby text-bgcolor md:hidden">
                    HI, WE'RE JO'S <br> BURGERS, A <br> COLLECTIVE OF <br>CREATORS WHO <br> LOVE BURGER AND <br> GOOD MOOD.
                </h1>
            </div>
            

            <!-- MD - LG screen -->
            <div class="md:flex">
                <div class="z-10" data-aos="fade-right">
                    <h1 class="hidden md:block text-[70px] font-Bowlby text-bgcolor">
                        HI, WE'RE JO'S <br> BURGERS, A COLLECTIVE <br> OF CREATORS WHO <br> LOVE BURGER AND <br> GOOD MOOD.
                    </h1>
                </div>

                <div class="md:px-10 drop-shadow-lg" data-aos="fade-in" data-aos-delay="300">
                    <img :src="image1" class="w-full mt-5 z-0 md:w-[800px] md:h-[500px]"></img>
                    <p class="text-center font-Oswald mt-5 text-md md:text-[24px] ">This is Jo. He started everything 40 years ago.</p>
                </div>
            </div>
        </div>

        <div class="px-5 py-10 h-screen md:flex ">
            <div data-aos="fade-in" data-aos-delay="300">
                <img :src="image2" class="w-full mt-5 z-0 md:w-[800px] md:h-[500px] drop-shadow-lg">
            </div>

            <div class="md:w-[800px] md:h-[500px] md:mx-[160px]" data-aos="fade-left">
                <h1 class="font-Bowlby text-bgcolor text-[32px] my-5 md:mx-[70px] md:text-[72px]"> FOOD IS FOR <br> EVERYONE.</h1>
                <p class="text-[18px] font-Oswald text-bgcolor md:mx-[70px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <!-- MENU SECTION -->
        <div class="mx-5 my-5" data-aos="fade-right" id="menu">
                <h1 class="text-[32px] font-Bowlby text-bgcolor md:text-[72px]"> OUR BURGERS</h1>
                <p class="text-[18px] font-Oswald text-bgcolor md:text-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br> ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p> 
        </div>

    
        <div class="w-full h-full grid grid-cols-1 md:grid-cols-4">
            <div data-aos="fade-in" data-aos-delay="300">
                <div class="m-5 h-[550px] bg-white drop-shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-110">
                    <Shrimpyo />
                </div>
            </div>

            <div data-aos="fade-in" data-aos-delay="600">
                <div class="m-5 h-[550px] bg-white drop-shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-110">
                    <Doubletrouble />
                </div>
            </div>

            <div data-aos="fade-in" data-aos-delay="900">
                <div class="m-5 h-[550px] bg-white drop-shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-110">
                    <Juicyyo />
                </div>
            </div>

            <div data-aos="fade-in" data-aos-delay="1200">
                <div class="m-5 h-[550px] bg-white drop-shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-110">
                    <Crispychi />
                </div>
            </div>
        </div>

        <!-- MARQUEE -->
        <div class="h-[200px] md:mt-[100px]">
            <ribbon  class="mt-[200px]"/>
        </div>

        <!-- REVIEW CARDS -->
        <div class="w-full mt-10" id="reviews">
            <div class="m-5 text-bgcolor">
                <h1 class="font-Bowlby text-[72px]"> SOME REVIEWS</h1>
                <p class="font-Oswald text-[24px]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis illo <br>aliquid iste nihil dolore quas veritatis. Odio enim neque sunt excepturi, mollitia aspernatur totam praesentium est distinctio sed obcaecati.</p>
            </div>
            <div class="grid md:grid-rows-3 md:grid-cols-3 p-5 gap-5">
                <div data-aos="fade-left">
                    <div class="w-full h-[350] md:h-[300px] bg-white drop-shadow-lg cursor-pointer p-2">
                        <Review1 />
                    </div>
                </div>

                <div data-aos="fade-left">
                    <div class="w-full h-[350] md:h-[300px] bg-white drop-shadow-lg cursor-pointer p-2">
                        <Review2 />
                    </div>
                </div>

                <div data-aos="fade-left">
                    <div class="w-full h-[350] md:h-[300px] bg-white drop-shadow-lg cursor-pointer p-2">
                        <Review3 />
                    </div>
                </div>

                <div data-aos="fade-right">
                    <div class="w-full h-[350] md:h-[300px] bg-white drop-shadow-lg cursor-pointer p-2">
                        <Review4 />
                    </div>
                </div>

                <div data-aos="fade-right">
                    <div class="w-full h-[350] md:h-[300px] bg-white drop-shadow-lg cursor-pointer p-2">
                        <Review5 />
                    </div>
                </div>

                <div data-aos="fade-right">
                    <div class="w-full h-[350] md:h-[300px] bg-white drop-shadow-lg cursor-pointer p-2">
                        <Review6 />
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

