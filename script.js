const textInput = document.getElementById("text")
const speedInput = document.getElementById("speed")
const playButton = document.getElementById("play-button")
const pauseButton = document.getElementById("pause-button")
const stopButton = document.getElementById("stop-button")

playButton.addEventListener("click" , () => {
    playText(textInput.value)
})

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speedInput.value
    utterance.addEventListener("end" , () => {
        textInput.disabled = false
    })
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}