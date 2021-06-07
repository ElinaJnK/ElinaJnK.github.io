f = 0;
function functionShow(text){
	document.body.style.color = "#D6D6D6";
	document.getElementById("montre").style.fontFamily = "Bodoni Moda, serif";
	document.getElementById("montre").style.fontSize = "20px";
	document.getElementById('montre').innerHTML = text;
}

function show_image(src, width, height, alt) {

    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.setAttribute("class", "center");
     // This next line will just add it to the <body> tag
     document.body.appendChild(img);
    if (f == 0){
        f=1 ;
        img.style.visibility = "visible";
i    }
    else{
        img.style.visibility = "hidden";
        //img.parentNode.removeChild(img);
        f = 0;
    }
}
