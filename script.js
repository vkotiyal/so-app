// JavaScript is used for toggling loading state
var form = document.querySelector('form');
form.onsubmit = function (event) {
    event.preventDefault();
    form.classList.add('signed');
    openLink();
    form.submit();

};

function openLink() {
    console.log("Reaching here")
    let url = "https://api.whatsapp.com/send?phone=919205384619&text=Hi%2C%20I%20am%20interested%20in%20SO%3F%20Dating";
    window.open(url, '_blank').focus();
}
