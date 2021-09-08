window.addEventListener('keydown', function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return undefined; // stop if clicked key with no sound attached
 
        audio.currentTime = 0; // ensures audio always plays from the beginning, if clicked constantly 
        audio.play();
        key.classList.add('playing');  //add css class when clicked                  



    });
    
//remove css transition when another key is clicked    
function endSound (e) {
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if(!key) return;
                key.classList.remove('playing');
            }
            
window.addEventListener('keyup', endSound);