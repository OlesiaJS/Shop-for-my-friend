import Registration from "./Registration";
import LoginForm from "./LoginForm";

export default function Account() {
  return (
    <div className="columns">
      <LoginForm />
      <Registration />
    </div>
  );
}
