'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Hello World\n');
}).listen(port);

class Hash {
    constructor() {
        this.map = {}
        
    }

    hash(string) {
        //return size % 
        const H = 37; // 37 would produce less than 7 collisions in each case
        for (var i = 0; i < string.length; i++) {
            total += H * total + string.charCodeAt(i);// charCodeAt script return a character’s ASCII value after multiplying the ASCII value by a multiplier H
        }
        total %= this.table.length;
        if (total < 1) this.table.length - 1
        return parseInt(total);
    }

    showDistro() {
        for (const key in this.table) {
            if (this.table[key] !== undefined) { console.log(key, ' : ', this.table[key]);}
        }
    }

    put(data) {
        const pos = this.hash(data);
        this.table[pos] = data;
    }

    get(key) {
        return this.table[this.hash(key)];

    }

    add(key, value) {
        let size = this.hash(key)
        if (!this.map[size]) {
            this.map[k] = []
        }
        this.map[size].push(value)
    }
    get(key) {
        let size = this.hash(key)
        return this.map[k]
    }
}

let p = new Hash()



console.log(p)