import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import './ModalUserDelete.css'
import loadingGif from '../imgs/loading.gif'
import { useModal } from './UseModal'
import blackLogo from '../imgs/BlackLogo.png'

const ModalUserDelete = (dataUser) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const data = dataUser.dataUser
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function handleSubmit(event) {

        setLoading(true)

        const requestOptions = {
            method: 'DELETE'
        }

        fetch('http://localhost:5000/usuarios/' + data.id, requestOptions).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                setLoading(false);
                window.location.reload(false);
                });
        event.preventDefault();
    }

    if(loading){
        return (
            <>
                <div onClick={openModal} className="button-delete"><FontAwesomeIcon icon={faTrash} /></div>
                <div className={`modal-delete ${isOpenModal && 'modal-open-delete'}`}>
                    <div className="modal-dialog-delete">
                        <div className='container'>
                            <div className="div-loading">
                                <img className='img-loading' src={loadingGif}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </>)

    }else if(error){
        return (
            <>
                <div onClick={openModal} className="button-delete"><FontAwesomeIcon icon={faTrash} /></div>
                <div className={`modal-delete ${isOpenModal && 'modal-open-delete'}`}>
                    <div className="modal-dialog-delete">
                        <div className='container'>
                            <h4>Ocurrio un error, recargue la pagina y vuelva a intentarlo</h4>
                        </div>
                        <div className='row'>
                                <div className='col-md-3'>
                                    <input className='link-close' type="button" onClick={closeModal} value="Cancelar" />
                                </div>
                        </div>
                    </div>
                </div>
            </>)

    }else{
        return (
        <>
            <div onClick={openModal} className="button-delete"><FontAwesomeIcon icon={faTrash} /></div>
            <div className={`modal-delete ${isOpenModal && 'modal-open-delete'}`}>
                <div className="modal-dialog-delete">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                <img src={blackLogo} className="logo-del" />
                            </div>
                        </div>
                        <br /><br />
                        <div className='row'>
                            <div className='col-14'>
                                <h4 className='head-card'>Deseas eliminar este usuario?</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <label className='data-title-del'>Nombre: </label>
                                <label className='data-info-del'>{data.nombre + ' ' + data.segundo_nom + ' ' + data.apellido_p + ' ' + data.apellido_m}</label>
                                <label className='data-title-del'>Correo: </label>
                                <label className='data-info-del'>{data.correo}</label>
                            </div>
                        </div>
                        <br /><br />
                        <div className='row'>
                                <div className='col-md-3'>
                                    <input className='link-close' type="button" onClick={closeModal} value="Cancelar" />
                                </div>
                                <div className='col-md-3 offset-md-6'>
                                    <button className='link-delete' onClick={handleSubmit}>Eliminar <FontAwesomeIcon icon={faTrash} /></button>
                                </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }

    

}

export default ModalUserDelete