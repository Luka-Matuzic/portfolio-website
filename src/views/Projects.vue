<template>
    <div class="projects">
            <div class="card">
                <div class="card__image-container">
                    <img class="card__image" src="../assets/grill-bill.png">
                </div>
               
                <div class="card__content">
                    <h2 class="card__title">Grill Bill</h2>
                    <p>Online ordering food platform with authentication, validation and Firebase database.</p>
                    <br>
                    <p>Technologies: HTML, SASS, Vue.js, Firebase</p>
                </div>
                <a href="https://grill-bill.netlify.com/"><i class="fas fa-eye fa-2x"></i></a>
                <a href="https://github.com/Luka-Matuzic/e-commerce-app"><i class="fab fa-github fa-2x"></i></a>
            </div>

              <div class="card">
                <div class="card__image-container">
                    <img class="card__image haus-adria-img" src="../assets/haus-adria.png">
                </div>
               
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
    
    margin: 1.5em 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    color: #ccc;
    transform: translateX(25px);  

    .card {
        position: relative;
        background: #181818;
        transform: translateX(-22px);
        width: 90%;
        height: 85%;
        border-radius: 6px;
        padding: 1em;
        margin: 3em 1em;
        color: #aaa;
        box-shadow: 0 .25rem .25rem rgba(0,0,0,0.2),
                    0 0 1rem rgba(0,0,0,0.2);
 
        transition: 0.8s linear;

        //4k monitors
            @media only screen and (min-width: 2500px) and (max-width: 4000px) {
            width: 80%;
            height: 850px;
            transform: translateY(300px);
            margin-left: 55px;
        } 


        a {
            text-decoration: none;
            color: rgb(231, 221, 221);
            transition: 0.8s;
            margin: 0 1em;

            &:hover {
                color:  #e68021;
            }
        }
        
        &__image-container {
            margin: -2rem -1rem 1rem -1rem;
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
        }
        
        &__content {
            opacity: 0;
            animation: ContentFadeIn .8s 1.6s forwards;
            padding-bottom: 50px;

                h2 {
                    margin-bottom: 3%;
                } 
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
</style>