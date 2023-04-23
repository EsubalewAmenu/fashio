function customizeShoe() {
  var shoeColor = document.getElementById("shoe-color").value;
  var shoeSize = document.getElementById("shoe-size").value;
  var shoeStyle = document.getElementById("shoe-style").value;

  // Update the shoe image based on the selected options
  var shoeImage = document.getElementById("shoe-image");
  shoeImage.style.backgroundColor = shoeColor;
  shoeImage.style.backgroundImage = "url('" + shoeStyle + ".png')";
  shoeImage.innerHTML = "Size: " + shoeSize;
}
