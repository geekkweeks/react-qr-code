import { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './App.css';

function App() {
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
        if (cameraOn.isMobile) {
            setCameraOn({ isMobile: true, isActive: true });
        }
    }

    const handleErrorWebCam = (error: any) => {
        console.log(error);
    }

    const handleScanWebCam = (result: any) => {
        if (result) {
            setScanResultWebCam(result);
        }
    }

    return (
        <div className="App">
            <button className="" onClick={setQrActive}>
                Click me
            </button>
            {
                cameraOn.isActive && cameraOn.isMobile &&
                <QrReader
                    scanDelay={300}
                    videoStyle={{ width: '100%' }}
                    // error={handleErrorWebCam}
                    onResult={(result, error) => {
                        if (!!result) {
                            handleScanWebCam(result as any);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }} constraints={{ facingMode: 'user' }} />
            }

        </div>
    );
}

export default App;
function useEffects(arg0: () => void) {
    throw new Error('Function not implemented.');
}

