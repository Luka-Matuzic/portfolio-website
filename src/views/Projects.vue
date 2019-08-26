<template>
    <div class="projects">
            <div class="card">
                <div class="card__image-container">
                    <img class="card__image" src="../assets/grill-bill.png">
                </div>
                    
                <svg class="card__svg" viewBox="0 0 800 500">
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#181818"/>
                    <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="2" fill="transparent"/>
                </svg>
                    
                <div class="card__content">
                    <h2 class="card__title">Grill Bill</h2>
                    <p>Online ordering food platform with authentication, validation and Firebase database.</p>
                    <br>
                    <p>Technologies: HTML, CSS, SASS, Vue.js, Vuex, Firebase</p>
                </div>
                <a href="https://grill-bill.netlify.com/"><i class="fas fa-eye fa-2x"></i></a>
                <a href="https://github.com/Luka-Matuzic/e-commerce-app"><i class="fab fa-github fa-2x"></i></a>
            </div>

              <div class="card">
                <div class="card__image-container">
                    <img class="card__image haus-adria-img" src="../assets/haus-adria.png">
                </div>
               
                <svg class="card__svg" viewBox="0 0 800 500">
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#181818"/>
                    <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke-width="2" fill="transparent"/>
                </svg>
                    
                <div class="card__content">
                    <h2 class="card__title">Haus Adria</h2>
                    <p>Haus Adria was a licensed real estate agency real estate brokerage agency based in Duga Resa.</p>
                    <br>
                    <p>Technologies: HTML, CSS, Bootstrap, jQuery</p>
                </div>
                <a href="https://haus-adria.netlify.com/"><i class="fas fa-eye fa-2x"></i></a>
                <a href="https://github.com/Luka-Matuzic/haus-adria"><i class="fab fa-github fa-2x"></i></a>
            </div>

              <div class="card">
                <div class="card__image-container">
                    <img class="card__image brionka-img" src="../assets/brionka.png">
                </div>
                    
                <svg class="card__svg" viewBox="0 0 800 500">
                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#181818"/>
                    <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke-width="2" fill="transparent"/>
                </svg>
                    
                <div class="card__content">
                    <h2 class="card__title">Brionka</h2>
                    <p>Leading Istrian producer and supplier within the bakery, confectionery and pastry industry.</p>
                    <br>
                    <p>Technologies: HTML, CSS, React, Reactstrap</p>     
                </div>
                <a href="https://prospekt-brionka.tk/"><i class="fas fa-eye fa-2x"></i></a>
                <a href="https://github.com/Luka-Matuzic/prospekt-brionka"><i class="fab fa-github fa-2x"></i></a>
            </div>
        </div>
</template>



<style lang="scss" scoped>
.projects {
    width: 100%;
    height: 100vh;
    margin: 2em 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    color: #ccc;
    transform: translateX(-25px);  
    overflow: hidden;

    .card {
        position: relative;
        background: #181818;
        transform: translateX(-33px);
        width: 90%;
        height: 650px;
        border-radius: 6px;
        padding: 2rem;
        margin: 3em 2em;
        color: #aaa;
        box-shadow: 0 .25rem .25rem rgba(0,0,0,0.2),
                    0 0 1rem rgba(0,0,0,0.2);
        overflow: hidden;
        transition: 0.8s linear;

        //4k monitors
        @media only screen and (min-width: 2500px) and (max-width: 4000px) {
            width: 85%;
            transform: translateY(300px);
        } 


        a {
            text-decoration: none;
            color: rgb(231, 221, 221);
            transition: 0.8s;
            margin: 0 1em;

            &:hover {
                color:  #f3af70;
            }
        }
        
        &__image-container {
            margin: -2rem -2rem 1rem -2rem;
        }
        
        &__line, a {
        opacity: 0;
        animation: LineFadeIn .8s .8s forwards ease-in;
        }

        &__image {
            opacity: 0;
            animation: ImageFadeIn .8s 1.4s forwards;
            width: 100%;
            height: 330px;
        }

        &__title {
            color: white;
            margin-top: 0;
            font-weight: 800;
            letter-spacing: 0.01em;
        }
        
        &__content {
            margin-top: -1rem;
            opacity: 0;
            animation: ContentFadeIn .8s 1.6s forwards;
            padding-bottom: 50px;

            h2 {
                margin-bottom: 3%;
            } 
        }
        
        &__svg {
            position: absolute;
            left: 0;
            top: 115px;

            //4k monitors
            @media only screen and (min-width: 2500px) and (max-width: 4000px) {
                top: -40px;  
            } 

            @media only screen and (min-width: 1221px) and (max-width: 1350px) {
               top: 150px; 
            }

            @media only screen and (min-width: 1111px) and (max-width: 1220px) {
               top: 170px; 
            }

            @media only screen and (min-width: 1054px) and (max-width: 1110px) {
               top: 190px; 
            }

            @media only screen and (min-width: 851px) and (max-width: 910px) {
               top: 150px; 
            }

            @media only screen and (min-width: 725px) and (max-width: 850px) {
               top: 175px; 
            }

            @media only screen and (min-width: 681px) and (max-width: 724px) {
               top: 30px; 
            }

            @media only screen and (min-width: 621px) and (max-width: 680px) {
               top: 55px; 
            }

            @media only screen and (min-width: 550px) and (max-width: 620px) {
               top: 85px; 
            }

            @media only screen and (min-width: 441px) and (max-width: 500px) {
               top: 145px; 
            }

            @media only screen and (min-width: 421px) and (max-width: 440px) {
               top: 170px; 
            }

            @media only screen and (min-width: 300px) and (max-width: 420px) {
               top: 185px; 
            }
           
            @media only screen and (min-width: 200px) and (max-width: 300px) {
               top: 200px; 
            }
        }

         @keyframes LineFadeIn {
        0% { opacity: 0; d: path("M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 "); stroke: #fff;}
        50% { opacity: 1; d: path("M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300"); stroke: rgb(95, 251, 228); }
        100% { opacity: 1; d: path("M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400"); stroke: rgb(95, 251, 228); }
        }

        @keyframes ContentFadeIn {
            0% { transform: translateY(-1rem); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes ImageFadeIn {
            0% { transform: translate(-.5rem, -.5rem) scale(1.05); opacity: 0; filter: blur(2px); }
            50% { opacity: 1; filter: blur(2px); }
            100% { transform: translateY(0) scale(1.0); opacity: 1; filter: blur(0); }
        }
    }

   
}
</style>