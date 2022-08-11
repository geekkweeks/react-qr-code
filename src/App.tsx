import { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        async function enableStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                alert('Camera found')
            } catch (err) {
                alert('Camera not found')
            }
        }
        enableStream()
    }, []);
    return (
        <div className="App">
            <button className="">Click me</button>
        </div>
    );
}

export default App;
function useEffects(arg0: () => void) {
    throw new Error('Function not implemented.');
}

