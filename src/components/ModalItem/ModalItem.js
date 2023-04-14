import '../ModalItem/ModalItem.scss';
import '../Modal/Modal.scss';
import { useState, useEffect } from 'react';

function ModalItem({price, brand, sum, id, minusSum, deleteMiniCart}){

    const [total, setTotal] = useState(price);
    const [counter, setCounter] = useState(1);


   useEffect(()=>{
      sum(price);
   }, [])

   
    function plus(){
        setCounter(counter => counter + 1);
        setTotal(total => total + price);
        sum(price);
    }

    function minus(){
        if(counter > 1){
            setCounter(counter => counter - 1);
            setTotal(total => total - price);
            minusSum(price);
        } else{
            setCounter(counter => 1);
            setTotal(total => price)
        }
    }


    return (
    <>
    <div className='modal__item'>
        <h3>Товары: {brand} </h3>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div className='modal__price'>Цена: {total} </div>
                <div className='modal__counter'>
                    <div className='modal__counter-item' onClick={plus}>+</div>
                    <div className='modal__counter-item'>{counter}</div>
                    <div className='modal__counter-item' onClick={minus}>-</div>
                </div>
            <div className='cross'
                 onClick={()=> deleteMiniCart(id, counter, total)}></div>

        </div>
      
    </div>
    </>
    )
}

export default ModalItem;