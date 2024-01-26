<template>
    <div class="s2">
            <img v-for="(img, j) in images" :key="j" :src="img.src" :class="img.class" :title="img.tiltle" />       
    </div>
    
</template>
<script>
 import {defineComponent} from 'vue';



export default defineComponent({
  name: 'Slider2Component',

  components: {

  },
  data: () => ({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    gcS2i2: '',
    gcS2i3: '',
  gcS2i4: '',
  gcS2i5: '',
  mlS2i4: '',
  mlS2i5: '',
  mbS2i2: '',
  mtS2i2: '',
  grS2i2 : '2 / 6',
  grS2i3 : '2 / 6',
  grS2i4 : '2 / 6',
  grS2i5 : '2 / 6',
        images: [
          { src: require('@/assets/slider-images/slide-1.png'), class: "s2i1",tiltle:'لهفة' },
          { src: require('@/assets/slider-images/slide-4.png'), class: "s2i2",tiltle:'لهفة' },
          { src: require('@/assets/slider-images/slide-5.png'), class: "s2i3",tiltle:'لهفة' },
          { src: require('@/assets/slider-images/slide-2.png'), class: "s2i5",tiltle:'لهفة' },
          { src: require('@/assets/slider-images/slide-3.png'), class: "s2i4",tiltle:'لهفة' }
  ]
}),
  created() {
    this.setdata();
    window.addEventListener('resize', this.updateWindowSize);
  },
  methods: {
    setdata(){
         if (this.screenWidth>790) {
            this.gcS2i2 ='9 / 17';
            this.gcS2i3 ='9 / 17';
            this.gcS2i4 ='3 / 12';
            this.gcS2i5 = '14 / -3'
            this.mlS2i4='0%';
            this.mlS2i5='0%';
            this.mbS2i2='50%';
            this.mtS2i2='0';
            this.grS2i2='2/-1';
            this.grS2i3='3/-1';
            this.grS2i4='3/-1';
            this.grS2i5='3/-1';
            this.images[1].src=require('@/assets/slider-images/slide-4.png');
            this.images[2].src=require('@/assets/slider-images/slide-5.png');
            this.images[3].src=require('@/assets/slider-images/slide-2.png');
            this.images[4].src=require('@/assets/slider-images/slide-3.png');
            
         } else if(this.screenWidth>480 && this.screenWidth<790) {
         this.gcS2i2 = '9 / 17';
            this.gcS2i3 = '8 / 18';
            this.gcS2i4 = '1 / 14';
            this.gcS2i5='12 / -1';
            this.mlS2i4='-12%';
            this.mlS2i5='14%';
            this.mbS2i2='80%';
            this.mtS2i2='0';
            this.grS2i2='2/-1';
            this.grS2i3='2/-1';
            this.grS2i4='2/-1';
            this.grS2i5='2/-1';
            this.images[1].src=require('@/assets/slider-images/slide-4.png');
            this.images[2].src=require('@/assets/slider-images/slide-5.png');
            this.images[3].src=require('@/assets/slider-images/slide-2.png');
            this.images[4].src=require('@/assets/slider-images/slide-3.png');
         }
         else{
            this.gcS2i2 = '9 / 17';
            this.gcS2i3 = '8 / 17';
            this.gcS2i4 = '1 / 13';
            this.gcS2i5='13 / -1';
            this.mlS2i4='0';
            this.mlS2i5='0';
            this.mbS2i2='0';
            this.mtS2i2='-75%';
            this.grS2i2='2 / 3';
            this.grS2i3='7 / 8';
            this.grS2i4='5 / 6';
            this.grS2i5='5 / 6';
            this.images[1].src=require('@/assets/slider-images/51.png');
            this.images[2].src=require('@/assets/slider-images/52.png');
            this.images[3].src=require('@/assets/slider-images/54.png');
            this.images[4].src=require('@/assets/slider-images/53.png');
         }
    },
    updateWindowSize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    }
  },
  watch: {
    screenWidth(){
        this.setdata();
    }
    
  }
  ,
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  },


});
</script>
<style scoped>
.s2 {
    width:100%;
    height:100%;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: auto repeat(6,1fr);
    gap: 0px; 
    align-items: end;
    overflow:hidden;
    
  }

  .s2 img{

  width:100%;
  }
  .s2i1 {
  
     grid-area: s2i1;
     grid-column: 1 / -1;
     grid-row: 1/1;
     z-index:100;
     animation:anim1 4s ease-in-out 1;
   }
  .s2i2 {
    grid-area: s2i2 ;
    grid-column: v-bind(gcS2i2);
    grid-row:v-bind(grS2i2) ;
    z-index: 107;
    margin-bottom:v-bind(mbS2i2);
    margin-top:v-bind(mtS2i2);
    animation:anim2 4s ease-in-out 1;
   }
  .s2i3 {
    grid-area: s2i3;
    grid-column: v-bind(gcS2i3);
    grid-row:v-bind(grS2i3) ;
    z-index: 111; 
    animation:anim3 4s ease-in-out 1;
  }
  .s2i4 {
    grid-area:s2i4;
    grid-column: v-bind(gcS2i4);
    grid-row:v-bind(grS2i4) ;
    z-index: 102;
    margin-left:v-bind(mlS2i4);
    animation: anim4 4s ease-in-out 1;
  }
  .s2i5 {
      grid-area: s2i5 ;
      grid-column : v-bind(gcS2i5) ;
      grid-row:v-bind(grS2i5) ;
      z-index: 103;
      margin-left:v-bind(mlS2i5);
      transform-origin: 50% 50% 0px;
      animation: anim5 4s ease-in-out 1;
      
  }
  




   @keyframes anim1 {
    from{
      transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -354, 0, 1);
      opacity:0;
    }
    to{
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity:1;
    }
   }
   @keyframes anim2 {
    from{
     transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,  527, 0, 0, 1);
     opacity:0;
    }
    to{
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity:1;
    }
   }
   @keyframes anim3 {
    from{
     transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 527, 0, 1);
     opacity:0;
    }
    to{
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity:1;
    }
   }
   @keyframes anim4 {
    from{
      transform: matrix3d(1, 0, 0, 0, 0, 0.34202, 0.939693, -0.0015661, 0, -0.939693, 0.34202, -0.00057, 0, -46.9846, -32.899, 1.05483);
      opacity:0;
    }
    to{
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity:1;
    }
   }
   @keyframes anim5 {
    from{
      transform: matrix3d(1, 0, 0, 0, 0, 0.34202, 0.939693, -0.0015661, 0, -0.939693, 0.34202, -0.00057, 0, -46.9846, -32.899, 1.05483);
      opacity:0;
    }
    to{
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity:1;
    }

   }
  
</style>
