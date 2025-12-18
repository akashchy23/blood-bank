import React, { use, useEffect, useState } from 'react';
import useAxios from '../../hook/UseAxios';
import { AuthContext } from '../../Provider/AuthProvider';

const ManageProduct = () => {

    const [products, setProducts] = useState([])
    const axiosInstance = useAxios()
    const {user}=use(AuthContext)

    useEffect(() => { 
        axiosInstance.get(`/manager/products/${user?.email}`)
        .then(res=>{
            setProducts(res.data)
        })
        .catch(err=>console.log(err))
    }, [axiosInstance, user?.email])
    console.log(products)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Price</th>
                        <th>Payment Method</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                   {
                    products.map(product=>  <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={product?.images}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{product?.productName}</div>
                                    
                                </div>
                            </div>
                        </td>
                        <td>
                        {product?.price}
                        </td>
                        <td>{product?.paymentOption}</td>
                        <th className='flex mx-1'>
                            <button className="btn btn-ghost btn-xs">details</button>
                            <button className="btn btn-ghost btn-xs">Edit</button>
                        </th>
                    </tr>)
                   }

                </tbody>


            </table>
        </div>
    );
};

export default ManageProduct;