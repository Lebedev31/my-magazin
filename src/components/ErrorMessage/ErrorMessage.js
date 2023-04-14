import img from './er.jpg'

const ErrorMessage = ()=>{
    return(
        <img style={{display: 'block', width: '250px', height: '250px', margin: '0 auto',
    objectFit: 'contain'}} src={img} alt='Error'/>
    )
}

export default ErrorMessage;