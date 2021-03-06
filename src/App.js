import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Darkmode is enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode is enabled", "Success");
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container" >
      <TextForm mode={mode}/>
      </div>
    </>
  );
}

export default App;
