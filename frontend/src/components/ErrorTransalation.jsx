import React from 'react';
import axios from 'axios';


const ErrorTransalation = () => {

    const gettranslation = async () => {
        const options = {
            method: 'POST',
            url: 'https://google-translator9.p.rapidapi.com/v2',
            headers: {
                'x-rapidapi-key': '1501c869camsh258e455261af39ap1a132ajsn833031d12302',
                'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            data: {
                q: 'hello world',
                source: 'en',
                target: 'mr',
                format: 'text'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            ErrorTransalation
            <button onClick={() => gettranslation()}>Translate</button>
        </div>

    )
}

export default ErrorTransalation