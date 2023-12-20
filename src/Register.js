import './Register.css';

function Register() {
  return (
    <div id="main">
      <div class="head">
        <h1>Registration</h1>
      </div>
      <div class="or">
        <div class="container">
          <h2>Registration</h2>
          <form action="css" method="POST">
            <label for="username">Login:</label>
            <input type="text" id="username" name="username" />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Register</button>

          </form>
        </div>
      </div>
      <div class="contacts">
      </div>
    </div>
  );
}

export default Register;
