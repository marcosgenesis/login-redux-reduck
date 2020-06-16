import React,{useState}from 'react';
import { useDispatch} from 'react-redux'
import {TextField,Button} from '@material-ui/core'
// import { Container } from './styles';
import { Creators } from '../store/ducks/auth'
function Login() {
  
  const dispatch = useDispatch()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(Creators.signInRequest(email,password))
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="email" variant="outlined" onChange={e => setEmail(e.target.value) }/> <br/>
      <TextField id="outlined-basic" label="password" variant="outlined" onChange={e => setPassword(e.target.value) }/> <br/>
      <Button variant="contained" color="primary" type="submit">
        Entrar
      </Button>
    </form>
  )
}

export default Login;