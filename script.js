let score = 15;

function init() {
    const content = document.getElementById('content');
    content.innerHTML = returnHtmlCard();
    updateProgressBar();
}

function answer(answerNumber) {
    let rightAnswerNumber = questions[currentQuestion]["right_answer"];
    let idAnswer = `answer_${answerNumber}`;
    if (rightAnswer(answerNumber, rightAnswerNumber)) {
        success(rightAnswerNumber);
        disableAllAnswers();
        updateProgressBar('answered');
    } else {
        fail(idAnswer);
        disableWrongAnswer(idAnswer);
    }
}

function rightAnswer(answerNumber, rightAnswerNumber) {
    return answerNumber == rightAnswerNumber
}

function success(rightAnswerNumber) {
    let idRightAnswer = `answer_${rightAnswerNumber}`;
    console.log('right');
    document.getElementById(idRightAnswer).classList.add('bg-success');
    document.getElementById('next-btn').disabled = false;
    document.getElementById('next-try').innerHTML = 'richtige Antwort';
    playSuccessSound();
}

function fail(idAnswer) {
    console.log('false');
    document.getElementById(idAnswer).classList.add('bg-secondary');
    score--;
    console.log('Score', score);
    document.getElementById('next-try').innerHTML = 'Versuchs nochmal';
}

function disableWrongAnswer(idAnswer) {
    document.getElementById(idAnswer).disabled = true;
    document.getElementById(idAnswer).classList.remove('pointer');
}

function disableAllAnswers() {
    document.getElementById('answer_1').disabled = true;
    document.getElementById('answer_2').disabled = true;
    document.getElementById('answer_3').disabled = true;
    document.getElementById('answer_4').disabled = true;
    document.getElementById('answer_1').classList.remove('pointer', 'answer');
    document.getElementById('answer_2').classList.remove('pointer', 'answer');
    document.getElementById('answer_3').classList.remove('pointer', 'answer');
    document.getElementById('answer_4').classList.remove('pointer', 'answer');
}

function nextQuestion() {
    if (currentQuestion >= questions.length - 1) {
        showScore();
    } else {
        currentQuestion++;
        init();
    }
}

function showScore() {
    let htmlScore = returnHtmlScore();
    document.getElementById('content').innerHTML = htmlScore;
}

function updateProgressBar(answerStatus) {
    let questionIsAnswered = statusNumber(answerStatus);   

    let progressBar = document.getElementById('progress-bar');
    let progress = Math.round((currentQuestion + questionIsAnswered) / questions.length * 100);

    if (progress > 0) {
        progressBar.style = `width: ${progress}%`;
        progressBar.innerHTML = `${progress} %`;
    } else {
        progressBar.style = `width: 0%`;
        progressBar.innerHTML = ``;
    }
}

function statusNumber(answerStatus) {
    if (answerStatus == 'answered') {
        return 1;
    } else {
        return 0;
    }
}

function returnButtonText() {
    if (currentQuestion >= questions.length - 1) {
        return `Ergebnis`;
    } else {
        return `nächste Frage`;
    }
}

function showOffcanvas() {
    document.getElementById('offcanvasRight').classList.add('show');
}

function hideOffcanvas() {
    document.getElementById('offcanvasRight').classList.remove('show');
}

function restartQuiz(selectedQuiz) {
    questions = selectedQuiz;
    score = 15;
    currentQuestion = 0;
    hideOffcanvas()
    init();
}

function returnQuizName() {
    if (questions == questions_planets) {
        return 'Planeten-';
    }
    if (questions == questions_animal) {
        return 'Tier-';
    }
    if (questions == questions_jesus) {
        return 'Jesus-';
    }
    else {
        return '';
    }
}

function playSuccessSound() {
  let AUDIO_SUCCESS = new Audio('sound/success.mp3');
  AUDIO_SUCCESS.play();
}

//----------------------HTML code-------------------------------------------
function returnHtmlCard() {
    let img = questions[currentQuestion]["picture"];
    let question = questions[currentQuestion]["question"];
    let answer_1 = questions[currentQuestion]["answer_1"];
    let answer_2 = questions[currentQuestion]["answer_2"];
    let answer_3 = questions[currentQuestion]["answer_3"];
    let answer_4 = questions[currentQuestion]["answer_4"];
    return `
    <div class="card main-card">
            <img src="img/questions_img/${img}" class="card-img-top card-img-small" alt="...">
            <div class="progress">
                <div id="progress-bar" class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
            </div>
            <div class="card-middle flex">

                <div class="card-body">
                    <h5 class="card-title mb-3">
                        ${question}
                    </h5>
                    <p id="next-try" class="text-danger"></p>

                    <button id="answer_1" class="card mt-2 pointer answer button-answer" onclick="answer(1)">
                        <div class="card-body ">
                            ${answer_1}
                        </div>
                    </button>
                    <button id="answer_2" class="card mt-2 pointer answer button-answer" onclick="answer(2)">
                        <div class="card-body">
                            ${answer_2}
                        </div>
                    </button>
                    <button id="answer_3" class="card mt-2 pointer answer button-answer" onclick="answer(3)">
                        <div class="card-body">
                            ${answer_3}
                        </div>
                    </button>
                    <button id="answer_4" class="card mt-2 pointer answer button-answer" onclick="answer(4)">
                        <div class="card-body">
                            ${answer_4}
                        </div>
                    </button>
                </div>

            </div>
            <div class="card-footer">
                <span><b>${currentQuestion + 1}</b> von <b>${questions.length}</b></span>
                <button disabled id="next-btn" href="#" class="btn btn-primary pointer" onclick="nextQuestion()">${returnButtonText()}</button>
            </div>
        </div>
    `;
}

function returnHtmlScore() {
    let html = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4 center-y">
        <img src="img/tropy.png" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title center">Score</h2>
          <p class="score center">${score} / 15</p>
          <p class="card-text center"><small class="text-muted">Erreicht beim ${returnQuizName()}Quiz</small></p>
        </div>
        <div class="card-footer center flex-column">
            <button onclick="restartQuiz(questions)" class="btn btn-primary"><span class="glyphicon glyphicon-refresh"></span>Neustart</button>
            <button onclick="showOffcanvas()" class="btn btn-secondary mt-2"><span class="glyphicon glyphicon-refresh"></span>Anderes Quiz wählen</button>
        </div>
      </div>
    </div>
  </div>
    `;
    return html
}