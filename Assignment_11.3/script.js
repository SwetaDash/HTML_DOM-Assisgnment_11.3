function getValue(){      //Function to display attribute value of anchor tag
var ggl = document.getElementById("google");
document.getElementById("attrs").innerHTML=ggl;
}

function removeAttr(){   //Function to remove html of div with id attrs
    var hdiv = document.getElementById("attrs");
    document.body.removeChild(hdiv);
} 