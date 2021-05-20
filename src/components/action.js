
export function addGoodAction(id){   
   return {
      type: 'ADD_GOOD_TO_CART',   
      payload: {
        id: id  
      }
    }
}   

export function removeGood(id){   
    return {
        type: 'REMOVE_GOOD_FROM_CART',                                                   
        payload: {
            id: id  
        }
    }
}