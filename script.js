let score = 15;

function init() {
    const content = document.getElementById('content');
    content.innerHTML = returnHtmlCard();
    }

function answer(answerNumber) {
    let rightAnswerNumber = questions[currentQuestion]["right_answer"];
    let idRightAnswer = `answer_${rightAnswerNumber}`;
    let idAnswer = `answer_${answerNumber}`;
    if (answerNumber == rightAnswerNumber) {
        console.log('right');
        document.getElementById(idRightAnswer).classList.add('bg-success');
        document.getElementById('next-btn').disabled = false;
        disableAllAnswers ();
    } else {
        console.log('false');
        document.getElementById(idAnswer).classList.add('bg-secondary');
        score -= 1
        console.log(score);
        document.getElementById(idAnswer).disabled = true;
        document.getElementById(idAnswer).classList.remove('pointer');
    }
}

function disableAllAnswers () {
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
    currentQuestion++;
    init();
}

function returnButtonText() {
    if (currentQuestion >= questions.length - 1) {
        return `Ergebnis`;
    } else {
        return `nächste Frage`;
    }
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
    <div class="card main-card" style="width: 18rem;">
            <img src="img/questions_img/${img}" class="card-img-top card-img-small" alt="...">
            <div class="card-middle flex">

                <div class="card-body">
                    <h5 class="card-title mb-3">
                        ${question}
                    </h5>

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