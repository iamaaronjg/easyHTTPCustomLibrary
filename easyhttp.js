// ES5 - Prototypes instead of ES6 classes - we will remake it using classes later on

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true); // true is for asynchronous request

    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback('Error: ' + this.http.status);
        }
    }

    this.http.send();
}

// Make HTTP POST request


// Make HTTP PUT request


// Make HTTP DELETE request
