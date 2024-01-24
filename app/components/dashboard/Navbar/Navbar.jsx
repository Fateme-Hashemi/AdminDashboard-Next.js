'use client';
import styles from './styles.module.scss';
import {usePathname} from 'next/navigation'
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
  } from "react-icons/md";
const Navbar = () => {
    const path = usePathname();
    return (
        <div className={styles['nav-container']}>
            <div className={styles['nav-title']}>{path}</div>
        <div className={styles['nav-menu']}>
            <div className={styles['nav-search']}>
                <MdSearch />
                <input type='text' placeholder='search ...'  className={styles['nav-input']} />
            </div>
            <div className={styles['nav-icons']}>
                <MdOutlineChat size={20} />
                <MdNotifications size={20} />
                <MdPublic size={20} />
            </div>
        </div>
        </div>
    )
}

export default Navbar