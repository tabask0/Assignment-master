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
  let datashow = `
  <div class="container">
  <p>Title: ${dis[0].title}</p>
  <p>Date: ${dis[0].date}</p>
  <p>Time: ${dis[0].time}</p>
  <p>Webinar: Title${dis[0].webinar.title +"Link "+ dis[0].webinar.link}</p>
  <p>Event: Location:${dis[0].event.location + " Adress: " + dis[0].event.adress}</p>
  <p>Theme: ${dis[0].theme}</p>
  </div>
  <div class="container">
  <p>Title: ${dis[1].title}</p>
  <p>Date: ${dis[1].date}</p>
  <p>Time: ${dis[1].time}</p>
  <p>Event: Location: ${dis[1].event.location +" Adress: "+ dis[1].event.adress}</p>
  </div>
  `

  if(dis.length > 1 && dis.length < 5) {
    console.log("Merge! JSON-ul are " + dis.length + " elemente in total")
  } else {
    console.log(dis.length + " Nu merge...")
  }
  document.getElementById("show").innerHTML = datashow
}