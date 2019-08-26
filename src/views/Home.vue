<template>
  <div class="home">
    <div class="content">
        <h1>Luka Matuzić</h1>
        <h3>Frontend developer</h3>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100vh;
    color: white;
    background-image: url(../assets/home-img1.jpg);
    background-repeat: no-repeat;
    background-position: left; 
    background-size: cover;
    box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, 0.7);
    overflow: hidden;

    .content {
      height: 100vh;
      transform: translateY(45%);

      h1 {
        text-align: center;
        font-weight: lighter;
      }

      h3 {
        text-align: center;
        color: rgb(95, 251, 228);
        font-weight: lighter;
      }
    }
  }
</style>


