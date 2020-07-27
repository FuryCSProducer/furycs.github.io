Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUrl('/face_detect/models'),
])

function initVideo(){
    navigator.mediaDevices.getUserMedia({
        video : {}
    })
    .then((stream) => {
        video.scrObject = stream;
    })
    .catch((err) => {
        console.log(err)
    });
}

initVideo();