import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Profile} from "./Components/Profile/Profile";
import {SignIn} from "./Components/Login/SignIn/SignIn";
import {SignUp} from "./Components/Login/SignUp/SignUp";
import {CreateApartment} from "./Components/Administration/CreateApartment/CreateApartment";
import {Hotel} from "./Components/Hotel/Hotel";
import {Header} from "./Components/Header/Header";
import {MainPage} from "./Components/MainPage/MainPage";
import {getHotelsFromServer} from "./redux/hotelSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotelsFromServer())
    }, [dispatch])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/administration/create' element={<CreateApartment />}/>
        <Route path='/hotel/:hotelid' element={<Hotel />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
