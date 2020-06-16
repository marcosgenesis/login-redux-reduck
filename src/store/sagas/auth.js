import {all,takeLatest,call,put} from 'redux-saga/effects'
import {Types} from '../ducks/auth'
import {Creators} from '../ducks/auth'
import api from '../../services/api'

export function* signIn(payload){
  try {
    const { email,password } = payload;
    const response = yield call(api.post,'sessions',{
      email,password
    })
    const {token,user} = response.data
    yield put(Creators.signInSuccess(token,user))
  } catch (error) {
    yield put(Creators.signInFailure())
  }
}
export default all([
  takeLatest(Types.SIGN_IN_REQUEST,signIn)
])