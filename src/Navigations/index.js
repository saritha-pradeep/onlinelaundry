import { useDispatch } from "react-redux";
import ToastWidget from "../Components/ToastWidget";
import { auth, db } from "../Firebase/config";
import MainNav from "./mainNav";
import { alterReducer } from "../Screens/Login/reducer";
import { useEffect } from "react";
import { collection, query, where } from "firebase/firestore";
import { getSingleDocument } from "../Firebase/functions";

function MainApp(params) {
  const dispatch = useDispatch();
  const handleUserAuth = () => {
    auth.onAuthStateChanged(async function (user) {
      if (user) {
       const _q=query(collection(db,'users'),where('uid','==',user.uid))
       const currentUser=await getSingleDocument({query:_q})
        dispatch(alterReducer({ isLoggedIn: true, user:currentUser[0] }));
      } else {
        dispatch(alterReducer({ isLoggedIn: false, user: {} }));
      }
    });
  };
  useEffect(() => {
    handleUserAuth();
  }, [handleUserAuth]);
  return (
    <>
      <MainNav />
      <ToastWidget />
    </>
  );
}
export default MainApp;
