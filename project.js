var image = document.getElementById("i1");
var images = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpg","images/img-4.jpg","images/img-5.jpg"];
var index = 0;
function updateImage() {
i1.src = images[index];
index = (index + 1) % images.length;
}
setInterval(updateImage, 2000);