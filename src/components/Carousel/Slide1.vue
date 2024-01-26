<template >
    <div class="s1">
        <img v-for="(img, j) in images" :key="j" :src="img.src" :class="img.class" :title="img.title" />
    </div>

</template>

<script>
 import {defineComponent} from 'vue';


export default defineComponent({
  name: 'Slide1Component',
  components: {

  },
  data: () => ({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    s1Aria: '',
    s1i1Aria: '',
    s1i1MB: '',
   

        images: [
          { src: require('@/assets/slider-images/ph3.png'), class: "s1i1",title:'بسكويت' },
          { src: require('@/assets/slider-images/ph2.png'), class: "s1i2",title:'بسكويت' },
          { src: require('@/assets/slider-images/ph1.png'), class: "s1i3",title:'بسكويت' },
          { src: require('@/assets/slider-images/ph4.png'), class: "s1i4",title:'بسكويت' },
          { src: require('@/assets/slider-images/ph5.png'), class: "s1i5",title:'بسكويت' }
  ] }),
  computed: {
    animS1i2tx() {
      let value= - this.screenWidth * 0.3;
      return `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${value}, 0, 0, 1)`;
    },
    animS1i3tx() {
      let value=  this.screenWidth * 0.3;
      return `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${value}, 0, 0, 1)`;
    
    },
    animS1i4tx() {
      let value=  this.screenWidth * 0.04;
      return `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${value}, 0, 1)`;
 
    },
    animS1i5tx() {
      let value=  this.screenWidth * 0.14;
      return `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${value}, 0, 1)`;
 
    },

  },
  created() {
    this.calculateGrid();
    this.sets1i1Aria();

    window.addEventListener('resize', this.updateWindowSize);
  },
  methods: {
    calculateGrid() {
      if (this.screenWidth > 790) {

        this.s1Aria = '    " . . . . . . . . . . . . . . . . . . . . . . . .   "' +
          '"  . . . . . . . . . s1i4 s1i4 s1i4 s1i4 s1i4 s1i4 . . . . . . . . . "' +
          '"  s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i4 s1i4 s1i4 s1i4 s1i4 s1i4 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3  "' +
          '" s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i4 s1i4 s1i4 s1i4 s1i4 s1i4 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3  "' +
          '"  s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i4 s1i4 s1i4 s1i4 s1i4 s1i4 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3  "';
      } else {

        this.s1Aria = '"  . . . . . . . . . s1i1 s1i1 s1i1 s1i1 s1i1 s1i1 . . . . . . . . . "' +
          '"  . . . . . . . . . s1i1 s1i1 s1i1 s1i1 s1i1 s1i1 . . . . . . . . . "' +
          '"  s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3  "' +
          '" s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3  "' +
          '"  s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i2 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3 s1i3  "' +
          '"  . . . . . . . . . s1i4 s1i4 s1i4 s1i4 s1i4 s1i4 . . . . . . . . . "';
      }
      return this.s1Aria;
    },
    sets1i1Aria() {
      if (this.screenWidth > 790) {
        this.s1i1Aria = 's1i4';
      }
      else {
        this.s1i1Aria = 's1i1';
      }
      return this.s1i1Aria;
    }
    ,
    updateWindowSize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    }
  }
  ,
  watch: {
    screenWidth() {
      this.calculateGrid();
      this.sets1i1Aria();
    },
    s1i1Aria() {
      if (this.s1i1Aria === 's1i4') {
        this.s1i1MB = '66%';
      
      } else {
        this.s1i1MB = '-70%';
      
      }
    }
  }
  ,
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  },

 
});

</script >

  
<style scoped >

.s1 {
  width:100%;
  height:100%;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: auto;
  grid-template-areas: v-bind(s1Aria);
  gap: 0px;
 
  align-items: end;
  position:relative;
}

.s1 img{
position: sticky;
perspective: 1000px;
}
.s1i1 {
  width: 120%;
  margin-bottom: v-bind(s1i1MB) ;
  margin-left: -7%;
  grid-area: v-bind(s1i1Aria);
  z-index: 101;
  animation: animS1i1 5s  1;
  transform-origin: 50% 50% 0px;
 }
.s1i2 {
   width:100%;
  grid-area: s1i2 ;
  z-index: 110;  transform-origin: 50% 50% 0px;
  animation: animS1i2 5s ease-in-out 1;
  
 }
.s1i3 {
 width: 100%;
  grid-area: s1i3;
  z-index: 111;
  z-index: 110;  transform-origin: 50% 50% 0px;
  animation: animS1i3 5s ease-in-out 1;
}
.s1i4 {
  width: 110%;
  margin-bottom: 20%;
  margin-left: -10%;
  grid-area:s1i4;
  z-index: 102;
  z-index: 110;  transform-origin: 50% 50% 0px;
  animation: animS1i4 5s ease-in-out 1;
}
.s1i5 {
 width:100%;
  margin-bottom:-15% ;
    z-index: 103;
    grid-area: s1i4;
    animation: animS1i5 5s ease-in-out 1;
}

@keyframes animS1i1 {
  from {
    opacity: 0; 
    transform: matrix3d(1, 0, 0, 0, 0, 0.34202, 0.939693, -0.0015661, 0, -0.939693, 0.34202, -0.00057, 0, -46.9846, -32.899, 1.05483); 
  
 
  }
  
  to {
   opacity: 1;  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); 
  }
};
@keyframes animS1i2 {
from{
  opacity:0;
  transform: v-bind(animS1i2tx);
}
to{
  opacity:1;
  transform:  matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
}
@keyframes animS1i3 {
from{
  opacity:0;
  transform:v-bind(animS1i3tx); 
}
to{
  opacity:1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
}
@keyframes animS1i4 {
  from{
    opacity:0;
   
    transform:v-bind(animS1i4tx);
  }
  to{
    opacity:1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}
@keyframes animS1i5 {
 from {
  opacity:0;
  transform:v-bind(animS1i5tx);

 } 
 to{
  opacity:1;

    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}
</style>
