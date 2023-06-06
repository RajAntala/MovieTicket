import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const Bookingdetail = () => {


    let Nav = useNavigate();
    let [data, setData] = useState([]);
    let [active, setactive] = useState(true)

    let { id } = useParams();


    useEffect(() => {
        if (active) {
            fetch('http://localhost:3001/movie/' + id, {
            }).then(res => {
                res.json().then(record => {
                    let datarecord = [record]
                    setData(datarecord);
                    setactive(false)
                })
                    .catch(err => {
                        console.log(err);
                    })

            }).catch(err => { console.log(err) })
        }
    }, [data])

    return (
        <body style={{backgroundColor:"rgb(150, 147, 147)"}}>
        <div>
            <div className='header'>
                <div className='container d-flex'>
                    <div className='d-flex flex-grow-1'>
                        <img width="250px" src={require ("../asset/img/logo-1.png")}/>
                        <input type='serach' className='ms-2 m-5' placeholder='search for Movies'></input>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-danger ms-2 m-5' onClick={(e) => Nav("/home")}>Back Home</button>
                    </div>
                </div>
            </div>
            {data.map((v, i) => {
                return (
                    <div>
                        <div className='header-2'>
                            <div className='container'>
                                <div className='booking'>
                                    <span className='fs-2 pe-1'>{v.title}</span> <span className='fs-3 pe-1'>({v.type}) - </span><span className='fs-3'>{v.language}</span><br />
                                </div>
                                <div>
                                    <span className=''>{v.genre}</span>
                                </div>
                            </div>
                        </div>
                        <div class="date-header">
                            <div className='date-header'>
                                <div className='movie-date'>
                                    <span className='m-0 p-0'>Sun</span><br/>
                                    <span className='m-0 p-0'>06</span><br/>
                                    <span className='m-0 p-0'>April</span>
                                </div>
                                <div className='movie-date'>
                                    <span className='m-0 p-0'>Mon</span><br />
                                    <span className='m-0 p-0'>07</span><br />
                                    <span className='m-0 p-0'>April</span>
                                </div>
                                <div className='movie-date'>
                                    <span className='m-0 p-0'>Thu</span><br />
                                    <span className='m-0 p-0'>08</span><br />
                                    <span className='m-0 p-0'>April</span>
                                </div>
                            </div>
                            <div className='movie-type'>
                                <span>{v.language}</span>-<span className='pe-1'>{v.type}</span>
                            </div>
                        </div>
                        <div className='movie-time'>
                            <div className='container-fluide'>
                                <hr className='container'/>
                                <div className='row'>
                                    <div className='col-md-4 d-flex'>
                                        <div>
                                            <a className='btn fs-5'><i class="bi bi-heart-fill"></i></a>
                                        </div>
                                        <div className='icon'>
                                            <p className='m-0'>INOX: VR Mall, surat</p>
                                            <a href='javascript:void(0)'><i class="bi bi-tablet"></i>M-Ticket</a>    
                                            <a href='javascript:void(0)'><i class="bi bi-cup-straw"></i>Food & Beverage</a>    
                                        </div>
                                    </div>
                                    <div className='col-md-8 p-0'>
                                        <div className='d-flex'>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>03:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>05:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>08:20 AM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>01:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>11:20 AM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className='container'/>
                                <div className='row '>
                                    <div className='col-md-4 d-flex'>
                                        <div>
                                            <a className='btn fs-5'><i class="bi bi-heart-fill"></i></a>
                                        </div>
                                        <div className='icon'>
                                            <p className='m-0'>Cineverse Cinema: Katargam, Surat</p>
                                            <a href='javascript:void(0)'><i class="bi bi-tablet"></i>M-Ticket</a>
                                            <a href='javascript:void(0)'><i class="bi bi-cup-straw"></i>Food & Beverage</a>    
                                        </div>
                                    </div>
                                    <div className='col-md-8 p-0'>
                                        <div className='d-flex'>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>01:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>04:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>08:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className='container'/>
                                <div className='row'>
                                    <div className='col-md-4 d-flex'>
                                        <div>
                                            <a className='btn fs-5'><i class="bi bi-heart-fill"></i></a>
                                        </div>
                                        <div className='icon'>
                                            <p className='m-0'>PVR: Rahul Raj, Surat</p>
                                            <a href='javascript:void(0)'><i class="bi bi-tablet"></i>M-Ticket</a>
                                            <a href='javascript:void(0)'><i class="bi bi-cup-straw"></i>Food & Beverage</a>    
                                        </div>
                                    </div>
                                    <div className='col-md-8 p-0'>
                                        <div className='d-flex'>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>01:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>04:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>08:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className='container'/>
                                <div className='row'>
                                    <div className='col-md-4 d-flex'>
                                        <div>
                                            <a className='btn fs-5'><i class="bi bi-heart-fill"></i></a>
                                        </div>
                                        <div className='icon'>
                                            <p className='m-0'>ROONGTA CINEMAS, Shyam Mandir Vesu: Surat</p>
                                            <a href='javascript:void(0)' className=''><i class="bi bi-tablet"></i>M-Ticket</a>
                                            <a href='javascript:void(0)' className=''><i class="bi bi-cup-straw"></i>Food & Beverage</a>    
                                        </div>
                                    </div>
                                    <div className='col-md-8 p-0'>
                                        <div className='d-flex'>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>01:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>04:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button className='movie-btn'>
                                                <p className='m-0'>08:20 PM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                            <button onClick={(e) => Nav('/ticket/'+v.id)} className='movie-btn'>
                                                <p className='m-0'>01:20 AM</p>
                                                <p className='m-0'>DOLB 7.1</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        </body>
    )
}

export default Bookingdetail;
