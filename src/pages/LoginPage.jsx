import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showLoader } from '../redux/loaderSlice';
import { hardcodedUser } from '../config/data';
import Input from '../components/Input';
import Label from '../components/Label';
import { ROUTECONFIG } from '../config/routes';
import Button from '../components/Button';

function LoginPage() {
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.loaderStore);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        setError(''); // Zbog lepseg user experience
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Provera da li su polja prazna
        if (!formData.email || !formData.password) return setError('Molimo popunite sva polja.');

        // Provera formata email-a koriscnjem regex-a
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return setError('Unesite ispravan email.');

        // Simulacija pretrage usera u bazi
        dispatch(showLoader(true));

        setTimeout(() => {
            // Provera email-a i sifre usera
            if (formData.email === hardcodedUser.email && formData.password === hardcodedUser.password) {
                navigate(ROUTECONFIG.PRODUCTS.url);
            } else {
                setError('Pogrešno korisničko ime ili šifra.');
            }

            dispatch(showLoader(false));
        }, 2000);
    };

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md p-8 space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900'>Prijavi se na svoj nalog</h2>

                <form onSubmit={handleLogin}>
                    <div className='relative mb-6'>
                        <Input
                            id='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='E-mail adresa'
                            className='custom-input-class'
                        />
                        <Label htmlFor='email' className='custom-label-class'>
                            E-mail adresa
                        </Label>
                    </div>
                    <div className='relative mb-6'>
                        <Input
                            id='password'
                            type='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Upišite šifru'
                            className='custom-input-class'
                        />
                        <Label htmlFor='password' className='custom-label-class'>
                            Upišite šifru
                        </Label>
                    </div>

                    {error && <p className='text-red-500 text-sm'>{error}</p>}

                    <Button
                        type='submit'
                        className='w-full py-2 mt-8 text-white bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
                        size='md'
                        disabled={isLoading} // Zabrani klik na dugmetu dok je ucitavane u toku
                    >
                        {isLoading ? 'Učitavanje...' : 'Prijavi se na nalog'}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
