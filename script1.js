const startingminutes = 5;
let time = startingminutes * 60;

const timerEl = document.getElementById('timer');
const submit = document.getElementById('after_begin');
const begin = document.getElementById('begin');

begin.addEventListener('click', function() {
    setInterval(start, 1000);
    start();
    begin.disabled = true;
    submit.style.visibility = "visible";

});
//random change 2
//random change
function start() {
// comment
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    //to make it so it appears like 3:02 for example since when the seconds are < 10 they get kinda weird
    seconds = seconds < 10 ? '0' + seconds : seconds;


    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    time = time < 0 ? 0 : time;
    //to make not display negative values
}

const score = document.getElementById('score');

// const answer1 = document.getElementById('input0');
// const answer2 = document.getElementById('input1');
// const answer3 = document.getElementById('input2');
// const answer4 = document.getElementById('input3');
// const answer5 = document.getElementById('input4');
// const answer6 = document.getElementById('input5');
// const answer7 = document.getElementById('input6');
// const answer8 = document.getElementById('input7');
// const answer9 = document.getElementById('input8');
// const answer10 = document.getElementById('input9');

function checkAnswers() {
    var correct = 0;
    var t = document.getElementById("mainTable"), // This have to be the ID of your table, not the tag
        d = t.getElementsByTagName("tr")[0],
        r = d.getElementsByTagName("td")[0];
    const answer1 = r.document.getElementById('input0');
    const answer2 = r.document.getElementById('input1');

    if (answer1.equalsIgnoreCase("uncharted 4")) {
        correct++;
    }
    if (answer2.equalsIgnoreCase("outlast")) {
        correct++;
    }

    score.innerHTML = `${correct}`;
}
