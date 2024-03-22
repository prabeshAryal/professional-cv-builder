import resumeLogo from '../assets/cover-letter.png'
import cvLogo from '/resume-9874.svg'
import '../App.css'

function App() {
    return (
        <>
            <div className='tabs'>
                <a href="/make-a-cv">
                    <img src={cvLogo} className="logo" alt="Vite logo" />
                    <p>CV</p>
                </a>
                <a href="/lets-write-cover-letter">
                    <img src={resumeLogo} className="logo resume" alt="React logo" />
                    <p>Resume</p>
                </a>
            </div>
            <h1>Start Your Professional Journey !</h1>
        </>
    )
}

export default App
