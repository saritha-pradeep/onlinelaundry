import {  collection, getDocs, query } from "firebase/firestore";
import { db } from "./config";

const getSingleDocument = async ({ query }) => {
  const result = await getDocs(query);
  const filterData =result.docs.map(e=> ({ ...e.data(), id: e.id }));
  return filterData;
};
const getAllLaundryItems = async () => {
  const _q = query(collection(db, "laundry_items"));
  const laundryItems = await getSingleDocument({ query: _q });
  return laundryItems
};
const getAllCategories = async () => {
  const _q = query(collection(db, "laundry_categories"));
  const categories = await getSingleDocument({ query: _q });
  return categories
};
export {getSingleDocument,getAllLaundryItems,getAllCategories}