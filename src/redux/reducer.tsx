import { IProduct } from "../components/Common/interface/itemType";

const initState: any = {
  cart: [],
};

const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newCart = [];
      if (
        state.cart.find((item: IProduct) => item?.id === action?.payload?.id)
      ) {
        newCart = state.cart?.map((item: IProduct) => {
          return item?.id === action?.payload?.id
            ? {
                ...item,
                amount: item.amount + action?.payload?.amount,
              }
            : item;
        });
      } else {
        newCart = [...state.cart, action.payload];
      }
      return {
        ...state,
        cart: newCart,
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state?.cart?.filter(
          (item: IProduct) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
