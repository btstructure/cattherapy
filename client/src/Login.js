import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

function Login({ onLogin }) {
  
  
  return (
    <div className="login-form">
      <LoginForm onLogin={onLogin}/>
      <br />
      <SignUpForm />
    </div>
  );
}

export default Login;