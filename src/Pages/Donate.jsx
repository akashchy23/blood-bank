import React, { use } from 'react';
import useAxios from '../hook/UseAxios';
import { AuthContext } from '../Provider/AuthProvider';

const Donate = () => {
    const axiosInstance = useAxios()
    const {user}=use(AuthContext)
   
    const handleCheckOut = e=>{
        e.preventDefault()
        const donateAmount = e.target.donateAmount.value
        const donorEmail = user?.email
        const donorName = user?.displayName
        const formData = {
            donateAmount,
            donorEmail,
            donorName
        }
  
        axiosInstance.post('/create-payment-checkout',formData)
         .then(res=>{
            console.log(res.data)
            window.location.href = res.data.url
         })
    }
    return (
        <div>
            <form onSubmit={handleCheckOut} className='flex justify-center items-center min-h-screen gap-4'>
                <input name='donateAmount' type="text" placeholder="Type here" className="input" />
                <button type="submit" className='btn btn-primary'>Donate</button>
            </form>
        </div>
    );
};

export default Donate;