import ProductCard from './ProductCard';
import './ourProducts.css';
import { PRODUCTS_LIST } from './productsList';

export default function OurProuducts() {
    return (
        <>
            <section id="OurProducts-sec">
                <h1>Our Products</h1>
                <div className="productsCard-cont">
                    {PRODUCTS_LIST.map((products) => (
                        <ProductCard key={products.name} {...products} />
                    ))}

                </div>
            </section>
        </>
    )
}