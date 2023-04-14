import '../Header/Header.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({setNavigator}){

    const [burger, setBurger] = useState(false);

    return(
        <header>
            <div className='header__search'>
                <h1 className='header__title'>Каталог категорий</h1>
                <div className='header__burger'
                     onClick={()=> {setBurger(!burger);
                                    setNavigator()}} >
                    <span className={burger? 'line' + ' line-top': 'line'}></span>
                    <span className={burger? 'line' + ' line-center': 'line'}></span>
                    <span className={burger? 'line' + ' line-bottom': 'line'}></span>
                </div>
            </div>
            <nav>
                <Link to={'/vacancies'}>Производители</Link>
                <Link to={'/about'}>О нас</Link>
                <Link to={'/details'}>Подробности</Link>
                <Link to={'/manufacturers'}>Вакансии</Link>
            </nav>
        </header>
    )
}

export default Header;