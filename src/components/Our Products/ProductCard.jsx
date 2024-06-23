import './ourProducts.css';

export default function ProductCard({ image, name, description, price }) {
    return (
        <div className='productCard'>
            <img src={image} alt={image} />
            <div className="productCard-text">
                <h2>{name}</h2>
                <p className='product-desc'>{description}</p>
                <p className='product-price'>{price}</p>
            </div>
        </div>
    )
}