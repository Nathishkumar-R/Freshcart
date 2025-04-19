$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout: 2000,
})


$('#owl-carousel1').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    items: 6,
    autoplay: true,
    autoPlaySpeed: 3000,
    autoPlayTimeout: 1000,
})


function checkbag() {

    let bag = document.getElementById("bag")
    let overall = document.getElementsByClassName("overall")[0]

    if (bag.checked == true) {
        overall.style.height = '100vh';
        overall.style.overflow = 'hidden';
    } else {
        overall.style.height = '100%';
        overall.style.overflow = 'auto';
    }
}