import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
const Products = () => {

    const [product, setProduct] = useState([])

    useEffect(()=>{
        const getProduct = async () => {
            try{
             const response =  await  axios.get("http://localhost:6900/products")
             console.log(response.data);
             setProduct(response.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        getProduct()
    },[])

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-red-400'>Here! :)</span></h1>
            <p className='mt-12'>Explore our curated collection of top-quality products, handpicked just for you. Whether you're searching for the latest trends or timeless essentials, we strive to bring you the best selection at unbeatable prices. Shop with confidence, knowing that your satisfaction is our top priority. Happy shopping, and enjoy your experience with us!</p>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                product.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Products