import { handleActions } from 'redux-actions'
import { SAVE } from '../types/cache'

export default handleActions({
  [SAVE] (state, action) {
    const {key, value} = action.payload;
    return {
      ...state,
      [key]: value
    }
  }
}, {
  shop: null,
  categories: null,
  limit: null
})
