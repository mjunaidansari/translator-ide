import React from 'react'
import EditorScreen from './EditorScreen'

const IDE = () => {

	const [output, setOutput] = React.useState(null)

    return (
        <div className='w-full'>
            <EditorScreen setOutput={setOutput}/>
        </div>
    )
}

export default IDE
