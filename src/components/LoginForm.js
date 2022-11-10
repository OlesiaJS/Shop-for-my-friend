import db from "../db";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/account/accountSlice";

export default function LoginForm() {
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
        <h2 className="title white">Secure Sign In</h2>
        <p className="desription white">For current customers</p>

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
    </div>
  );
}
