containerElements=[
    document.querySelector('main'),
    document.querySelector('aside'),
    document.querySelector('header')
]

function lightModeToggle(){

    containerElements.forEach(element => {
    element.classList.toggle('light');
});

}