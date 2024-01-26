<template>
    <vueper-slides :bullets="false" fade autoplay infinite  :breakpoints="breakpoints" :dragging-distance="50" prevent-y-scroll  fixed-height='55vw' lazy lazy-load-on-drag>
      <vueper-slide v-for="(slide, i) in slides" :key="i" :duration=5000  :image="slide.background.img" :class="slide.background.class" dir="ltr">
        <template #loader>
          <i class="icon icon-loader spinning"></i>
          <span>Loading...</span>
        </template>
        <template #content>
          
            <component :is="slide.slide" ></component>
         
          
        
        </template>
      </vueper-slide>
    </vueper-slides>
</template>
  <script>
 import {defineComponent} from 'vue';

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Slide1 from './Slide1.vue'
import Slide2 from './Slide2.vue'
import Slide3 from './Slide3.vue'


export default defineComponent({
  name: 'CarouselComponent',
  components: {
    VueperSlides,
    VueperSlide,
    Slide1,
    Slide2,
    Slide3,
  },
  data: () => ({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,

    breakpoints: {
        1040:{
        fixedHeight:'70vw',
        arrows: false,
        },
      790: {
        fixedHeight:'90vw',
        arrows: false,
      },
      480: {
        fixedHeight:'150vw',
        arrows: false,
      },

    },
    slides: [
      {
        background: { img: require('@/assets/slider-images/slid-1-bg.jpg'), class: "s1" },
        slide: 'Slide1'
      },
      {
        background: { img: require('@/assets/slider-images/slide-2-bg.jpg'), class: "s2" },
        slide: 'Slide2'
      },
      {
        background: { img: require('@/assets/slider-images/slide-2-bg.jpg'), class: "s3" },
        slide: 'Slide3'
      }
    ]
  }),

});
</script>
<style scoped>
.vueperslide  {
  display:none;
}

.vueperslide--active  {
display: grid;
}

.s2 {
  background-color: transparent;
  animation: fadeIn 4s ease-out;
  
}




@keyframes fadeIn {
  0% { 
    opacity: 0; 
    background: radial-gradient(circle, white,white);
  }
  80% { 
    opacity: 0.7;
    background: radial-gradient(circle, rgba(255, 255, 255, 0), white);
   }
   100% { 
    opacity: 1;
    background: radial-gradient(circle, rgba(0, 0, 0, 0), transparent);
    
    
   }
}
</style>
