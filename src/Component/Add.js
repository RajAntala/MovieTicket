import {useState} from 'react';
import '../asset/style.css'
import {useNavigate} from 'react-router-dom'
    

const Add = () => {

    let Nav = useNavigate();
    let [state, setState] = useState({
        title:"", image:"",type:"", language:"", select:[], duration:"",certificate:"",release:"",rating:"",schedule:"",directore:"",about:""
    });

    let [genre, setGenre] = useState([]);

    const handleInputData = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name,value)

        if(name == 'select' && e.target.checked == false){
            const index = genre.indexOf(e.target.value);
            genre.splice(index, 1)
        }
        else if(name == 'select'&& e.target.checked == true){
            genre.push(e.target.value)
        }
        console.log(genre);

        setState({
            ...state, [name] : value,genre
        })
    }
    const submitData = (e) =>{
        e.preventDefault();
        fetch("http://localhost:3001/movie",{
            method : 'POST',
            body : JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>{console.log("data inserted");})
        .catch(err=>{console.log("data not found");})
        
    }

    const load = (e) =>{
        window.location.reload();
    }

    return (
       <div className='add'>
        <h1 className='text-white'>Add Movies Details </h1>
        <hr className='text-white'/>
         <div className='main'>
            <form className='box' method="post" onSubmit={(e)=>submitData(e)}>
                <p>Title: <input type='text' name='title' onChange={(e)=>handleInputData(e)}/></p>
                <p>Image: 
                    <select name='image' onChange={(e)=>handleInputData(e)}>
                        <option>Kgf-1.jpeg</option>
                        <option>RRR-2.jpg</option>
                        <option>Tmkoc-3.jpg</option>
                        <option>Mirzapur-4.jpg</option>
                        <option>Brahmastra.jpg</option>
                        <option>yash.jpg</option>
                        <option>johnny.jpg</option>
                        <option>blackpanther.jpeg</option>
                    </select>
                </p>
                <p>Type:  
                    <select name='type' onChange={(e)=>handleInputData(e)}>
                        <option></option>
                        <option>2D</option>
                        <option>3D</option>
                        <option>Blu-ray</option>
                        <option>4K</option>
                    </select>
                </p>
                <p>Language: 
                    <select name='language' onChange={(e)=>handleInputData(e)}>
                        <option></option>
                        <option>Hindi</option>
                        <option>English</option>
                        <option>Marathi</option>
                        <option>Telungu</option>
                    </select>
                </p>
                <p>Genre: 
                    <input name='select' type='checkbox' value="Actions-" className='ms-2' onChange={(e)=>handleInputData(e)}/>Actions
                    <input name='select' type='checkbox' value="Drama-" className='ms-2' onChange={(e)=>handleInputData(e)}/>Drama
                    <input name='select' type='checkbox' value="Romentic-" className='ms-2' onChange={(e)=>handleInputData(e)}/>Romentic
                    <input name='select' type='checkbox' value="Thriller-" className='ms-2' onChange={(e)=>handleInputData(e)}/>Thriller
                </p>
                <p>Duration: <input type='text' name='duration' onChange={(e)=>handleInputData(e)}/></p>
                <p>Certificate: <input type='text'name='certificate' onChange={(e)=>handleInputData(e)}/></p>
                <p>Release date: <input type='date' name='release' onChange={(e)=>handleInputData(e)}/></p>
                <p>Rating: <input type='number' name='rating' onChange={(e)=>handleInputData(e)}/></p>
                <p>Schedule: 
                    <select name='schedule' onChange={(e)=>handleInputData(e)}>
                        <option></option>
                        <option>Coming soon</option>
                        <option>In cinema</option>
                    </select>
                </p>
                <p>Directore name: <input type='text' name='directore' onChange={(e)=>handleInputData(e)}/></p>
                <p>About movie: <textarea placeholder='enter plots' name='about' onChange={(e)=>handleInputData(e)}/></p>
                <div className='btn-1'>
                    <button type='submit' onClick={(e)=>load(e)} className='btn btn-primary m-1'>Add movie</button>
                    <button className='btn btn-primary m-1' onClick={(e)=>Nav("/home")}>View movie</button>
                </div>
            </form>
        </div>
       </div>
    );
}

export default Add;
