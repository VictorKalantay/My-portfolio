import React, {useState, useEffect} from 'react';
import useFetch from "./useFetch";


const useIP = () => {
    const [userIP, setUserIP] = useState({})
    const {get} = useFetch('https://geolocation-db.com/json/50ad4a90-fd5e-11ec-b463-1717be8c9ff1')


        useEffect(()=>{
            get('')
                .then(data => setUserIP(data))
        },[])
return userIP

};

export default useIP;
