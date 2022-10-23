import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bootstrap from './components/Bootstrap'; 

import { CartContextProvider } from './context/CartContext'
// export const Context = createContext()
// export const CartContext = createContext()

function App() {
 
  return (
    <div className="App"> 
      {/* <Context.Provider value={{ value1: 'valor a compoartir', value2: 'otro valor a compartir'}}> */}
        {/* <CartContext.Provider value={{ addItem, removeItem }}> */}
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
                <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        {/* </CartContext.Provider> */}
      {/* </Context.Provider> */}
    </div>
  );
}

export default App;