const overlay=document.querySelector('.overlay')
const modal=document.getElementById('modal');

function openModal(){
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
}
function closeModal(){
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
}