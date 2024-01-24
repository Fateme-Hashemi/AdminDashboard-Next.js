import {fetchUsers} from '../../lib/data'
import Link from 'next/link'
import Image from 'next/image'
import Search from '../../components/dashboard/search/search'
import Pagination from '../../components/dashboard/pagination/pagination'
import styles from '../../components/dashboard/users/styles.module.scss'
import { deleteUser } from '../../lib/actions'

const Users = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count, users} = await fetchUsers(q, page);

    return (
        <div className={styles.users_container}>
          <div className={styles.users_top}>
            <Search placeholder="search for a user ..." />
         <Link href="/dashboard/users/add">
         <button className={styles.users_addbtn}>
                Add New
        </button>
        </Link>
          </div>
          <div className={styles.users_table}>
            <table className={styles.users_table}>
            <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            {users.map((user)=> (
            <tr key={user.id}>
                <td>
                    <div className={styles.users_user}>
                        <Image src={user.img || "/noavatar.png"} width={40} height={40} alt=""  className={styles.users_userimg} />
                        {user.username}
                    </div>
                </td>
                <td>
                {user.email}
                </td>
                <td>{user.date?.toString()}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "active" : "passive"}</td>
                <td>
                    <div className={styles.users_buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                        <button className={`${styles.users_button} ${styles.users_view}`}>
                            view
                        </button>
                    </Link>
                    <form action={deleteUser}>
                        <input type='hidden' value={user.id} name="id" />
                    <button className={`${styles.users_button} ${styles.users_delete}`}>
                            Delete
                        </button>
                        </form>
                    </div>
                </td>
            </tr>
               ))}
        </tbody>
            </table>
            <Pagination count={count} />
            </div>
        </div>
    )
}

export default Users