import React from 'react';
import axios from 'axios';


const ErrorTransalation = ({ output }) => {
    const [error, setError] = React.useState(null);

    const gettranslation = async () => {
        const options = {
            method: 'POST',
            url: 'https://google-translator9.p.rapidapi.com/v2',
            headers: {
                'x-rapidapi-key': 'a3ae99f4b7msh724ad38a828a47dp1b46d9jsnacce2f97172c',
                'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            data: {
                q: String(output.output),
                source: 'en',
                target: 'mr',
                format: 'text'
            }
        };

        try {
            const response = await axios.request(options);
            setError(response.data.data.translations[0].translatedText);
            console.log(response.data.data.translations[0].translatedText);
        } catch (error) {
            console.error(error);
        }
    }


    if (output != null) {
        gettranslation()
    }

    return (
        <div className='h-full'>
            <h1 className='text-[#107896] text-3xl font-bold bg-[#f0f0f0]'>
                Error Transalation
            </h1>
            <div className='w-full h-full flex'>
                <div className='w-1/2 border-t-2 border-r-2 border-gray-200 h-full '>
                    <h1 className='text-[#1496bb] text-xl font-bold'>
                        English
                    </h1>
                    <div className='text-start mx-4 text-[#ad2a1a] font-bold'>
                        {output?.output}
                    </div>
                </div>
                <div className='w-1/2 border-t-2 border-l-2 border-gray-200 h-full'>
                    <h1 className='text-[#1496bb] text-xl font-bold'>
                        Marathi
                        <div className='text-start mx-4 text-[#ad2a1a] font-bold'>
                            {error}
                        </div>
                    </h1>
                </div>
            </div>
        </div >

    )
}

export default ErrorTransalation