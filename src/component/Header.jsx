import DownloadIcon from '../assets/svg/download-icon.svg'
import newIcon from '../assets/svg/new-icon.svg'
import logo from '../assets/devdoodle-logo.png'

export default function Header({download}){
    const DownloadHandler=()=>{
        const projectName = prompt("enter the Project Name :" , "MyProject" );
        if(projectName){
            download(projectName);
        }
    }
    return (
        <header className="p-2">
            <nav className="nav d-flex justify-content-between">
                <img src={logo} alt="logo" className='logo' /><h1>DevDoogle</h1>
                <div className="options d-flex gap-3 p-2" >
                    <button className="icon-btn btn btn-dark"><img src={newIcon} alt="icon" />new</button>
                    <button className="icon-btn btn btn-dark"onClick={DownloadHandler}><img src={DownloadIcon} alt="download-icon" />download</button>
                </div>
            </nav>
        </header>
    );
}