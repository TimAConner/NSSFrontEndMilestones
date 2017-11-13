document.getElementById("rangeInput").onchange = function(){
    document.getElementById("numberInput").value = document.getElementById("rangeInput").value;
}; 
document.getElementById("numberInput").onchange = function(){
    document.getElementById("rangeInput").value = document.getElementById("numberInput").value;
}; 