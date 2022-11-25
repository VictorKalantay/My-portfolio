import React, {useState, useEffect} from 'react';
import useFetch from "./useFetch";


const useIP = () => {
    const [userIP, setUserIP] = useState({})
    const {get} = useFetch('https://geolocation-db.com/json/50ad4a90-fd5e-11ec-b463-1717be8c9ff1')


        useEffect(()=>{
            get('')
                .then(data => setUserIP(data))
                .catch(error => {
                    setUserIP({"country_code":"UA","country_name":"Ukraine","city":"Error get request to IP","postal":"00000","latitude":49.823,"longitude":36.0507,"IPv4":"1.1.1.1","state":"Error get request to IP"})
                    console.log(error)})
        },[])
return userIP

};

export default useIP;
