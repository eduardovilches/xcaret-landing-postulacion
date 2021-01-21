export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const TOTAL = 'TOTAL';

export function increaseCount() {
  alert("¡Agregado en carrito!")
  return ({ type: INCREMENT});
}

export function decreaseCount() {
  return ({ type: DECREMENT});
}

export function resetCount() {
  return ({ type: RESET});
}

export function increaseTotal()
{
  return ({type: TOTAL})
}