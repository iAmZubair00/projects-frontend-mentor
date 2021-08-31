containerElements=[
    document.querySelector('#container'),
    document.querySelector('.topContainer')
]

function lightModeToggle(){

    containerElements.forEach(element => {
    element.classList.toggle('light');
});

}