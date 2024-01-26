<template>
    <div class="customersSection" :style="{
        backgroundImage:
            'url(' +
            require('@/assets/imgs/background-black.jpg') +
            ')',
    }">
        <SlideData v-for="(customer, i) in customerData" :key="i" :customerData="customer"></SlideData>
    </div>
</template>

<script>
 import {defineComponent} from 'vue';

import SlideData from "./SlideData.vue";
import { reactive } from "vue";

export default defineComponent({
    name:"SlideComponent",
    props: {
        customersData: Object,
    },
    components: {
        SlideData,
    },
    setup(props) {
        const customerData = reactive(props.customersData);

        return {
            customerData,
        };
    },
});
</script>

<style scoped>
.customersSection {
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: repeat;
    gap:5vw;
    padding:60px 20px;
    min-height:100%;
  }
  @media (max-width: 800px)  {
    .customersSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-repeat: repeat;
      

      }
  }
</style>
