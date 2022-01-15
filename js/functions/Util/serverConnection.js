export async function serverConnect(method, url, params = null, async = true){

  url = `../../php/web-api${url}.php`;
  url += ((method == "GET" && params != null) ? `?${params}` : "");

  return new Promise(function(myResolve, myReject) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, async);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onload = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert(url + " " + xhttp.responseText);
        if(xhttp.responseText){
          var json = JSON.parse(xhttp.responseText);
          myResolve(json);
        }else{
          myResolve();
        }
      }
      else {
        myResolve("File not Found");
      }
    };
    xhttp.send(((method == "POST"  && params != null) ? params : ""));
  });

}