import React from 'react'

function Card({item}) {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
  <figure className='h-48 w-full object-contain'>
    <img
      src={item.image}
      alt="Shoes" className='h-full w-full object-cover'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-error text-white">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge-outline cursor-pointer px-2 rounded-full border-[1px] hover:bg-slate-800 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>  
</div>
    </>
  )
}

export default Card