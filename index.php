<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quizizy</title>
        <!-- ====================================================================== -->
        <!-- link Css -->
        <link rel="stylesheet" href="assets/scss/styles.css" />
        <!-- link Font awesomme -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- link Font awesomme -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    </head>
    <body>

        <!-- Background image -->
        <div class="bg_image"></div>

        <!-- Btn Start -->
        <div class="btn_start">
            <!-- Logo -->
            <img src="assets/img/logo.png" class="logo_image_side">
            <button>Start Quiz</button>
        </div>

        <!-- info quiz -->
        <div class="box_info">
            <div class="info_header">
                <h2>Some Rules of this Quiz</h2>
            </div>
            <div class="info_body">
                <div class="info">1- You will have only <span>30 seconds</span> per each question.</div>
                <div class="info">2- Once you select your answer, you can't reselect.</div>
                <div class="info">3- You can't select any option once time goes off.</div>
                <div class="info">4- You can't exit from the Quiz while you're playing.</div>
                <div class="info">5- You'll get points on the basis of your correct answers.</div>
            </div>
            <div class="info_footer">
                <button class="quit">Exit Quiz</button>
                <button class="continue">Continue</button>
            </div>
        </div>

        <!-- user -->
        <div class="box_user">
            <div class="user">
                <div class="user_header">
                    <h2>Please Enter Your Name</h2>
                </div>
                <div class="user_body">
                    <label for="">Username</label>
                    <input type="text" id="name_user">
                </div>
                <div class="user_footer">
                    <button class="quit">Exit Quiz</button>
                    <button class="continue">Continue</button>
                </div>
            </div>
        </div>

        <!-- quiz -->
        <div class="box_quiz">
            <div class="quiz_header">
                <h3>Quiz of AWS</h3>
                <div class="time">
                    <span class="text_time">Time left</span>
                    <span class="count">30</span>
                </div>
            </div>
            <div class="quiz_body">
                <div class="title">
                    <!-- <h2>Why is AWS more economical than traditional data centers for applications with varying compute
                    workloads?</h2> -->
                </div>
                <div class="questions">
                    <!-- <div>
                        <div class="question">
                            <p>Amazon EC2 costs are billed on a monthly basis.</p><i class="fa-regular fa-circle-check good"></i>
                        </div>
                        <div class="question">
                            <p>Users retain full administrative access to their Amazon EC2 instances.</p><i class="fa-regular fa-circle-xmark faild"></i>
                        </div>
                    </div>
                    <div>
                        <div class="question">
                            <p>Amazon EC2 instances can be launched on demand when needed.</p>
                        </div>
                        <div class="question">
                            <p>Users can permanently run enough instances to handle peak workloads.</p>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="quiz_footer">
                <p><span class="step"></span> of <span class="all"></span> Questions</p>
                <div>
                    <!-- <form action="post"> -->
                        <button class="submit">Submit</button>
                    <!-- </form> -->
                    <button class="next">Next</button>
                </div>
            </div>
        </div>


        <!-- resultat -->
        <div class="box_resultat">
            <div class="resultat_header">
                <i class="fa-solid fa-ranking-star"></i>
            </div>
            <div class="resultat_body">
                <div class="name_user">
                    <h4></h4>
                </div>
                <div class="text_finish">
                    <span>Completed the Quiz!</span> 
                </div>
                <div class="score">
                    <p>You got <span></span> out of <span></span></p>
                </div>
            </div>
            <div class="resultat_footer">
                <button class="quit">Quit Quiz</button>
                <button class="continue">Your Ansewer</button>
            </div>
        </div>

        <!-- Answers -->
        <div class="box_answers">
            <div class="answers_header">
                <h1>Your Wrong Answers</h3>
            </div>
            <div class="answers_body">
                <!-- <h3>Why is AWS more economical than traditional data centers for applications with varying compute workloads?</h3>
                <p class="answer">Amazon EC2 costs are billed on a monthly basis</span>
                <p class="your_answer">Amazon EC2 instances can be launched on demand when needed</span>
                <hr> -->
            </div>
            <div class="answers_footer">
                <button class="quit">Quit Quiz</button>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="assets/js/script.js"></script>
    </body>
</html>
