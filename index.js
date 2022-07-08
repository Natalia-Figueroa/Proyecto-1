// MODAL

const close = document.getElementsByClassName("close")[0];
const open = document.getElementsByClassName("btn-modal")[0];
const modal = document.getElementsByClassName("modal-close")[0];
const modalContainer = document.getElementsByClassName("modal-container")[0];

open.addEventListener("click", function(e){
    e.preventDefault();
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

close.addEventListener("click", function(e) {   
    e.preventDefault();
    modal.classList.toggle("modal-close");
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";

});

// CARACTERES FORMULARIO

const boxMesaje = document.getElementsByClassName("box-mesaje")[0];

boxMesaje.addEventListener('input',(e) => {
    const counter = document.getElementsByClassName("counter")[0];
    counter.innerHTML = e.target.value.length;
})

