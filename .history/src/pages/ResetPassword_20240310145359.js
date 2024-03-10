import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const { token } = useParams()
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:7171/auth/resetpassword/'+token, { password })
            .then(response => {
                if(response.data.status) {
                    navigate('/');
                }
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            });
    };

    return (
        <main>
            <div className="mainbg p-4">
                <div className="container-fluid p-4">
                    <a className="navbar-brand" href="index.html">
                        {/* <img src="/images/Logo.png" alt="PharmaQue Logo" className="logo"/> */}
                        <span className="fs-3 fw-bold mx-3">PharmaQue</span>
                    </a>
                </div>
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-sm-6 p-5 leftside">
                            <img src="/images/ExampleImage1.png" className="img-fluid exampleimage"/>
                        </div>
                        <div className="col-sm-6 p-5 rightside">
                            <h1 className="h3 fw-bold leftalign">Reset Password</h1>
                            <p className="fs-5 leftalign">Please enter the password you desire.</p>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                    <input type="password" className="form-control py-2" id="exampleInputPassword1" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <button type="submit" className="btn btn-primary fw-bold fs-5">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ResetPassword;
