import '../Slider/Slider.scss';
import gruner from '../../img/gruner.jpg';
import living from '../../img/living.jpg';
import reaport from '../../img/reaport.jpg';
import washing from '../../img/washing.jpg';
import { useState, useRef, useEffect} from 'react';


 function Slider(){

    const [offset, setOffset] = useState(0);
    const myRef = useRef();
   

    useEffect(()=>{
        setOffset(offset => 1)
    }, []);

    useEffect(()=>{
        const len = myRef.current.children.length - 1;
        if(offset >= len){
            setOffset(offset => 0)
        }
    }, [offset])

    

useEffect(()=>{
 const clear = setInterval(()=>{
    nextSlide();
 }, 4000);
 
 return ()=> clearInterval(clear);
})


function nextSlide(){
  const array1 = [...myRef.current.children];
  const [...array2] = array1.slice(0, -1);

  for(let elem of array2){
    elem.className = 'slide'
  }

  if(offset <= array2.length - 1){
      setOffset(offset => offset + 1);
      array2[offset].className = 'slide slide-active';  
  }
} 
    
    
    return(
        <>
        <div className="slider" ref={myRef}>
            <div className="slide slide-active">
                <img src={gruner} alt="Slide 1" />
            </div>
            <div className="slide">
                <img src={living} alt="Slide 2"/>
            </div>
            <div className="slide">
                <img src={reaport} alt="Slide 3"/>
            </div>
            <div className="slide">
                <img src={washing} alt="Slide 4"/>
            </div>

        <div className='slider__navigation'>
        
        <svg
            onClick={nextSlide}
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
             d="M8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44771 16 7 15.5523 7 15V9C7 8.44772 7.44771 8 8 8ZM16 15.4641L10 12L16 8.5359V15.4641Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z"
            fill="currentColor"
        />
    </svg>


    <svg
        onClick={nextSlide}
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V9Z"
        fill="currentColor"
    />
    <path d="M14 12L8 15.4641V8.5359L14 12Z" fill="currentColor" />
    <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
        fill="currentColor"
    />
    </svg>

    </div>

</div>

</>
        )

}


export default Slider;