import axios from 'axios';
import { useRef, useState } from 'react'

export const Quiero = ({ setPosts }) => {

    const [message, setMessage] = useState('');
    const [publishSelected, setPublisSelected] = useState(true);


    const inputRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/posts', {
            message
        });

        console.table(data);

        inputRef.current.value = '';
        document.querySelector('.btn-close').click();

        const { data: newPosts } = await axios.get('/api/posts');
        setPosts(newPosts);

    }

    const handleSelectedOption = (option) => {
        setPublisSelected(option)
    }

    return (
        <>
            <div className='container mt-5'>
                <div className="row justify-content-md-center">

                    <div className="col-md-7 publishBox">
                        <div className="row p-3">
                            <div className="col-md-1">
                                <img className='avatar' src="/images/avatar.png" alt="avatar" />
                            </div>
                            <div className="col-md-11 inputDisabled">
                                <input type="text" className="form-control mt-1 rounded" placeholder="Quiero..." disabled />
                            </div>
                            <hr className='mt-2' />

                            <div className="row justify-content-md-center d-flex">
                                <div className="col-md-2 btnPublish cursor-pointer cursorPointer" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-pencil-square"></i> publicar</div>
                                <div className="col-md-2 btnCongratulations cursor-pointer cursorPointer"><i className="bi bi-x-diamond"></i> felicitar</div>
                                <div className="col-md-2 btnEvent cursor-pointer cursorPointer"><i className="bi bi-calendar3"></i> evento</div>
                                <div className="col-md-2 btnSell cursor-pointer cursorPointer"><i className="bi bi-shop"></i> vender</div>
                                <div className="col-md-2 btnAssistance cursor-pointer cursorPointer"><i className="bi bi-disc"></i> asistencia</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span><i className="bi bi-pencil-square"></i> publicar</span>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Tipo de Publicación</p>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                <label className="btn btn-outline-primary" onClick={() => handleSelectedOption(true)} htmlFor="btnradio1"><i className="bi bi-pencil-square"></i> Publicación</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                <label className="btn btn-outline-primary" onClick={() => handleSelectedOption(false)} htmlFor="btnradio2"><i className="bi bi-megaphone"></i> Anuncio Oficial</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                <label className="btn btn-outline-primary" onClick={() => handleSelectedOption(false)} htmlFor="btnradio3"><i className="bi bi-heart-fill"></i> Ofrecer Ayuda</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
                                <label className="btn btn-outline-primary" onClick={() => handleSelectedOption(false)} htmlFor="btnradio4"><i className="bi bi-search"></i> Objeto Perdido </label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" />
                                <label className="btn btn-outline-primary" onClick={() => handleSelectedOption(false)} htmlFor="btnradio4"><i className="bi bi-file-earmark-spreadsheet-fill"></i> Encuesta </label>
                            </div>

                            {publishSelected &&
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <strong>Mensaje</strong>

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group row mt-2">
                                                <div className="col-sm-12">
                                                    <input type="text" ref={inputRef} className="form-control" onChange={e => setMessage(e.target.value)} placeholder="Escriba acá ..." />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
