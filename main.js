// console.log('Loaded here');
// document.addEventListener('DOMContentLoaded', () => {
    //const audioSampleFilePath = "https://github.com/billums123/KeyboardDJ/blob/main/assets/"
    // console.log('You made it in!');
    //create backtrack tag
    const extensionURL = chrome.runtime.getURL(
        './assets/'
      );


      //pulse effect
    const pulsingOut = [
        {transform: 'scale(1.025,1.025)'},
        {transform:  'scale(1,1)'}

    ];
    //pulse effect duration
    const pulseDuration ={
        duration: 75,
        iterations: 1
    };

    //initialize single sound audio tags so that chords can be played
    const audioTags = [];
    //change this number to however many sound effects you have
    const numberOfAudioTags = 15;
    const createSingleAudioTags = (numberOfAudioTags) =>{
        for(let i = 0; i < numberOfAudioTags; i++){

            //create soundeffect tag and add to audioTag array;
            audioTags.push(document.createElement("audio"))
            audioTags[i].setAttribute("autoplay", "autoplay");
            audioTags[i].volume = 0.2;
        }
    }
    //create audio tags for sounds
    createSingleAudioTags(numberOfAudioTags);
    
    let backTrack = document.createElement("audio");
    backTrack.setAttribute("loop", "loop");
    backTrack.setAttribute("autoplay", "autoplay");
    backTrack.volume = 0.5;
    
    
    let overlayPartyDiv = document.createElement("div")
    overlayPartyDiv.setAttribute("id", "overlayPartyDiv")
    document.body.appendChild(overlayPartyDiv)
    //changing background color;
    
    
    const setBg = () => {
        //produce a random hexadecimal color between 0 and 255^3 
        document.body.animate(pulsingOut, pulseDuration)
        // pulseBodyOut();
        // pulseBodyIn();
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        overlayPartyDiv.style.backgroundColor = "#" + randomColor + "64";
        // console.log('overlayPartyDiv',overlayPartyDiv)
    }
    
    //DRY method; 
    const updateAudioAndVideo = (audioSrc) => {
        backTrack.setAttribute("src", `${extensionURL}${audioSrc}.wav`); 
        // console.log('audio', `${audioSampleFilePath}${audioSrc}.wav`)
        // console.log('audio', `${extensionURL}${audioSrc}.wav`)
        setBg();
    }

      const updateSingleAudio = (audioTagNumber, audioSrc) => {
          audioTags[audioTagNumber].setAttribute("src", `${extensionURL}shortNotes/${audioSrc}.wav`)
          setBg();
        }
        
        const body = document.querySelector('body');
        body.addEventListener('keydown', (e) => {
            if(!e.repeat){
            switch(e.code){
                case "Digit1":
                console.log('audio',audioTags)
                updateAudioAndVideo("drumTrack1");
                break;
            case "Digit2":
                updateAudioAndVideo("drumTrack2");
                break;
            case "Digit3":
                updateAudioAndVideo("drumTrack3");
                break;
            case "Digit4":
                updateAudioAndVideo("drumTrack4");
                break;
            case "Digit5":
                updateAudioAndVideo("drumTrack5");
                break;
            case "KeyQ":
                backTrack.pause();
                break;
            
            //Non looping sounds
            case "KeyA":
                updateSingleAudio(0, "cSharpShort")
                break;
            case "KeyS":
                updateSingleAudio(1, "dSharpShort")
                break;
            case "KeyD":
                updateSingleAudio(2, "fSharpShort")
                break;
            case "KeyF":
                updateSingleAudio(3, "gSharpShort")
                break;
            case "KeyG":
                updateSingleAudio(4, "aSharpShort")
                break;
            case "KeyH":
                updateSingleAudio(5, "cSharpShort2")
                break;
            case "KeyJ":
                updateSingleAudio(6, "dSharpShort2")
                break;
            case "KeyK":
                updateSingleAudio(7, "fSharpShort2")
                break;
            case "KeyL":
                updateSingleAudio(7, "gSharpShort2")
                break;
            case "Semicolon":
                updateSingleAudio(7, "aSharpShort2")
                break;

                //drum sounds
            case "KeyV":
                updateSingleAudio(8, "bassDrum")
                break;
            case "KeyN":
                updateSingleAudio(9, "closedHiHat")
                break;
                case "KeyC":
                    updateSingleAudio(10, "snare")
                    break;
                case "KeyB":
                    updateSingleAudio(11, "crash")
                case "KeyN":
                    updateSingleAudio(12, "ride")
                    break;
            }
        }

    })


// })











// // console.log('Loaded here');
// // document.addEventListener('DOMContentLoaded', () => {
//     //const audioSampleFilePath = "https://github.com/billums123/KeyboardDJ/blob/main/assets/"
//     // console.log('You made it in!');
//     //create backtrack tag
//     const extensionURL = chrome.runtime.getURL(
//         './assets/'
//       );


//       //pulse effect
//     const pulsingOut = [
//         {transform: 'scale(1.025,1.025)'},
//         {transform:  'scale(1,1)'}

//     ];
//     //pulse effect duration
//     const pulseDuration ={
//         duration: 75,
//         iterations: 1
//     };

//     //initialize single sound audio tags so that chords can be played

//     let backTrack = document.createElement("audio");
//     backTrack.setAttribute("loop", "loop");
//     backTrack.setAttribute("autoplay", "autoplay");
//     backTrack.volume = 0.5;
    
//     //create soundeffect tag;
//     let soundEffect = document.createElement("audio")
//     soundEffect.setAttribute("autoplay", "autoplay");
//     soundEffect.volume = 0.25;
    
//     let overlayPartyDiv = document.createElement("div")
//     overlayPartyDiv.setAttribute("id", "overlayPartyDiv")
//     document.body.appendChild(overlayPartyDiv)
//     //changing background color;
    

//     const setBg = () => {
//         //produce a random hexadecimal color between 0 and 255^3 
//         document.body.animate(pulsingOut, pulseDuration)
//         // pulseBodyOut();
//         // pulseBodyIn();
//         const randomColor = Math.floor(Math.random()*16777215).toString(16);
//         overlayPartyDiv.style.backgroundColor = "#" + randomColor + "64";
//         // console.log('overlayPartyDiv',overlayPartyDiv)
//       }

//     //DRY method; 
//       const updateAudioAndVideo = (audioSrc) => {
//         backTrack.setAttribute("src", `${extensionURL}${audioSrc}.wav`); 
//         // console.log('audio', `${audioSampleFilePath}${audioSrc}.wav`)
//         // console.log('audio', `${extensionURL}${audioSrc}.wav`)
//         setBg();
//       }

//       const updateSingleAudio = (audioSrc) => {
        
//         soundEffect.setAttribute("src", `${extensionURL}${audioSrc}.wav`)
//         setBg();
//       }

//     const body = document.querySelector('body');
//     body.addEventListener('keydown', (e) => {
//         switch(e.code){
//             case "Digit1":
//                 updateAudioAndVideo("track1");
//                 break;
//             case "Digit2":
//                 updateAudioAndVideo("track2");
//                 break;
//             case "Digit3":
//                 updateAudioAndVideo("track3");
//                 break;
//             case "Digit4":
//                 updateAudioAndVideo("track4");
//                 break;
//             case "KeyQ":
//                 backTrack.pause();
//                 break;
            
//             //Non looping sounds
//             case "KeyA":
//                 updateSingleAudio("cSharp")
//                 break;
//             case "KeyS":
//                 updateSingleAudio("dSharp")
//                 break;
//             case "KeyD":
//                 updateSingleAudio("fSharp")
//                 break;
//             case "KeyF":
//                 updateSingleAudio("gSharp")
//                 break;
//             case "KeyJ":
//                 updateSingleAudio("aSharp")
//                 break;
//             case "KeyK":
//                 updateSingleAudio("cSharp2")
//                 break;
//             case "KeyL":
//                 updateSingleAudio("dSharp2")
//                 break;
//             case "Semicolon":
//                 updateSingleAudio("fSharp2")
//                 break;

//         }

//     })


// // })