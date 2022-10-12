import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'recharts';

const Cart = ({cart}) => {
    // console.log(cart.id)
    const {name ,logo,id} = cart;
    return (
        <div className='w-72 h-96'>
            <img className='rounded-md bg-slate-200' src={logo} alt="" />
            <div className='m-5'>
                <span>{name}</span>
                <Link to={`/cart/${id}`}><button className='text-white bg-sky-600 mx-5 p-2 rounded-lg'>Start Practice</button></Link>
            </div>
        </div>
    );
};

export default Cart;