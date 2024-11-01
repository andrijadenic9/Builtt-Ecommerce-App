import Header from '../components/Header';
import Currency from '../components/Currency';
import Button from '../components/Button';
import Image from '../components/Image';
import { useSelector, useDispatch } from 'react-redux';
import { handleQuantity, removeItem } from '../redux/cartSlice';
import { calculateTotalAmount, calculateTotalDiscount } from '../utils/price';

function CartPage() {
    const { cart } = useSelector((state) => state.cartStore);
    const dispatch = useDispatch();

    // Izracunavanje ukupnog popusta i sume koristeci pomocne func
    const totalDiscount = calculateTotalDiscount(cart);
    const totalAmount = calculateTotalAmount(cart);

    return (
        <>
            {/*Header*/}
            <Header />

            <div className='p-4 pt-12 lg:flex lg:justify-center'>
                <div className='container mx-auto max-w-screen-xl flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6'>
                    <div className='lg:w-3/4 pr-6'>
                        <h1 className='text-2xl font-bold mb-6'>Tvoja korpa</h1>
                        {cart.length ? (
                            <>
                                {cart.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className='flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-300 py-4 space-y-4 sm:space-y-0'
                                    >
                                        {/* Product image */}
                                        <div className='w-full sm:w-auto flex items-center justify-center sm:justify-start'>
                                            <Image src={item.image} alt={item.name} className='w-20 h-20 object-cover rounded-md' />
                                        </div>

                                        {/* Product details */}
                                        <div className='flex flex-col sm:ml-4 flex-grow'>
                                            <h2 className='text-lg font-semibold'>{item.name}</h2>
                                            <p className='text-sm text-gray-500'>{item.price} RSD po kom.</p>
                                            <p className='text-gray-500 text-sm'>{item.weight}</p>

                                            <div className='flex items-center space-x-4 mt-2'>
                                                <div className='flex items-center bg-white border border-gray-400 rounded-full px-4 py-1 space-x-4'>
                                                    <Button
                                                        onClick={() => dispatch(handleQuantity({ index, isIncrease: false }))}
                                                        variant='icon-only'
                                                        size='sm'
                                                        icon='/images/icons/minus.png'
                                                        iconAlt='minus'
                                                        className='text-gray-600'
                                                    />
                                                    <span className='text-lg font-medium'>{item.quantity}</span>
                                                    <Button
                                                        onClick={() => dispatch(handleQuantity({ index, isIncrease: true }))}
                                                        variant='icon-only'
                                                        size='sm'
                                                        icon='/images/icons/plus.png'
                                                        iconAlt='plus'
                                                        className='text-gray-600'
                                                    />
                                                </div>

                                                <Button
                                                    onClick={() => dispatch(removeItem(index))}
                                                    variant='secondary'
                                                    size='sm'
                                                    className='underline underline-offset-2'
                                                >
                                                    Ukloni
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Product price */}
                                        <div className='text-right w-full sm:w-auto'>
                                            <p className='text-lg font-bold'>
                                                {(item.price * item.quantity).toFixed(2)} <Currency />
                                            </p>
                                            {item.discount && (
                                                <p className='text-sm text-red-500 line-through'>
                                                    {(item.price * item.quantity * 1.2).toFixed(2)} <Currency />
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div>Vasa korpa je prazna molimo vas prvo izaberite neki od proizvoda.</div>
                        )}
                    </div>

                    {/* Summary */}
                    <div className='lg:w-1/4 bg-gray-200 p-6 rounded-lg shadow-lg'>
                        <h2 className='text-xl font-bold mb-4'>Tvoja narudžbina</h2>
                        <div className='flex justify-between mb-2'>
                            <span>Ukupno</span>
                            <span className='font-semibold'>
                                {totalAmount.toFixed(2)} <Currency />
                            </span>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <span>Ušteda</span>
                            <span className='font-semibold text-red-500'>
                                -{totalDiscount.toFixed(2)} <Currency />
                            </span>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <span>Isporuka Daily Express*</span>
                            <span className='font-semibold'>Besplatna</span>
                        </div>
                        <hr className='my-4' />
                        <div className='flex justify-between mb-4 text-lg font-bold'>
                            <span>Ukupno za uplatu</span>
                            <span>
                                {(totalAmount - totalDiscount).toFixed(2)} <Currency />
                            </span>
                        </div>
                        <p className='text-sm text-gray-500 mb-4'>Cena je sa uključenim PDV-om</p>

                        <Button className='w-full bg-black text-white' size='md'>
                            Prijavi se za brže plaćanje
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
