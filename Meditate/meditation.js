

const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    
  
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');
    
    let fakeDuration = 600;

    const sounds = document.querySelector('.sound-button');
    


    sounds.addEventListener('click', function() {
        song.src = this.getAttribute('data-sound');
        checkPlaying(song);
    });


    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    timeSelect.forEach(option => {
        option.addEventListener('click', function() {
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}: ${Math.floor(fakeDuration % 60)}`;
        });
    });

    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            play.src='./SVG/pause.svg';
        } else {
            song.pause();
            play.src = './svg/play.svg';
        }
    }

    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);



        timeDisplay.textContent = `${minutes}:${seconds}`;

        if (currentTime >= fakeDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = './svg/play.svg';
    
        }
    };




};

app();