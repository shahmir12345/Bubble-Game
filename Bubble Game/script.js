var time = 60
var score = 0
var rn = 0
var change = 0

function MakeBubble() {
    var save = ""
    rn = 0
    for (var i = 1; i <= 98; i++) {
        rn = Math.floor(Math.random() * 10)
        save = save + `<div class="bubble">${rn}</div>`
    }
    //DOM 
    document.querySelector('.bt-pannel').innerHTML = save;
}

function gettimer() {
        setInterval(function () {
            if (time > 0) {
            document.querySelector('#timer').innerHTML = --time
            }
            else
            {
                clearInterval(time)
                document.querySelector('.bt-pannel').innerHTML = `
                <h1>GAME OVER </h1> <br>
                <h2>Score = ${score} </h2>
                `;
            }
        }, 1000)
}

function newscore() {
    score = score + 10
    document.querySelector('#score').textContent = score

}

function HitVal() {
    change = Math.floor(Math.random() * 10)
    document.querySelector('#hit').textContent = change
}

document.querySelector('.bt-pannel').addEventListener('click', function(det){
    var clicked = Number(det.target.textContent)          //det.target -> provide whole element of bubble, det.target.textContent -> extract text and convert it into Number
    if(clicked == change){
        newscore()
        HitVal()
        MakeBubble()
    }
})


MakeBubble();
gettimer();
HitVal();