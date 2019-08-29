<template>
  <div class="contact">
    <div class="content">
      <div>
        <i class="fas fa-envelope fa-2x"></i>
        <h3> <a href="mailto:luka.matuzic1@gmail.com"> luka.matuzic1@gmail.com</a></h3>
      </div>
            
      <div>
        <i class="fab fa-linkedin-in fa-2x"></i>
        <h3> <a href="https://www.linkedin.com/in/luka-matuzi%C4%87-a07440158/">LinkedIn</a></h3>
      </div>
        
      <div>
        <i class="fab fa-github fa-2x"></i>
        <h3><a href="https://github.com/Luka-Matuzic">Github</a> </h3>
      </div>      
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .contact {
    width: 100%;
    height: 100vh;
    margin: -1em 0;
    position: relative;
    color: white;
    overflow: hidden;

    .content {
      margin: 14em -3em;
      margin-left: -8em;
      display: grid;
      grid-template-columns: auto;
      grid-gap: 50px;
      text-align: center;

     
      //4k monitors
        @media only screen and (min-width: 2500px) and (max-width: 4000px) {
             div {
                height: 20vh;
                padding-top: 100px;
            }
        }

         @media only screen and (max-width: 1024px) {
            padding-left: 80px;
        }

      h3 {
        font-weight: lighter;
        
        a {
          text-decoration: none;
          color: #ccc;
          transition: 0.7s linear;

          &:hover {
            text-decoration: underline;
          }
        }
      
      }
    }
  }
   
</style>


