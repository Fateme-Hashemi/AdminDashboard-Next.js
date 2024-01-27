import { authenticate } from "../../../lib/actions";
import styles from "./styles.module.scss";


const LoginForm = () => {
 

  return (
    <form className={styles.loginForm_form} action={authenticate} >
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
<input type="password" placeholder="password" name="password" />

      <button>Login</button>
    </form>
  );
};

export default LoginForm;