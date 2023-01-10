const form = document.getElementById('formSelectPlayer');
const selectPlayer = document.getElementById('playerSelect');
const clickConfirm = document.getElementById('clickConfirm');


form.addEventListener('submit', function(event){
    event.preventDefault();
    clickConfirm.innerHTML = 'Your favorite player is : '+ selectPlayer.value;

});