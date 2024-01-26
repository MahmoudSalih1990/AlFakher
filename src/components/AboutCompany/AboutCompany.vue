<template>
    <div id="AboutUs" class="container">
        <div class="right">
            <h3 >القمة هي هدفنا </h3>   
              <figure>
                  <img width="500" height="500" :src="require('@/assets/imgs/1.gif')" />
              </figure>
          </div>
          <div class="middle">
          <h2 >  حول الشركة  </h2>
            <div>
              <p>
                شركة سحر الشّرق انطلقت بأعمالها في الجمهوريّة التّركيّة
                منذ عام 2016 واتّبعت منذ ذلك الوقت سياسة واضحة في إدارة
                منتجاتها والتّركيز على جودة المواد الأوليّة المستخدمة فيها
                للوصول إلى أهدافها في إرضاء العملاء وتقديم الأفضل لهم.
              </p>
              <p>
                وفي عام 2018 تمّ تأسيس مصنع سحر الشّرق الخاص لتصنيع
                منتجاتنا في مصنعنا الخاص وقد استعنّا فيه بالخبرات
                التّركيّة الرّائدة في مجال صناعة البسكويت واستخدام أفضل
                أنواع الشّوكولاته والحشوات.
              </p>
              <p>
                ونهدف في عملنا لنكون بين أفضل الماركات التّجاريّة في
                السّوق المحليّة، ونسعى إلى استهداف المزيد من الأسواق حول
                العالم لتصدير منتجاتنا الّتي تصدّر اليوم إلى 74 دولة في
                الشّرق الأوسط وشمال أفريقيا وآسيا وأوربا.
              </p>
            </div>
  
        </div>

           <div class="left">
            <h3 > منتجات نفتخر بها  </h3>
              <figure >
                  <img width="500" height="500" :src="require('@/assets/imgs/Webp.net-gifmaker-1.gif')" />
              </figure>
            </div>
  </div>
</template>

<script>
 import {defineComponent} from 'vue';

export default defineComponent({
    name:'AboutCompanyComponent',
    setup () {
        

        return {}
    }
});
</script>

<style  scoped>
.container{
    display:flex;
    background: #C5BDBA;
    padding:50px 15px;
    color: rgb(73, 86, 93);
}
img{
    width:20.8vw;
    height:20.8vw;
    max-width: 260px;
    max-height: 260px;
}
h2,h3{
    text-align: center;
    padding:10px;
    font: 400 44px / 1.2em "PT Serif", sans-serif;
}
h3{
    font: 400 30px / 1.2em "PT Serif", sans-serif;
}
p{
    padding:10px 2rem;
}
@media (max-width: 770px)  {
    .container{
     flex-direction: column-reverse;
     justify-content: space-between;
     align-items: center;
    }
    img{
        width:80vw;
        height:80vw;
        max-width: 100vw;
        max-height: 100vw;
    }
    h2,h3{
        margin-top:80px;
    }
}
</style>