import React from "react";
class SignUp3 extends React.Component{
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
                        <img src = "images/Pharmacists.png" class = "img-fluid exampleimage"/>
                        </div>
                        <div class = "col-sm-6 p-5 rightside">

                        <div class="progress mb-3" role="progressbar">
                            <div class="progress-bar fw-bold" style={{width: '40%'}}>40%</div>
                        </div>

                        <h1 class = "h3 fw-bold leftalign">What type of Pharmacist are you?</h1>
                        <p class = "fs-5 leftalign">Select which category of pre-registration pharmacists you belong to.</p>

                        <form>


                            <div class="form-check py-2 px-3 mb-3">

                            <label class="form-check-label fs-5" for="optionone">
                                Pre-registration pharmacist
                            </label>

                            <input class="form-check-input fs-5 mx-0" type="radio" name="optionone" id="optionone" value="option1"/>
                            </div>

                            <div class="form-check py-2 px-3 mb-3">

                            <label class="form-check-label fs-5" for="optionone">
                                Qualified pharmacist
                            </label>

                            <input class="form-check-input fs-5 mx-0" type="radio" name="optionone" id="optionone" value="option1"/>
                            </div>

                            <div class="form-check py-2 px-3 mb-3">

                            <label class="form-check-label fs-5" for="optionone">
                                Pharmacy Student
                            </label>

                            <input class="form-check-input fs-5 mx-0" type="radio" name="optionone" id="optionone" value="option1"/>
                            </div>

                            <button type="submit" class="btn btn-primary fw-bold fs-5">Previous</button>
                            <button type="submit" class="btn btn-primary fw-bold fs-5 mx-3">Next</button>

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

export default SignUp3;