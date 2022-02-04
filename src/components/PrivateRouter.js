import React from 'react'
import { Route,Navigate } from 'react-router-dom';
import Auth from '../hooks/useAuth'
const PrivateRouter = ({children}) => {

    const auth=Auth();
    return auth ? children:<Navigate to='/login'/>;
}

export default PrivateRouter
