import { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        async function enableStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                alert('Camera found')
            } catch (err) {
                alert('Camera not found')
            }
        }
        enableStream()
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
function useEffects(arg0: () => void) {
    throw new Error('Function not implemented.');
}

