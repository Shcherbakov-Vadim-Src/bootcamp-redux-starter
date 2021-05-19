
export function addGoodAction(id){   
   return {
      type: 'ADD_GOOD_TO_CART',   
      payload: {
        id: id  
      }
    }
}
