containerElements=[
    document.querySelector('#container'),
    document.querySelector('.topContainer'),
    document.querySelector('.attribution'),
]

function lightModeToggle(){

    containerElements.forEach(element => {
    element.classList.toggle('light');
});

}