function getData(event) {
  event.preventDefault();
  var query = document.getElementById("query").value;
  
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", query);
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  
  var contentDiv = document.querySelector(".content");
  contentDiv.innerHTML = '';
  contentDiv.appendChild(iframe);
  location.href = "#content"
}

function updateDesktop() {
  var screenSelect = document.getElementById("desktop");
  var selectedScreen = screenSelect.value;

  var [width, height] = selectedScreen.split("_");
  var iframe = document.querySelector("iframe");
  iframe.style.width = width + "px";
  iframe.style.height = height + "px";
  location.href = "#content"
}

function updateTablet() {
  var screenSelect = document.getElementById("tablet");
  var selectedScreen = screenSelect.value;

  var [width, height] = selectedScreen.split("_");
  var iframe = document.querySelector("iframe");
  iframe.style.width = width + "px";
  iframe.style.height = height + "px";
  location.href = "#content"
}

function updateMobile() {
  var screenSelect = document.getElementById("mobile");
  var selectedScreen = screenSelect.value;

  var [width, height] = selectedScreen.split("_");
  var iframe = document.querySelector("iframe");
  iframe.style.width = width + "px";
  iframe.style.height = height + "px";
  location.href = "#content"
}

function updateWidth() {
  var width = document.getElementById("width").value;
  var iframe = document.querySelector("iframe");
  iframe.style.width = width + "px";
  location.href = "#content"
}

function updateHeight() {
  var height = document.getElementById("height").value;
  var iframe = document.querySelector("iframe");
  iframe.style.height = height + "px";
  location.href = "#content"
}
