import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import '../../style/container.scss';
import { useState } from "react";


function MainPage({setModalVisible, setData, setCartCategory, setNameCategory, modalId}){
    const [visibleNavigation, setVisibleNavigation] = useState(false);// скрытие закрытие бургера

   

    function dataModal(arr){
        setData(data => [...arr]);
    }

    
    function setNavigator(){
        setVisibleNavigation(!visibleNavigation)
    }

    return(
        <>
           <Header setNavigator={setNavigator}/>
           <Navigation 
                    visibleNavigation={visibleNavigation}
                    setNameCategory={setNameCategory}
                    setData={setData}/>
           <Slider/>
            <div className="container">
                <RecommendedProducts 
                                setModalVisible={setModalVisible}
                                dataModal={dataModal}
                                modalId={modalId}
                                />
            </div>
        
        </>

    )
}

export default MainPage;