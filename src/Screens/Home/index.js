import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAPI, apis } from "../../Network";
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import { callsomeapi } from "./reducer";
import { Link } from "react-router-dom";
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import SliderSwipe from "../../Components/Slider";

export default function Home(props) {
  const state = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchNew = async () => {
    const result = await fetchAPI({ url: apis.food });
    dispatch(callsomeapi(result));
  };
  const settings={showIndicators: false,
    showThumbs: false,}
  return (
    <div>
      <Header /> 
        
      <div>
          <div className='sub_main'>
          {/* <div className="img_home"> */}
            <img className="img_home" src={require("../../assets/preview.png")}width="600px" height="450px"  />
          {/* </div> */}
                <div className="heading"> 
                  <p className='heading1'><b>Market Leading<br></br>Laundry &  Dry Cleaning <br></br>Services</b></p>  
                  <p className="heading2">Collect in the Next 60 min, Return Tomorrow</p>
                  {/* <a href='https://www.youtube.com/watch?v=dQw4w9'>Order Now</a> */}
              
                  <Link to="/login">
                  <button className="buttonmenu"> <b className="font">SCHEDULE YOUR  PICKUP </b> <br></br> IN NEXT 60 MINUTES</button>
                  </Link>
                  <p className="heading3"> Highest Quality and lowest price guaranteed </p>
                </div>
          </div>
          <div className="sub1_main">
            <div className="sub_part">
              <p className="sub_part1">DRY CLEANING & LAUNDRY MADE EASY</p>
              <br></br><p className="sub_part2">How Wash It Fresh Works</p>
            </div>
           
          </div>
          <div class="grid-container">
                <div className="grid-item">
                  <img className="img_grid" src={require("../../assets/how-it-work-imag-1.jpg")}  />
                    <p >SCHEDULE PICKUP</p>
                    <div className="steps"><p className="stepscontent">select a convinent time and date<br></br>provide your address and contact details</p></div>
                </div>

                <div class="grid-item">
                  <img className="img_grid" src={require("../../assets/how-it-work-imag-2.jpg")}  />
                    <p>EXPERT CLEANING</p>
                    <div className="steps"><p className="stepscontent">collect your clothes at the ordered time<br></br>& You will earn more hours for other activities</p></div>
                </div>

                <div class="grid-item">
                <img className="img_grid1" src={require("../../assets/snapedit_1691348485837.jpeg")} />
                  <p>TIMELY DELIVERY</p>
                  <div className="steps"><p className="stepscontent">Get your clean, freshly laundered laundry delivered to your door step.<br></br></p></div>
                </div>
           </div>
          
           <SliderSwipe/> 
        {/* pricing */}
          <div >
          <section class="price-section">
              <div class="price-item">
                <h2>Shirt</h2>
                <p>Starting from <span className="price">£2.25</span></p>
                <img  src={require("../../assets/fold-shirt.jpg")} />
              </div>
              <div class="price-item">
                <h2>2 Suits</h2>
                <p>Only <span className="price">£23.75</span></p>
                <img  src={require("../../assets/suit.jpg")}  />
              </div>
              <div class="price-item">
                <h2>2 Dress</h2>
                <p>Only <span className="price">£22.54</span></p>
                <img  src={require("../../assets/dress.jpeg")}/>
              </div>
              <div class="price-item">
                <h2>WASH, DRY, FOLD</h2>
                <p>Starting from <span class="price">£2.80</span> per KG</p>
                <img  src={require("../../assets/wash.jpg")} />
              </div>
           </section>
                    
            
        </div>
        <Footer/>
      </div>
     
      
    </div>
  );
  
}


