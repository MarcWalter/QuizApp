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
    } else {
        console.log('false');
        document.getElementById(idRightAnswer).classList.add('bg-success');
        document.getElementById(idAnswer).classList.add('bg-danger');
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
    <div class="card" style="width: 18rem;">
            <img src="img/questions_img/${img}" class="card-img-top card-img-small" alt="...">
            <div class="card-middle flex">

                <div class="card-body">
                    <h5 class="card-title mb-3">${question}</h5>

                    <div id="answer_1" class="card mt-2 pointer answer" onclick="answer(1)">
                        <div class="card-body ">
                            ${answer_1}
                        </div>
                    </div>
                    <div id="answer_2" class="card mt-2 pointer answer" onclick="answer(2)">
                        <div class="card-body">
                        ${answer_2}
                        </div>
                    </div>
                    <div id="answer_3" class="card mt-2 pointer answer" onclick="answer(3)">
                        <div class="card-body">
                        ${answer_3}
                        </div>
                    </div>
                    <div id="answer_4" class="card mt-2 pointer answer" onclick="answer(4)">
                        <div class="card-body">
                        ${answer_4}
                        </div>
                    </div>
                </div>

            </div>
            <div class="card-footer">
                <span><b>1</b> von <b>${questions.length}</b></span>
                <a href="#" class="btn btn-primary pointer">Nächste Frage</a>
            </div>
        </div>
    `;
}