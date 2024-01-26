<template>
  <div class="products-section">
    <h2 class="section-header">منتجاتنا</h2>
    <div class="products-pages">
      <div :class="{ pagination: true, sticky: isSticky }">
        <button
          v-for="(page, index) in Pages"
          :key="index"
          @click="currentPage = page"
          :class="{ active: currentPage === page }"
        >
          <span class="page">{{ page }}</span
          ><span class="pithiness">{{ pithiness[index] }}</span>
        </button>
      </div>
      <div class="products-grid">
        <div
          v-for="(product, index) in filteredProducts"
          :key="index"
          class="product-item"
        >
          <img
            :src="require(`@/${product.imgSrc}`)"
            alt="Product image"
            class="product-image"
            @click="openModal(index)"
          />
          <div class="product-info" @click="openModal(index)">
            <span>{{ product.title }}</span>
            <p>{{ product.description }}</p>
            <i class="fa fa-user" />
          </div>
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

import { ref, computed, onMounted, onUnmounted } from "vue";
import product from "./product.json";

export default defineComponent({
  name: "ProductsComponent",
  setup() {
    const products = ref(product);
    const currentPage = ref("الكل");
    const showModal = ref(false);
    const currentImageIndex = ref(0);
    const Pages = computed(() => [
      "الكل",
      "بسكويت ويفر",
      "بسكويت كيك + ساندويش",
      "بسكويت جوفريه مغطس بالشوكولا",
    ]);
    const pithiness = computed(() => ["الكل", "ويفر", " كيك", "جوفريه"]);
    const isSticky = ref(false);
    const closeTX = ref(null);
    const closeTY = ref(null);
    const filteredProducts = computed(() => {
      if (currentPage.value === "الكل") {
        return Object.values(products.value).flat();
      } else {
        return products.value[currentPage.value];
      }
    });
    const checkScroll = () => {
      isSticky.value = window.scrollY > 900 && window.innerWidth < 770;
    };
    const currentImage = computed(() => {
      return filteredProducts.value[currentImageIndex.value].imgSrc;
    });
    const openModal = (index) => {
      showModal.value = true;
      currentImageIndex.value = index;
    };
    const nextImage = () => {
      currentImageIndex.value =
        (currentImageIndex.value + 1) % filteredProducts.value.length;
    };
    const prevImage = () => {
      currentImageIndex.value =
        (currentImageIndex.value - 1 + filteredProducts.value.length) %
        filteredProducts.value.length;
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
      checkScroll();
      setcloseTXY();
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", checkScroll);
      setcloseTXY();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkScroll);
      window.removeEventListener("scroll", checkScroll);
    });
    return {
      products,
      currentPage,
      Pages,
      pithiness,
      filteredProducts,
      isSticky,
      checkScroll,
      currentImage,
      currentImageIndex,
      showModal,
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
.products-section {
  background-color: #dfd7d4;
  padding: 60px 15px 15px 15px;
  color: rgb(73, 86, 93);
  position: relative;
}

/*styling products header*/
.section-header {
  text-align: center;
  font-weight: 400;
  font-size: 2.8em;
  padding-bottom: 60px;
}
.productsPages {
  border: 1px solid #000;
  padding: 1em;
  position: static;
}
/*pagination buttons*/
.pagination button {
  border: 1px solid #e3e3e3;
  border-bottom: none;
  padding: 1em;
  background-color: #ebebeb;
  border-radius: 10px 10px 0 0;
  color: #666;
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.pagination button.active {
  background-color: #fff;
}

.pagination button:hover:not(.active) {
  background-color: #dddbdb;
  border-color: #fcf6f6;
}
.pagination button .pithiness {
  display: none;
}

/* grid of products*/
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  gap: 1vw;
  background-color: white;
  padding: 20px 14px;
  border: 0.8px solid white;
  border-radius: 5px 0 5px 5px;
}

.product-item {
  position: relative;
  height: 23.5vw;
  border: 4px solid #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/2;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  backface-visibility: hidden;
  transition: all 1s ease-in-out;
  transform-origin: 100% 100% 0;
}
.product-item:hover .product-image {
  transform: perspective(900px) rotateY(180deg);
  backface-visibility: visible;
}
/* product title and description*/
.product-info {
  width: 100%;
  height: 100%;
  color: #fffe;
  background-color: rgba(59, 175, 218, 0.9);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-shadow: rgb(255, 255, 255) 0px 0px 1px, rgba(0, 0, 0, 0.3) 0px 1px 2px;
}
.product-info span {
  line-height: 33px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 2px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 4px;
}
.product-info p {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.product-info i {
  font-size: 1.8em;
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

@media (max-width: 1050px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .product-item {
    height: 33.5vw;
  }
}

@media (max-width: 770px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
  .product-item {
    height: 86vw;
    width: 86vw;
  }

  .pagination.sticky {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 5px;
    position: sticky;
    z-index: 10000;
    top: 50%;
  }

  .pagination.sticky button {
    height: 35px;
    min-width: 80px;
    border-radius: 30%;
    font-size: 1em;
    padding: 3px;
    margin: 0;
    opacity: 0.5;
    transition: all 0.5s ease-in;
    display: inline-block;
  }
  .pagination:not(.sticky) button .pithiness {
    display: block;
  }
  .pagination.sticky button:not(:hover) .pithiness {
    display: block;
  }
  .pagination button .page {
    display: none;
  }
  .pagination.sticky button:hover {
    min-width: 200px;
    opacity: 0.8;
  }
  .pagination.sticky button:hover .page {
    display: block;
  }
  .pagination button.active {
    opacity: 1;
    background: #fff;
    top: 0;
  }
}
</style>
