<template>
    <div class="container">
        <h1 class="top">
            {{ Data[0].product }}
        </h1>
        <div class="left">
        <img :src="require(`@/${Data[0].src}`)"  />
        </div>
        <div class="right" >
            <div v-for="(data, i) in Data.slice(1, 4)" :key="i" :class="`right${i + 1}`">

                <h4>
                    {{ data.product }}
                </h4>
                <figure>
                    <img  @mousemove="event => moveImage(event, i)" ref="figure" :src="require(`@/${data.src}`)" />
                  </figure>
                  
            </div>
        </div>
    </div>
</template>

<script>
 import {defineComponent} from 'vue';


export default defineComponent({
    name: "BannerComponent",
    methods: {
    moveImage(event,index) {
      this.$nextTick(() => {
        const rect = this.$refs.figure[index].getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        this.$refs.figure[index].style.transformOrigin = `${xPercent}% ${yPercent}%`;
      });
    },
  },



    setup() {

    
        const Data = [
            { product: "منتجاتنا لا تمسّها الأيدي", src: "assets/imgs/919-1066.jpg" },
            { product: "الشّوفان التّام", src: "assets/imgs/shofan.jpg" },
            { product: "الدّقيق التّام", src: "assets/imgs/un.jpg" },
            { product: "الشّمندر السّكّري الطّبيعي", src: "assets/imgs/shamandaar.jpg" }
        ];




        return { Data }
    }
});
</script>

<style  scoped>
.container {
    display: grid;
    grid-template-areas:
        "top top top"
        "right . left"
        "right . left";
    grid-template-columns: 1fr 0fr 1fr;
    grid-template-rows: auto auto auto;
    justify-items: center;
    align-items: flex-start;
    background-color: #DFD7D4;
    max-width: 100vw;
    min-height:100vh;
}

.top {
    grid-area: top;
    width: 100%;
    height: 80px;
    text-align: center;
    color: white;
    background-image: url(https://dogucazibesi.com/imgs/1920-450.jpg?id=505);
}

.left {
    grid-area: left;
    padding: 2.5vw 0  20px 0;
    max-width: 50vw; 
    min-height: fit-content;
    width:100%;
    justify-content:flex-start;
}

.right {
    grid-area: right;
    display: grid;
    grid-template-areas:
        "top-left top-right"
        "bottom bottom";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    text-align: center;
    padding: 2.5vw 0 20px  0 ;
    max-width: 50vw;
    min-height:fit-content;
    width:100%;
    justify-items: end;

}
.right1 {
    grid-area: top-right;
}
.right2 {
    grid-area: top-left;

}

.right3 {
    grid-area: bottom;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;

}

/*imgs*/
.left img{
    width:37vw;
    min-width:450px
    
    
}
.right img {
    width: 18vw;
    height: 18vw;
    min-width:210px;
    min-height:210px;
    border-radius: 50%;
    transition: transform .5s ease;
    
}
.right3 img {
    height: 20vw;
    width: 20vw;
    min-width:310px;
    min-height:310px;
}

.right img:hover {

    transform: scale(2);
}
.right figure {
    border-radius: 50%;
    position: relative;
    overflow:hidden;
    width:fit-content;
    height:fit-content;

}
h4{
    padding-bottom:20px ;
    font-size:21px;
    font-weight:400;
}
@media (max-width: 840px){
    .container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
   .left{
    max-width: 100vw; 
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center
   }
   .left img{
    max-width: 100vw; 
    width:80vw;
    
   }
   .right{
    max-width: 100vw; 
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
   }
   .right img{
    height: 50vw;
    width: 50vw;
    min-width:310px;
    min-height:310px;
   }
}
</style>