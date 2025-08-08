import logo from "../assets/logoReserva.png"
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'


const login = () => {
  return (
    <div className='container'>
      <img src={logo} className='imgLogo' alt="" />
      <TextField tipo={"text"} placeholder={"Chave de acesso"}/>
      <Button titulo={"Entrar"}/>
    </div>
  )
}

export default login