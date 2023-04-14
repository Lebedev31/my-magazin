import '../Category/Category.scss';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { useEffect, useState} from 'react';
import useServices from "../../Services/Services";
import Spinner from '../Spinner/Spinner';

function Category({nameCategory, setModalVisible, modalId, setData, setCartCategory}){

  const [cart, setCart] = useState([]);
  const{categoryResponse} = useServices();
  const[loaded, setLoaded] = useState(false);

  useEffect(()=>{
        const stor = localStorage.getItem('key');
        if(stor === nameCategory){
           onRequest(nameCategory);
           setLoaded(true);
        }

        if(nameCategory.length === 0){
           onRequest(stor);
        }

       
  }, []);
 
  async function onRequest(str){
       const response = await categoryResponse(str)
       setCartCategory(response);
       setCart(cart => [...response])
       setData(response);
       setLoaded(false);
  }

 
  const element = cart.length !== 0 ? cart.map(item => {
    return  <CartItem
              key={item.id}
              description={item.description}
              price={item.price}
              img={item.thumbnail}
              category={item.category}
              setModalVisible={setModalVisible}
              id={item.id}
              brand={item.brand}
              modalId={modalId}
                />
  }): null;

  const loadedSpinner = loaded === true ? <div style={{transform: 'translateX(100%)'}}><Spinner/></div>: element;
    
  return(
     <div className='category'>
        <h2 className='category__link'><Link to={'/'}>Перейти на главную</Link></h2>
        <h2>{nameCategory}</h2>
        <div className='category__block'>
                {loadedSpinner}
        </div>
    </div>
    )
}

export default Category;