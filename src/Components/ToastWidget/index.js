import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const toastController=toast
export default function ToastWidget({ hideProgressbar = true, ...props }) {
  return (
    <ToastContainer
      position="top-center"
      newestOnTop
      autoClose={3000}
      closeOnClick
      pauseOnFocusLoss
      hideProgressBar={hideProgressbar}
    />
  );
}
export {toastController}