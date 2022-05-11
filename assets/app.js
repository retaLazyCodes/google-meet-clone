const addLocalVideo = async () => {
    const $localVideo = document.getElementById("local-video")
    const track = await Twilio.Video.createLocalVideoTrack()
    $localVideo.appendChild(track.attach())

}


addLocalVideo()