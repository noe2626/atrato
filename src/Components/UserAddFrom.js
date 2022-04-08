import React from "react";
import ModalAddUser from './ModalUser.js';

class UserAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            correo: '',
            telefono: '',
            nombre: '',
            segundo_nom: '',
            apellido_p: '',
            apellido_m: '',
            fecha_nac: '',
            estatus: 'Pendiente',
            date_input: 'text'
        }

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

    render() {
        return <>
                        <div className='form-user'>
                            <label className='label-user'>Nuevo usuario</label>
                            <input placeholder="Nombre"
                                name='nombre'
                                className='form-control'
                                value={this.state.nombre}
                                onChange={this.handleInputChange} />
                            <input placeholder="Segundo nombre"
                                name='segundo_nom'
                                className='form-control'
                                value={this.state.segundo_nom}
                                onChange={this.handleInputChange} />
                            <input placeholder="Apellido paterno"
                                name='apellido_p'
                                className='form-control'
                                value={this.state.apellido_p}
                                onChange={this.handleInputChange} />
                            <input placeholder="Apellido materno"
                                name='apellido_m'
                                className='form-control'
                                value={this.state.apellido_m}
                                onChange={this.handleInputChange} />
                            <input placeholder="Correo"
                                name='correo'
                                className='form-control'
                                value={this.state.correo}
                                onChange={this.handleInputChange} />
                            <input placeholder="Telefono"
                                name='telefono'
                                className='form-control'
                                value={this.state.telefono}
                                onChange={this.handleInputChange} />
                            <input placeholder="Fecha de nacimiento"
                                name='fecha_nac'
                                type={this.state.date_input}
                                className='form-control'
                                value={this.state.fecha_nac}
                                onChange={this.handleInputChange}
                                onFocus={(e) => {
                                    this.setState({ date_input: 'date' })
                                }} />
                            <ModalAddUser
                                dataUser={{
                                    correo: this.state.correo,
                                    telefono: this.state.telefono,
                                    nombre: this.state.nombre,
                                    segundo_nom: this.state.segundo_nom,
                                    apellido_p: this.state.apellido_p,
                                    apellido_m: this.state.apellido_m,
                                    fecha_nac: this.state.fecha_nac,
                                    estatus: this.state.estatus
                                }} />
                            <br/>
                            <br/>
                    </div>
                        
        </>
    }


}

export default UserAddForm