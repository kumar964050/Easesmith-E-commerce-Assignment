import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = { items: [] };

const cartReducer = (state, action) => {
  const alreadyExist = state?.items?.find(
    (item) => item?.id === action?.payload
  );
  switch (action.type) {
    case "ADD_ITEM":
      if (alreadyExist) {
        return {
          items: state.items.map((item) => {
            if (item.id === action.payload) {
              return {
                id: item.id,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          items: [...state.items, { id: action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_ITEM":
      return {
        items: state.items
          .map((each) => {
            if (each.id === action.payload) {
              return each.quantity > 1
                ? { ...each, quantity: each.quantity - 1 }
                : null;
            }
            return each;
          })
          .filter(Boolean),
      };

    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // add
  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  // remove
  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  // clear data
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart: state.items, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
