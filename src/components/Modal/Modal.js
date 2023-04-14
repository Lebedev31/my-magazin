import '../Modal/Modal.scss';
import '../../style/button.scss'
import { useState, useEffect } from 'react';
import '../../style/button.scss';
import ModalItem from '../ModalItem/ModalItem'

function Modal({modalVisible, setModalVisible, data, id}){

const [arr, setArr] = useState([]);
const [sliderCarts, setSliderCarts] = useState(true);
const [position, setPosition] = useState(0);
const [orderedGoods, setOrderedGoods] = useState(new Set()); 
const [sumCount, setSumCount] = useState(0); // общее число товаров
const [sumPrice, setSumPrice] = useState(0);// сумма товаров
const [deleteModalItemElement, setDeleteModalItemElement] = useState(null);


function sum(price){   // функция подсчета общей суммы оплаты и количества товаров
    setSumPrice(sumPrice + price);
    setSumCount(sumCount + 1);
}

function minusSum(price){  // функция уменьшения общей суммы оплаты и количества товаров
    setSumPrice(sumPrice - price);
    setSumCount(sumCount - 1)
}


function deleteMiniCart(id, counter, total){
    const updatedGoods = orderedGoods.filter(item => item.id !== id);
    setOrderedGoods(updatedGoods);
    setDeleteModalItemElement(id);
    setSumPrice(sumPrice - total);
    setSumCount(sumCount - counter);
 }

useEffect(()=>{
    setArr([...data]);
    // здесь рендерится массив с объектами, который передется в качестве пропсов
},[data]); // с помощью хука мы отслеживаем изменения и меняем состояние хука Arr


const indexArr =  arr.findIndex(item => item.id === id); // ищем позицию объекта с тем id который передается в качестве пропса

useEffect(()=>{ // здесь, когда происходит изменение позиции id, а также переменной indexArr
    setPosition(position => indexArr) // мы меняем значение стейта position
}, [indexArr])//  для перемещения с помощью слайдера по товарам

const filterIdArr = arr.filter(item => item.id === id)[0]; //  здесь мы выставляем начальное значение
// карточки, которое поступает при помощи пропса id. Так как начальное значение пропса null, мы добавляем проверку

function nextSlider(){  // функция двигать слайдер вправо
   setSliderCarts(sliderCarts => false);
    if(position < arr.length - 1){
        setPosition(position => position + 1);
    }else{
        setPosition(position => 0)
    }
}

function prevSlider(){ // функция двигать слайдер влево
    setSliderCarts(sliderCarts => false);
    if(position === 0){
        setPosition(position => arr.length - 1 );
    } else {
        setPosition(position => position - 1);
    }  
}

function cartItemGoods(){  // функция для добавления мини карточек
    const itemPosition = arr[position];
    setOrderedGoods(orderedGoods =>[...new Set ([...orderedGoods, itemPosition])]);   
}

 const element = orderedGoods.size !== 0 ? orderedGoods.slice(0, 4).map(item =>{
        return (
            <ModalItem price={item.price}
                       brand={item.brand}
                       key={item.id}
                       sum={sum}
                       id={item.id}
                       minusSum={minusSum}
                       deleteMiniCart={deleteMiniCart}/>
        )
 }): null;

function deleteInfoBascet(){
    setSumCount(0);
    setSumPrice(0);
    setOrderedGoods([...new Set()]);
}


return(
        <div className={modalVisible?'modal__wrapper ' + 'modal__wrapper-active':'modal__wrapper ' + 'modal__wrapper-close'}>
         
            <div className='modal'>
                <div className='cross' onClick={()=>{setModalVisible(bollean => false);
                                                     deleteInfoBascet()}}></div>
                <h2>Корзина товаров</h2>
                <div className='modal__block'>
                    <div className='modal__cart modal__bag'>
                        <h3>Товар: {filterIdArr !== undefined && sliderCarts ? filterIdArr.brand : (arr[position] && arr[position].brand)} </h3>
                        <div className='modal__img'>
                            <img src={filterIdArr !== undefined && sliderCarts ? filterIdArr.thumbnail : (arr[position] && arr[position].thumbnail)} alt="картинка" />
                        </div>
                        <h3>Цена: {filterIdArr?.price || ''}</h3>
                        
                        <button className='button'
                                onClick={cartItemGoods}>Добавить в список товаров</button>
                        
                        <div className='modal__navigation'>
                            <button onClick={prevSlider}/>
                            <button onClick={nextSlider}/>
                        </div>
                    </div>
                    <div className='modal__bascet modal__bag'>
                    <h3>Заказанные товары (не больше 4 в корзине)</h3>
                           {element}
                    </div>
                    <form className='modal__form modal__bag'>
                        <h3>Kол-во товаров: {sumCount}</h3>
                        <h3>0бщая сумма: {sumPrice}</h3>
                        <button className='button'>Перейти к оплате</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Modal;
