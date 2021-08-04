const beginBox = document.getElementById('begin');
const beginButton = document.getElementById('begin-button');
const gameBox = document.querySelector('.box');
const turnsBox = document.querySelector('.turns')


beginButton.addEventListener('click', startGame);


function startGame(){
    beginBox.style.display = 'none';
    gameBox.style.display = 'block'; 
    turnsBox.style.display = 'block';
}
 







 







/*const box = Array.from(document.querySelectorAll('#play-box'));


const play = box.forEach(box => {
    box.addEventListener('click', dawg);
});


function dawg(e){
    const circle = '<i class="far fa-circle">';
    const times = '<i class="fas fa-times">';
    const random = Math.floor(Math.random() * 9);
    const target = e.target;
    

    if (target.innerHTML === ''){
        target.innerHTML = times;
    } 
}; */