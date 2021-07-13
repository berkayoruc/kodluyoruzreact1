import "axios";
import axios from "axios";

export default async (user_id) => {
  let returnObject = {};
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );
    returnObject = { ...response.data };
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );
    returnObject.posts = response.data;
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return returnObject;
};
