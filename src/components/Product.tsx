type Props = {
   title: string,
   price: number,
    count: number
}

function Product(props: Props){
    return(
        <div>
            <p>title: {props.title}</p>
            <p>price: {props.price}</p>
            {
                props.count ===0
                ? <p>The product is out of stock</p>
                : <p>count: {props.count}</p>
            }  
        </div>

    );
}
export default Product;