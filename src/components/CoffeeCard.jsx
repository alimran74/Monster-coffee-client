import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { photo, name, category, quantity } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-sm border">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex mt-8 w-full justify-around">
       <div>
         <h2 >Name: {name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Category {category}</p>
       </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
