import React from 'react'
import { UserUpdateForm } from '../Components/UserUpdateForm.js';

class UserUpdate extends React.Component {

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);

    }    

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
           [name]: value
        });
    }

    render(){
        return (<><UserUpdateForm></UserUpdateForm></>)
    }


}

export default UserUpdate