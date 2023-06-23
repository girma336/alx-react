import React from 'react'

const Login = () => {
  return (
    <div>
        <main className='main'>
            <div>
                <p>Login to access the full dashboard</p>
                <form>
                <label htmlFor="email">Email: </label> { }
                { }<input type="email" id="email" name="email" required /> { }
                    <label htmlFor="password">Password: </label>
                    { }<input type="password" id="password" name="password" required />
                    { } <button type="submit">OK</button>
                </form>
            </div>
        </main>
    </div>
  )
}

export default Login