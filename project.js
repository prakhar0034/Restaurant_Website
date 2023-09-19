var image = document.getElementById("i1");
var images = ["img-1.jpg", "img-2.jpg", "img-3.jpg","img-4.jpg","img-5.jpg"];
var index = 0;
function updateImage() {
i1.src = images[index];
index = (index + 1) % images.length;
}
setInterval(updateImage, 2000);