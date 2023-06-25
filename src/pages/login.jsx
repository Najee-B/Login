import React from 'react'
import './login.css'

function login() {
  return (
    <div class="container1">
        <div class="content">
            <h1>Login</h1>
            <form>
                <label for="mail" id="lb">Email:</label>
                <input type="text" class="in" id="mail" placeholder="Enter email"/>
                <label for="password" id="lb">Password:</label>
                <input type="password" class="in" id="password" placeholder="Enter password"/>
               <div class="ch"> <input type="checkbox" id="check"/><label for="check">Show password</label> </div>
                <input type="submit" value="SIGN IN" id="submit"/>
                       </form>
                <div class="bottom">
                    <p>Forgot <a href="">Username</a> / <a href="">password?</a> Dont have an account? <a href="">Sign up</a> </p>
                </div>
        </div>
    </div>
  )
}

export default login