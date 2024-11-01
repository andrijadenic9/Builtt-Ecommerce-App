import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { products } from '../config/data';

function ProductsPage() {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Products Section */}
            <main className='p-8'>
                <div className='container mx-auto max-w-screen-xl'>
                    <h1 className='text-2xl font-bold mb-4'>
                        Svi proizvodi <span className='text-gray-500'>{`${products.length} proizvoda`}</span>
                    </h1>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductsPage;
