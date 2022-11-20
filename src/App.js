import { Routes, Route } from 'react-router-dom';
import AddItem from './AddItem';
import Home from './Home';
import './App.css';
import { useState } from 'react';
export default function App() {
  const [theme, setTheme] = useState({ bg: "dark", text: "light" })
  const [btnName, setbtnName] = useState(false)
  const ThemeHandler = () => {
    btnName ? setTheme({ bg: "light", text: "dark" }) : setTheme({ bg: "dark", text: "light" })
    btnName ? setbtnName(false) : setbtnName(true)
  }
  return (
    <div className={`container-fluid  bg-${theme.bg} text-${theme.text}  p-1`} style={{ minHeight: "100vh" }}>
      <div >
        <h1 className='text-center m-2  p-4 shadow'>Personal Shopping List</h1>
        <button className='btn btn-secondary float-end me-2' onClick={ThemeHandler}>{btnName ? "LIGHT" : "DARK"}</button>
        <Routes>
          <Route path="/AddItem" element={<AddItem />} />
          <Route path="/" element={<Home theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
}