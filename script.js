var btnxyz = document.querySelectorAll(".btn");

function stopSounds() {
    for (var i = 0; i < btnxyz.length; i++) {
        const sound = document.getElementById(btnxyz[i].innerText);
        sound.pause();
        sound.currentTime = 0;
    }
}

function playSound(btn) {
    btn.addEventListener("click", function () {
        stopSounds();
        document.getElementById(btn.innerText).play();
    })
}

for (var i = 0; i < btnxyz.length; i++) {
    var buttonxyz = btnxyz[i];
    playSound(buttonxyz);
    console.log(buttonxyz);
}

document.querySelector(".stop").addEventListener("click", function () {
    stopSounds();
})

