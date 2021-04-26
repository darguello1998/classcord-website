const navContent = document.getElementById('nav-content')
// Hide the menu instantly after we get its height and dispose the measurable class
const navContentMaxHeight = navContent.clientHeight
navContent.style.maxHeight = 0;
navContent.classList.remove('measurable')
//Javascript to toggle the menu
document.getElementById('nav-toggle').onclick = function(){
    // parseInt takes only the number, removing 'px' from the string and
    // converting it to a number
    const isOn = parseInt(navContent.style.maxHeight) > 0
    navContent.style.maxHeight = isOn ? '0px' : `${navContentMaxHeight}px`
}