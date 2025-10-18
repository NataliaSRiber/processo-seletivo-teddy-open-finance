import './App.css';
import { Button } from '@teddy/ui';


function App() {

  return (
    <div>
      <h1>Botão de teste</h1>
      <Button label="Clique aqui" onClick={() => alert('Testando!')} />
    </div>
  )
}

export default App
