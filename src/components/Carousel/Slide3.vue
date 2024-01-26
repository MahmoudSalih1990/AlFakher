<template >
  <div class="s3">
    <div class="upperRow">
      <img  :key="1" :src="require('@/assets/slider-images/slide2-5.png')" class="s3i1" title="بسكويت"/>
    </div>
    <div  class="bottomRow"  >
      <img  :key="2" :src="require('@/assets/slider-images/slide2-3.png')" class="s3i2" title="بسكويت" />
      <img  :key="3" :src="require('@/assets/slider-images/slide2-4.png')" class="s3i3" title="بسكويت" />
      <img  :key="4" :src="require('@/assets/slider-images/slide2-2.png')" class="s3i4" title="بسكويت" />
    </div>
  </div>
</template>
<script>
 import {defineComponent} from 'vue';


export default defineComponent({
  name: 'Slider3Component',
  components: {

  },
  data: () => ({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    MBS3i1:'-50%' ,
    WS3i1:'93.485%'  ,
    WS3i2:'35.035%'  ,
    WS3i3:'34.844%' ,
    WS3i4:'41.794%' ,
    POS3:'relative',
    ImgPosition:'initial',
    InS3i1:'0',
    InS3i2:'0',
    InS3i3:'0',
    InS3i4:'0',
    images: [
      { src: require('@/assets/slider-images/slide2-5.png'), class: "s3i1" },
      { src: require('@/assets/slider-images/slide2-3.png'), class: "s3i2" },
      { src: require('@/assets/slider-images/slide2-4.png'), class: "s3i3" },
      { src: require('@/assets/slider-images/slide2-2.png'), class: "s3i4" }
    ]

  }),
  computed: {
    animS3i2tx() {
      let value=  this.screenWidth * 0.2;
      return `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,0 , ${value}, 0, 1)`;
    },
    animS3i3tx() {
      let value=  - this.screenWidth * 0.4;
      return `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,${value} , 0, 0, 1)`;
    
    },
    animS3i4tx() {
      let value=  this.screenWidth * 0.4;
      return `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${value},0 , 0, 1)`;
 
    },
    animS3i5tx() {
      let value=  this.screenWidth * 0.14;
      return `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${value}, 0, 0, 1)`;
 
    },

  },
  created() {
    this.setdata();
    window.addEventListener('resize', this.updateWindowSize);
  },
  methods: {
    setdata() {
      if (this.screenWidth >= 1040) {

        this.MBS3i1 = '-50%';
        this.WS3i1 = '93.485%';
        this.WS3i2 = '35.035%';
        this.WS3i3 = '34.844%';
        this.WS3i4 = '41.794%';
        this.ImgPosition='initial';

      }
      else if (this.screenWidth >= 790 && this.screenWidth < 1040) {
        this.MBS3i1 = '-40%';
        this.WS3i1 = '80.485%';
        this.WS3i2 = '36.035%';
        this.WS3i3 = '35.844%';
        this.WS3i4 = '41.794%';
        this.ImgPosition='initial';

      } else if (this.screenWidth >= 480 && this.screenWidth < 790) {

        this.MBS3i1 = '-30%';
        this.WS3i1 = '40vw';
        this.WS3i2 = '35%';
        this.WS3i3 = '35vw';
        this.WS3i4 = '41vw';
        this.ImgPosition='initial';
        this.InS3i1 = '0';
        this.InS3i2 = '0';
        this.InS3i3 = '0';
        this.InS3i4 = '0';

      }
      else {

        this.MBS3i1 = '-30%';
        this.WS3i1 = '50%';
        this.WS3i2 = '70%';
        this.WS3i3 = '70%';
        this.WS3i4 = '70%';
        this.ImgPosition='absolute';
        this.InS3i1 = '-2% 0 0 56%';
        this.InS3i2 = '3% 0 0 5%';
        this.InS3i3 = '22% 0 0 19%';
        this.InS3i4 = '47% 0% 0% 33%';
      }
    },
    updateWindowSize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    }
  }
  ,
  watch: {
    screenWidth() {
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
.s3 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: auto repeat(2, 1fr);
  align-content: space-around;
  gap: 0px;
  align-items: end;
  overflow: hidden;
  justify-items: center;
  position: v-bind(POS3);
  transform-style: preserve-3d;

}
.s3::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('@/assets/slider-images/slide-3-bg.jpg');
  z-index: -1; 
  animation: slideRight 4s ease-in-out 1;
}
img{
  position:v-bind(ImgPosition)
}
.upperRow{
 
    grid-column:1/-1;
    grid-row: 1/2;
    display: flex;
    justify-content: center
}
.bottomRow{

  grid-column:1/-1;
  grid-row: 2/3;
  display:flex;
  flex-direction: row;
  justify-content: center;
  

}

.bottomRow img{
  aspect-ratio: 6/7;
  margin-inline: -3.6%;
  height: 100%;
  max-height:100vw;
}
.s3i1 {
  margin-bottom:v-bind(MBS3i1);
  width:v-bind(WS3i1);
  max-width: 492px;
  inset: v-bind(InS3i1);
  transform-origin: 50% 50% 0px;
  animation: animS3i1 4s ease-in-out  1 ;
  
}

.s3i2 {
  width:v-bind(WS3i2);
  max-width: 394px;
  inset: v-bind(InS3i2);
  transform-origin: 50% 50% 0px;
  animation: animS3i2 4s ease-in-out  1;
}

.s3i3 {
  width:v-bind(WS3i3);
  max-width: 392px;
  inset: v-bind(InS3i3);
   transform-origin: 50% 50% 0px;
   animation: animS3i3 4s ease-in-out  1 ;
}

.s3i4 {
  width:v-bind(WS3i4);
  max-width: 471px;
  margin-block: -4%;
  inset: v-bind(InS3i4);
  z-index: 9;
   font-family: Roboto;
     overflow: hidden;
    transform-origin: 50% 50% 0px;
    animation: animS3i4 4s ease-in-out  1 ;
    
}

@keyframes slideRight {
  from { transform:translateX(95vw) }
  to { transform:translateX(0vw)  }
}
@keyframes animS3i1 {
  0%{
    opacity: 0;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.0016666, 0, 0, 0, 1)}
  2%{transform: matrix3d(0.938619, 0, 0.344955, -0.0005749, 0, 1, 0, 0, -0.344955, 0, 0.938619, -0.0015643, 0, 0, 0, 1)}
  3%{transform: matrix3d(0.862813, 0, 0.505524, -0.0008425, 0, 1, 0, 0, -0.505524, 0, 0.862813, -0.001438, 0, 0, 0, 1)}
  4%{transform: matrix3d(0.593983, 0, 0.804477, -0.0013407, 0, 1, 0, 0, -0.804477, 0, 0.593983, -0.0009899, 0, 0, 0, 1)}
  5%{transform: matrix3d(0.441275, 0, 0.897372, -0.0014956, 0, 1, 0, 0, -0.897372, 0, 0.441275, -0.0007354, 0, 0, 0, 1)}
  6%{transform: matrix3d(0.0708844, 0, 0.997485, -0.0016624, 0, 1, 0, 0, -0.997485, 0, 0.0708844, -0.0001181, 0, 0, 0, 1)}
  7%{transform: matrix3d(-0.0968992, 0, 0.995294, -0.0016588, 0, 1, 0, 0, -0.995294, 0, -0.0968992, 0.0001614, 0, 0, 0, 1)}
  8%{transform: matrix3d(-0.358048, 0, 0.933703, -0.0015561, 0, 1, 0, 0, -0.933703, 0, -0.358048, 0.0005967, 0, 0, 0, 1)}
  9%{transform: matrix3d(-0.461346, 0, 0.88722, -0.0014787, 0, 1, 0, 0, -0.88722, 0, -0.461346, 0.0007689, 0, 0, 0, 1)}
  10%{transform: matrix3d(-0.641375, 0, 0.767228, -0.0012787, 0, 1, 0, 0, -0.767228, 0, -0.641375, 0.0010689, 0, 0, 0, 1)}
  11%{transform: matrix3d(-0.724071, 0, 0.689726, -0.0011495, 0, 1, 0, 0, -0.689726, 0, -0.724071, 0.0012067, 0, 0, 0, 1)}
  12%{transform: matrix3d(-0.889951, 0, 0.456056, -0.00076, 0, 1, 0, 0, -0.456056, 0, -0.889951, 0.0014832, 0, 0, 0, 1)}
  13%{transform: matrix3d(-0.946166, 0, 0.323681, -0.0005394, 0, 1, 0, 0, -0.323681, 0, -0.946166, 0.0015769, 0, 0, 0, 1)}
  14%{transform: matrix3d(-0.994597, 0, 0.103813, -0.000173, 0, 1, 0, 0, -0.103813, 0, -0.994597, 0.0016576, 0, 0, 0, 1)}
  15%{transform: matrix3d(-0.999996, 0, 0.0029005, -4.8e-06, 0, 1, 0, 0, -0.0029005, 0, -0.999996, 0.0016666, 0, 0, 0, 1)}
  16%{transform: matrix3d(-0.980362, 0, -0.197204, 0.0003286, 0, 1, 0, 0, 0.197204, 0, -0.980362, 0.0016339, 0, 0, 0, 1)}
  17%{transform: matrix3d(-0.955723, 0, -0.294268, 0.0004904, 0, 1, 0, 0, 0.294268, 0, -0.955723, 0.0015928, 0, 0, 0, 1)}
  18%{transform: matrix3d(-0.870959, 0, -0.491356, 0.0008189, 0, 1, 0, 0, 0.491356, 0, -0.870959, 0.0014515, 0, 0, 0, 1)}
  19%{transform: matrix3d(-0.813958, 0, -0.580924, 0.0009682, 0, 1, 0, 0, 0.580924, 0, -0.813958, 0.0013565, 0, 0, 0, 1)}
  20%{transform: matrix3d(-0.675265, 0, -0.737576, 0.0012292, 0, 1, 0, 0, 0.737576, 0, -0.675265, 0.0011254, 0, 0, 0, 1)}
  21%{transform: matrix3d(-0.595632, 0, -0.803257, 0.0013387, 0, 1, 0, 0, 0.803257, 0, -0.595632, 0.0009927, 0, 0, 0, 1)}
  22%{transform: matrix3d(-0.424456, 0, -0.905449, 0.001509, 0, 1, 0, 0, 0.905449, 0, -0.424456, 0.0007074, 0, 0, 0, 1)}
  23%{transform: matrix3d(-0.332064, 0, -0.943257, 0.001572, 0, 1, 0, 0, 0.943257, 0, -0.332064, 0.0005534, 0, 0, 0, 1)}
  24%{transform: matrix3d(-0.0878914, 0, -0.99613, 0.0016602, 0, 1, 0, 0, 0.99613, 0, -0.0878914, 0.0001464, 0, 0, 0, 1)}
  25%{transform: matrix3d(0.0064642, 0, -0.999979, 0.0016666, 0, 1, 0, 0, 0.999979, 0, 0.0064642, -1.07e-05, 0, 0, 0, 1)}
  26%{transform: matrix3d(0.30996, 0, -0.95075, 0.0015845, 0, 1, 0, 0, 0.95075, 0, 0.30996, -0.0005165, 0, 0, 0, 1)}
  27%{transform: matrix3d(0.328673, 0, -0.944444, 0.001574, 0, 1, 0, 0, 0.944444, 0, 0.328673, -0.0005477, 0, 0, 0, 1)}
  28%{transform: matrix3d(0.480834, 0, -0.876811, 0.0014613, 0, 1, 0, 0, 0.876811, 0, 0.480834, -0.0008013, 0, 0, 0, 1)}
  29%{transform: matrix3d(0.554554, 0, -0.832148, 0.0013869, 0, 1, 0, 0, 0.832148, 0, 0.554554, -0.0009242, 0, 0, 0, 1)}
  30%{transform: matrix3d(0.67252, 0, -0.740079, 0.0012334, 0, 1, 0, 0, 0.740079, 0, 0.67252, -0.0011208, 0, 0, 0, 1)}
  31%{transform: matrix3d(0.725337, 0, -0.688394, 0.0011473, 0, 1, 0, 0, 0.688394, 0, 0.725337, -0.0012088, 0, 0, 0, 1)}
  32%{transform: matrix3d(0.814816, 0, -0.579719, 0.0009661, 0, 1, 0, 0, 0.579719, 0, 0.814816, -0.001358, 0, 0, 0, 1)}
  33%{transform: matrix3d(0.903942, 0, -0.427655, 0.0007127, 0, 1, 0, 0, 0.427655, 0, 0.903942, -0.0015065, 0, 0, 0, 1)}
  34%{transform: matrix3d(0.924703, 0, -0.380689, 0.0006344, 0, 1, 0, 0, 0.380689, 0, 0.924703, -0.0015411, 0, 0, 0, 1)}
  35%{transform: matrix3d(0.958614, 0, -0.284707, 0.0004745, 0, 1, 0, 0, 0.284707, 0, 0.958614, -0.0015976, 0, 0, 0, 1)}
  36%{transform: matrix3d(0.971714, 0, -0.236162, 0.0003936, 0, 1, 0, 0, 0.236162, 0, 0.971714, -0.0016195, 0, 0, 0, 1)}
  37%{transform: matrix3d(0.998102, 0, -0.0615866, 0.0001026, 0, 1, 0, 0, 0.0615866, 0, 0.998102, -0.0016635, 0, 0, 0, 1)}
  38%{transform: matrix3d(0.997902, 0, 0.0647482, -0.0001079, 0, 1, 0, 0, -0.0647482, 0, 0.997902, -0.0016631, 0, 0, 0, 1)}
  39%{transform: matrix3d(0.995037, 0, 0.0995046, -0.0001658, 0, 1, 0, 0, -0.0995046, 0, 0.995037, -0.0016583, 0, 0, 0, 1)}
  40%{transform: matrix3d(0.985108, 0, 0.171938, -0.0002865, 0, 1, 0, 0, -0.171938, 0, 0.985108, -0.0016418, 0, 0, 0, 1)}
  41%{transform: matrix3d(0.961877, 0, 0.273482, -0.0004558, 0, 1, 0, 0, -0.273482, 0, 0.961877, -0.0016031, 0, 0, 0, 1)}
  42%{transform: matrix3d(0.947123, 0, 0.320869, -0.0005347, 0, 1, 0, 0, -0.320869, 0, 0.947123, -0.0015785, 0, 0, 0, 1)}
  43%{transform: matrix3d(0.933493, 0, 0.358595, -0.0005976, 0, 1, 0, 0, -0.358595, 0, 0.933493, -0.0015558, 0, 0, 0, 1)}
  44%{transform: matrix3d(0.923107, 0, 0.384544, -0.0006409, 0, 1, 0, 0, -0.384544, 0, 0.923107, -0.0015385, 0, 0, 0, 1)}
  45%{transform: matrix3d(0.891285, 0, 0.453443, -0.0007557, 0, 1, 0, 0, -0.453443, 0, 0.891285, -0.0014854, 0, 0, 0, 1)}
  46%{transform: matrix3d(0.873256, 0, 0.487262, -0.0008121, 0, 1, 0, 0, -0.487262, 0, 0.873256, -0.0014554, 0, 0, 0, 1)}
  47%{transform: matrix3d(0.86294, 0, 0.505306, -0.0008421, 0, 1, 0, 0, -0.505306, 0, 0.86294, -0.0014382, 0, 0, 0, 1)}
  48%{transform: matrix3d(0.848365, 0, 0.529411, -0.0008823, 0, 1, 0, 0, -0.529411, 0, 0.848365, -0.0014139, 0, 0, 0, 1)}
  49%{transform: matrix3d(0.833033, 0, 0.553224, -0.000922, 0, 1, 0, 0, -0.553224, 0, 0.833033, -0.0013883, 0, 0, 0, 1)}
  50%{transform: matrix3d(0.828843, 0, 0.559481, -0.0009324, 0, 1, 0, 0, -0.559481, 0, 0.828843, -0.0013814, 0, 0, 0, 1)}
  51%{transform: matrix3d(0.824343, 0, 0.566091, -0.0009434, 0, 1, 0, 0, -0.566091, 0, 0.824343, -0.0013739, 0, 0, 0, 1)}
  52%{transform: matrix3d(0.821286, 0, 0.570517, -0.0009508, 0, 1, 0, 0, -0.570517, 0, 0.821286, -0.0013688, 0, 0, 0, 1)}
  53%{transform: matrix3d(0.813857, 0, 0.581066, -0.0009684, 0, 1, 0, 0, -0.581066, 0, 0.813857, -0.0013564, 0, 0, 0, 1)}
  54%{transform: matrix3d(0.81048, 0, 0.585766, -0.0009762, 0, 1, 0, 0, -0.585766, 0, 0.81048, -0.0013507, 0, 0, 0, 1)}
  55%{transform: matrix3d(0.809636, 0, 0.586932, -0.0009782, 0, 1, 0, 0, -0.586932, 0, 0.809636, -0.0013493, 0, 0, 0, 1)}
  56%{transform: matrix3d(0.809003, 0, 0.587804, -0.0009796, 0, 1, 0, 0, -0.587804, 0, 0.809003, -0.0013483, 0, 0, 0, 1)}
  57%{transform: matrix3d(0.810405, 0, 0.58587, -0.0009764, 0, 1, 0, 0, -0.58587, 0, 0.810405, -0.0013506, 0, 0, 0, 1)}
  58%{transform: matrix3d(0.811508, 0, 0.584341, -0.0009739, 0, 1, 0, 0, -0.584341, 0, 0.811508, -0.0013525, 0, 0, 0, 1)}
  59%{transform: matrix3d(0.814683, 0, 0.579907, -0.0009665, 0, 1, 0, 0, -0.579907, 0, 0.814683, -0.0013578, 0, 0, 0, 1)}
  60%{transform: matrix3d(0.816316, 0, 0.577605, -0.0009626, 0, 1, 0, 0, -0.577605, 0, 0.816316, -0.0013605, 0, 0, 0, 1)}
  61%{transform: matrix3d(0.826477, 0, 0.56297, -0.0009382, 0, 1, 0, 0, -0.56297, 0, 0.826477, -0.0013774, 0, 0, 0, 1)}
  62%{transform: matrix3d(0.833372, 0, 0.552713, -0.0009211, 0, 1, 0, 0, -0.552713, 0, 0.833372, -0.0013889, 0, 0, 0, 1)}
  63%{transform: matrix3d(0.837826, 0, 0.545937, -0.0009098, 0, 1, 0, 0, -0.545937, 0, 0.837826, -0.0013963, 0, 0, 0, 1)}
  64%{transform: matrix3d(0.846985, 0, 0.531617, -0.000886, 0, 1, 0, 0, -0.531617, 0, 0.846985, -0.0014116, 0, 0, 0, 1)}
  65%{transform: matrix3d(0.859966, 0, 0.510352, -0.0008505, 0, 1, 0, 0, -0.510352, 0, 0.859966, -0.0014332, 0, 0, 0, 1)}
  66%{transform: matrix3d(0.86161, 0, 0.50757, -0.0008459, 0, 1, 0, 0, -0.50757, 0, 0.86161, -0.001436, 0, 0, 0, 1)}
  67%{transform: matrix3d(0.872078, 0, 0.489366, -0.0008156, 0, 1, 0, 0, -0.489366, 0, 0.872078, -0.0014534, 0, 0, 0, 1)}
  68%{transform: matrix3d(0.876468, 0, 0.48146, -0.0008024, 0, 1, 0, 0, -0.48146, 0, 0.876468, -0.0014607, 0, 0, 0, 1)}
  69%{transform: matrix3d(0.889025, 0, 0.457859, -0.000763, 0, 1, 0, 0, -0.457859, 0, 0.889025, -0.0014817, 0, 0, 0, 1)}
  70%{transform: matrix3d(0.898517, 0, 0.438938, -0.0007315, 0, 1, 0, 0, -0.438938, 0, 0.898517, -0.0014975, 0, 0, 0, 1)}
  71%{transform: matrix3d(0.902947, 0, 0.429752, -0.0007162, 0, 1, 0, 0, -0.429752, 0, 0.902947, -0.0015049, 0, 0, 0, 1)}
  72%{transform: matrix3d(0.910383, 0, 0.413766, -0.0006896, 0, 1, 0, 0, -0.413766, 0, 0.910383, -0.0015173, 0, 0, 0, 1)}
  73%{transform: matrix3d(0.922272, 0, 0.386543, -0.0006442, 0, 1, 0, 0, -0.386543, 0, 0.922272, -0.0015371, 0, 0, 0, 1)}
  74%{transform: matrix3d(0.926418, 0, 0.376497, -0.0006274, 0, 1, 0, 0, -0.376497, 0, 0.926418, -0.001544, 0, 0, 0, 1)}
  75%{transform: matrix3d(0.934122, 0, 0.356954, -0.0005949, 0, 1, 0, 0, -0.356954, 0, 0.934122, -0.0015568, 0, 0, 0, 1)}
  76%{transform: matrix3d(0.937681, 0, 0.347496, -0.0005791, 0, 1, 0, 0, -0.347496, 0, 0.937681, -0.0015628, 0, 0, 0, 1)}
  77%{transform: matrix3d(0.948462, 0, 0.31689, -0.0005281, 0, 1, 0, 0, -0.31689, 0, 0.948462, -0.0015807, 0, 0, 0, 1)}
  78%{transform: matrix3d(0.953859, 0, 0.300255, -0.0005004, 0, 1, 0, 0, -0.300255, 0, 0.953859, -0.0015897, 0, 0, 0, 1)}
  79%{transform: matrix3d(0.956304, 0, 0.292373, -0.0004872, 0, 1, 0, 0, -0.292373, 0, 0.956304, -0.0015938, 0, 0, 0, 1)}
  80%{transform: matrix3d(0.959094, 0, 0.283088, -0.0004718, 0, 1, 0, 0, -0.283088, 0, 0.959094, -0.0015984, 0, 0, 0, 1)}
  81%{transform: matrix3d(0.967242, 0, 0.253855, -0.000423, 0, 1, 0, 0, -0.253855, 0, 0.967242, -0.001612, 0, 0, 0, 1)}
  82%{transform: matrix3d(0.971675, 0, 0.23632, -0.0003938, 0, 1, 0, 0, -0.23632, 0, 0.971675, -0.0016194, 0, 0, 0, 1)}
  83%{transform: matrix3d(0.974179, 0, 0.225776, -0.0003762, 0, 1, 0, 0, -0.225776, 0, 0.974179, -0.0016236, 0, 0, 0, 1)}
  84%{transform: matrix3d(0.978402, 0, 0.206712, -0.0003445, 0, 1, 0, 0, -0.206712, 0, 0.978402, -0.0016306, 0, 0, 0, 1)}
  85%{transform: matrix3d(0.98536, 0, 0.170488, -0.0002841, 0, 1, 0, 0, -0.170488, 0, 0.98536, -0.0016422, 0, 0, 0, 1)}
  86%{transform: matrix3d(0.987893, 0, 0.155135, -0.0002585, 0, 1, 0, 0, -0.155135, 0, 0.987893, -0.0016464, 0, 0, 0, 1)}
  87%{transform: matrix3d(0.989231, 0, 0.146366, -0.0002439, 0, 1, 0, 0, -0.146366, 0, 0.989231, -0.0016487, 0, 0, 0, 1)}
  88%{transform: matrix3d(0.992016, 0, 0.126116, -0.0002101, 0, 1, 0, 0, -0.126116, 0, 0.992016, -0.0016533, 0, 0, 0, 1)}
  89%{transform: matrix3d(0.995325, 0, 0.0965811, -0.0001609, 0, 1, 0, 0, -0.0965811, 0, 0.995325, -0.0016588, 0, 0, 0, 1)}
  90%{transform: matrix3d(0.996021, 0, 0.0891163, -0.0001485, 0, 1, 0, 0, -0.0891163, 0, 0.996021, -0.00166, 0, 0, 0, 1)}
  91%{transform: matrix3d(0.997612, 0, 0.0690717, -0.0001151, 0, 1, 0, 0, -0.0690717, 0, 0.997612, -0.0016626, 0, 0, 0, 1)}
  92%{transform: matrix3d(0.999075, 0, 0.0429948, -7.16e-05, 0, 1, 0, 0, -0.0429948, 0, 0.999075, -0.0016651, 0, 0, 0, 1)}
  93%{transform: matrix3d(0.999496, 0, 0.0317379, -5.28e-05, 0, 1, 0, 0, -0.0317379, 0, 0.999496, -0.0016658, 0, 0, 0, 1)}
  94%{transform: matrix3d(0.999774, 0, 0.0212504, -3.54e-05, 0, 1, 0, 0, -0.0212504, 0, 0.999774, -0.0016662, 0, 0, 0, 1)}
  95%{transform: matrix3d(0.999901, 0, 0.0140996, -2.34e-05, 0, 1, 0, 0, -0.0140996, 0, 0.999901, -0.0016665, 0, 0, 0, 1)}
  96%{transform: matrix3d(0.999986, 0, 0.005323, -8.8e-06, 0, 1, 0, 0, -0.005323, 0, 0.999986, -0.0016666, 0, 0, 0, 1)}
  97%{transform: matrix3d(0.999996, 0, 0.0026731, -4.4e-06, 0, 1, 0, 0, -0.0026731, 0, 0.999996, -0.0016666, 0, 0, 0, 1)}
  98%{transform: matrix3d(0.999999, 0, 0.001135, -1.8e-06, 0, 1, 0, 0, -0.001135, 0, 0.999999, -0.0016666, 0, 0, 0, 1)}
  99%{transform: matrix3d(1, 0, 0.0003355, 0, 0, 1, 0, 0, -0.0003355, 0, 1, -0.0016666, 0, 0, 0, 1)}
  100%{
    opacity: 1;
    transform: matrix3d(1, 0, 8.42e-05, 0, 0, 1, 0, 0, -8.42e-05, 0, 1, -0.0016666, 0, 0, 0, 1)}
  }
  @keyframes animS3i18 {
    0% {
      transform: rotateY(0deg);
    }
    33% {
      transform: rotateY(-90deg);
    }
    66%{
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }


    
}
    @keyframes animS3i2 {
      0%{
        opacity: 0;
        transform: v-bind(animS3i2tx);
  
    
      }
   
        100%{
          opacity: 1;
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
      
}
@keyframes animS3i3 {
  0%{
    opacity:0;
    transform: v-bind(animS3i3tx);
 
  }

    100%{
   opacity: 1;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  
}
@keyframes animS3i4 {
  0%{
    opacity: 0;
    transform: v-bind(animS3i4tx);

  }

    100%{
      opacity: 1;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  
}

</style>
