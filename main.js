function showEvents() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let data = JSON.parse(xhttp.responseText);
       displayData(data);
      }
};
const events = "./events.json";
xhttp.open("GET", events, true);
xhttp.send();
}


function displayData(dis) {
  let datashow =dis.map( element => `
  <div class="container">
  <p>Title: ${element.title}</p>
  <p>Date: ${element.date}</p>
  <p>Time: ${element.time}</p>
  <p>Theme: ${element.theme}</p>
  <p>Webinar: ${element.webinar}</p>
  </div>
  
  `
)
  if(dis.length > 1 && dis.length < 5) {
    console.log("Merge! JSON-ul are " + dis.length + " elemente in total")
  } else {
    console.log(dis.length + " Nu merge...")
  }
  document.getElementById("show").innerHTML = datashow
}