
const getCameraPermission = async (onSuccess, onError) => {
    if ("MediaRecorder" in window) {
        try {
            const streamData = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true,
            });
            onSuccess(streamData)
        } catch (err) {
            onError()
            console.log(err.message);
        }
    } else {
        onError()
    }
};

const getMicrophonePermission = async (onSuccess, onError) => {
    if ("MediaRecorder" in window) {
        try {
            const streamData = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            onSuccess(streamData)
        } catch (err) {
            onError()
            console.log(err.message);
        }
    } else {
        onError()
    }
};

export const DeviceService = {
    getMicrophonePermission,
    getCameraPermission
}