<template>
    <div class="container">
        <div class="swiper-arrows">
            <div ref="prev" class="left-arrow"><img src="../assets/leftArrow.svg" alt="left-arrow"></div>
            <div ref="next" class="right-arrow"><img src="../assets/rightArrow.svg" alt="right-arrow"></div>
        </div> 
    </div>
    <swiper class="mySwiper"
        :slides-per-view="3.5"
        :space-between="32"
        :set-wrapper-size="true"
        :navigation="{
            prevEl: prev,
            nextEl: next}"
        :modules="modules"
        :loop="true"
        :breakpoints="{
            950: {
                slidesPerView: 6.5,
                spaceBetween: 32,
                width: 2000,
            }
        }"
    >
    
    <swiper-slide v-for="currentDog in imgArray" :key="currentDog">
        <img :src="getImg(currentDog.img)" class="slider-img" alt="dog">
        <div class="dog-characters">
            <span class="dog-name">{{currentDog.name}}</span>
            <span class="dog-weight">{{currentDog.weight}}</span>
        </div>
    </swiper-slide>
    
    
  </swiper>
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss/navigation';
import 'swiper/scss'
import { Navigation,  } from 'swiper';
import { width } from 'dom7';
import { computed } from '@vue/reactivity';
  

    const prev = ref(null);
    const next = ref(null);
    const modules = [Navigation];

    const props = defineProps({
        imgArray: {
            type: Array,
        }
    })
    const getImg = ((img) => new URL(`../assets/${img}`, import.meta.url));

</script>
<style lang="scss">
    .mySwiper{
        // overflow: hidden;
    }

    .swiper-slide{
        cursor: pointer;
    }
    
    .dog-characters{
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dog-name{
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        text-align: center;
        letter-spacing: 0.02em;
        color: #000000;
    }

    .dog-weight{
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        text-align: center;
        letter-spacing: 0.02em;
        color: #000000;
    }
    .left-arrow{
        cursor: pointer;
    }

    .right-arrow{
        cursor: pointer;
    }

    .swiper-slide{
        width: 100%;
    }

    .slider-img{
        width: 100%;
    }
  

    .swiper-arrows{
        margin-left: auto;
        position: relative;
        bottom: 30px;
        z-index: 20;
        margin-bottom: 44px;
        display: flex;
        justify-content: space-between;
        max-width: 84px;
    }

    .swiper-button-prev{
       display: none;
    }

    .swiper-button-next{
       display: none;
    }

@media screen and (max-width: 955px){ 
    .mySwiper{
        margin-top: 23px;
	}
	.swiper-arrows{
		display: none;
	}
    
    .dog-name{
        font-size: 16px;
    }

    .dog-weight{
        font-size: 12px;
    }
}
</style>