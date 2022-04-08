import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ModalUserUpdate from './ModalUserUpdate';
import './UserUpdateForm.css'

export const UserUpdateForm = () => {

  const { id } = useParams();
  const [user, setUser] = useState({
    correo: '',
    telefono: '',
    nombre: '',
    segundo_nom: '',
    apellido_p: '',
    apellido_m: '',
    fecha_nac: '',
    estatus: '',
    analista: '',
    n_tarjeta: '',
    proveedor: '',
    cvv: '',
    pin: '',
    fecha_ven: ''
  })

  useEffect(() => {
    getUser()
  }, [])

  function getUser() {
    fetch('http://localhost:5000/usuarios/' + id).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => setUser(response[0]));
  }

  function handleSubmit(event) {


    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }

    console.log(user.estatus)

    fetch('http://localhost:5000/usuarios/' + id, requestOptions)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => window.location.reload(false));
    event.preventDefault();
  }

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setUser(user => ({
      ...user,
      [name]: value
    }))

    console.log(user)

  }

  const selected_pen = (user.estatus === 'Pendiente') ? true : false;
  const selected_en = (user.estatus === 'En proceso') ? true : false;
  const selected_com = (user.estatus === 'Completado') ? true : false;

  return <>
    <div className='container modal-container'>
      <div className="row">
        <div className="col-md-9">
          <h3 className='head-card'>{user.nombre + ' ' + user.segundo_nom + ' ' + user.apellido_p + ' ' + user.apellido_m}</h3>
        </div>
        <div className="col-md-3 container-status">
          <select onChange={handleInputChange} className="select-status" name="estatus">
            <option value="Pendiente" selected={selected_pen}>PENDIENTE</option>
            <option value="En proceso" selected={selected_en}>EN PROCESO</option>
            <option value="Completado" selected={selected_com}>COMPLETADO</option>
          </select>
        </div>
      </div>
      <div className="row">
        <label className='data-title'>ID: {user.id}</label>
        <br />
        <br />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-7">
            <div className='row'>
              <div className='col-md-6'>
                <label className='data-title'>NOMBRE</label><br />
                <input name="nombre" value={user.nombre} className='form-control' onChange={handleInputChange} /><br />
              </div>
              <div className='col-md-6'>
                <label className='data-title'>SEGUNDO NOMBRE</label><br />
                <input name="segundo_nom" value={user.segundo_nom} className='form-control' onChange={handleInputChange} /><br />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <label className='data-title'>APELLIDO PATERNO</label><br />
                <input name="apellido_p" value={user.apellido_p} className='form-control' onChange={handleInputChange} /><br />
              </div>
              <div className='col-md-6'>

                <label className='data-title'>APELLIDO MATERNO</label><br />
                <input name="apellido_m" value={user.apellido_m} className='form-control' onChange={handleInputChange} /><br />
              </div>
            </div>
            <label className='data-title'>MAIL</label><br />
            <input name="correo" value={user.correo} className='form-control' onChange={handleInputChange} /><br />
            <label className='data-title'>FECHA DE NACIMIENTO</label><br />
            <input name="fecha_nac" type="date" value={user.fecha_nac} className='form-control' onChange={handleInputChange} /><br />
            <label className='data-title'>TELEFONO</label><br />
            <input name="telefono" value={user.telefono} className='form-control' onChange={handleInputChange} /><br />
            <label className='data-title'>ANALISTA ASIGNADO</label><br />
            <label >{user.analista}</label>
            <br />
            <br />
          </div>
          <div className="col-md-5 col-xs-0">
            <div className='container card-body'>
              <label className='data-title'>FULL NAME</label><br />
              <label className='data-info'>{user.nombre + ' ' + user.segundo_nom + ' ' + user.apellido_p + ' ' + user.apellido_m}</label><br /><br />
              <label className='data-title'>CARD NUMBER</label><br />
              <label className='data-info'>{user.n_tarjeta}</label><br /><br />
              <div className='row'>
                <div className='col-4'>
                  <label className='data-title'>CVV</label><br />
                  <label className='data-info'>{user.cvv}</label>
                </div>
                <div className='col-4'>
                  <label className='data-title'>PIN</label><br />
                  <label className='data-info'>{user.pin}</label>
                </div>
                <div className='col-4'>
                  <label className='data-title'>EXP</label><br />
                  <label className='data-info'>{user.fecha_ven}</label>
                </div>
              </div>
            </div>
            <br /><br /><br />
            <div className='row'>
              <div className='col-md-12'>
                <ModalUserUpdate dataUser={user}></ModalUserUpdate>
              </div>

            </div>
          </div>

        </div>
      </form>
      <br /><br />
      <div className='row'>
      </div>
    </div>
  </>;
}