import db from "../db";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/account/accountSlice";

export default function Account() {
  const [userEmail, setUserEmail] = useState("test@gmail.com");
  const [userPassword, setUserPassword] = useState("123");
  const [showWrongUser, setshowWrongUser] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Find User and Match Password
    // Get userDb from Database
    const isUserExist = db.usersDb.find((el) => el.email === userEmail);

    if (isUserExist) {
      if (isUserExist.password === userPassword) {
        setshowWrongUser(true);
        dispatch(login(isUserExist));
        // window.location.href = "/favourites";
      }
    }
    else { setshowWrongUser(false); }
  };
  return (
    <div className="columns">
      <form className="userForm" onSubmit={handleSubmit}>
        <h2 className="title">Secure Sign In</h2>
        <p className="desription">For current customers</p>

        {!showWrongUser && <div className="error active">Invalid email address or password.</div>}

        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="email"
            autoComplete="current-email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            data-name="password"
            autoComplete="current-password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            required
          />
        </label>

        <button className="btnMy">Sign in</button>
      </form>

      {/* <form id="RegistrationForm" className="userForm">
        <p className="title">Quick Registration</p>
        <p className="desription">For new customers</p>

        <div className="error">Invalid email address or password.</div>

        <label>
          <input
            type="text"
            placeholder="Full name"
            data-name="name"
            value="Ivan"
            required
          />
        </label>

        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="email"
            value="ivan@gmail.com"
            required
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            data-name="password"
            value="123"
            required
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Verify Password"
            data-name="passwordVerify"
            value="123"
            required
          />
        </label>

        <button className="btn">Create Account</button>
      </form> */}
    </div>
  );
}
