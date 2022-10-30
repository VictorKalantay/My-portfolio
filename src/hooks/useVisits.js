import React, {useState, useEffect} from 'react';
import useIP from "./useIP";
import useFetch from "./useFetch";

const useVisits = () => {

    const userIP = useIP()
    const [visits, setVisits] = useState(0)
    const [uniqueVisits, setUniqueVisits] = useState(1)
    const {post, get} = useFetch('https://62fe1cf5a85c52ee48300431.mockapi.io/')


    useEffect(() => {
        if (Object.keys(userIP).length !== 0) {
            let {country_code, country_name, city, IPv4} = userIP
            const postData = () => {
                post('portfolioIP', {
                    country_code,
                    country_name,
                    city,
                    ip: IPv4,
                    date: Date.now()
                })
                    .then(data => console.log(`Data with your IP has been sent(this is required for analytics and will not be used anywhere)`))
            }

            get('portfolioIP')
                .then(data => {
                    if (data.length !== 0) {
                        let sortedDataArr = data.filter(item =>
                            item.ip === IPv4
                        )
                        if (sortedDataArr.length > 0) {
                            if ((sortedDataArr[sortedDataArr.length - 1].date - Date.now()) > 43200000) {
                                postData()
                            }
                        } else postData()
                        setVisits(data.length)

                        if (data.length > 1) {
                            let seen = {};
                            let newArr = data.filter(item =>  {
                                let k = item.ip
                                return seen.hasOwnProperty(k) ? false : (seen[k] = true);
                            })

                            setUniqueVisits(newArr.length);
                        }


                    } else {
                        postData()
                        setVisits(data.length + 1)
                    }
                })
        }
    }, [userIP])




    return {visits, uniqueVisits}
};

export default useVisits;
