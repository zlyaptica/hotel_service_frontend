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
import { HotelList } from './Components/HotelList/HotelList';
import {PageNoFound} from "./Components/common/PageNoFound/PageNoFound";
import {Administration} from "./Components/Administration/Administration";
import {CreateHotel} from "./Components/Administration/CreateHotel/CreateHotel";
import {EditHotel} from "./Components/HotelList/EditHotel/EditHotel";
import {User} from "./Components/User/User";

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
                <Route path='/user' element={<User/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/hotel/:hotel_id' element={<Hotel/>}/>
                <Route path='/hotel/:hotel_id/edit' element={<EditHotel/>}/>
                <Route path='/administration' element={<Administration/>}/>
                <Route path='/administration/create_apartment' element={<CreateApartment/>}/>
                <Route path='/administration/create_hotel' element={<CreateHotel/>}/>
                <Route path='*' element={<PageNoFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
