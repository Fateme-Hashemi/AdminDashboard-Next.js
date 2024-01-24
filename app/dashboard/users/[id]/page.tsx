import styles from "../../../components/dashboard/users/singleUser/styles.module.scss";
import Image from "next/image";
import { fetchSingleUser } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";

const SingleUserPage = async ({params}) => {
  const {id} = params;
  const user = await fetchSingleUser(id);
  return (
    <div className={styles.user_container}>
      <div className={styles.user_infoContainer}>
        <div className={styles.user_imgContainer}>
          <Image src={ "/noavatar.png"} alt="" fill />
        </div>
      {user.username}
      </div>
      <div className={styles.user_formContainer}>
        <form className={styles.user_form} action={updateUser}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea  name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option >Yes</option>
            <option >No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option>Yes</option>
            <option>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;