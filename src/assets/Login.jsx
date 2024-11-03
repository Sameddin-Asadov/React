import React from 'react'

export const users =[
    {
        name:"Sameddin",
        password:"1"
    },
{
    name:"Sam",
    passwod:"2"
}
]
function Login() {
    
  return (
    <div>
      <div>
        <div>Login</div>
        <input type="text" />
      </div>
      <div>
        <div>Password</div>
        <input type="password" />
      </div>
    </div>
  )
}

export default Login
