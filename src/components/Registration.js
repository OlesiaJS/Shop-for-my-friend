// import db from "../db";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [ErrorUserData, setErrorUserData] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (userPassword === passwordVerify) {
      setErrorUserData(true);
      dispatch(addNewUser({ name: userName, email: userEmail, password: userPassword }));
      navigate("/");
    }
    else {
      setErrorUserData(false);
      console.log("error");
    }
  };
  return (
    <div className="columns">
      <form id="RegistrationForm" className="userForm" onSubmit={handleSubmit}>
        <p className="title white">Quick Registration</p>
        <p className="desription white">For new customers</p>
        {!ErrorUserData && <div className="errorActive">Invalid email address or password.</div>}
        <label>
          <input
            type="text"
            placeholder="Full name"
            data-name="name"
            value={userName}
            autoComplete="Name"
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="userEmail"
            value={userEmail}
            autoComplete="email"
            onChange={(event) => setUserEmail(event.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            data-name="password"
            value={userPassword}
            autoComplete="password"
            onChange={(event) => setUserPassword(event.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Verify Password"
            data-name="passwordVerify"
            value={passwordVerify}
            autoComplete="passwordVerify"
            onChange={(event) => setPasswordVerify(event.target.value)}
            required
          />
        </label>
        <button className="btnMy">Create Account</button>
      </form>
    </div>
  );
}
