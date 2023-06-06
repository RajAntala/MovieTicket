import React from 'react';
import {useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom'

const Moviedetail = () => {


    let Nav = useNavigate();
    let [data, setData] = useState([]);
    let [active, setactive] = useState(true)

    let {id} =useParams();


    useEffect(() => {
        if (active) {
            fetch('http://localhost:3001/movie/'+id,{
            }).then(res => {
                res.json().then(record => {
                    let datarecord = [record]
                    setData(datarecord);
                    setactive(false)
                })
                .catch(err =>{
                    console.log(err);
                })
                
            }).catch(err => { console.log(err) })
        }
    },[data])

    return(
        <div>
            <div className='header'>
                <div className='container d-flex'>
                    <div className='d-flex flex-grow-1'>
                        <img width="250px" src={require ("../asset/img/logo-1.png")}/>  
                        <input type='serach' className='ms-2 m-5' placeholder='search for Movies'></input>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-danger m-5' onClick={(e)=>Nav("/home")}>Back Home</button>
                    </div>
                </div>
            </div>
            {data.map((v,i)=>{
                return (
                    <div className=''>
                        <div className='bg'>
                           <div className='container'>
                                <div className='d-flex'>
                                    <div className='pos-left'>
                                        <img className='poster-2' src={require ("../asset/img/"+v.image)}/>
                                        <div class="content-2">
                                            <p className='text-center'>{v.schedule}</p>
                                        </div>
                                    </div>
                                    <div className='detail mt-3'>
                                        <h2>{v.title}</h2>
                                        <h6><i class="bi bi-star-fill"></i> {v.rating}/10</h6>
                                        <div className='option d-flex mt-2 mb-3'>
                                            <p className='bg-white'>{v.type}</p>
                                            <p className='bg-white'>{v.language}</p>
                                        </div>
                                        <span>{v.duration}</span> / <span>{v.genre}</span> / <span>{v.release}</span><br/>
                                        <button className='btn btn-danger mt-5' onClick={(e)=>Nav('/booking/'+v.id)}>Book tickets</button>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Moviedetail;
