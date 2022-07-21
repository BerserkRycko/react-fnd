import { LOGIN } from '../types'

const initialState = {
  auth: [],
  loading: true
}
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: action.payload,
        loading: false
      }
    default: return state
  }
}
