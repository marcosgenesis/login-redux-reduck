import {createActions,createReducer} from 'reduxsauce';
import {Types} from './auth'
const INITIAL_STATE = {
  profile:null
}
const signInSuccess = (state = INITIAL_STATE, action) => {
  return {
    profile:action.user
  }
}
export default createReducer(INITIAL_STATE,{
 [Types.SIGN_IN_SUCCESS]:signInSuccess,
})