function data() {
   var xhr = new XMLHttpRequest();
   // kepps on checking the output parallay
   var username = document.getElementById("usna").value 
   //var password = document.getElementById("password").value 
   xhr.open("GET", "http://192.168.0.29/index.html",true);
   xhr.send();
   xhr.onload = function() { 
       var output = xhr.responseText;
       document.getElementById("d1").innerHTML = output;
}
}
