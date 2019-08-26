<template class="template-box">
  <div class="about">
      <div>
        <p>I am a frontend developer with <span>passion</span> for thoughtful UI design, development of modern websites and 
        web applications and also learning new technologies. 
            <br>
            <br>
          I started working on web projects about a year ago and since then I made a couple of projects that I am proud of. Besides coding and designing, you'll most likely 
          find me cooking, gaming or playing my Fender Jazz Bass. 
            <br>
            <br>
          The thing that got me into web development in general is <span>curiosity</span> - how things works together and how that impacts
          the lives of people in a good way. 
        </p>
      </div>
      
      <div>
        <img class="profile-pic" src="../assets/profile-pic.jpg">
      </div>   
  </div>
</template>



<style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100vh;
    margin: 1.4em 0;
    color: #ccc;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;

     @media only screen and (min-width: 2500px) and (max-width: 4000px) {
          transform: translateY(305px);  
          padding-left: 300px;
      }

      
    div {
      width: 100%;
      height: 100vh;

      @media only screen and (min-width: 300px) and (max-width: 400px) {
        transform: translateX(-20px);  
        margin: -5em 0 0 0;
      }

      @media only screen and (min-width: 1126px) and (max-width: 1249px) {
        transform: translateX(-35px);  
      }

      @media only screen and (min-width: 901px) and (max-width: 1125px) {
          transform: translateX(-35px);  
      }

      @media only screen and (min-width: 722px) and (max-width: 900px) {
        transform: translateX(-35px);  
      }

      @media only screen and (min-width: 722px) and (max-width: 900px) {
        transform: translateX(-35px);  
      }

      @media only screen and (min-width: 300px) and (max-width: 722px) {
        transform: translateX(-35px); 
        margin: -5em 0 0 0;
      }

      p {
      font-weight: lighter;
      margin: 7em 0;
      text-align: left;
      line-height: 1.5em;
      transform: translateY(120px);

      @media only screen and (min-width: 1126px) and (max-width: 1249px) {
        transform: translateY(120px);
        margin: 5em 0;
      }

      @media only screen and (min-width: 901px) and (max-width: 1125px) {
        transform: translateY(60px);
        margin: 5em 0;
      }

      @media only screen and (min-width: 722px) and (max-width: 900px) {
        transform: translateY(50px);
        margin: 5em 0;
      }
    }

    .profile-pic {
      width: 100%;
      max-width: 600px;
      height: 80%;
      max-height: 600px;
      margin: 3.5em 0;
      border-radius: 5%;
      transform: translateY(30px);


      @media only screen and (min-width: 723px) and (max-width: 900px) {
          width: 100%;
          height: 400px;
          border-radius: 5%;
          transform: translateY(70px); 
        }
    }
  }

    span {
      color:rgb(95, 251, 228);
    }
  }
</style>
