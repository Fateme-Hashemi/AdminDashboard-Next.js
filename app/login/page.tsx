import LoginForm from '../components/Login/loginForm/loginForm'
import styles from "../components/Login/styles.module.scss";


const LoginPage = () => {
  return (
    <div className={styles.login_container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;