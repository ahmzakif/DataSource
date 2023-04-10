function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		showData(this);
	  }
	};
	xhttp.open("GET", "data.xml", true);
	xhttp.send();
  }
  
  function showData(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table = "<tr><th>Course ID</th><th>Title</th><th>Department Name</th><th>Credits</th></tr>";
	var x = xmlDoc.getElementsByTagName("course_content");
	for (i = 0; i < x.length; i++) {
	  table += "<tr><td>" +
	  x[i].getElementsByTagName("course_id")[0].childNodes[0].nodeValue +
	  "</td><td>" +
	  x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
	  "</td><td>" +
	  x[i].getElementsByTagName("dept_name")[0].childNodes[0].nodeValue +
	  "</td><td>" +
	  x[i].getElementsByTagName("credits")[0].childNodes[0].nodeValue +
	  "</td></tr>";
	}
	document.getElementById("courseTable").innerHTML = table;
  }
  