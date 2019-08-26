<template>
 <div>
    <div class="sidepanel">
      <span class="closebtn" @click="closeNav()">&times;</span>
      
      <h2><strong>PORTFOLIO</strong></h2>
      <router-link class="link" :to="{name: 'home'}">Home</router-link>
      <router-link class="link" :to="{name: 'about'}">About</router-link>
      <router-link class="link" :to="{name: 'projects'}">Projects</router-link>
      <router-link class="link" :to="{name: 'education'}">Education</router-link>
      <router-link class="link" :to="{name: 'contact'}">Contact</router-link>
    </div>

    <button class="openbtn" @click="openNav()"> <span class="burger-bars">&#9776;</span></button>
 </div>
</template>

<script>
export default {
  methods: {
    openNav () {
      document.querySelector(".sidepanel").style.width = "250px";
    },

    closeNav () {
      document.querySelector(".sidepanel").style.width = "0";
    }
  }
}
</script>


<style scoped lang="scss" scoped>
.sidepanel {
  height: 100vh;
  width: 0; 
  position: fixed; 
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(29, 28, 28); 
  overflow-x: hidden; 
  padding-top: 110px; 
  transition: 0.5s;

  span {
    cursor: pointer;
    text-decoration: none;
    color: #818181;
    display: block;
    transition: 0.5s;
    
    &:hover {
      color: #ccc;
    }
  }

  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 50px;
    margin-left: 50px;
    height: 10vh; 
  }
}

.openbtn {
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  background-color: rgb(71, 70, 70);
  padding: 10px 15px;
  border: none;
  margin: 10px 15px;
  transition: 0.5s;

   .burger-bars {
    color: #fff;
    transition: 0.5s;
  }

  &:hover {
    background-color: rgb(72, 71, 71);
    cursor: pointer;

    .burger-bars {
      color: #f3af70;
    }
  }
}

h2 {
  text-align: center;
  color: #fff;
  padding-bottom: 15%;
}

.link {
  color: rgb(135, 131, 131);
  text-decoration: none;
  display: block;
  padding: 1.5em 1em;
  margin: 0 auto;
  margin-bottom: 2em;
  text-align: center;
  transition: 0.5s linear;

  &:hover {
    color: #fff;
  }

  &::before, &::after {
    content: '';
    position: absolute;
    width: 0%;
    margin-top: 10px;
  }

  &::before {
    left: -2.5px;
  }

  &:hover:before {
    background: rgb(228, 22, 22);
    width: 20%;
    height: 3px;
    transition:  0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
}

@media screen and (min-height: 450px) {
  .sidepanel {
    padding-top: 100px;
  }

  .sidepanel span {
    font-size: 20px;
  }
}
</style>
