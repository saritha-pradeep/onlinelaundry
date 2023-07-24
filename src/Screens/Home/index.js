import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAPI, apis } from "../../Network";
import Header from "../../Components/Header"
import { callsomeapi } from "./reducer";
import { Link } from "react-router-dom";
import "./home.css"
export default function Home(props) {
  const state = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchNew = async () => {
    const result = await fetchAPI({ url: apis.food });
    dispatch(callsomeapi(result));
  };
  return (
    <div>
      <Header />
      <div>
          <div className='sub_main'>
            <p className='heading1'><b>Market Leading<br></br>Laundry &  Dry Cleaning <br></br>Services</b></p>
            <p className="heading2"><b>Collect in the Next 60 min, Return Tomorrow</b></p>
            {/* <a href='https://www.youtube.com/watch?v=dQw4w9'>Order Now</a> */}
            <Link to="/login">
            <button className="buttonmenu"> <b className="font">SCHEDULE YOUR NEXT PICKUP </b> <br></br><br></br> IN NEXT 60 MINUTES</button>
            </Link>
            <p className="heading3"> <b>Highest Quality and lowest price guaranteed </b></p>
          </div>
          <div className="sub1_main">
            <div className="sub_part">
              <p className="sub_part1">DRY CLEANING & LAUNDRY MADE EASY</p>
              <br></br><p className="sub_part2">How Wash It Fresh Works</p>
            </div>

          </div>
      </div>
      
    </div>
  );
}
