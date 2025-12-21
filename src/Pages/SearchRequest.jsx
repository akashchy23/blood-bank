import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxios from '../hook/UseAxios';

const SearchRequest = () => {
    const [upazilas, setUpazilas] = useState([])
        const [districts, setDistricts] = useState([])
        const axiosInstance = useAxios()
        useEffect(() => {
            axios.get('./upazila.json')
                .then(res => setUpazilas(res.data.upazilas))
    
            axios.get('./district.json')
                .then(res => (setDistricts(res.data.districts)))
        }, [])

        const handleSearch=(e)=>{
            e.preventDefault()
            const bloodGroup = e.target.blood.value;
            const district = e.target.district.value;
            const upazila=e.target.upazila.value;
            
            axiosInstance.get(`/search-requests?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`)
            .then(res=>{
                console.log(res.data)
            })
        }
    return (
        <div>
           <form onSubmit={handleSearch} className='fieldset flex'>
            <select name="blood" defaultValue="Choose Blood Group" className="select">
                        <option disabled={true}>Choose Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>

                    </select>
                    {/* for district */}
                    <select name="district" defaultValue="Select your district" className="select">
                        <option disabled={true}>Select your district</option>
                        {
                            districts.map(d => <option value={d.name} key={ d.id}>{d.name}</option>)
                        }
                    </select>
                    {/* for upazila */}
                    <select name="upazila" defaultValue="Select your Upazila" className="select">
                        <option disabled={true}>Select your Upazila</option>
                        {
                            upazilas.map(u => <option value={u.name} key={u.id}>{u.name}</option>)
                        }
                    </select>
                    <button className="btn">Search</button>
           </form>
        </div>
    );
};

export default SearchRequest;