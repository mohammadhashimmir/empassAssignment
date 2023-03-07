import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login=()=> {
const Navigate= useNavigate();
const onFormSubmit=(e)=>{
  e.preventDefault();
  Navigate("/stats")
}
  return (
    <div className="main">
     <h3 className="ui center aligned icon header">
     <i className="circular users icon"></i>
     Sign In
     </h3>

     <form onSubmit={onFormSubmit}>

      <div className='ui labeled input'>
      <div className="ui label"> Email</div>
      <input type="email"required/>
      </div>

      <div className='ui labeled input'>
      <div className="ui label"> Password</div>
      <input type="password"required/>
      </div>

      <div className="ui checkbox">
      <input type="checkbox" name="example"/>
      <label>Remember Me</label>
      </div>

      <div className='buttonBox'>
      <button type='submit' className='ui large primary button'>Sign In</button>
      </div>
     </form>
     
     <div className="ui grid">
     <div className="left floated left aligned six wide column">
     <a href='forgot'>Forgot Passowrd.</a>
     </div>
     <div className="right floated right aligned six wide column">
     <a href='signup'>Sign Up</a>
     </div>
     </div>
  
    </div>
  )
}

export default Login;
