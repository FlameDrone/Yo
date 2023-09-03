let ja = document.getElementById("Ja");
let nein = document.getElementById("Nein");
let thumb = document.getElementById("thumb")

if(ja){
    ja.onclick = function(){
        thumb.innerHTML = "👍";
    }
}
if(nein){
    nein.onclick = function() {
        thumb.innerHTML = "👎";
    }
}