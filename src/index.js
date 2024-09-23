import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Survey from './pages/survey/Survey'
import Header from './components/header/Header'
import Error from './pages/error/Error'
import Result from './components/results/Result'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
        <Route path="/survey/:questionNumber" element={<Survey />}></Route>
        <Route path="/results" element={<Result />}></Route>
        <Route path="/freelances"></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
