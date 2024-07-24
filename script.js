document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        'Quem foi que gritou "Independência ou Morte"?',
        "Qual é a capital da França?",
        "Qual é o maior planeta do nosso sistema solar?",
        "Qual é a atual capital do Brasil?"
    ];
    const options = [
        ["Dom Pedro II", "Tiririca", "Dom Pedro I", "Zacarias"],
        ["Londres", "Paris", "Berlim", "Madrid"],
        ["Vênus", "Marte", "Júpiter", "Saturno"],
        ["Salvador", "Rio de Janeiro", "São Paulo", "Brasília"]
    ];
    const correctAnswers = [2, 1, 2, 3];
    
    const reloadButton = document.getElementById('reload');
    const nowQuestion = Math.floor(Math.random() * questions.length);
    
    function generateQuestions() {
        document.getElementById("question").textContent = questions[nowQuestion];
        
        document.querySelectorAll('.alternative').forEach((button, index) => {
            button.textContent = options[nowQuestion][index];
        });
    }

    function selectButton() {
        document.querySelectorAll('.alternative').forEach(button => {
            button.addEventListener('click', () => {
                const answer = Number(button.value);
                checkAnswer(answer);
            });
        });
    }

    function checkAnswer(answer) {
        const statusAnswer = document.getElementById("statusAnswer");
        if (answer === correctAnswers[nowQuestion]) {
            statusAnswer.textContent = "Acertou!!!";
        } else {
            statusAnswer.textContent = `Errou! A resposta correta é: ${options[nowQuestion][correctAnswers[nowQuestion]]}`;
        }
        reloadButton.style.display = "block";
    }

    reloadButton.addEventListener('click', () => {
        location.reload();
    });

    generateQuestions();
    selectButton();
});
