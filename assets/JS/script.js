let slider = 1;
dispSlide(slider);

function dispSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // console.log(slides.length);
    if(n > slides.length) {
        slider = 1
    }
    if(n < 1){
        slider = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slider - 1].style.display = "block";
}

function plusSlides(n) {
    dispSlide(slider += n);
}





function scrollWindow(){
    window.scrollTo({top: 0, behavior:"smooth"});
}
document.getElementById("btn").addEventListener("click", scrollWindow);



function scrollHome(){
    location.href = "#home";
}

function scrollImages(){
    location.href = "#images";
}

function scrollService(){
    location.href = "#services";
}

function scrollAbout(){
    location.href = "#aboutus";
}

function scrollFaqs(){
    location.href = "#faqs";
}