import '../CartItem/CartItem.scss';

function CartItem({price, img, description, brand, category, setModalVisible, id, modalId}){
    return(
        <div className='cartItem'>
            <h3>Категория: {category}</h3>
            <h3>Бренд: {brand}</h3>
            <div className='cartItem__block'>
                <div className='cartItem__img'>
                    <img src={img} alt="картинка" />
                </div>
                <div className='cartItem__description'>
                    {description}
                </div>
            </div>
            <h3>Цена:{price}</h3>
            <button 
                    className='cartItem__button'
                    onClick={()=>{ setModalVisible(bollean => true);
                                   modalId(id);
                                   }}>
                        Добавить в корзину</button>
        </div>
    )

}

export default CartItem;