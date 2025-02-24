import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

import compileServices from '../services/compileServices';

const EditorScreen = ({ setOutput }) => {
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
    );

    const run = async (event) => {
        event.preventDefault()

        const output = await compileServices.compile(code)
        setOutput(output)
    }


    return (
        <div className='w-1/2 border-2 border-gray-200 h-full'>
            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
            />
            <button className="bg-green-500 px-6 py-2 rounded text-white cursor-pointer" onClick={run}>
                Run
            </button>
        </div>
    )
}

export default EditorScreen;
