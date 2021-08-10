export const initialState = {
    cart: [],
    user: null
}

export const reducer = (state,action) => {
    switch (action.type) {
        case 'ADDTOCART':
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }

        case 'ADDQTYPRODUCT':
            const index = state.cart.map(cur => {
                if(cur.id === action.payload.id){
                    cur.qty = action.payload.value;
                    return cur;
                }
                else{
                    return cur;
                }
            });

        case "SETUSER":
            return {
                ...state,
                user: action.user
            }
        case 'EMPTYCART':
            return {
                ...state,
                cart: []
            }
        case 'REMOVETOCART':
            const newCart = state.cart.filter(item => item.id !== action.payload);
            console.log(newCart);
            return {
                ...state,
                cart: newCart
            }
    
        default:
            return state
    }
}

export const getCartTotal = (value) =>{
    const reduce = value.reduce((total,item) => total += parseInt(item.price)*item.qty,0);
    return reduce;
}