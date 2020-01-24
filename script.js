const logs = [
    "01/Aug/1995:00:54:59 -0400 GET /images/opf-loghho.gif HTTP/1.0 200 32511",
    "01/Aug/1995:00:55:04 -0400 GET /images/ksclogomedium.gif HTTP/1.0 200 5435",
    "01/Aug/1995:00:55:06 -0400 GET /images/ksclogosmall.gif HTTP/1.0 403 298",
    "01/Aug/1995:00:55:09 -0400 GET /images/ksclogomedium.gif HTTP/1.0 200 5345",
    "01/Aug/1995:00:55:18 -0400 GET /images/opf-logo.gif HTTP/1.0 200 65",
    "01/Aug/1995:00:56:52 -0400 GET /images/ksclogosmall.gif HTTP/1.0 200 434",
    "01/Aug/1995:00:57:52 -0400 GET /images/ksclogosmall.gif HTTP/1.0 200 656",
    "01/Aug/1995:00:58:52 -0400 GET /images/ksclogolarge.gif HTTP/1.0 200 7647",
    "01/Aug/1995:00:58:52 -0400 GET /images/ksclogolarge.gif HTTP/1.0 200 7647",
    "01/Aug/1995:00:58:52 -0400 GET /images/ksclogolarge.gif HTTP/1.0 200 7647",
    "01/Aug/1995:00:58:52 -0400 GET /images/ksclogolarge.gif HTTP/1.0 200 7647",
    "01/Aug/1995:00:59:52 -0400 GET /images/ksclogomedium.gif HTTP/1.0 200 3546",
    "01/Aug/1995:00:59:54 -0400 GET /images/ksclogolarge2.gif HTTP/1.0 200 6463",
    "01/Aug/1995:00:59:55 -0400 GET /images/ksclogosmall.gif HTTP/1.0 200 767",
    "01/Aug/1995:00:59:55 -0400 GET /images/ksclogosmall.gif HTTP/1.0 200 525",
    "01/Aug/1995:00:59:55 -0400 GET /papa/ksclogosmall.gif HTTP/1.0 200 525",
    "01/Aug/1995:00:59:55 -0400 GET /images/rere.gif HTTP/1.0 200 36",
    "01/Aug/1995:00:59:55 -0400 GET /images/rere2.gif HTTP/1.0 200 45",
    "01/Aug/1995:00:59:55 -0400 GET /images/rere.gif HTTP/1.0 200 36",
    "01/Aug/1995:00:59:55 -0400 GET /images/rere2.gif HTTP/1.0 200 45",
    "01/Aug/1995:00:59:55 -0400 GET /images/rere.gif HTTP/1.0 200 36"
  ];

/* let object = {
    date: "",
    val: "",
    request: "",
    filename: "",
    protocol: "",
    status: "",
    size: ""
}
  
 function filterValidLogs(logs) {
    return logs.map(function(item) {
        console.log(item.split(" "));
    }) 
}

filterValidLogs(logs); 

function filterValidLogs(logs) {
    return logs.map(function(item) {
       // const result10 = item.split(" ").filter(logs => logs.length < 10);
     const result10 = item.split(" ").slice(3, 4) + ` ` + item.split(" ").slice(6, 7); //The table should show the filename and cumulative bytes transferred for each object
     //const result2 = item.split(" "); 
        console.log(result10);
    }) 
}

filterValidLogs(logs);
https://stackoverflow.com/questions/36120265/how-to-convert-text-file-to-json-in-javascript
*/

// 1. Get an array of cells by splitting the string on the carriage return (rows), 
// then using map to return an new array based on the row split on the spaces.

//2. Headings are the first nested array in cells.

/* var cells = logs.split('\n').map(function (el) { return el.split(/\s+/); });
console.log(cells); */
var headings = ['data', 'val', 'getrequest', 'filename', 'protocol', 'status', 'size']; 

/* function filterValidLogs(logs) {
    return logs.map(function(item) {
     var cells = item.split("\n").map(function (el) { return el.split(/\s+/); });
     //var headings = cells.shift();
     console.log(cells);
    }) 
} */
var cells = logs.toString().split("\n").map(function (el) { return el.split(/\s+/); });
var obj = cells.map(function (el) {
    var obj = {};
    for (var i = 0, l = el.length; i < l; i++) {
      obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
    }
    return obj;
  });

//filterValidLogs(logs);

//filterValidLogs(cells);

var json = JSON.stringify(obj);
console.log(json);