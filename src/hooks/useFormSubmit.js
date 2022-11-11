import React, {useEffect} from 'react';
import useFetch from "./useFetch";

const useFormSubmit = () => {
    const {post} = useFetch('https://62fe1cf5a85c52ee48300431.mockapi.io/')

    const SendFeedback = (url, name, phone, message) =>{
            post(url, {
                name,
                phone,
                message
            })
               .then(data => console.log(`Data with your feedback has been sent(this is required for analytics and will not be used anywhere)`))
    };

        return {SendFeedback}
    }


export default useFormSubmit;
