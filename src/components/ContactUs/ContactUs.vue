<template>
    <div class="container">
        <div class="top">
            <h2>للاتصال بنا ..</h2>
            <p>لا تتردد في استخدام نموذج الاتصال للتواصل معنا ..</p>

            <p>
              
                <span>Doğu cazibesi Grup ve Gida inş.Tic.Şti Denizköşkler Mahallesi, Muhtar
                    Kazım Akgül Cd. 0 6 A, 34315 Avcılar/İstanb </span>  <i class="fa fa-map-marker"></i>
            </p>
         <div class="contactInfo">
            <p>
                
                <span>(+90) 5385139862  </span><i class="fa fa-phone"></i>
            </p>

            <!-- Email -->
            <p>
               
                <a href="#" title="" target="_top">info@dogucazibesi.com  </a> <i class="fa fa-envelope-o"></i>
            </p>
        </div>
        <div class='social'>
            <a class="sficn" data-effect="" target="_blank"
                href="https://www.facebook.com/%D8%B4%D8%B1%D9%83%D8%A9-%D8%B3%D8%AD%D8%B1-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D9%84%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9-482301378773483/"
                id="sfsiid_facebook">
                <img :src="require('@/assets/imgs/flat_facebook.png')
                    " alt="Facebook" title="Facebook" width="40" height="40" class="sfcm sfsi_wicon" data-effect="" />
            </a>

            <!-- Repeat this block for each social media link -->
            <a class="sficn" data-effect="" target="_blank" href="https://www.instagram.com/dogucazibesi/"
                id="sfsiid_instagram">
                <img :src="require('@/assets/imgs/flat_instagram.png')
                    " alt="Instagram" title="Instagram" width="40" height="40" class="sfcm sfsi_wicon" data-effect="" />
            </a>
        </div>
        </div>

        <div class="left">
            <iframe
                :src="'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.2330571896446!2d28.739861115413127!3d40.976377279304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa19503aead8d%3A0xbb538cd12546c276!2sDo%C4%9Fu%20cazibesi%20Grup%20ve%20Gida%20in%C5%9F.Tic.%C5%9Eti!5e0!3m2!1sen!2str!4v1571213840197!5m2!1sen!2str'"
                width="100%" height="362" frameBorder="0" allowFullScreen="" />
        </div>
        <div class="right">
            <form @submit.prevent="onSubmit">
                <input type="text" v-model="form.name" placeholder="الاسم الكامل" required />
                <input type="tel" v-model="form.phone" placeholder="رقم الهاتف" required />
                <input type="email" v-model="form.email" placeholder="البريد الالكتروني" required />
                <textarea v-model="form.message" placeholder="اكتب رسالتك هنا" :cols="40" rows="10" required></textarea>
                <input type="submit" value="إرسال" />
            </form>
        </div>
    </div>
</template>

<script>
 import {defineComponent} from 'vue';

import { ref } from "vue";
export default defineComponent({
    setup() {
        const form = ref({
            name: "",
            phone: "",
            email: "",
            message: "",
        });

        const onSubmit = () => {



            
        };

        return { form, onSubmit };
    },
});
</script>

<style scoped>
.container {
    background: #C5BDBA;
    display: grid;
    grid-template-areas:
        "top top top"
        "right . left"
        "right . left";
    grid-template-columns: 1fr 0fr 1fr;
    grid-template-rows: auto auto auto;
    margin-top:20px;
}

.top {
    grid-area: top;
    text-align: center;
    display:flex;
    flex-direction: column;
    width:100%;
    padding:50px 10px;
    gap:10px;
}
.top h2{
    font-size: 44px;
    font-weight: 700;
}
.top i{
    color:red;
}
.top .contactInfo,.top .social{
    display:flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap:10px;
}

.left {
    grid-area: left;
    padding:0 10px;

}
.right {
    grid-area: right;
}

.right form{
   
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    height:100%;
    padding:0 10px;
    gap:20px;
    color:#283135;
    font: 400 15px/1.6em "Raleway", sans-serif;
}
.right form input{
    height: 44px;
    padding: 6px 12px;
    border: 1px solid #d6d6d6;
    border-radius: 2px;
}
.right form textarea{

    height: 110px;
    display: block;
    width: 100%;
    padding: 6px 12px;
    border: 1px solid #d6d6d6;
    border-radius: 2px;
}
.right form input[type="submit"]{

        background-color: #d21e2b;
        border-color: #d21e2b;
        padding: 8px 53px 8px 53px;
        color: #fff;
        font: 700 15px/1.6em "Raleway", sans-serif;
        transition: all .3s ease;
}
.right form input[type="submit"]:hover {
    color: #d21e2b;
    border-color: #d21e2b;
    background-color: #fff;
    color: #21baa3;
    box-shadow: none;
}
@media (max-width : 770px) {
    .container{
        display:flex;
        flex-direction: column;
        gap:20px;
    }
}

</style>
