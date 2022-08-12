import { useEffect, useState } from 'react';
import { OnResultFunction, QrReader } from 'react-qr-reader';
import './App.css';

function App() {
    const [cameraOn, setCameraOn] = useState<{ isMobile: boolean, isActive: boolean }>({ isMobile: false, isActive: false });
    const [scanResultWebCam, setScanResultWebCam] = useState<string>('')
    const [isOpenCamera, setIsOpenCamera] = useState<boolean>(false)
    const [mediaStream, setMediaStream] = useState<MediaStream>();

    const CAPTURE_OPTIONS = {
        audio: false,
        video: { facingMode: "environment" },
    };

    useEffect(() => {
        async function enableStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(CAPTURE_OPTIONS);
                setMediaStream(stream)
            } catch (err) {
                alert('Camera not found')
            }
        }

        if (!mediaStream) {
            enableStream();
        } else {
            return function cleanup() {
                mediaStream.getTracks().forEach(track => {
                    track.stop();
                });
            }
        }

    }, [mediaStream]);

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


    const isValidURL = (input: string) => {
        var res = input.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };


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
                    onResult={(result, error) => {
                        if (!!result) {
                            const link = result?.getText()
                            alert(link)
                            if (isValidURL(link)) {
                                // window.open(result?.getText, '_self');
                                alert('the link is ' + link)
                            }
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    videoStyle={{ width: '100%' }}
                    constraints={{
                        facingMode: "environment"
                    }} />
            }

        </div>
    );
}

export default App;
function useEffects(arg0: () => void) {
    throw new Error('Function not implemented.');
}

