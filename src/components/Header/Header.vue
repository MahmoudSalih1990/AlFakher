<template>
  <header :class="{ sticky: isSticky, 'bg-white': isSticky }">
    <nav>
      <ul v-if="!isMobileView">
        <li v-for="link in links" :key="link.to">
          <a :href="link.path">{{ link.to }}</a>
        </li>

        <li
          :class="{ 'bg-white': isSticky }"
          @click="toggleLanguageMenu"
          role="button"
          tabindex="0"
        >
          <img
            :src="
              languages.find((languageObj) => languageObj.lang === language)
                .flag
            "
          />{{ " " + language + " " }}<i class="fa fa-caret-down"></i>
        </li>
        <li>
          <div
            v-if="isLanguageMenuOpen"
            :class="{ languageList: true, 'bg-white': isSticky }"
          >
            <li
              v-for="language in languages"
              :key="language.lang"
              :class="{ 'bg-white': isSticky }"
              @click="changeLanguage(language.lang)"
              role="button"
              tabindex="1"
            >
              <img
                :src="language.flag"
                :alt="language.lang"
                width="16"
                height="11"
              />
              {{ language.lang }}
            </li>
          </div>
        </li>
      </ul>

      <div v-if="isMobileView">
        <li
          @click="toggleMobileMenu"
          :class="{ mobileViewToggleButton: true, active: isMobileMenuOpen }"
          role="button"
          tabindex="0"
        >
          <i class="fas fa-bars"></i>
          <i class="fas fa-bars"></i>
        </li>
        <transition name="slide">
          <ul v-show="isMobileMenuOpen" class="mobile-menu">
            <li v-for="link in links" :key="link.to">
              <a :href="link.path">{{ link.to }}</a>
            </li>

            <li
              :class="{ 'bg-white': isSticky }"
              @click="toggleLanguageMenu"
              role="button"
              tabindex="0"
            >
              <img
                :src="
                  languages.find((languageObj) => languageObj.lang === language)
                    .flag
                "
              />{{ " " + language + " " }}<i class="fa fa-caret-down"></i>
            </li>

            <li class="langs">
              <transition name="slide">
                <div
                  v-if="isLanguageMenuOpen"
                  class="languageList"
                  :class="{ 'bg-white': isSticky }"
                >
                  <li
                    v-for="language in languages"
                    :key="language.lang"
                    :class="{ 'bg-white': isSticky }"
                    @click="changeLanguage(language.lang)"
                    role="button"
                    tabindex="1"
                  >
                    <img
                      :src="language.flag"
                      :alt="language.lang"
                      width="16"
                      height="11"
                    />
                    {{ language.lang }}
                  </li>
                </div>
              </transition>
            </li>
          </ul>
        </transition>
      </div>
    </nav>

    <img
      :src="require('@/assets/imgs/40-215.png')"
      href="#"
      alt="Dogu Cazibesi"
      class="logo"
    />
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "HeaderComponent",

  setup() {
    const language = ref("العربية");
    const isMobileView = ref(window.innerWidth <= 770);
    const isMobileMenuOpen = ref(false);
    const isLanguageMenuOpen = ref(false);
    const isSticky = ref(false);
    const links = ref([
      { to: "الرئيسية", path: "#" },
      { to: "منتجاتنا", path: "#products" },
      { to: "حول الشركة", path: "#AboutUs" },
      { to: "شهاداتنا", path: "#Certificates" },
      { to: "موادنا", path: "#materials" },
      { to: "عملاؤنا", path: "#customers" },
      { to: "اتصل بنا", path: "#contact" },
    ]);

    const languages = ref([
      {
        lang: "العربية",
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAPwAAAD8BR5eJ4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEOSURBVCiRpZHNSsNQEEbPTXOtoc1NmyhFK6ioCLXioq4UdOtz+Ia+g+7cFQURhYClikRtqGkTm8SFbkrSWHC23w9nZgTnnZR/jFYkiiRFJMX9+izBSRbZ6ks0BPcrEZ42np+g7SuOqiFi/xUOXji1Qtq+mo/ACSW2GvJsN9DkElEy4UH2qdeGOCOJV/4qJmhqJgsqpLNzzHLFpqEcTlpnKCugqZl/E/SiAU5osWkZGHINfxSwrgS3I4teNAA57ReZN6Zw+GlTW/XY3t0A4PHO5e2pzrX5DmK6IHtEAV3jAzXew70UuFeC6rhFtzLIhHNXAAhLCRfBDaXyjxwHE2I9Jz2rACDWBTHxrys/DPAN4YpPXyWy3BoAAAAASUVORK5CYII=",
      },
      {
        lang: "English",
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC",
      },
      {
        lang: "Türkçe",
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAF+SURBVHjaYvzPgAD/UNlYEUAAmuTYBgAYhIEgJJmboZgtHbaJKNK8TvozM8LIllwagEY4sIFV1UD/3swngMAaGBn/P3kCVApS7ebG8O/f/x07/n/6BFL36/f/37/+//oFZDPKygJtAAggkIb/YINBqqOjGUxNQeqUlf93dIDV/QLpAWtg+P0bqAEggJhA7gaqBtqoqMjg5PR/+vT/SUn/N2z4//Xr/+XL//Pwgu2BWgJUCxBATCAn/fgJEnVx/Q+05NgxkNzp0/9XrPgvJPR/zZr/ZmZQDX/+AE0HCCCQhv9//4D89OQxMMT+a2uDnKGm9v/SJZCrHj36v28fRAPESQABxALEjGBLGRYv/s/H97+oCOQYIIiM/P/ly/9Fi6CO+QMy9A8DA0AAgTQwg4MMaMD/rq7/vr7/WVlBrv/8GeROiAf+ADWAQgXoHIAAAmlg+v+fQVISbMxfhpMngToZhYUZ+PkZwAaDEDgMgQioGCCAGL+iRiSeOIYAgAADAO/XO1xGA79vAAAAAElFTkSuQmCC",
      },
    ]);

    const checkScreenWidth = () => {
      isMobileView.value = window.innerWidth <= 770;
    };

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const checkScroll = () => {
      isSticky.value = window.scrollY > 0;
    };

    const toggleLanguageMenu = () => {
      isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
    };

    const changeLanguage = (lng) => {
      console.log(`Changing language to ${lng}`);
      language.value = lng;
      return lng;
    };

    onMounted(() => {
      window.addEventListener("resize", checkScreenWidth);
      window.addEventListener("scroll", checkScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkScreenWidth);
      window.removeEventListener("scroll", checkScroll);
    });

    return {
      links,
      languages,
      isLanguageMenuOpen,
      isSticky,
      toggleLanguageMenu,
      changeLanguage,
      isMobileView,
      isMobileMenuOpen,
      toggleMobileMenu,
      language,
    };
  },
});
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  transition: background-color 0.5s ease;
  color: rgb(2, 151, 231);
  z-index: 10000;
}

header.sticky {
  top: 0;
  box-shadow: 0px -4px 8px #000000;
  border-bottom: 1px solid #f4f4f4;
}

.bg-white {
  background-color: white;
  color: rgb(73, 86, 93);
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  order: 2;
  margin-right: 20vw;
  font: 700 13px/1em "Raleway", sans-serif;
}

nav ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

li {
  list-style-type: none;
}

nav ul li {
  margin: 12px 14px 18px 14px;
  padding: 15px 3px 5px 3px;
  font: 700 13px/1em "Raleway", sans-serif;
  cursor: pointer;
  width: fit-content;
}

nav ul:not(.mobile-menu) li:hover {
  border-bottom: 1px solid;
}

ul:not(.mobile-menu) .languageList {
  align-items: center;
  position: absolute;
  top: 52px;
  left: 0;
}

.languageList li img {
  width: 16px;
  height: 11px;
}

@media (max-width: 770px) {
  header {
    justify-content: space-between;
    height: 66px;
    background: #fff;
  }

  nav {
    margin-right: 0;
    height: 66px;
  }

  .mobileViewToggleButton {
    border: 5px solid;
    border-radius: 15px;
    transform: skewx(-30deg) scale(0.7);
    width: 80px;
    height: 50px;
    margin-right: 20px;
    padding-right: 10px;
  }

  .mobileViewToggleButton.active {
    background: rgb(73, 86, 93);
  }

  .mobileViewToggleButton.active i {
    color: rgb(255, 255, 255);
  }

  .mobileViewToggleButton i {
    font-size: 35px;
    font-weight: 700;
    line-height: 42px;
    transform: skewx(30deg);
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 66px;
    right: 0;
    width: 100vw;
    height: auto;
    max-height: 500px;
    overflow-y: auto;
    background: #fff;
  }

  .mobile-menu li {
    margin: 0;
    margin-right: 50px;
    padding: 15px 5px 15px 5px;
    min-height: 0;
    height: 100%;
    width: calc(100% - 50px);
  }

  .languageList,
  li.langs {
    padding: 0;
    margin: 0 10px 0 0;
    max-height: 100px;
  }

  .mobile-menu li:not(.langs):hover {
    background-color: #e8e8e8;
    color: rgb(210, 63, 42);
  }

  .slide-leave-active {
    max-height: 500px;
    transition: max-height 0.7s;
  }

  .slide-leave-to {
    max-height: 0;
  }

  .slide-enter-active {
    transition: max-height 0.7s;
    max-height: 0;
  }

  .slide-enter-to {
    max-height: 500px;
  }

  .langs > .slide-enter-to {
    max-height: 100px;
  }

  .langs > .slide-leave-to {
    max-height: 0;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
