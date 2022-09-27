function init() {
    const content = document.getElementById('content');
    content.innerHTML = returnHtmlCard();
}

function showQuestion() {
    let question = questions[currentQuestion];
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

                    <div class="card mt-2 pointer answer">
                        <div class="card-body ">
                            ${answer_1}
                        </div>
                    </div>
                    <div class="card mt-2 pointer answer">
                        <div class="card-body">
                        ${answer_2}
                        </div>
                    </div>
                    <div class="card mt-2 pointer answer">
                        <div class="card-body">
                        ${answer_3}
                        </div>
                    </div>
                    <div class="card mt-2 pointer answer">
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