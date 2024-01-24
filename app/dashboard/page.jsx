import Card from '../components/dashboard/cart/card'
import Transaction from '../components/dashboard/transaction/transaction'
import Chart from '../components/dashboard/chart/chart'
import RightSidebar from '../components/dashboard/rightSidebar/rightSidebar'
import styles from './dashboard.module.scss'

const Dashboard = () => {
    return (<div  className={styles.wrapper}>
        <div  className={styles.main}>
    <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
    </div>
    <Transaction />
    <Chart />
    </div>
    <div className={styles.side}>
        <RightSidebar />
    </div>
    </div>)
}

export default Dashboard;