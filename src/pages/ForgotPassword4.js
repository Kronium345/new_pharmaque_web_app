import React from "react";
class ForgotPassword4 extends React.Component{
    render()
    {
        return(
            <main>
                <body class = "mainbg p-4">
                    <div class = "container-fluid p-4">
                    <a class="navbar-brand" href="index.html">
                        <img src="images/Logo.png" alt="PharmaQue Logo" class="logo"/>
                        <span class = "fs-3 fw-bold mx-3">PharmaQue</span>
                    </a>
                    </div>
                    <div class = "container-fluid">
                    
                    <div class = "row p-5">
                        <div class = "col-sm-6 p-5 leftside">
                        <img src = "images/ExampleImage1.png" class = "img-fluid exampleimage"/>
                        </div>
                        <div class = "col-sm-6 p-5 rightside">
                        <h1 class = "h3 fw-bold leftalign">Password Reset!</h1>
                        <p class = "fs-5 leftalign">Your password has been reset! Please login!</p>
                        <button class="btn btn-primary fw-bold fs-5">Login</button>
                        </div>
                    </div>
                    </div>
                
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
                    <script src = "script.js"></script>

                </body>
            </main>
        )
    }
}

export default ForgotPassword4;