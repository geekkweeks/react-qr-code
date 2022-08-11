import { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './App.css';

function App(this: any) {
    const [cameraOn, setCameraOn] = useState<{ isMobile: boolean, isActive: boolean }>({ isMobile: false, isActive: false });
    const [scanResultWebCam, setScanResultWebCam] = useState<any>()
    useEffect(() => {
        async function enableStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setCameraOn({ isMobile: true, isActive: true })
            } catch (err) {
                alert('Camera not found')
            }
        }
        enableStream()
    }, []);

    function setQrActive() {

        alert('clicked')
        if (cameraOn.isMobile) {
            setCameraOn({ isMobile: true, isActive: true });
        }
        setCameraOn({ isMobile: true, isActive: true });
    }

    const handleErrorWebCam = (error: any) => {
        console.log(error);
    }

    const handleScanWebCam = (result: any) => {
        if (result) {
            setScanResultWebCam(result);
        }
    }

    const handleError = (err: any) => {
        console.error(err)
    }

    const handleScan = (data: any) => {
        if (data) {
            setScanResultWebCam(data)
        }
        alert(data)
    }

    return (
        <div className="App">
            <br />
            <br />
            <br />
            <br />
            <button className="" onClick={setQrActive}>
                Click me
            </button>
            {
                cameraOn.isActive && cameraOn.isMobile &&
                <QrReader
                    scanDelay={300}
                    // error={handleError}
                    onResult={handleScan}
                    videoStyle={{ width: '100%' }}
                    constraints={{
                        facingMode: { exact: "user" }
                    }} />
            }

        </div>
    );
}

export default App;
function useEffects(arg0: () => void) {
    throw new Error('Function not implemented.');
}

