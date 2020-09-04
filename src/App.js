import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
  
  class App extends Component {
    render() {
      return (
        <div className="App container">
          <div class="header">
          <div class="logo"></div>
          <div>
            <h4>Please sign in to start learning</h4>
          </div>
          </div>          
          <div class="form-group for container">
          <div class="h3">
            <h3>Login to Your Account!</h3>
            </div>
           <div class="top">           
            <div class="choose">
            <button type="button" class="btn btn-outline-dark"><i class="fab fa-facebook-f pr-1"></i> Login With GitHub</button>
            <button type="button" class="btn btn-outline-danger"><i class="fab fa-google-plus-g pr-1"></i>Login With Gmail</button>
            </div>           
             </div> 
             <p>-OR-</p>            
            <div class="form container">
            <label for="exampleInputEmail1">Username/Email address</label>         
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or User name"></input>    
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>            
            <div class="Checkbox container">
            <input type="checkbox" class="check" id="customControlInline"></input><span>Remember me </span> 
                       
            </div>
            <div class="submit ">
              <div>
              <button type="submit" class="btn btn-primary my-1 ">Login to your account</button>
              </div>
              <div>
                <p>Don't have an account? <a href="#">Singup</a></p>
              </div>            
            </div>
         </div>
        </div>      
      )
    }
  }

export default App