
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/account/accountSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const users = useSelector((state) => state.users.value);
  console.log(users);
  const [userEmail, setUserEmail] = useState("test@gmail.com");
  const [userPassword, setUserPassword] = useState("123");
  const [showWrongUser, setshowWrongUser] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Find User and Match Password
    // Get userDb from Database
    const isUserExist = users.find((el) => el.email === userEmail);
    console.log(isUserExist);
    if (isUserExist) {
      if (isUserExist.password === userPassword) {
        setshowWrongUser(true);
        dispatch(login(isUserExist));
        navigate("/");
        // window.location.href = "/favourites";
      }
    }
    else {
      setshowWrongUser(false);
    }
    console.log(showWrongUser);
  };
  return (
    <div className="columns">
      <form className="userForm" onSubmit={handleSubmit}>
        <h2 className="title white">Secure Sign In</h2>
        <p className="desription white">For current customers</p>

        {!showWrongUser && <div className="errorActive">Invalid email address or password.</div>}

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
