import React from 'react'
import EditorScreen from './EditorScreen'
import ErrorTransalation from './ErrorTransalation'
import Meaning from './Meaning'

const IDE = () => {

    const [output, setOutput] = React.useState(null)

    return (
        <div className='w-full h-[100vh]'>
            <div className='flex w-full h-[60vh]'>
                <EditorScreen setOutput={setOutput} />
                <Meaning />
            </div>
            <div className='w-full h-[40vh]'>
                <ErrorTransalation output={output} />
            </div>
        </div>
    )
}
export default IDE;
