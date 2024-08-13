import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Freeproducts = () => {

  const [product, setProduct] = useState([])

  useEffect(()=>{
      const getProduct = async () => {
          try{
           const response =  await  axios.get("http://localhost:6900/products")
           const data = response.data.filter((data)=>data.category==="Free")
           console.log(data);
           setProduct(data)
          } catch (error) {
              console.log(error);
          }
      }
      getProduct()
  },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='text-xl font-semibold pb-2'>Free Products</h1>
        </div>
    <div>
    <Slider {...settings}>
        {product.map((item)=>(
            <Card item={item} key={item.id}/>
         ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freeproducts