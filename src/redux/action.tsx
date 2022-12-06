export const addToCart = (data: any) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const deleteItem = (data: any) => {
  return {
    type: "DELETE_FROM_CART",
    payload: data,
  };
};
