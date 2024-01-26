<template>
  <div id="app">
    <app-header id="Home"/>
    <carousel-component/>
    <products-component id="products"/>
    <about-us id="AboutUs"/>
    <customers-component id="customers" />
    <certificates-component id="Certificates"/>
    <banner-component id="materials"/>
    <contactUs-component id="contact"/>
    <footer-component />

  </div>
</template>

<script>
import {defineComponent} from 'vue';
import HeaderComponent from './components/Header/Header.vue';
import CarouselComponent from './components/Carousel/Carousel.vue';
import ProductsComponent from './components/Products/Products.vue';
import AboutUSComponent from './components/AboutCompany/AboutCompany';
import CustomersComponent from './components/Customers/Customers.vue';
import CertificatesComponent from './components/OurCertificates/OurCertificates.vue';
import BannerComponent from './components/Banner/Banner.vue';
import ContactUsComponent from './components/ContactUs/ContactUs.vue';
import FooterComponent from './components/Footer/Footer.vue'
import './assets/fonts/fonts.css';
export default defineComponent({
  components: {
    'app-header': HeaderComponent,
    'carousel-component': CarouselComponent,
    'products-component':ProductsComponent,
    'about-us':AboutUSComponent,
    'customers-component': CustomersComponent,
    'certificates-component': CertificatesComponent,
    'banner-component':BannerComponent,
    'contactUs-component':ContactUsComponent,
    'footer-component':FooterComponent,
    
  },
});

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Kufi Arabic', 'Raleway', sans-serif, FontAwesome !important;
}

body {

  line-height: 1.6;
  color: rgb(73, 86, 93);
}
</style>