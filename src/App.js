import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Product from './components/Product/Product';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={
          <RequireAuth>
            <Product></Product>
          </RequireAuth>
        }></Route>
        <Route path='/order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>

    </div>
  );
}

export default App;
