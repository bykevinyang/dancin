const beginning_phrases = [
    "No one is around to help",
    "Life is hard, life is stressful",
    "I need peace and tranquility",
    "I don't want to be alone",
]

const beatdrop_phrases = [
    "You're the boss!",
    "I don't have to prove myself to anyone",
    "Surround yourself with those who love you",
    "Don't let yesterday take up too much of today",
]

let beatdrop_time = 32.5

let phraseIndex = 0

let phrase_delay_time = 6000

const beatdrop_saturation = 2

const start = () => {
    const audio = document.createElement('audio')
    audio.src = 'https://cloud-gi6pwmcsl-hack-club-bot.vercel.app/0aaron_smith_-_dancin__krono_remix_-8pm_koguqpm.mp3'
    audio.loop = true
    document.querySelector('.container').appendChild(audio)
    audio.style = 'visibility: hidden;'
    audio.play()

    // toggle audio on click
    const toggleAudio = () => {
        if (audio.volume == 0) {
            audio.volume = 1
        } else {
            audio.volume = 0
        }
    }

    // const toggleImageSaturation = () => {
    //     document.getElementById('img').style.filter = 'saturate(2)'
    // }

    const audioState = () => {
        if (audio.volume == 0) {
            return 'off'
        } else {
            return 'on'
        }
    }

    const playbackState = () => {
        if (audio.currentTime <= beatdrop_time) {
            return 'beforeBeatdrop'
        } else {
            return 'afterBeatdrop'
        }
    }

    const updatePhrase = () => {
        if (audio.currentTime <= beatdrop_time) {
            phraseIndex = (phraseIndex + 1) % beginning_phrases.length
            document.querySelector('.phrase-box').innerText = beginning_phrases[phraseIndex]
            img[0].style.WebkitFilter = 'saturate(0)'
        } else {
            // var img = document.getElementsByTagName('img')
            // img[0].style.WebkitFilter = `saturate(${beatdrop_saturation})`
            // img[0].style.filter = `saturate(${beatdrop_saturation})`
            phraseIndex = (phraseIndex + 1) % beatdrop_phrases.length
            document.querySelector('.phrase-box').innerText = beatdrop_phrases[phraseIndex]
                phrase_delay_time = 1000
        }
    }

    document.querySelector('.begin').remove()

    document.querySelector('body').classList.add('colored-background')

    const danceImage = document.createElement('img')
    //   danceImage.src = 'https://cloud-mpvs8batk-hack-club-bot.vercel.app/02x-speed-ezgif.com-gif-maker.gif'
    danceImage.src = 'dancin_very_slow_flow.gif'
    document.querySelector('.container').appendChild(danceImage)

    const phraseBox = document.createElement('p')
    phraseBox.classList.add('phrase-box')
    phraseBox.classList.add('flicker-text')
    document.querySelector('.container').appendChild(phraseBox)
    phraseBox.innerText = ' '

    setTimeout(() => {
        phraseBox.innerText = beginning_phrases[phraseIndex]
        setInterval(updatePhrase, phrase_delay_time)
    }, 1000)

    beatdrop = setTimeout(() => {
        // newImage = document.createElement('img')
        danceImage.src = 'dancin_slow_flow.gif'
        danceImage.style.WebkitFilter = `saturate(${beatdrop_saturation})`
        danceImage.style.filter = `saturate(${beatdrop_saturation})`
        // danceImage.replaceWith(newImage)
    }, beatdrop_time * 1000)
    danceImage.onclick = toggleAudio
}

// const updatePhrase = () => {
//   phraseIndex = (phraseIndex + 1) % beginning_phrases.length
//   document.querySelector('.phrase-box').innerText = beginning_phrases[phraseIndex]
// }

document.onload = () => {
    if (window.location.hash != '') {
        start
    }
}
document.querySelector('.begin').onclick = start
