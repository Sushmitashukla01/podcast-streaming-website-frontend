import '../styles/style.css';
import { useState} from 'react';
import RegistrantForm from './RegistrantForm';
import Axios from "axios"

function CreateRegistrant() {
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    const handleSubmit=()=>{
        const data={name:arr[0],email:arr[1],password:arr[2]}
        Axios.post("http://localhost:4000/registerRoute/create-registrant",data)
        .then((res)=>{
            if(res.status===200)
                alert("Registered successfully")
            else if(res.data==="exist"){
                alert("User already exists")
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
  return (
    <div className="site-section">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-md-5 my-5">
            <h3 className="mb-4 desc-1 fw-bold">Register</h3>
            <form onSubmit={handleSubmit} className="bg-white">
              <RegistrantForm getState={getState}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRegistrant;
