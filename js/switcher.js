// Toggle Style Switcher

const switcherToggle = document.querySelector('.switcher-toggler');
switcherToggle.addEventListener('click', () => {
    document.querySelector('.switcher').classList.toggle('open');
})

// Hide Style Switcher On Scroll

window.addEventListener('scroll', () => {
    if(document.querySelector('.switcher').classList.toggle('open'))
    {
        document.querySelector('.switcher').classList.remove('open')
    }
})

// Theme Colors

const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color)
{
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute('disabled');
        }else {
            style.setAttribute('disabled' , 'true');
        }
    })
}

// Theme Linght and Dark Mode

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})