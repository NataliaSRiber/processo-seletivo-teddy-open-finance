import { Button, Input } from "@teddy/ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('username', username);
      navigate('/clients')
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-black text-3xl md:text-4xl text-center font-bold mb-5">
          Olá, seja bem-vindo!
        </h1>
        <div className="flex flex-col gap-5">
          <Input
            value={username}
            onChange={setUsername}
            label="Digite o seu nome:"
          />
          <Button 
            label="Entrar"
            onClick={handleLogin}
          />
        </div>
      </div>
    </main>
  )
}