
import { Product } from './types';

type Props = {
    product: Product;
}
function formatPrice(price: number){
    const formater = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })
    return formater.format(price);
}
function ProductCard({product}:Props){
    return(
        <div className="order-card-container">
            {product.name}
            <img src={product.imageUri} className="order-card-image" alt={product.name}/>
            <h3 className="order-card-price">
            {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
            {product.description}
                
            </div>
        </div>
    )
}
export default ProductCard;