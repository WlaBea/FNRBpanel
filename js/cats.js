const smallcr = document.querySelector('.small_cr');
const bigcr = document.querySelector('.big_cr');
const storagecr = document.querySelector('.storage_cr');

smallcr.addEventListener('click', function() {
    document.getElementById("small_room").style.display = "grid";
    document.getElementById("big_room").style.display = "none";
    document.getElementById("storage_room").style.display = "none";
});

bigcr.addEventListener('click', function() {
    document.getElementById("small_room").style.display = "none";
    document.getElementById("big_room").style.display = "grid";
    document.getElementById("storage_room").style.display = "none";
});

storagecr.addEventListener('click', function() {
    document.getElementById("small_room").style.display = "none";
    document.getElementById("big_room").style.display = "none";
    document.getElementById("storage_room").style.display = "grid";
});

