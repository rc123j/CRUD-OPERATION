import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [name , setName] = useState('');
    const [email, setEmail]= useState('');

    const history = useNavigate();

const header = {"Acess-control-Allow-Origin": "*"};

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log('clicked');
     axios.post(
        'https://64f38030edfa0459f6c6a218.mockapi.io/crud-youtube',
        {name:name ,
         email:email,
          header}
     )
     .then(()=> {
        history("/read");
     })
    

    }


  return (
    <>
    {/* {bootstrap form} */}
    <h2>CREATE-PAGE</h2>
    <form>

    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text"
     className="form-control" 
     onChange={(e)=> setName(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control" 
     aria-describedby="emailHelp"
     onChange={(e)=> setEmail(e.target.value)}
     />
    <div  className="form-text"></div>
  </div>
 
 
  <button type="submit"
   className="btn btn-primary"
   onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}

export default Create;

//press rafce to create boiler plate of react component