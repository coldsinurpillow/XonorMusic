const logo = document.querySelector('#logo')
console.log(logo.innerHTML)
const logo_text = logo.innerHTML


    for(let i = 0; i < logo_text.length; i++) {
        setTimeout(() => {
            logo.innerHTML = logo_text.substr(0, logo_text.length - i) + ' ' + logo_text.substr(logo_text.length - i, logo_text.length - 1)
        }, 1600);
    }
