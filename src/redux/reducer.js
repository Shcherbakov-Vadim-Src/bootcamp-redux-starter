let initialState = {
    cart: [],
    goods: [{
        id: 0,
        title: "Logitech C920 Hd Pro Webcam",
        description: "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
        price: 120
    },
    {
        id: 1,
        title: "Logitech USB Headset H390 with Noise Cancelling Mic",
        description: "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
        price: 50
    },
    {
        id: 2,
        title: "Anker PowerCore 10000 Portable Charger",
        description: "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
        price: 150
    }]
}

export default function reducer( state = initialState, action ) {
    switch (action.type) {
        case 'ADD_GOOD_TO_CART':                             // смотрит на action и понимает, что ему нужно сделать
            
            const match = state.goods.find((good) => {
                return good.id === action.payload.id           // ищет товар по id 
            });

            let valet = {...match};
            const newCart = [...state.cart, valet]   //  создали через иммутабельность копию state и добавили в него match, все равно, что используя push
            
            newCart.map((item, index) => {
                item.id = index;
               return item;
            })

            const updateState = { ...state };      
            updateState.cart = newCart;                 // изменили state
            return updateState;                       // и вернули его измененный / обновленный 
        case 'REMOVE_GOOD_FROM_CART':                             // смотрит на action и понимает, что ему нужно сделать    
            let newCartSub = state.cart.filter((item) => {
                return item.id !== action.payload.id;
            })
            const updateStateSub = { ...state };       
            updateStateSub.cart = newCartSub;           
            return updateStateSub;                
        default:
             return state;   
    }
}