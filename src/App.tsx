import React from 'react'
import reactLogo from './assets/react.svg'
import 'milligram/dist/milligram.min.css'
import './App.css'

function App() {
    const [url, setUrl] = React.useState('')

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Iframe testing</h1>
            <fieldset>
                <input placeholder="Typing the url" name="url" onChange={(e) => setUrl(e.target.value)} />
            </fieldset>
            <br />
            <iframe
                style={{
                    border: '0.425rem solid #fed26a',
                    borderRadius: '1rem'
                }}
                src={url}
                width={900}
                height={800}
            ></iframe>
        </div>
    )
}

export default App
