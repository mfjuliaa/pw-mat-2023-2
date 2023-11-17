import React from 'react'
import './App.css'
import HeaderBar from './ui/HeaderBar'
import { ThemeProvider } from '@mui/material/styles'
import theme from './utils/theme'
import Box from '@mui/material/Box'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'


import HomePage from './pages/HomePage'
import CarList from './pages/CarList'
import CustomerList from './pages/CustomerList'



function App() {


  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>{/* reseta o CSS padrão e o adapta para o tema */}
          <Box sx={{
            width: '100vw',  //toda a largura da janela 
            minHeight: '100vh', //no mínimo, toda a altura da janela
            //cinza escuro, no modo dark
            backgroundColor: 'background.default'
          }}>
            <HeaderBar />
            <Box sx={{ m: '25px'/*margem de 25px de todos os lados*/ }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cars" element={<CarList />} />
                <Route path="/customers" element={<CustomerList />} />
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
