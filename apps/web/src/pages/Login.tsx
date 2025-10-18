import { Button, Input } from "@teddy/ui";

export default function Login() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-4">

      <div className="w-full max-w-md space-y-8">
        <h1 className="text-black text-3xl md:text-4xl text-center font-bold mb-5">
          Olá, seja bem-vindo!
        </h1>
        
        <div className="flex flex-col gap-5">
          <Input
            label="Digite o seu nome:"
          />
          <Button 
            label="Entrar"
            onClick={() => console.log('oi')}
          />
        </div>
      </div>
    </main>
  )
}