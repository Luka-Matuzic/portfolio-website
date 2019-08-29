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
    color: white;

    @media only screen and (min-width: 2560px) and (max-width: 4000px) {
          transform: translateY(305px);  
          
      }
   
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        text-align: center;
        margin: 10% 0;
        min-height: 200px;
        background-color: rgba(33, 33, 33, .3);
        align-items: center;
        margin-top: 250px;
  
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


