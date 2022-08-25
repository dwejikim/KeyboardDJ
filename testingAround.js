// console.log('Loaded here');
// document.addEventListener('DOMContentLoaded', () => {
    //const audioSampleFilePath = "https://github.com/billums123/KeyboardDJ/blob/main/assets/"
    // console.log('You made it in!');
    //create backtrack tag
    const extensionURL = chrome.runtime.getURL(
        './assets/'
        );


    let backTrack = document.createElement("audio");
    backTrack.setAttribute("loop", "loop");
    backTrack.setAttribute("autoplay", "autoplay");
    backTrack.volume = 0.5;
    
    //create soundeffect tag;
    let soundEffect = document.createElement("audio")
    soundEffect.setAttribute("autoplay", "autoplay");
    soundEffect.volume = 1;
    
    const createPartyDiv = () => {
        let overlayPartyDiv = document.createElement("div")
        overlayPartyDiv.setAttribute("id", "overlayPartyDiv")
        document.body.appendChild(overlayPartyDiv)
        return overlayPartyDiv;
    }
    overlayPartyDiv = createPartyDiv();
    //changing background color;

    const setBg = () => {
        //produce a random hexadecimal color between 0 and 255^3 
        if(!overlayPartyDivq) {
            createPartyDiv();
        }
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        overlayPartyDiv.style.backgroundColor = "#" + randomColor + "40";
        // console.log('overlayPartyDiv',overlayPartyDiv)
      }

    //DRY method; 
      const updateAudioAndVideo = (audioSrc) => {
        backTrack.setAttribute("src", `${extensionURL}${audioSrc}.wav`); 
        console.log('overlay', overlayPartyDiv)
        if(!overlayPartyDiv) {
            createPartyDiv();
        }
        if(!visualPulseActive){
        }
        // console.log('audio', `${audioSampleFilePath}${audioSrc}.wav`)
        // console.log('audio', `${extensionURL}${audioSrc}.wav`)
        setBg();
      }

      const updateSingleAudio = (audioSrc) => {
        if(!overlayPartyDiv) {
            createPartyDiv();
        }
        soundEffect.setAttribute("src", `${extensionURL}${audioSrc}.wav`)
        setBg();
      }

    const body = document.querySelector('body');
    body.addEventListener('keydown', (e) => {
        switch(e.code){
            case "KeyJ":
                updateAudioAndVideo("track3");
                break;
            case "KeyK":
                updateAudioAndVideo("track4");
                break;
            case "KeyQ":
                backTrack.pause();
                overlayPartyDiv.remove();
                break;
            
            //Non looping sounds
            case "KeyA":
                updateSingleAudio("bassDrum")
                break;
            case "KeyS":
                updateSingleAudio("closedHiHat")
                break;
            case "KeyD":
                updateSingleAudio("snare")
                break;

        }

    })


// })