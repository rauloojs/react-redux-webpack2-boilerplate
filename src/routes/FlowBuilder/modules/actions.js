export const actions = {
  increment
}
// ------------------------------------
// Actions
// ------------------------------------
export default function increment (value = 1) {
  return {
    type    : 'COUNTER_INCREMENT',
    payload : value
  }
}
