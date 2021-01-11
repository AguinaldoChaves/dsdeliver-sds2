import { formatPrice } from "./Helpers";

type Props={
    amount: number;
    totalPrice: number;
    onSubmit: ()=>void;
}
function OrderSummary({amount, totalPrice, onSubmit}:Props){
    return(
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                    <strong className="amount-selected">{amount}</strong>
                    Pedido selecionados
                    </span>
                    <span className="order-summary-total">
                    Valor Total<strong className="amount-selected">{formatPrice(totalPrice)}</strong>         
                    </span>
                </div>  
                <button className="order-summary-make-order"
                onClick={onSubmit}
                >
                Fazer Pedido
                </button>        
            </div> 
        </div>
    )
}
export default OrderSummary;