import Button from './Button';
import Image from './Image';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { useState } from 'react';

function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleAddToCart = () => {
        dispatch(addItem({ ...product, quantity }));
        setQuantity(1); // Zbog boljeg user experience
    };

    return (
        <div className='relative p-0'>
            <div className='relative h-80 bg-gray-200 rounded overflow-hidden flex items-center justify-center mb-4 group'>
                <Image src={product.image} alt={product.name} className='h-full w-full object-cover' />

                <div className='absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='flex items-center space-x-4'>
                        <div className='flex items-center bg-white rounded-full px-4 py-1 space-x-4'>
                            <Button onClick={handleDecrease} variant='icon-only' size='sm' icon='/images/icons/minus.png' iconAlt='minus' />
                            <span className='text-lg font-medium'>{quantity}</span>
                            <Button onClick={handleIncrease} variant='icon-only' size='sm' icon='/images/icons/plus.png' iconAlt='plus' />
                        </div>

                        <Button
                            onClick={handleAddToCart}
                            size='md'
                            icon='/images/icons/Cart-white.png'
                            iconAlt='Dodaj u korpu'
                            className='bg-black text-white'
                        />
                    </div>
                </div>
            </div>

            <h2 className='text-lg font-medium mb-1'>{product.name}</h2>
            <p className='text-gray-700 font-bold mb-4'>{product.price} RSD</p>
        </div>
    );
}

export default ProductCard;
