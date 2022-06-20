import * as axios from 'axios'
import {updateHotel} from "../../../redux/hotelSlice";

const instance = axios.create({
    baseURL: `http://localhost:8080/`,
    withCredentials: true
})

export const apartmentsAPI = {
    getApartments(id) {
        return instance.get(`hotel/${id}/apartments`).then(response => response.data)
    },
    createApartment({name, bed_count, price, apartment_class_id, hotel_id}) {
        return instance.post(`apartments`, {
            name, 
            bed_count, 
            price, 
            apartment_class_id, 
            hotel_id
        })
    }
}

export const transactsAPI = {
    getTransacts(phoneNumber) {
        return instance.get(`user/${phoneNumber}/transacts`).then(response => {
            return response.data.items
        })
    },
    createTransact({phone_number, date_arrival, date_departure, apartment_id}) {
        return instance.post(`transacts`, {
            phone_number, 
            date_arrival, 
            date_departure, 
            apartment_id
        })
    }
}

export const hotelsAPI = {
    getHotels() {
        return instance.get(`hotels`).then(response => {
            return response.data
        })
    },
    createHotel({name, stars_count, description, country, city, street, house, header_image_address}) {
        return instance.post(`hotels`, {
            name,
            stars_count,
            description,
            country,
            city,
            street,
            house,
            header_image_address
        })
    },
    updateHotel({id, name, stars_count, description, country, city, street, house, header_image_address}) {
        return instance.put(`hotels/${id}`, {
            name,
            stars_count,
            description,
            country,
            city,
            street,
            house,
            header_image_address
        })
    }
}

export const usersAPI = {
    createUser({phone_number, l_name, f_name}) {
        return instance.post(`users`, {
            phone_number, 
            l_name, 
            f_name
        })
    },
    deleteUser({phone_number}) {
        return instance.delete(`users/${phone_number}`)
    }
}