import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Component/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Contact } from './Component/Contact';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { ErrorPage } from './Component/ErrorPage';
import { Logout } from './Component/Logout';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/Usereducer';

// we need contextAPI to toggle the login logout button.
export const UserContext = createContext();



function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="app">

      <UserContext.Provider value={{state, dispatch}}>
        <BrowserRouter>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

        </BrowserRouter>
      </UserContext.Provider>



    </div>
  );
}

export default App;
