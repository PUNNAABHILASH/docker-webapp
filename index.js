function myoutput() {
    var cname=document.getElementById("cname").value;
    var iname=document.getElementById("iname").value;
    var ping= new XMLHttpRequest();
    ping.open("GET", "http://192.168.0.29/cgi-bin/dockerstart.py?iname="+iname+"&cname="+cname, true);
    ping.send();
    ping.onload = function() { 
        var output = ping.responseText;
        console.log(output);
        document.getElementById("ch3").innerHTML = output;
    } 
}
function myoutput2() {
    var cmd=document.getElementById("cmd").value;
    var ping= new XMLHttpRequest();
    ping.open("GET", "http://192.168.0.29/cgi-bin/dockerstatus.py?cmd="+cmd, true);
    ping.send();
    ping.onload = function() { 
        var output = ping.responseText;
        console.log(output);
        document.getElementById("ch3").innerHTML = output;
    } 
}
function myoutput3() {
    var d_stop=document.getElementById("d_stop").value;
    var ping= new XMLHttpRequest();
    ping.open("GET", "http://192.168.0.29/cgi-bin/dockerstop.py?d_stop="+d_stop, true);
    ping.send();
    ping.onload = function() { 
        var output = ping.responseText;
        console.log(output);
        document.getElementById("ch3").innerHTML = output;
    } 
}
