// JavaScript Document

document.getElementById('addReadingForm').addEventListener("submit", addReading, false);

const readings = [];
let errorText = "";

showReadings();

function isValid(readingDate, readingMax, readingMin) {
  let valid = true;
  errorText = "";
  if (readingDate == "") {
    valid = false;
    errorText += "The reading date is invalid.<br>";
  }
  if (readingMax == "") {
    valid = false;
    errorText += "The maximum temperature is invalid.<br>";
  }
  if (readingMin == "") {
    valid = false;
    errorText += "The minimum temperature is invalid.<br>";
  }
  document.getElementById("errorArea").innerHTML = errorText;
  return valid;
}

function addReading(e) {
  e.preventDefault();
  const readingDate = document.getElementById('readingDate').value;
  const readingMax = document.getElementById('readingMax').value;
  const readingMin = document.getElementById('readingMin').value;
  if (isValid(readingDate, readingMax, readingMin)) {
    document.getElementById("errorArea").style.display = "none";
    readings.push([readingDate, readingMax, readingMin]);
    showReadings();
    clearForm();
  } else {
        
    document.getElementById("errorArea").style.display = "block";
  }
}

function showReadings() {
  const readingsArea = document.getElementById('readingsArea');
  let result = "";
  if (readings.length === 0) {
    result = "There are no readings to display";
  } else {
    result += "<table><thead><tr><th>Date</th><th>Max.</th><th>Min.</th></tr></thead>";
    result += "<tbody>";
    readings.map(reading => {
      result += "<tr><td>" + reading[0] + "</td><td>" + reading[1] + "</td><td>" + reading[2] + "</td></tr>";
    });
    result += "</tbody>";
    result += "</table>";
  }
  readingsArea.innerHTML = result;
}

function clearForm() {
  document.getElementById('readingDate').value = "";
  document.getElementById('readingMax').value = "";
  document.getElementById('readingMin').value = "";
}
