import React from 'react'
import ModalUserDelete from '../Components/ModalUserDelete.js';
import './Dashboard.css'
import UserAddForm from '../Components/UserAddFrom.js';
import ListUsers from '../Components/ListUsers.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserAddForm></UserAddForm>
                    </div>
                    <div className='col-md-9'>
                        <ListUsers></ListUsers>
                    </div>
                </div>
            </div>
        </>
    }


}

export default Dashboard