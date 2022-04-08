import React, { useState } from 'react'
import './ModalUser.css'
import { useModal } from './UseModal'
import colorLogo from '../imgs/ColorLogo.png'
import loadingGif from '../imgs/loading.gif'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModalUser = (dataUser) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const data = dataUser.dataUser
    const [card, setCard] = useState({ date: '' });
    const [loading, setLoading] = useState(false);

    function handleSubmit(event) {

        setLoading(true)

        const user = {
            correo: data.correo,
            telefono: data.telefono,
            nombre: data.nombre,
            segundo_nom: data.segundo_nom,
            apellido_p: data.apellido_p,
            apellido_m: data.apellido_m,
            fecha_nac: data.fecha_nac,
            estatus: data.estatus,
            analista: card.fullName,
            n_tarjeta: card.cardNumber,
            proveedor: card.type,
            cvv: card.cvv,
            pin: card.pin,
            fecha_ven: card.date.substring(5, 8) + card.date.substring(2, 4)
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }

        console.log(requestOptions)

        fetch('http://localhost:5000/usuarios', requestOptions).then(res => res.json())
            .catch(error_ => console.log(error_))
            .then(response => {
                setLoading(false)
                window.location.reload(false);
            });
        event.preventDefault();
    }

    function generateCard() {

        fetch('https://randommer.io/api/Card', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-Api-Key': 'f3b80c8d2c6a478e89445e919e625fff'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => setCard(response));

    }

    if (loading) {
        return (
            <>
                <input type="button" onClick={openModal} value="Guardar" className='button-add' />
                <div className={`modal-user ${isOpenModal && 'modal-open-user'}`}>
                    <div className="modal-dialog-user">
                        <div className='container modal-container'>
                            <div className="div-loading">
                                <img className='img-loading' src={loadingGif}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        return (
        <>

            <input type="button" onClick={openModal} value="Guardar" className='button-add' />
            <div className={`modal-user ${isOpenModal && 'modal-open-user'}`}>
                <div className="modal-dialog-user">
                    <form onSubmit={handleSubmit}>
                        <div className='container modal-container'>
                            <div className="row">
                                <div className="col-md-8">
                                    <img className='logo' src={colorLogo}></img>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-7">
                                    <label className='data-title-u'>MAIL</label><br />
                                    <label className='data-info-u'>{data.correo}</label><br /><br />
                                    <label className='data-title-u'>FECHA DE NACIMIENTO</label><br />
                                    <label className='data-info-u'>{data.fecha_nac}</label><br /><br />
                                    <label className='data-title-u'>TELEFONO</label><br />
                                    <label className='data-info-u'>{data.telefono}</label><br /><br />
                                    <label className='data-title-u'>ANALISTA ASIGNADO</label><br />
                                    <label className='data-info-u'>{card.fullName}</label>
                                </div>
                                <div className="col-md-5 col-xs-0 card-separation">
                                    <div className='row'>
                                        <div className='col-md-10 offset-md-1'>
                                            <input className='button-generate' type="button" onClick={generateCard} value="Generar tarjeta" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className='container card-body-u'>
                                        <label className='data-title-u'>FULL NAME</label><br />
                                        <label className='data-info-u'>{data.nombre + ' ' + data.segundo_nom + ' ' + data.apellido_p + ' ' + data.apellido_m}</label><br /><br />
                                        <label className='data-title-u'>CARD NUMBER</label><br />
                                        <label className='data-info-u'>{card.cardNumber}</label><br /><br />
                                        <div className='row'>
                                            <div className='col-4'>
                                                <label className='data-title-u'>CVV</label><br />
                                                <label className='data-info-u'>{card.cvv}</label>
                                            </div>
                                            <div className='col-4'>
                                                <label className='data-title-u'>PIN</label><br />
                                                <label className='data-info-u'>{card.pin}</label>
                                            </div>
                                            <div className='col-4'>
                                                <label className='data-title-u'>EXP</label><br />
                                                <label className='data-info-u'>{card.date.substring(5, 8) + card.date.substring(2, 4)}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                            <div className='row'>
                                <div className='col-md-2'>
                                    <input className='link-close' type="button" onClick={closeModal} value="Cancelar" />
                                </div>
                                <div className='col-md-3 offset-md-7'>
                                    <button className='button-save_'>Confirmar <FontAwesomeIcon icon={faFloppyDisk} /></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>)
    }
    



}

export default ModalUser