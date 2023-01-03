// ------------------ SLICK SLIDER/MAIN -------------------------



//------------------- SLICK SLIDER/NEWS -------------------------
$(function(){
  $('.cards').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
});
})

//------------------------ MAP -------------------------------

function initMap() {
  const newYork = { lat: 40.730610, lng: -73.935242 };
  const hongKong = { lat: 22.302711, lng: 114.177216}
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: newYork,
  });
  
  const marker = new google.maps.Marker({
    position: newYork,
    map: map,
  });
}

window.initMap = initMap;


//--------------------------- MODAL ------------------------------

var modal = document.getElementById('myModal');
var triggerBtn = document.getElementById('triggerBtn');
var closeBtn = document.getElementsByClassName("closeBtn")[0];


triggerBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);



function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}