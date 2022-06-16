import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {TransactPage} from "./Components/Profile/TransactPage";
import {SignIn} from "./Components/Login/SignIn/SignIn";
import {SignUp} from "./Components/Login/SignUp/SignUp";
import {CreateApartment} from "./Components/Administration/CreateApartment/CreateApartment";
import {Hotel} from "./Components/Hotel/Hotel";
import {Header} from "./Components/Header/Header";
import {getHotelsFromServer} from "./redux/hotelSlice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {CreateUser} from "./Components/Login/CreateUser/CreateUser";
import { HotelList } from './Components/HotelList/HotelList';

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotelsFromServer())
    }, [dispatch])
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<HotelList/>}/>
                <Route path='/transacts' element={<TransactPage/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/create' element={<CreateUser/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/administration/create' element={<CreateApartment/>}/>
                <Route path='/hotel/:hotel_id' element={<Hotel/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
