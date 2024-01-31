import React, { useState, useRef } from 'react';
import { DeviceService } from '../../services/device.service';

const audioMime = "audio/webm";
const videoMime = "video/webm";

const AudioForm = () => {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState(null);

    const onSuccess = stream => {
        setPermission(true)
        setStream(stream)
    }

    
    const onError = () => {
        alert('no permission or error')
    }

    const handleOnClick = () => {
      DeviceService.getMicrophonePermission(onSuccess, onError)
    }

    const startRecording = async () => {
        setRecordingStatus("recording");
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(stream, { type: audioMime });
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        mediaRecorder.current.start();
        let localAudioChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
           if (typeof event.data === "undefined") return;
           if (event.data.size === 0) return;
           localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
      };

      const stopRecording = () => {
        setRecordingStatus("inactive");
        //stops the recording instance
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
          //creates a blob file from the audiochunks data
           const audioBlob = new Blob(audioChunks, { type: audioMime });
          //creates a playable URL from the blob file.
           const audioUrl = URL.createObjectURL(audioBlob);
           setAudio(audioUrl);
           setAudioChunks([]);
        };
      };
    return (
        <div>
            <h2>Audio Recorder</h2>
            <main>
                <div >
                    {!permission ? (
                        <button onClick={handleOnClick} type="button">
                            Get Microphone
                        </button>
                    ) : null}
                    {permission && recordingStatus === "inactive" ? (
                    <button onClick={startRecording} type="button">
                        Start Recording
                    </button>
                    ) : null}
                    {recordingStatus === "recording" ? (
                    <button onClick={stopRecording} type="button">
                        Stop Recording
                    </button>
                    ) : null}
                </div>
                {audio ? (
            <div className="audio-container">
                <audio src={audio} controls></audio>
                <a download href={audio}>
                    Download Recording
                </a>
            </div>
            ) : null}
            </main>
        </div>
    );
};

export default AudioForm;
