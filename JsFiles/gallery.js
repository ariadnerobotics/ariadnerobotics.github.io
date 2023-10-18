var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

document.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() === 'img' && event.target.parentNode.classList.contains('photo-gallery')) {
        modal.style.display = "block";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }
});

document.getElementsByClassName("close")[0].onclick = function() { 
    modal.style.display = "none";
}
