import { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './App.css';

function App(this: any) {
    const [cameraOn, setCameraOn] = useState<{ isMobile: boolean, isActive: boolean }>({ isMobile: false, isActive: false });
    const [scanResultWebCam, setScanResultWebCam] = useState<any>()
    const [isOpenCamera, setIsOpenCamera] = useState<boolean>(false)

    const CAPTURE_OPTIONS = {
        audio: false,
        video: { facingMode: "environment" },
    };

    useEffect(() => {
        async function enableStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: 'environment',
                        width: {
                            min: 1280
                        },
                        height: {
                            min: 720
                        }
                    }
                });
                setCameraOn({ isMobile: true, isActive: true })
            } catch (err) {
                // alert('Camera not found')
            }
        }
        enableStream()
    }, []);

    function setQrActive() {
        alert('clicked')
        setIsOpenCamera(!isOpenCamera);
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
            alert(data)
            window.open(data, '_self');
        }
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
                isOpenCamera &&
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

