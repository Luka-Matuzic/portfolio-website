<template>
    <div class="education">
            <div>
                <img src="../assets/high-school-student.png"> 
                <p class="high-school-p">
                    2010. - 2014. High School - Gymnasium Duga Resa
                </p>
            </div>

            <div>
                <img src="../assets/student.png">
                <p>
                    2014. - 2017. Bachelor's Degree - Computer Science and Philosophy (University of Rijeka)
                    <br>
                    <br>
                    2017. - 2014. Master's Degree  - Computer Science, module Information and Communication Systems (University of Rijeka)
                </p>
            </div>
            
            <div> 
                <img src="../assets/online-class.png">
                <p>
                    Online courses: 
                    <ul>
                        <li>Code with Mosh - <a href="https://codewithmosh.com/p/javascript-basics-for-beginners">JavaScript Basics</a></li>
                        <li>Udemy - <a href="https://www.udemy.com/course-dashboard-redirect/?course_id=851712">JavaScript 2019</a></li>
                        <li>Code with Mosh - <a href="https://codewithmosh.com/p/mastering-react">React</a> </li>
                        <li>Udemy - <a href="https://www.udemy.com/course-dashboard-redirect/?course_id=1356458">Vue.js</a></li>   
                    </ul>
                </p>
            </div>
    </div>
</template>



<style lang="scss" scoped>
.education {
    margin: 5.4em;
    margin-left: 4em;
    color: #ccc;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    overflow: hidden;

    //4k monitors
      @media only screen and (min-width: 2500px) and (max-width: 4000px) {
          transform: translateY(300px);
      } 

     @media only screen and (min-width: 320px) and (max-width: 460px) {
            width: 90%;
            margin: 0 auto;
            padding-top: 50px;
            margin-left: 12px;

            div {
                img {
                    margin-left: -1.5em;
                }

                p {
                    margin-left: -1.5em;
                }
            }
      }
    
    div {
        position: relative;
        padding: 2em 1em;
        margin: .8em;
        background: rgb(14, 13, 13);
     
        img {
            display: block;
            margin: 0 auto;
            width: 40%;
        }

        p {
            text-align: center;
            padding: 4em 2em;
        }

        ul {
            margin-top: 2%;

            li {
                list-style-position: inside;
                margin-left: 10%;
                text-align: left;
                
                a {
                    list-style-type: none;
                    text-decoration: none;
                    color: rgb(243, 175, 112);
                    transition: 0.5s linear;
                    text-align: left;

                    &:hover {
                        color: rgb(58, 198, 230);
                    }
                }
            }
        }
    }
}
</style>