import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTECONFIG } from '../config/routes';
import Button from './Button';
import Image from './Image';

function Header() {
    const { cart } = useSelector((state) => state.cartStore);
    const navigate = useNavigate();

    return (
        <header className='bg-gray-200 p-4'>
            <div className='container mx-auto max-w-screen-xl flex items-center justify-between'>
                <div className='cursor-pointer' onClick={() => navigate(ROUTECONFIG.PRODUCTS.url)}>
                    <Image src='/images/logo/logo_builtt_veci.png' alt='Builtt Logo' className='h-8' />
                </div>
                <div className='relative cursor-pointer' onClick={() => navigate(ROUTECONFIG.CART.url)}>
                    <Button variant='secondary' icon='/images/icons/Cart.png' iconAlt='Ikonica korpe' className='py-0 px-0' />
                    {cart.length > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                            {cart.length}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
