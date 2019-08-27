<template>
  <div id="app">
    <Navbar />
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
      >
        <router-view/>
    </transition>
  </div>
</template>


<script>
import Navbar from './components/Navbar'

export default {
  name: "app",
  components: {
    Navbar
  },
   data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

* {
	padding: 0;
	margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  width: 100%;
  height: 100vh;
  background-color: #333;
  overflow-x: hidden;

  //4k monitors
  @media only screen and (min-width: 2500px) and (max-width: 4000px) {
      height: 100vh;
  } 

  background-image: url("./assets/home-img-de.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
