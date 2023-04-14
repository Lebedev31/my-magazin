import '../Navigation/Navigation.scss';
import { Link } from 'react-router-dom';

function Navigation({visibleNavigation, setNameCategory}){

    function local(str){
        localStorage.setItem('key', str);
        const stor = localStorage.getItem('key');
        setNameCategory(stor);
    }
    
    function categoryDirectory(str){
        if(str === 'laptops'){
            local(str);
        }
        if(str === 'mens-shoes'){
            local(str);
        }
        if(str === 'womens-dresses'){
            local(str);
        }
        if(str === 'home-decoration'){
            local(str);
        }
        if(str === 'tops'){
            local(str);
        }
        if(str === 'sunglasses'){
            local(str);
        }
    }

    return (
        <ul className={visibleNavigation?'navigation' + ' navigation__visible': 'navigation'}>
            <li className='navigation__item'
                onClick={()=> categoryDirectory('laptops') }> <Link to={'/category'}>Ноутбуки</Link> </li>
            
            <li className='navigation__item' 
                onClick={()=> categoryDirectory('mens-shoes') }> <Link to={'/category'}>Мужская обувь</Link></li>
            
            <li className='navigation__item' 
                onClick={()=> categoryDirectory('womens-dresses') }> <Link to={'/category'}>Женская одежда</Link></li>
            
            <li className='navigation__item' 
                onClick={()=> categoryDirectory('home-decoration') }><Link to={'/category'}>Домашние предметы</Link></li>
            
            <li className='navigation__item' 
                onClick={()=> categoryDirectory('tops') }><Link to={'/category'}>Топы</Link> </li>
            
            <li className='navigation__item' 
                onClick={()=> categoryDirectory('sunglasses') }><Link to={'/category'}>Солнцезащитные очки</Link></li>
        </ul>
    )

}

export default Navigation;