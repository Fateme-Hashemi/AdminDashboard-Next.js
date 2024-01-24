import styles from "../../../components/dashboard/products/singleProduct/styles.module.scss";
import Image from "next/image";
import { fetchSingleProduct } from "../../../lib/data";

const SingleProductPage = async ({params}) => {
const {id} = params;
const product = fetchSingleProduct(id)

  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill />
      </div>
     Tile
    </div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <input type="hidden" name="id" />
        <label>Title</label>
        <input type="text" name="title" placeholder={""} />
        <label>Price</label>
        <input type="number" name="price" placeholder={""} />
        <label>Stock</label>
        <input type="number" name="stock" placeholder={""} />
        <label>Color</label>
        <input
          type="text"
          name="color"
          placeholder={"color"}
        />
        <label>Size</label>
        <textarea
          type="text"
          name="size"
          placeholder={"size"}
        />
        <label>Cat</label>
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>
        <label>Description</label>
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder={""}
        ></textarea>
        <button>Update</button>
      </form>
    </div>
  </div>
  );
};

export default SingleProductPage;