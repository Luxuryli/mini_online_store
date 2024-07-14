import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const useStore = create((set) => ({
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  subtotal: parseFloat(localStorage.getItem('subtotal')) || 0,
  selectedSizes: {},

  addToCart: (item) =>
    set((state) => {
      const updatedCart = [...state.cartItems, { ...item, uniqueId: uuidv4(), quantity: 1 }];
      const newSubtotal = state.subtotal + item.tagThree;
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      localStorage.setItem('subtotal', newSubtotal);
      return {
        cartItems: updatedCart,
        subtotal: newSubtotal,
      };
    }),

  removeFromCart: (item) =>
    set((state) => {
      const updatedCart = state.cartItems.filter((cartItem) => cartItem.uniqueId !== item.uniqueId);
      const newSubtotal = state.subtotal - (item.tagThree * item.quantity);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      localStorage.setItem('subtotal', newSubtotal);
      return {
        cartItems: updatedCart,
        subtotal: newSubtotal,
      };
    }),

  adjustQuantity: (uniqueId, newQuantity) =>
    set((state) => {
      const updatedCart = state.cartItems.map((item) =>
        item.uniqueId === uniqueId ? { ...item, quantity: newQuantity } : item
      );
      const updatedSubtotal = updatedCart.reduce((total, item) => total + item.tagThree * item.quantity, 0);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      localStorage.setItem('subtotal', updatedSubtotal);

      return {
        cartItems: updatedCart,
        subtotal: updatedSubtotal,
      };
    }),

  setSelectedSize: (itemId, size) =>
    set((state) => ({
      selectedSizes: {
        ...state.selectedSizes,
        [itemId]: size,
      },
    })),
}));

export default useStore;
