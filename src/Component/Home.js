import {useEffect,useState} from 'react';
import {useNavigate,NavLink} from 'react-router-dom'


const Home = () => {
    
    let Nav = useNavigate();
    let [data, setData] = useState([]);
    let [active, setactive] = useState(true)


    useEffect(() => {
        if (active) {
            fetch('http://localhost:3001/movie',{
            }).then(res => {
                res.json().then(rec => {
                    setData(rec);
                    console.log(rec);
                    setactive(false)
                })
                .catch(err =>{
                    console.log(err);
                })
                
            }).catch(err => {console.log(err)})
        }
    },[data])


    // return (
        
        return(
            <div>
                <div className='header'>
                    <div className='container d-flex'>
                        <div className='d-flex flex-grow-1'>
                            <img width="250px" src={require ("../asset/img/logo-1.png")}/>  
                            <input type='serach' className='ms-2 m-5' placeholder='search for Movies'></input>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-danger m-5' onClick={(e)=>Nav("/")}>Add Movie</button>
                        </div>
                    </div>
                </div>
                <div className='home'>
                    <div className='container'>
                        <div className='row'>
                            {data.map((v,i)=>{
                                return(
                                    <div className='col-md-3'>
                                        <div className='movie-item'>
                                            <NavLink to={'/detail/'+v.id} className="position-relative d-block">
                                                <img className='poster' src={require ('../asset/img/'+v.image)}/>
                                                <div class="content">
                                                    <span><i class="bi bi-star-fill"></i> {v.rating}/10</span>
                                                </div>
                                            </NavLink>
                                            <h6 className='text-start mb-0'>{v.title}</h6>
                                            <p className='text-start'>{v.type}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Home;
