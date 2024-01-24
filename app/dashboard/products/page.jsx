import Image from 'next/image'
import Link from 'next/link'
import Search from '../../components/dashboard/search/search'
import Pagination from '../../components/dashboard/pagination/pagination'
import styles from '../../components/dashboard/products/styles.module.scss'
import { fetchProducts } from '../../lib/data'
import {deleteProduct} from '../../lib/actions'

const Products = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count, products} = await fetchProducts(q, page);
    return (
        <div className={styles.users_container}>
        <div className={styles.users_top}>
          <Search placeholder="search for a product ..." />
       <Link href="/dashboard/products/add">
       <button className={styles.users_addbtn}>
              Add New
      </button>
      </Link>
        </div>
        <div className={styles.users_table}>
          <table className={styles.users_table}>
          <thead>
        <tr>
        <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product)=> (

      
          <tr key={product.id}>
              <td>
                  <div className={styles.users_product}>
                      <Image src={product.img || "/noproduct.jpg"} width={40} height={40} alt=""  className={styles.users_userimg} />
                      {product.title}
                  </div>
              </td>
              <td className={styles.users_button}>
              {product.desc}
              </td>
              <td> {product.price}</td>
              <td>{product.date?.toString().slice(4,16)}</td>
              <td>{product.stock}</td>
              <td>
                  <div className={styles.users_buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.users_button} ${styles.users_view}`}>
                          view
                      </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
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

export default Products