export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      // Check if the product is already in the cart
      const { id } = actionPayload
      const productInTheCartIndex = state.findIndex((item) => item.id === id)

      if (productInTheCartIndex >= 0) {
        // create a new cart in order to modify it for later set that modification to the state
        const newState = structuredClone(state)
        newState[productInTheCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter((item) => item !== id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage(cartInitialState)
      return cartInitialState
    }
  }

  return state
}
