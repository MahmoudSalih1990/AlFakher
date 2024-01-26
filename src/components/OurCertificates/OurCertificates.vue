<template>
  <div class="wrapper">
    <h2>الشّهادات الّتي حصلنا عليها</h2>

    <div class="container">
      <div
        v-for="(cert, i) in Data"
        :key="i"
        class="certificate"
        :dir="cert.dir"
        @click="openModal(i)"
      >
        <img :src="require(`@/${cert.src}`)" />
        <div class="certName">
          <h3>
            <span>{{ cert.Name }}</span>
          </h3>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <button @click="prevImage"><i class="fas fa-arrow-left"></i></button>
      <button @click="showModal = false"><i class="fas fa-times"></i></button>
      <img :src="require(`@/${currentImage}`)" alt="Current image" />
      <button @click="nextImage"><i class="fas fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
export default defineComponent({
  setup() {
    const showModal = ref(false);
    const currentImageIndex = ref(0);
    const closeTX = ref(null);
    const closeTY = ref(null);
    const Data = reactive([
      { src: "assets/imgs/1-2.jpg", Name: "TSE ISO 22000", dir: "ltr" },
      { src: "assets/imgs/2-1.jpg", Name: "TSE ISO 9001", dir: "ltr" },
      { src: "assets/imgs/3-1.jpg", Name: "شهادة منتج حلال", dir: "rtl" },
    ]);

    const currentImage = computed(() => {
      return Data[currentImageIndex.value].src;
    });
    const openModal = (index) => {
      showModal.value = true;
      currentImageIndex.value = index;
    };
    const nextImage = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % Data.length;
    };
    const prevImage = () => {
      currentImageIndex.value =(currentImageIndex.value - 1 + Data.length) % Data.length;        
    };
    const setcloseTXY = () => {
      closeTX.value =
        window.innerWidth < 550
          ? (window.innerWidth / 2 - 25).toString() + "px"
          : "255.5px";
      closeTY.value =
        window.innerWidth < 510
          ? (-(window.innerWidth / 2) - 25).toString() + "px"
          : "-280px";
    };
    const handleResize = () => {
      setcloseTXY();
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);

      setcloseTXY();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    return {
      Data,
      showModal,
      currentImageIndex,
      currentImage,
      openModal,
      nextImage,
      prevImage,
      closeTX,
      closeTY,
    };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-arround;
  align-items: center;
  padding: 30px 20px;
  color: rgb(73, 86, 93);
}

.container {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: space-evenly;
}

.certificate {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 25vw;
  height: 25vw;
  position: relative;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border: 2px solid #fff;
}

.certificate img {
  max-width: 25vw;
  max-height: 25vw;
  z-index: 1000;
  transition: all 0.5s ease-in;
}

.certificate:hover img {
  transform: scale(0.5);
  margin: auto;
}

.certificate .certName {
  position: absolute;
  z-index: 100;
  background: #f4ca88;
  transition: all 0.5s ease-in;
  transform: scale(0, 0);
  margin: auto;
  height: 100%;
  width: 100%;
}
.certificate h3 {
  font-size: 22px;
  font-weight: 700;
}
.certificate span {
  border-bottom: 1px dotted rgb(73, 86, 93);
}

.certificate:hover .certName {
  transform: scale(1, 1);
  margin: auto;
}

.certificate h2 {
  padding: 10px;
  font-size: 44px;
  font-weight: 400;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1099;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
}
.modal img {
  max-width: 100vw;
}
.modal button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  padding: 0;
  cursor: pointer;
  color: #fff;
  font-size: large;
}

.modal button:hover {
  color: chocolate;
}
.modal button:first-child {
  left: 0;
  border-radius: 100px 0 0 100px;
}

.modal button:last-child {
  right: 0;
  border-radius: 0 100px 100px 0;
}
.modal button:nth-child(2) {
  transform: translateX(v-bind(closeTX)) translateY(v-bind(closeTY));
  border-radius: 50px 50px 50px 50px;
}
</style>
