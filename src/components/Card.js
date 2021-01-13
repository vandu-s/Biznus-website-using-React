import react from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../action/actionCreator';

const Card = ({product,addProductToCart}) => {
    let {image,name,price,index}=product;
    return ( 
        <div class="card" key={index}>
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
            <div class="card-title">{name} </div>
            <div class="card-text">{`$ ${price/1000} USD`}</div>
            <button onClick={()=>addProductToCart(product)}  class="btn pink black">Add to Cart</button>
        </div>
    </div>

     );
}
const mapDispatchToProps= (dispatch)=>({
    addProductToCart:(product)=>dispatch(addProduct(product))
})
 
export default connect(null,mapDispatchToProps)(Card);