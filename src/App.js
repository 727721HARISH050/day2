import './App.css';
import pic from "../src/Images/2.jpg";


import Armors from './pages/Guns';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>YAMAHA MOTOR</h1><br/>
    <p>
       WORLD'S #NO.1 MOTORCYCLE COMPANY
    </p><br/><br/><br/><br/>
    <a href="https://www.yamaha-motor-india.com/" target="_blank" > TO KNOW MORE</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
                WELCOME TO THE PAGE OF WORLD'S #NO.1 MOTORCYCLE COMPANY
                <h1><center>YAMAHA MOTORS</center></h1>
                </h2>
               
                    <br/>
               
                <h6>Here you know about what are the Motorcycles available
                and book their slots for delivery.<br/>      
                </h6><br/>
          <h6> <i>NOTE : Payment should be done only in the office!</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https://shop.yamaha-motor-india.com/" target="_blank">BOOK YOUR DREAM MOTORCYCLE NOW</a>
            </div> 
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    </div>
  );
}

export default App;
