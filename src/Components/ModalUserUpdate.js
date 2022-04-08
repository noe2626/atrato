import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './ModalUserUpdate.css'
import { useModal } from './UseModal'
import blackIcon from '../imgs/BlackIcon.png'

const ModalUserUpdate = (dataUser) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const user = dataUser.dataUser


    return (
        <>
            <input className='button-save' type="button" onClick={openModal} value="Guardar" />
            <div className={`modal-update ${isOpenModal && 'modal-open-update'}`}>
                <div className="modal-dialog-update">
                <div className='container modal-container'>
                        <div className="row">
                            <div className="col-md-9">
                                <h3 className='head-card'>{user.nombre + ' ' + user.segundo_nom + ' ' + user.apellido_p + ' ' + user.apellido_m}</h3>
                            </div>
                            <div className="col-md-3 container-status">
                                <label className='label-status'>{user.estatus}</label>
                            </div>
                        </div>
                        <div className="row">
                            <label className='data-title-u'>ID: {user.id}</label>
                            <br />
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <label className='data-title-u'>MAIL</label><br />
                                <label className='data-info-u'>{user.correo}</label><br /><br />
                                <label className='data-title-u'>FECHA DE NACIMIENTO</label><br />
                                <label className='data-info-u'>{user.fecha_nac}</label><br /><br />
                                <label className='data-title-u'>TELEFONO</label><br />
                                <label className='data-info-u'>{user.telefono}</label><br /><br />
                                <label className='data-title-u'>ANALISTA ASIGNADO</label><br />
                                <label className='data-info-u'>{user.analista}</label>
                            </div>
                            <div className="col-md-5 card-separation d-none d-sm-block">
                                <div className='container card-body-u'>
                                    <label className='data-title-u'>FULL NAME</label><br />
                                    <label className='data-info-u'>{user.nombre + ' ' + user.segundo_nom + ' ' + user.apellido_p + ' ' + user.apellido_m}</label><br /><br />
                                    <label className='data-title-u'>CARD NUMBER</label><br />
                                    <label className='data-info-u'>{user.n_tarjeta}</label><br /><br />
                                    <div className='row'>
                                        <div className='col-4'>
                                            <label className='data-title-u'>CVV</label><br />
                                            <label className='data-info-u'>{user.cvv}</label>
                                        </div>
                                        <div className='col-4'>
                                            <label className='data-title-u'>PIN</label><br />
                                            <label className='data-info-u'>{user.pin}</label>
                                        </div>
                                        <div className='col-4'>
                                            <label className='data-title-u'>EXP</label><br />
                                            <label className='data-info-u'>{user.fecha_ven}</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <br /><br />
                        <div className='row'>
                            <div className='col-md-2'>
                                <input className='link-close' type="button" onClick={closeModal} value="Cancelar"/>
                            </div>
                            <div className='col-md-3 offset-md-7'>
                                <button className='link-save'>Confirmar <FontAwesomeIcon icon={faFloppyDisk}/></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>)



}

export default ModalUserUpdate