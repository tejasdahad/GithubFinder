import React,{Fragment} from 'react'
import Seach from '../users/Search';
import Users from '../users/Users';


const Home = () => {
    return (
        <Fragment>
            <Seach />
            <Users />
        </Fragment>
    )
}

export default Home;