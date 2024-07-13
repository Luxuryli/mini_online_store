import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const useStore = create((set) => ({
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  subtotal: parseFloat(localStorage.getItem('subtotal')) || 0,
  selectedSizes: {},

  addToCart: (item) =>
    set((state) => {
      const updatedCart = [...state.cartItems, { ...item, id: uuidv4(), quantity: 1 }];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      localStorage.setItem('subtotal', state.subtotal + item.tagThree);
      return {
        cartItems: updatedCart,
        subtotal: state.subtotal + item.tagThree,
      };
    }),

  removeFromCart: (item) =>
    set((state) => {
      const updatedCart = state.cartItems.filter((cartItem) => cartItem.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      localStorage.setItem('subtotal', state.subtotal - item.tagThree);
      return {
        cartItems: updatedCart,
        subtotal: state.subtotal - item.tagThree,
      };
    }),

  adjustQuantity: (id, newQuantity) =>
    set((state) => {
      const updatedCart = state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      const updatedSubtotal = updatedCart.reduce((total, item) => total + item.tagThree * item.quantity, 0);
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
