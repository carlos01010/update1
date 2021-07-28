//click to take the quiz
document.getElementById('open').addEventListener('click', function(){
    document.getElementById('modal-container').classList.add('show');
});

//continue to the next question
//shows the PREVIOUS button
document.getElementById('continue1').addEventListener('click', function(){
    document.getElementById('content1').classList.add('off1');
    document.getElementById('previous1').style.display = 'block';
    document.getElementById('button-container').style.flexDirection = 'row-reverse';
    document.getElementById('nextButton1').classList.add('space');
});

