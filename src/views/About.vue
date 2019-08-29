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
      
      <div class="img-div">
        <img class="profile-pic" src="../assets/profile-pic.jpg">
      </div>   
  </div>
</template>



<style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100vh;
    margin: -2em .5em;
    color: #ccc;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 30px;
    position: relative;

     @media only screen and (min-width: 2560px) and (max-width: 4000px) {
          transform: translateY(305px);  
          padding-left: 300px;

          p {
           height: 800px;
          }
      }

      @media only screen and (min-width: 670px) and (max-width: 808px) {
        .img-div {
          width: 80%;
          margin: 0 auto;
        }
      }

       @media only screen and (min-width: 809px) and (max-width: 1004px) {
        .img-div {
          width: 60%;
          margin: 0 auto;
        }
      }

      @media only screen and (min-width: 320px) and (max-width: 500px) {
        grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
      }

      @media only screen and (max-width: 320px) {
        grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
        .img-div {
          margin-left: -11.5px;
        }
      }

    div {
      width: 100%;
      height: 100%;

      p {
        position: relative;
        top: 40%;
        transform: translateY(-50%);
        margin: 5em 2em;
        font-weight: lighter;
        line-height: 1.5em;
      }
  }

  .img-div {
    .profile-pic {
        width: 90%;
        max-width: 600px;
        height: 80%;
        max-height: 550px;
        margin: 3.5em 0;
        border-radius: 5%;
        transform: translateY(30px);
        margin-left: 8px;
      }
  }

    span {
      color:rgb(95, 251, 228);
    }
  }
</style>
