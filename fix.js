const buttons = {
    "www.youtube.com": { next: ".ytp-next-button.ytp-button", previous: ".ytp-previous-button.ytp-button" },
    "music.youtube.com": { next: ".next-button ", previous: ".previous-button " }
}


(function() {
    "use strict";

    function jumpToNextTrack() {
        const nextSongButton = document.querySelector(buttons[document.location.hostname].next);
        if (nextSongButton) {
            nextSongButton.click();
        }
    }

    function jumpToPreviousTrack() {
        const prevSongButton = document.querySelector(buttons[document.location.hostname].previous);
        if (prevSongButton) {
            prevSongButton.click();
        } else {
            history.back();
        }
    }

    setInterval(function() {
        if ('mediaSession' in navigator) {
            // next-track mediakey handler
            navigator.mediaSession.setActionHandler('nexttrack', jumpToNextTrack);
            navigator.mediaSession.setActionHandler('previoustrack', jumpToPreviousTrack);
        }
    }, 1000)


})();