import MainPage from '../MainPage/MainPage';
import '../App/App.scss';
import { useState } from "react";
import Modal from "../Modal/Modal";
import Category from '../Category/Category';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from '../About/About';
import Details from '../Details/Details';
import Vacancies from '../Vacancies/Vacancies';
import Manufacturers from '../Manufacturers/Manufacturers';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function App(){
    
    const [modalVisible, setModalVisible] = useState(false); // скрытие закрытие модального окна
    const [data, setData] = useState([]); // рендерится массив, который попадает в модальное окно
    const [id, setId] = useState(null);
    const [cartCategory, setCartCategory] = useState([]) // сюда попадает массив указанной категории
    const [nameCategory, setNameCategory] = useState(''); // сюда попадает наименование категории


    function modalId(res){
        setId(id => res);
    }


  
    return(
        <Router> 
           
            <Routes>
            
            <Route path='/' element={ <ErrorBoundary> <MainPage setModalVisible={setModalVisible}
                                                        setData={setData}
                                                        setNameCategory={setNameCategory}
                                                        modalId={modalId}/>
                                                        </ErrorBoundary>}/>
            
            <Route path='/category' element={<ErrorBoundary><Category nameCategory={nameCategory}
                                                       setModalVisible={setModalVisible}
                                                       modalId={modalId}
                                                       setData={setData}
                                                       setCartCategory={setCartCategory}/>
                                                       </ErrorBoundary>}/>
            
            <Route path='/about' element={<About/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/vacancies' element={<Vacancies/>}/>
            <Route path='/manufacturers' element={<Manufacturers/>}/>
           
            </Routes>


         <ErrorBoundary>
                <Modal modalVisible={modalVisible}
                   setModalVisible={setModalVisible}
                   data={data}
                   id={id}/>
         </ErrorBoundary>
           
        </Router>
       
    )


}

export default App;