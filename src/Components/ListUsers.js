import react from "react";
import ModalDetails from './ModalDetails.js';
import ModalUserDelete from "./ModalUserDelete.js";
import loadingGif from '../imgs/loading.gif'
import './ListUsers.css'

class ListUsers extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            allData: [],
            data: [],
            loading: true,
            error: null,
            sortId: false,
            sortName: false,
            sortStatus: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sortById = this.sortById.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByStatus = this.sortByStatus.bind(this);

    }

    async componentDidMount() {
        await this.listUsers()
    }

    listUsers = async () => {
        try {
            let res = await fetch('http://localhost:5000/usuarios/')
            let data = await res.json()
            let allData = data

            

            this.setState({
                allData,
                data,
                loading: false
            })

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'id') this.filterByID(value)
        if (name === 'nombre') this.filterByName(value)
        if (name === 'estatus') this.filterByState(value)
    }

    filterByID(idUser) {
        var filterData = []
        this.state.allData.filter(usuario => usuario.id == idUser).map(filteredUser => (
            filterData.push(filteredUser)
        ))
        if (filterData.length > 0) this.setState({ data: filterData })
        else this.setState({ data: this.state.allData })
        if (filterData.length <= 0 && idUser != '') this.setState({ data: filterData })
    }

    filterByName(nameUser) {
        var filterData = []
        this.state.allData.filter(usuario => {
            var n_user = usuario.nombre + ' ' + usuario.segundo_nom + ' ' + usuario.apellido_p + ' ' + usuario.apellido_m
            return n_user.toLowerCase().includes(nameUser.toLowerCase())
        }).map(filteredUser => (
            filterData.push(filteredUser)
        ))
        if (filterData.length > 0) this.setState({ data: filterData })
        else this.setState({ data: this.state.allData })
        if (filterData.length <= 0 && nameUser != '') this.setState({ data: filterData })

    }

    filterByState(stateUser) {
        var filterData = []
        this.state.allData.filter(usuario => usuario.estatus === stateUser).map(filteredUser => (
            filterData.push(filteredUser)
        ))
        if (filterData.length > 0) this.setState({ data: filterData })
        else this.setState({ data: this.state.allData })
        if (filterData.length <= 0 && stateUser != '') this.setState({ data: filterData })
    }


    sortById() {
        var sortId = []

        if (this.state.sortId) {
            const myData = [].concat(this.state.data)
                .sort((a, b) => a.id < b.id ? 1 : -1)
                .map((item, i) =>
                    sortId.push(item)
                );
            this.setState({ sortId: false })
        } else {
            const myData = [].concat(this.state.data)
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((item, i) =>
                    sortId.push(item)
                );
            this.setState({ sortId: true })
        }



        this.setState({ data: sortId })
    }

    sortByName() {
        var sortName = []

        if (this.state.sortName) {
            const myData = [].concat(this.state.data)
                .sort((a, b) => a.nombre < b.nombre ? 1 : -1)
                .map((item, i) =>
                    sortName.push(item)
                );
            this.setState({ sortName: false })
        } else {
            const myData = [].concat(this.state.data)
                .sort((a, b) => a.nombre > b.nombre ? 1 : -1)
                .map((item, i) =>
                    sortName.push(item)
                );
            this.setState({ sortName: true })
        }

        this.setState({ data: sortName })
    }

    sortByStatus() {
        var sortStatus = []

        if (this.state.sortStatus) {
            const myData = [].concat(this.state.data)
                .sort((a, b) => a.estatus > b.estatus ? 1 : -1)
                .map((item, i) =>
                    sortStatus.push(item)
                );
            this.setState({ sortStatus: false })
        } else {
            const myData = [].concat(this.state.data)
                .sort((a, b) => a.estatus < b.estatus ? 1 : -1)
                .map((item, i) =>
                    sortStatus.push(item)
                );
            this.setState({ sortStatus: true })
        }
        this.setState({ data: sortStatus })
    }



    render() {
        if (this.state.loading) {
            return <>
                <div className='row'>
                    <div className='col-md-4'><input name='id' className='form-controls' type="number" placeholder='Filtrar por ID' onChange={this.handleInputChange} /></div>
                    <div className='col-md-4'><input name='nombre' className='form-controls' type="text" placeholder='Filtrar por nombre' onChange={this.handleInputChange} /></div>
                    <div className='col-md-4'><select name='estatus' className='select-filter' onChange={this.handleInputChange}>
                        <option value="" selected>Todos</option>
                        <option value="Pendiente">PENDIENTE</option>
                        <option value="En proceso">EN PROCESO</option>
                        <option value="Completado">COMPLETADO</option>
                    </select></div>
                </div>
                <br />
                <table className='table-dash'>
                    <thead className='table-h-dash'>
                        <tr >
                            <th onClick={this.sortById}>ID</th>
                            <th className='d-none d-sm-block'>Correo</th>
                            <th></th>
                            <th className='d-none d-sm-block'>Telefono</th>
                            <th onClick={this.sortByName}>Nombre</th>
                            <th className='d-none d-sm-block'>Analista asignado</th>
                            <th onClick={this.sortByStatus}>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                <div className="div-loading">
                    <img className="img-loading" src={loadingGif}></img>
                </div>
                
            </>
        } else if (this.state.error) {
            return <>
                <div className='row'>
                    <div className='col-md-4'><input name='id' className='form-controls' type="number" placeholder='Filtrar por ID' onChange={this.handleInputChange} /></div>
                    <div className='col-md-4'><input name='nombre' className='form-controls' type="text" placeholder='Filtrar por nombre' onChange={this.handleInputChange} /></div>
                    <div className='col-md-4'><select name='estatus' className='select-filter' onChange={this.handleInputChange}>
                        <option value="" selected>Todos</option>
                        <option value="Pendiente">PENDIENTE</option>
                        <option value="En proceso">EN PROCESO</option>
                        <option value="Completado">COMPLETADO</option>
                    </select></div>
                </div>
                <br />
                <table className='table-dash'>
                    <thead className='table-h-dash'>
                        <tr >
                            <th onClick={this.sortById}>ID</th>
                            <th className='d-none d-sm-block'>Correo</th>
                            <th></th>
                            <th className='d-none d-sm-block'>Telefono</th>
                            <th onClick={this.sortByName}>Nombre</th>
                            <th className='d-none d-sm-block'>Analista asignado</th>
                            <th onClick={this.sortByStatus}>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                <div className="container">
                    <h4>Ocurrio un error, no se han podido consultar los usuarios, intente recargar la página</h4>
                </div>
                
            </>
        } else {
            return <>

                <div className='row'>
                    <div className='col-md-4'><input name='id' className='form-controls' type="number" placeholder='Filtrar por ID' onChange={this.handleInputChange} /></div>
                    <div className='col-md-4'><input name='nombre' className='form-controls' type="text" placeholder='Filtrar por nombre' onChange={this.handleInputChange} /></div>
                    <div className='col-md-4'><select name='estatus' className='select-filter' onChange={this.handleInputChange}>
                        <option value="" selected>Todos</option>
                        <option value="Pendiente">PENDIENTE</option>
                        <option value="En proceso">EN PROCESO</option>
                        <option value="Completado">COMPLETADO</option>
                    </select></div>
                </div>
                <br />
                <table className='table-dash'>
                    <thead className='table-h-dash'>
                        <tr >
                            <th onClick={this.sortById}>ID</th>
                            <th className='d-none d-sm-block'>Correo</th>
                            <th></th>
                            <th className='d-none d-sm-block'>Telefono</th>
                            <th onClick={this.sortByName}>Nombre</th>
                            <th className='d-none d-sm-block'>Analista asignado</th>
                            <th onClick={this.sortByStatus}>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((usuario) => (
                            <tr key={usuario.id} className='table-r-dash'>
                                <td>{usuario.id}</td>
                                <td className='d-none d-sm-block'>{usuario.correo}</td>
                                <td></td>
                                <td className='d-none d-sm-block'>{usuario.telefono}</td>
                                <td>{usuario.nombre + ' ' + usuario.segundo_nom + ' ' + usuario.apellido_p + ' ' + usuario.apellido_m}</td>
                                <td className='d-none d-sm-block'>{usuario.analista}</td>
                                <td>{usuario.estatus}</td>
                                <td>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <ModalDetails dataUser={usuario}></ModalDetails>
                                        </div>
                                        <div className='col-md-6'>
                                            <ModalUserDelete dataUser={usuario}></ModalUserDelete>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </>
        }
    }


}

export default ListUsers