// ES5 - Prototypes instead of ES6 classes - we will remake it using classes later on

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true); // true is for asynchronous request

    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback('Error: ' + this.http.status);
        }
    }

    this.http.send();
}

// Make HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    // Send data as JSON string
    this.http.send(JSON.stringify(data));
}

// Make HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    // Send data as JSON string
    this.http.send(JSON.stringify(data));
}

// Make HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true); // true is for asynchronous request

    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, 'Post deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}