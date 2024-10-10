import { useState } from 'react'
import { TextField } from '@mui/material';
import QRCode from "react-qr-code";
import './App.css'

function App() {
  const [qr, setQr] = useState("qr code generator");
  const handleChange = (e) => {
    console.log(e.target.value);
    setQr(e.target.value);
  }
  return (
    <>
      <h1>Qr Code Generator</h1>
      <TextField label="Text here" variant="filled" color="success" inputProps={{ style: { color: 'white' } }} focused style={{marginBottom : '30px'}} onChange={(e) => {handleChange(e)}}/><br/>
      <QRCode value={qr} />
    </>
  )
}

export default App
