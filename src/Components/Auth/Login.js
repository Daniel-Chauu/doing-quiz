import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../services/apiServices";
import { useDispatch } from "react-redux";
import doLogin from "../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClickLogin = async (e) => {
    try {
      setIsLoading(true);
      const res = await postLogin(email, password);
      if (res?.EC === 0) {
        dispatch(doLogin(res));
        toast.success(res.EM);
        setIsLoading(false);
        navigate("/");
      }
      if (res?.EC !== 0) {
        setIsLoading(false);
        toast.error(res.EM);
      }
    } catch (error) {
      toast.error("You should enter email and password before login");
      setIsLoading(false);

      return;
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-signupLink">
          <span>Don't have an account yet?</span>
          <button>Sign up</button>
        </div>
        <div className="login-content">
          <h2 className="login-heading">Doing Quiz</h2>
          <h3 className="login-welcome">Hello, Who's This</h3>
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
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span className="login-forgot">forgot password ?</span>
          </form>
          <div>
            <button
              className="btn btn-login"
              onClick={(e) => handleClickLogin(e)}
              disabled={isLoading}
            >
              {isLoading && <ImSpinner10 className="loader-icon" />}
              <span>Login</span>
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

export default Login;
