// Load Header
const xhr = new XMLHttpRequest();
xhr.open("GET", "./header.html", true);
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        document.querySelectorAll("#header")[0].innerHTML = xhr.responseText; }};