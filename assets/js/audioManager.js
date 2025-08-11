let backgroundAudio = null;
let isAudioPlaying = false;
let userInteracted = false;
let autoPlayedOnce = false; // ✅ Tracks the first auto play

const toggleAudio = () => {
    if (isAudioPlaying) {
        backgroundAudio.pause();
        isAudioPlaying = false;
    } else {
        const playPromise = backgroundAudio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isAudioPlaying = true;
            }).catch((error) => {
                console.error('Playback failed:', error);
            });
        }
    }
};

const mounted = () => {
    backgroundAudio = document.getElementById('backgroundAudio');

    backgroundAudio.addEventListener('play', () => {
        isAudioPlaying = true;
    });
    backgroundAudio.addEventListener('pause', () => {
        isAudioPlaying = false;
    });

    // First user interaction → auto play once
    const handleFirstInteraction = () => {
        if (!userInteracted) {
            userInteracted = true;

            if (!autoPlayedOnce) {
                const playPromise = backgroundAudio.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        isAudioPlaying = true;
                        autoPlayedOnce = true; // ✅ Only auto play once
                    }).catch((error) => {
                        console.error('Playback failed:', error);
                    });
                }
            }
        }
    };

    window.addEventListener('click', handleFirstInteraction);
};

document.addEventListener('DOMContentLoaded', () => {
    mounted();
});
