import React from "react";
class ForgotPassword2 extends React.Component{
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
                            <h1 class = "h3 fw-bold leftalign">Forgot Password?</h1>
                            <p class = "fs-5 leftalign">Please input the 6-digit verification code that was sent to your email address.</p>

                            <form>
                                <div class="mb-3">
                                <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter 6-Digit Verification Code" maxlength="6"/>
                                <p class = "fs-6 leftalign mt-3">Didn't get the code? <a href = "#" class = "fw-bold link">Click to resend code!</a></p>
                                </div>

                                <button type="submit" class="btn btn-primary fw-bold fs-5">Next</button>
                                <p class = "fs-5 leftalign mt-2">Don't have an account? <a href = "#" class = "fw-bold link">Create Account!</a></p>
                            </form>
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

export default ForgotPassword2;