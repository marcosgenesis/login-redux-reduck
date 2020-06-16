import {createActions,createReducer} from 'reduxsauce';
export const {Types,Creators} = createActions({
  signInRequest:['email', 'password'],
  signInSuccess:['token', 'user'],
  signFailure:[],
})
const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
}
const signInRequest = (state = INITIAL_STATE, action) => {
  return state
}
const signInSuccess = (state = INITIAL_STATE, action) => {
  console.log(action)
  return {
    token:action.token,
    signed:true,
    loading:false
  }
}
export default createReducer(INITIAL_STATE,{
 [Types.SIGN_IN_REQUEST]:signInRequest,
 [Types.SIGN_IN_SUCCESS]:signInSuccess
})