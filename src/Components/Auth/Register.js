import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/apiServices";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [changeTypePassword, setChangeTypePassword] = useState(true);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleClickCreate = async () => {
    if (!validateEmail(email)) {
      toast.error("email isn't valid");
      return;
    }
    if (password.trim().length === 0) {
      toast.error("plesea enter password");
      return;
    }

    const resRegister = await registerUser(email, password, username);
    console.log(resRegister);

    if (resRegister.EC === 0) {
      toast.success(resRegister.EM);
      navigate("/login");
    } else {
      toast.error(resRegister.EM);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-signupLink">
          <span>Already have an account??</span>
          <button>Login</button>
        </div>
        <div className="login-content">
          <h2 className="login-heading">Doing Quiz</h2>
          <h3 className="login-welcome">
            Get better data with conversational forms, surveys, quizzes & more.
          </h3>
          <form action="" autoComplete="false" className="form">
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="Daniel@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group" style={{ position: "relative" }}>
              <label htmlFor="Password">Password</label>
              <input
                type={changeTypePassword ? "password" : "text"}
                name="password"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className="icon-eyes"
                onClick={() => setChangeTypePassword(!changeTypePassword)}
              >
                {changeTypePassword ? <AiFillEye /> : <AiTwotoneEyeInvisible />}
              </i>
            </div>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input
                type="username"
                name="username"
                id="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <span className="login-forgot">forgot password ?</span>
          </form>
          <div>
            <button
              className="btn btn-login"
              onClick={(e) => handleClickCreate(e)}
            >
              Create
            </button>
          </div>
          <span className="back" onClick={() => navigate("/")}>
            {" "}
            &#60;&#60; Go to home page
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
