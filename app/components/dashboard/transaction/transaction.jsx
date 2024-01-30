import Image from 'next/image'
import styles from './styles.module.scss'

const Transaction = () => {
    return (
        <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  Sara
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$125.0</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.done}`}>Done</span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                 Fereidoon
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.cancelled}`}>
                  Cancelled
                </span>
              </td>
              <td>9.02.2022</td>
              <td>$3.690</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                 Milad ab
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>30.02.2024</td>
              <td>$7.280</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default Transaction