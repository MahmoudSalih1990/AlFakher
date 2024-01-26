<template>
  <div class="part">
    <p>{{ customerData.openion }}</p>
    <div class="details">
      <strong>{{ customerData.customerName }} - </strong>
      <strong class="stars">{{ customerData.ratingStars }}</strong>
    </div>
  </div>
</template>

<script>
 import {defineComponent} from 'vue';

export default defineComponent({
  name:"SlideDataComponent",
  props: {
    customerData: Object,
  },
});
</script>

<style scoped>
.part {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  max-width:250px;
  

}
P{
  justify-content: baseline;
}
.details {
  margin-top: 20px;
}
.stars{
  color:green;
  padding:5px;
  font-size:20px;
  font-weight: 900;
}
</style>
