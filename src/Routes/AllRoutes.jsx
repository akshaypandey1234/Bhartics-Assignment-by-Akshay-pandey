import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from '../Pages/Registration'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NewArrivals from '../Pages/NewArriavls'


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path='/newArrivals' element={<NewArrivals />}/>
                {/* <Route path="/Products/:id" element={<SingleCarPage/>}/>  */}
                {/* <Route path='/user/:userId' element={<MyCars />}/>  */}
            </Routes>
        </div>
    )
}

export default AllRoutes