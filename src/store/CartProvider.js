import React, { useReducer } from "react";
import cloneDeep from "lodash/cloneDeep";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const upsertItem = (items, item) => {
  const cloneItems = cloneDeep(items);
  const foundItem = cloneItems.find(({ id }) => id === item.id);
  if (foundItem) {
    foundItem.amount += item.amount;
    return cloneItems;
  }
  return cloneItems.concat(item);
};

const removeItemById = (items, id) => {
  const cloneItems = cloneDeep(items);
  const removedItem = cloneItems.find((item) => item.id === id);
  const { price } = removedItem;

  if (removedItem.amount === 1) {
    const removedItems = cloneDeep.filter(({ id }) => id !== removedItem.id);
    return { removedItems, price };
  }
  removedItem.amount -= 1;
  return { removedItems: cloneItems, price };
};

const cartReducer = (state, action) => {
  const { items, totalAmount } = state;
  const { type, item, id } = action;

  switch (type) {
    case "ADD": {
      const updatedItems = upsertItem(items, item);

      const amount = item.amount * item.price;
      const updatedTotalAmount = totalAmount + amount;

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    case "REMOVE": {
      const { removedItems, price } = removeItemById(items, id);
      const updatedTotalAmount = totalAmount - price;
      return { items: removedItems, totalAmount: updatedTotalAmount };
    }

    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const { items, totalAmount } = cartState;

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemByIdHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items,
    totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemByIdHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
