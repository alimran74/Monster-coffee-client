import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetail = () => {
    const coffee = useLoaderData();
    return (
        <div className="card bg-base-100 image-full w-96 shadow-sm ">
  <figure>
    <img
      src={coffee.photo}
      alt="Shoes" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title text-black">Name:{coffee.name}</h2>
    <p className='text-black'>Category{coffee.category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default CoffeeDetail;