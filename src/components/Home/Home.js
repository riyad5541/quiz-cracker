import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Home = () => {
    const subjects = useLoaderData();

    const carts = subjects.data;
    // console.log(carts);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-2 m-6'>
            {
                carts.map(cart =><Cart
                    key={cart.id}
                    cart={cart}></Cart>
                    )
            }
        </div>
    );
};

export default Home;