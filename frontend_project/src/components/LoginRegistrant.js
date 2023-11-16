import '../styles/style.css';
import { useState,useNavigate } from 'react';
import axios from "axios"

function LoginRegistrant(){
    const history=useNavigate();

    const[name,setName]=useState("");
    const[password,setPassword]=useState("");

    async function handleClick(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:4000/login-registrant",{
                name,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/main",{state:{id:name}})
                }
                else if(res.data==="notexist"){
                    alert("Please Register")
                }
            })
            .catch(event=>{
                alert("Invalid Login")
                console.log(event);
            })

        }
        catch(event){
            console.log(event);
        }
    }

    return (
        <div className="site-section">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-md-5 my-5 mx-3 desc-1">
                <h3 className="fw-bold mb-4">Login</h3>
                <form action="#" method="post" className="bg-white">
                  <div className="">
                    <div className="form-group row">
                      <div className="col-md-12 mb-3">
                        <label htmlFor="c_uname" className="text-black">Username <span style={{ color: '#A7727D' }}>*</span></label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="c_uname" 
                        name="c_uname"
                        onChange={(event)=> setName(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12 mb-3">
                        <label htmlFor="c_password" className="text-black">Password <span style={{ color: '#A7727D' }}>*</span></label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="c_password" 
                        name="c_password" 
                        onChange={(event)=> setPassword(event.target.value)}
                        />
                      </div>
                    </div>
    
                    <div className="form-group row">
                      <div className="col-lg-12 mb-4">
                        <input type="submit" onClick={handleClick} className="btn login navlink btn-lg" value="Login" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

export default LoginRegistrant;