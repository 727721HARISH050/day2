import React from 'react'
import img1 from "../Images/10.jpg"
import img2 from "../Images/11.jpg"
import img3 from "../Images/12.jpg"
import img4 from "../Images/13.jpg"
import img5 from "../Images/14.jpg"
import img6 from "../Images/15.jpg"
import img7 from "../Images/16.jpg"
import img8 from "../Images/17.jpg"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>MT 09</h2>
        <h2>Price : 9L</h2>
        <h2>CC: 900</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>MT-15</h2>
        <h2>Price : 2L</h2>
        <h2>CC : 155 </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>R1</h2>
        <h2>Price : 15L</h2>
        <h2>CC : 1000</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>DIRT BIKE</h2>
        <h2>Price : 5L</h2>
        <h2>CC : 200</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>R 11</h2>
        <h2>Price : 20L</h2>
        <h2>CC : 1100</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>R 15 V4</h2>
        <h2>Price : 2.5L</h2>
        <h2>CC : 155</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>RX100</h2>
        <h2>Price : 80K</h2>
        <h2>CC : 100</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>DIRT 2</h2>
        <h2>Price :7L</h2>
        <h2>CC : 300</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
