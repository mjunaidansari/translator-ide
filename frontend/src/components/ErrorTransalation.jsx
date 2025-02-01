import React from 'react';
import axios from 'axios';


const ErrorTransalation = () => {

    const dataa = "main.cpp: In function 'int main()':\nmain.cpp:2:73: error: expected ';' before '}' token\n    2 |  using namespace std; int main() { int num = 420; cout << num; return 69 }\n      |                                                                         ^~\n      |                                                                         ;\nchmod: cannot access 'a.out': No such file or directory\n";

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
                q: "main.cpp: In function 'int main()':\nmain.cpp:2:73: error: expected ';' before '}' token\n    2 |  using namespace std; int main() { int num = 420; cout << num; return 69 }\n      |                                                                         ^~\n      |                                                                         ;\nchmod: cannot access 'a.out': No such file or directory\n",
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
                        {dataa}
                    </div>
                </div>
                <div className='w-1/2 border-t-2 border-l-2 border-gray-200 h-full'>
                    <h1 className='text-[#1496bb] text-xl font-bold'>
                        Marathi
                    </h1>
                </div>
            </div>
        </div >

    )
}

export default ErrorTransalation