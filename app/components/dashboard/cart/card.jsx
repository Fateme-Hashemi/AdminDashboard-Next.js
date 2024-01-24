import { MdSupervisedUserCircle } from "react-icons/md";
import styles from './styles.module.scss';

const Card = () =>{
    return (
        <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.texts}>
          <span className={styles.title}></span>
          <span className={styles.number}></span>
          <span className={styles.detail}>
          </span>
        </div>
      </div>
    )
}

export default Card