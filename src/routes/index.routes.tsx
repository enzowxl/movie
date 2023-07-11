import { 
    useContext
 } from 'react'

import { AuthContext } from '../provider'

import NoAuthRoute from './NoAuth/noauth.routes'
import AuthRoute from './Auth/drawer.routes'

export default function Routes() {

    const { logged } = useContext(AuthContext)

    return(

        logged

        ?

        <AuthRoute/> 

        :

        <NoAuthRoute/> 


    )
    
}