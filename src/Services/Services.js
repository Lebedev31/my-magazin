

const useServices = ()=>{
    const _apiBace = 'https://dummyjson.com/products';
    const _limit = '?limit=6';
    const _skip = `&skip=${Math.floor(Math.random() * 97) + 1}`;
    const _category = '/category/';

    function _transformCart (cart){
        return{
            brand: cart.brand,
            category: cart.category,
            description: cart.description, 
            id: cart.id,
            price: cart.price,
            rating: cart.rating,
            thumbnail: cart.thumbnail,
            title: cart.title
        }
    }

   async function internetRequest (url){
        const response = await fetch(url)
       
        if(!response.ok){
            throw new Error(`Данный запрос не верен ${url} ,status:${response.status}`);
        }

        return await response.json();
    }
    

   async function limitResponse(){
        const response = await internetRequest(_apiBace + _limit + _skip);
        return response.products.map(_transformCart);
    }

   async function categoryResponse(cat){
      const response = await internetRequest(_apiBace + _category + cat);
      return response.products.map(_transformCart);
   }

    return {
        limitResponse,
        categoryResponse,
    }
    }


export default useServices;