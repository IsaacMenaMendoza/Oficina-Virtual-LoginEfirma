import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos para redirigir
import "../../components/login/stylesLogin.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isEfirma, setIsEfirma] = useState(false);
  const navigate = useNavigate(); // Hook para redireccionar

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsAuthenticated(true); // Autenticación exitosa
        navigate("/desarrollo-economico"); // Redirigir al usuario
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Hubo un error al iniciar sesión");
    }
  };

  const handleEfirmaLogin = async (e) => {
    e.preventDefault();
    const certFile = document.getElementById("certFile").files[0];
    const keyFile = document.getElementById("keyFile").files[0];
    const password = document.getElementById("password").value;

    if (!certFile || !keyFile || !password) {
      alert("Debe subir los archivos .cer y .key, y proporcionar la contraseña.");
      return;
    }

    const formData = new FormData();
    formData.append("cert", certFile);
    formData.append("key", keyFile);
    formData.append("password", password);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      if (response.ok) {
        setIsAuthenticated(true);
        navigate("/desarrollo-economico");
      } else {
        alert(result);
      }
    } catch (error) {
      console.error("Error al validar e.firma:", error);
      alert("Hubo un error al validar la e.firma.");
    }
  };

  return (
    <div className={`container ${isRegistering ? "slide" : ""}`}>
      <div className="box signin">
        <h2>¿Ya tienes una cuenta?</h2>
        <button className="signinBtn" onClick={() => { 
          setIsRegistering(false); 
          setIsEfirma(false); 
        }}>Acceder</button>
      </div>
      <div className="box signup">
        <h2>¿No tienes una cuenta?</h2>
        <button className="signupBtn" onClick={() => { 
          setIsRegistering(true); 
          setIsEfirma(false); 
        }}>Registrarte</button>
      </div>
      <div className="formBx">
        {!isRegistering && !isEfirma && (
          <div className="form signinForm">
            <form onSubmit={handleLogin}>
              <h3>Acceder</h3>
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <input type="submit" value="Acceder" />
              <a href="#" className="efirma" onClick={() => setIsEfirma(true)}>Acceder con e.firma</a>
              <a href="#" className="forgot">Acceder vía 2 pasos</a>
              <a href="#" className="forgot">Olvidé mi contraseña</a>
            </form>
          </div>
        )}
  
        {isRegistering && (
          <div className="form signupForm">
            <form>
              <h3>Registrarte</h3>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirmar password" />
              <input type="submit" value="Registrar" />
            </form>
          </div>
        )}
  
        {isEfirma && (
          <div className="form efirmaForm">
            <form onSubmit={handleEfirmaLogin}>
              <h3>Acceder con e.firma</h3>
              <input type="file" id="certFile" accept=".cer" />
              <input type="file" id="keyFile" accept=".key" />
              <input type="password" id="password" placeholder="Contraseña e.firma" />
              <input type="submit" value="Validar e.firma" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}  
export default Login;
