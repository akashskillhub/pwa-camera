import {
    startBtn,
    captureBtn,
    closeBtn,
    player,
    switchBtn,
    canvas,
    restartBtn,
} from "./constants.js"

import { openCamera, closeCamera, changeMode } from "./camera.js"


switchBtn.addEventListener("click", () => {
    changeMode()
    player.classList.add("d-none")
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }

    openCamera()

})
startBtn.addEventListener("click", () => {
    openCamera()

})
captureBtn.addEventListener("click", () => {

    const preview = canvas.getContext("2d")
    preview.drawImage(player, 0, 0, canvas.height, canvas.width)
    canvas.classList.remove("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    restartBtn.classList.remove("d-none")
})
closeBtn.addEventListener("click", () => {
    closeCamera()
})
restartBtn.addEventListener("click", () => {
    closeCamera()
    openCamera()
})
