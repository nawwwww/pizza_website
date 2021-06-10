window.addEventListener('load', function (event) {
    let buttonSubmit = document.getElementById('submit');
    buttonSubmit.addEventListener('click', function (event) {
        event.preventDefault();
        let dataToSend = {};
        let pattern = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        if (pattern.exec(document.questions.userName.value)) {
            dataToSend.firstName = pattern.exec(document.questions.userName.value);
            document.questions.userName.style.backgroundColor = "cornflowerblue";
        }
        else {
            document.questions.userName.style.backgroundColor = "red";
        };
        if (pattern.exec(document.questions.userLastName.value)) {
            dataToSend.lastName = pattern.exec(document.questions.userLastName.value);
            document.questions.userLastName.style.backgroundColor = "cornflowerblue";
        }
        else {
            document.questions.userLastName.style.backgroundColor = "red";
        };
        if (document.questions.userMessage.value) {
            dataToSend.question = document.questions.userMessage.value;
            document.questions.userMessage.style.backgroundColor = "cornflowerblue";
        }
        else {
            document.questions.userMessage.style.backgroundColor = "red";
        };
            console.log(dataToSend);
    })
})
