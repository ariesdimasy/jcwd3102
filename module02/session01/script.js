let h1 = document.getElementsByTagName("h1")
let res = document.getElementById("response")
res.innerText = h1[0].innerHTML

h1[0].addEventListener("click",function(){
    alert("h1 clicked")
})