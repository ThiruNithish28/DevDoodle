import { useState } from 'react'
import JSZip from 'jszip'
import saveAs from 'file-saver'
import Header from './component/Header'
import Editor from './component/Editor'

// for the drag the editor to desire heigth
import {ResizableBox} from 'react-resizable'
import "react-resizable/css/styles.css";

// icons
import htmlIcon from './assets/svg/html-icon.svg'
import cssIcon from './assets/svg/css-icon.svg'
import jsIcon from './assets/svg/js-icon.svg'

//style
import './assets/css/style.css'

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const sourceDoc = `
    <html>
    <style>${css}</style>
    <body>${html}</body>
    <script>${js}</script>
    </html>
    `;

  const downloadZip = (projectName) => {
    const zip = new JSZip();

    //add files to zip
    zip.file("index.html", html);
    zip.file("index.css", css);
    zip.file("script.js", js);

    // generate zip
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${projectName}.zip`);
    })
  }

  return (
    <>
    
      <Header download={downloadZip} />
      <main className='main d-flex flex-column'>
        <ResizableBox className="plane-top d-flex "
                width={Infinity} 
                height={400} // Initial height
                minConstraints={[100, 100]} // Minimum width and height
                maxConstraints={[Infinity, 500]} // Maximum width and height
                resizeHandles={['s']} // Resize handle position ('s' means bottom side)
            >
       
          <Editor 
            displayName='html' 
            icon={htmlIcon}
            value={html} 
            onChange={setHtml} 
            language='xml' 
          />
     
          <Editor  
            displayName='css' 
            icon={cssIcon}
            value={css} 
            onChange={setCss} 
            language='css' 
          />
          <Editor 
            displayName='js' 
            icon={jsIcon}
            value={js} 
            onChange={setJs} 
            language='javascript' 
          />
           </ResizableBox>

        <div className="output">

          <iframe 
            srcDoc={sourceDoc} 
            title="output" 
            sandbox="allow-scripts" 
            height="100%" 
            width="100%" 
            frameborder="0" 
          />
        </div>
      </main>

    </>
  )
}

export default App
