import React from "react";
class SignUp4 extends React.Component{
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
                        <img src = "images/Avatars.png" class = "img-fluid exampleimage"/>
                        </div>
                        <div class = "col-sm-6 p-5 rightside">

                        <div class="progress mb-3" role="progressbar">
                            <div class="progress-bar fw-bold" style={{width: '60%'}}>60%</div>
                        </div>

                        <h1 class = "h3 fw-bold leftalign">Choose Your Avatar</h1>


                        <form>
                            <div class = "row py-3">
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar1" class = "hide" name = "avatar" />
                                <label for = "avatar1"><img src = "images/1.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar2" class = "hide" name = "avatar"/>
                                <label for = "avatar2"><img src = "images/2.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar3" class = "hide" name = "avatar"/>
                                <label for = "avatar3"><img src = "images/3.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar4" class = "hide" name = "avatar"/>
                                <label for = "avatar4"><img src = "images/4.png" class = "logo pointercursor"/></label>
                            </div>
                            </div>

                            <div class = "row py-3">
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar5" class = "hide" name = "avatar"/>
                                <label for = "avatar5"><img src = "images/5.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar6" class = "hide" name = "avatar"/>
                                <label for = "avatar6"><img src = "images/6.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar7" class = "hide" name = "avatar"/>
                                <label for = "avatar7"><img src = "images/7.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar8" class = "hide" name = "avatar"/>
                                <label for = "avatar8"><img src = "images/8.png" class = "logo pointercursor"/></label>
                            </div>
                            </div>

                            <div class = "row py-3">
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar9" class = "hide" name = "avatar"/>
                                <label for = "avatar9"><img src = "images/9.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar10" class = "hide" name = "avatar"/>
                                <label for = "avatar10"><img src = "images/10.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar11" class = "hide" name = "avatar"/>
                                <label for = "avatar11"><img src = "images/11.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar12" class = "hide" name = "avatar"/>
                                <label for = "avatar12"><img src = "images/12.png" class = "logo pointercursor"/></label>
                            </div>
                            </div>

                            
                            <div class = "row py-3">
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar13" class = "hide" name = "avatar"/>
                                <label for = "avatar13"><img src = "images/13.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar14" class = "hide" name = "avatar"/>
                                <label for = "avatar14"><img src = "images/14.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar15" class = "hide" name = "avatar"/>
                                <label for = "avatar15"><img src = "images/15.png" class = "logo pointercursor"/></label>
                            </div>
                            <div class = "col-sm-3">
                                <input type = "radio" id = "avatar16" class = "hide" name = "avatar"/>
                                <label for = "avatar16"><img src = "images/16.png" class = "logo pointercursor"/></label>
                            </div>
                            </div>


                            <button type="submit" class="btn btn-primary fw-bold fs-5 mt-3">Previous</button>
                            <button type="submit" class="btn btn-primary fw-bold fs-5 mx-3 mt-3">Next</button>

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

export default SignUp4;