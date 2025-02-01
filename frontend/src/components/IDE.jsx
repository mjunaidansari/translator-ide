import React from 'react'
import EditorScreen from './EditorScreen'
import ErrorTransalation from './ErrorTransalation'
import Meaning from './Meaning'

const IDE = () => {
    return (
        <div className='w-full h-[100vh]'>
            <div className='flex w-full h-[60vh]'>
                <EditorScreen />
                <Meaning />
            </div>
            <div className='w-full h-[40vh]'>
                <ErrorTransalation />
            </div>
        </div>
    )
}
export default IDE