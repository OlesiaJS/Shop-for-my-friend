// import db from "../db";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../features/account/accountSlice";
import Modal from "./Modal";

export default function Registration() {
  const [modalActive, setModalActive] = useState(false);
  const users = useSelector((state) => state.users.value);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    const isEmailExist = users.find((el) => el.email === userEmail);
    const verifyPassword = userPassword === passwordVerify;
    const isUserExist = users.find((el) => el.password === userPassword);
    console.log(verifyPassword);
    console.log('isUserExist', isUserExist);
    if (isEmailExist && isUserExist) {
      dispatch(login(isEmailExist));
      navigate("/");
    }
    else {
      setWrongEmail(true);
    }

    if (!isEmailExist) {
      setWrongEmail(false);
      if (verifyPassword) {
        dispatch(
          addNewUser({
            name: userName,
            email: userEmail,
            password: userPassword,
          })
        );
        setModalActive(true);
        setWrongPassword(false);
      }
      else {
        setWrongPassword(true);
      }
    }
  };
  return (
    <div className="columns">
      <form id="RegistrationForm" className="userForm" onSubmit={handleSubmit}>
        <p className="title white">Quick Registration</p>
        <p className="desription white">For new customers</p>
        {wrongEmail && <div className="errorActive"> this email is already exist</div>}
        {wrongPassword && <div className="errorActive">Passwords do not match</div>}

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
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}
