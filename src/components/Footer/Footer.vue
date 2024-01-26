<template>
    <div class="footer" >
                <p className="copyright">
                  © Copyright – Dogucazibesi 2019. All rights reserved –
                  Designed by <spane>Mahmoud Salih</spane>
                </p>
    </div>
    <router-link @click="handleClick" class="scrolltotop"><i class="fa fa-angle-up"></i></router-link>
    <a :href="whatsappUrl" target="_blank" class="wa">
        <i class="fa fa-whatsapp" aria-hidden="true"></i>

      </a>
</template>

<script>
 import {defineComponent} from 'vue';

export default defineComponent({
    name:"FooterComponent",
    data() {
    return {
      phoneNumber: '1234567890',
      message: 'Hello, I would like to contact you.', 
    };
  },
  computed: {
    whatsappUrl() {
      return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    },
  },
    setup () {
       
      const  handleClick=()=> {   window.scrollTo({ top: 0, behavior: 'smooth' });}
 
        return {handleClick}
    }
});
</script>

<style  scoped>
.footer{

    width:100%;
    height:40px;
    background-color:#f22;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;

}
.scrolltotop,.wa{
    display:flex;
    align-items:center;
    justify-content:center;
    position: fixed;
    bottom:30px;
    right:30px;
    background:#20949c;
    color:#fff;
    z-index:99999;
    width:50px;
    height:50px;
    border-radius:50%;
    font-size:30px;
    box-shadow: 2px 2px rgba(2, 2, 2, 0.7);
}
.wa{
left:30px ;
right:90%;
}
</style>