<template>
  <vueper-slides  :arrows="false"  :bullets="false" rtl  autoplay :touchable="false" :infinite="true" :slide-content-outside="contentPosition" :breakpoints="breakpoints"  fixed-height="22vw"   >
    <vueper-slide v-for="(slide, i) in slidesWithCustomerData" :key="i" :image="slide.img" >
      <template #content>
        <component :is="slide.slide" :customersData="slide.Data"></component>
       </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
 import {defineComponent} from 'vue';

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { ref, reactive } from 'vue';
import Customers from "./customers.json";
import Slide from "./Slide.vue";
export default defineComponent({
  name: "CustomersComponent",
  components: {
    VueperSlides,
    VueperSlide,
    Slide,
  },
  setup() {
    const screenWidth = ref(window.innerWidth);
    const screenHeight = ref(window.innerHeight);
    const customers = reactive(Customers);
    const autoPlaying = ref(true);
    const breakpoints = reactive({
      1050:{
        fixedHeight: '35vw',
      },
      800: {
        fixedHeight: '750px',
      },
    });
    const slides = reactive([
      {
        img: require('@/assets/slider-images/slid-1-bg.jpg'),
        slide: "Slide",
      },
      {
        img: require('@/assets/slider-images/slide-2-bg.jpg'),
        slide: "Slide",
      },
    ]);

    function getPartialObject(obj, start, end) {
      const keys = Object.keys(obj);
      const result = {};
      for (let i = start; i <= end; i++) {
        result[keys[i]] = obj[keys[i]];
      }
      return result;
    }

    const slidesWithCustomerData = slides.map((slide, index) => {
      const start = index * 3;
      const end = start + 2;
      return { ...slide, Data: getPartialObject(customers, start, end) };
    });



    return {
      screenWidth,
      screenHeight,
      customers,
      autoPlaying,
      breakpoints,
      slides,
      getPartialObject,
      slidesWithCustomerData
    };
  }
});
</script>

<style scoped>
.vueperslide {
  display: inline-block;

}

.vueperslide--active {
  display: block;

}
</style>
