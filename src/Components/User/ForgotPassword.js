import React,{useState}from "react";
import {toast} from "react-toastify";
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { userActions } from "../../Store/User/user-slice";
import { forgotPassword } from "../../Store/User/user-action";

const ForgotPassword=()=>{
    const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 

  const submitHandler = async(e) => {
    e.preventDefault();
    

useEffect(()=>{
    if(errors){
        toast.error(errors);
        dispatch(userActions.clearErrors());
    }
    else if(success)
    {
        toast.success("Password has been updated ");
        navigate("/updatepassword");
        dispatch(userActions.getPasswordSuccess(false));
    }
},[errors,dispatch,navigate,success]);
  return (
    <div className="row wrapper">
        <div div className="col-10 col-lg-5">
                <form onSubmit={submitHandler}>
                    <h1 className="password_title">Forgot Password</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">
                        Enter Email
                        </label>
                        <input
                        type="email"
                        id="email_field"
                        className="form-control"
                        value={email}
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                        /> 
                    </div>
                    <button type="submit" className="btn btn-primary"> submit</button>

                </form>
            
            { message &&
                <div className="mt-10 bg-green-700 mx-auto w-2/5 p-3 rounded-lg shadow-lg text-white text-lg">
                <p>Password reset link has been sent to {email}</p>
                </div>
            }
            {
                error && <div className="mt-10 bg-red-700 mx-auto w-22/5 p-3 rounded-lg shadow-lg text-white text-lg">
                    <p>
                        {error}
                    </p>
                 </div>
            }
        </div>
    </div>
  );
}
}
export default ForgotPassword;

