import '../RecommendedProducts/RecommendedProducts.scss'
import useServices from "../../Services/Services";
import { useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import '../../style/button.scss';
import Spinner from '../Spinner/Spinner';

function RecommendedProducts({setModalVisible, dataModal, modalId}){

    const[cart, setCart] = useState([]);
    const[loaded, setLoaded] = useState(false);

    const{limitResponse} = useServices();

   useEffect(()=>{
       dataModal(cart);
 }, [cart])

    useEffect(()=>{
        onRequest();
    },[])

   async function onRequest(){
       setLoaded(true);
       const response = limitResponse().
            then(limitArrayProcessing);
    }

    function limitArrayProcessing(newCart){
        if(cart.length < 6){
            setCart(cart => [...newCart]);
        }
        if(cart.length >= 6){
            console.log(7)
            setCart(cart => [...cart,...newCart]);
        }
        setLoaded(false);
    }

    const element = cart.map(item =>{
        return(
            <CartItem
                brand={item.brand}
                key={item.id}
                description={item.description}
                price={item.price}
                img={item.thumbnail}
                category={item.category}
                setModalVisible={setModalVisible}
                id={item.id}
                modalId={modalId}
            />
        )
    })
    
    const loadedSpinner = loaded === true ? <div style={{transform: 'translateX(100%)'}}><Spinner/></div>: element;

    return(
        <div className='recommendedProducts'>
            <h2>Случайные товары</h2>
            <div className='recommendedProducts__block'>
                    {loadedSpinner}
            </div>
            <button onClick={onRequest} className='button'>Загрузить новые карточки</button>
        </div>
    )
}

export default RecommendedProducts;