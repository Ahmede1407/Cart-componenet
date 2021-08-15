const reducer = (state, action) => {
  //fetching data from an external API
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DESPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  // remove specific item
  if (action.type === "REMOVE") {
    let newCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    return { ...state, cart: newCart };
  }

  // increase and decrease
  if (action.type === "TOGGLE_AMOUNT") {
    let newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        if (action.payload.actionType === "inc") {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        if (action.payload.actionType === "dec") {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      }
      return cartItem;
    });
    let filteredItem = newCart.filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: filteredItem };
  }

  // get total and amount
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const totalPrice = price * amount;

        cartTotal.amount += amount;
        cartTotal.total += totalPrice;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }

  // clear all cart
  if ((action.type = "CLEAR_CART")) {
    return { ...state, cart: [] };
  }

  return state;
};

export default reducer;
