import LoginForm from '../components/Login/loginForm/loginForm'
import styles from "../components/Login/styles.module.scss";


const LoginPage = () => {
  return (
    <div className={styles.login_container}>
      <LoginForm/>
      <p className={styles.login_text}>use admin for username and password to login and then you can create your user</p>
    </div>
  );
};

export default LoginPage;