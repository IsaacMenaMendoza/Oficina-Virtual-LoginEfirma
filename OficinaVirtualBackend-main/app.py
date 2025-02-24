from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo para recibir datos del login
class LoginRequest(BaseModel):
    username: str
    password: str

@app.post("/login")
async def login(request: LoginRequest):
    # Aquí va la lógica de autenticación (esto es solo un ejemplo)
    if request.username == "admin" and request.password == "1234":
        return {"message": "Login exitoso"}
    else:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")

@app.get("/")
async def root():
    return {"message": "Bienvenido a la API de Oficina Virtual"}
