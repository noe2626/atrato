import { Link } from 'react-router-dom';
import './ModalDetails.css'
import { useModal } from './UseModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen } from '@fortawesome/free-solid-svg-icons'
import blackIcon from '../imgs/BlackIcon.png'

const ModalDetails = (dataUser) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const user = dataUser.dataUser

    return (
        <>
            <div onClick={openModal} className="button-details"><FontAwesomeIcon icon={faEye} /></div>
            <div className={`modal-detail ${isOpenModal && 'modal-open-detail'}`}>
                <div className="modal-dialog-detail">
                    <div className='container modal-container'>
                        <div className="row">
                            <div className="col-md-1 d-none d-sm-block">
                                <img src={blackIcon} className="image-icon" />
                            </div>
                            <div className="col-md-8">
                                <h3 className='head-card'>{user.nombre + ' ' + user.segundo_nom + ' ' + user.apellido_p + ' ' + user.apellido_m}</h3>
                            </div>
                            <div className="col-md-3 container-status">
                                <label className='label-status'>{user.estatus}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 offset-md-1">
                                <label className='data-title-d'>ID: {user.id}</label>
                            </div>

                            <br />
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-1">
                                <label className='data-title-d'>MAIL</label><br />
                                <label className='data-info-d'>{user.correo}</label><br /><br />
                                <label className='data-title-d'>FECHA DE NACIMIENTO</label><br />
                                <label className='data-info-d'>{user.fecha_nac}</label><br /><br />
                                <label className='data-title-d'>TELEFONO</label><br />
                                <label className='data-info-d'>{user.telefono}</label><br /><br />
                                <label className='data-title-d'>ANALISTA ASIGNADO</label><br />
                                <label className='data-info-d'>{user.analista}</label>
                                <br/>
                            <br/>
                            </div>
                            <div className="col-md-5 col-xs-0 card-separation">
                                <div className='container card-body-d'>
                                    <label className='data-title-d'>FULL NAME</label><br />
                                    <label className='data-info-d'>{user.nombre + ' ' + user.segundo_nom + ' ' + user.apellido_p + ' ' + user.apellido_m}</label><br /><br />
                                    <label className='data-title-d'>CARD NUMBER</label><br />
                                    <label className='data-info-d'>{user.n_tarjeta}</label><br /><br />
                                    <div className='row'>
                                        <div className='col-4'>
                                            <label className='data-title-d'>CVV</label><br />
                                            <label className='data-info-d'>{user.cvv}</label>
                                        </div>
                                        <div className='col-4'>
                                            <label className='data-title-d'>PIN</label><br />
                                            <label className='data-info-d'>{user.pin}</label>
                                        </div>
                                        <div className='col-4'>
                                            <label className='data-title-d'>EXP</label><br />
                                            <label className='data-info-d'>{user.fecha_ven}</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <br /><br />
                        <div className='row'>
                            <div className='col-md-2'>
                                <button className='link-close' type="button" onClick={closeModal}>Cerrar</button>
                            </div>
                            <div className='col-md-2 offset-md-8'>
                                <Link to={"/Users/" + user.id}><div><button className='link-edit'>Editar <FontAwesomeIcon icon={faPen} /></button></div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)



}

export default ModalDetails