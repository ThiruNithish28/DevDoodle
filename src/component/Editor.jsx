import React from "react"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-darker.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'


function Editor (props){
    const {
        language,
        displayName,
        icon,
        value,
        onChange
    } = props;

    function handleChange(editor, data,value){
        onChange(value);
    }
    return(
        <>

            <div className="code-editior__container">
                <div className="code-editior__title"><img src={icon} alt="icon"/>{displayName}</div>
               
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    className="code-mirror-wrapper"
                    options={{
                        lineWrapping: true,
                        mode: language,
                        lint :true,
                        lineNumbers: true,
                        theme:'material-darker'
                    }}       
                />
               
            </div>
        </>
    );
}

export default Editor