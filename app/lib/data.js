import {User, Product} from './models'
import {connectToDB} from './utils'


export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, 'i');
  const itemPerPage = 2;
    try {
      await connectToDB(); 
      const count = await User.find({username: {$regex: regex}}).count();
      const users = await User.find({username: {$regex: regex}}).limit(itemPerPage).skip(itemPerPage * (page - 1));
      return {count, users};
    } catch (err) {
      console.log(err);
    }
  };
  export const fetchSingleUser = async (id) => {
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
    }
    };


  export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, 'i');
    const itemPerPage = 2;
      try {
        await connectToDB(); 
        const count = await Product.find({title: {$regex: regex}}).count();
        const products = await Product.find({title: {$regex: regex}}).limit(itemPerPage).skip(itemPerPage * (page - 1));
        return {count, products};
      } catch (err) {
        console.log(err);
        // throw new Error("Failed to fetch users!");
      }
    };

    export const fetchSingleProduct = async (id) => {
 
      try {
        await connectToDB(); 
      
        const singleProduct = await Product.findById(id);
        return singleProduct;
      } catch (err) {
        console.log(err);
      }
    };