'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Hello World\n');
}).listen(port);


class Users { // js classes act like c++ structs
    constructor() {    
    }
    
    login(){
      
      let email = document.getElementById('email').value, 
          password = document.getElementById('password').value,
          firstname = document.getElementById('fname').value,
          lastname = document.getElementById('lname').value;
      
      //alert(email, password, firstname, lastname); //alert is a pop up box
    }
  }
  
      
  const user = new Users();
  const login = user.login

//HTML
/*
<input type="text" id="email" />
<input type="text" id="password" />
<input type="text" id="fname" />
<input type="text" id="lname" />
<button id="login" onclick="login()">submit</button>
*/

class Hash {
    constructor() {
        this.map = {}
        this.length = 0;
        this.size = 0;
        
    }

    hash(string) {
        //return size % 
        const H = 37; // 37 would produce less than 7 collisions in each case
        for (var i = 0; i < string.length; i++) {
            total += H * total + string.charCodeAt(i);// charCodeAt script return a character’s ASCII value after multiplying the ASCII value by a multiplier H
        }
        total %= this.table.length;
        if (total < 1) this.table.length - 1;
        return parseInt(total);
    }

    showDistro() {
        for (const key in this.table) {
            if (this.table[key] !== undefined) { 
                console.log(key, ' : ', this.table[key]);
            }
        }
    }

    store(data) { // stores only after there is no collisons
        const pos = this.hash(data);
        this.table[pos] = data;
    }

    get(key) {
        return this.table[this.hash(key)];

    }

    add(key, value) { // maybe not be necessary 
        let size = this.hash(key);
        if (!this.map[size]) {
            this.map[k] = [];
        }
        this.map[size].push(value);
    }
    search(key) {
        let size = this.hash(key);
        return this.map[k];
    }
}

let p = new Hash()

//bucket chaining for resizing
class linear extends Hash {
    constructor(){
        super(); // keyword is used to access and call functions on an object's parent (avoid duplications)
        this.values = new array();
    }

    build_bucketchains(){
        for(var i = 0; i < this.table.length; i++){
            this.table[i] = new array();
        }
    }
    showDistro() {
        for (const key in this.table) {
            if (this.table[key] !== undefined) { 
                console.log(key, ' : ', this.table[key]);
            }
        }
    }

    store(key, data){
        const position = this.hash(key);
             if(this.table[position] === undefined){
                this.table[position] = key;
                this.values[position] = data;
            }
        else {
            while (this.table[position] !== undefined){
                position++;
             }
            this.table[position][index] = data;
        }
    }

    search(key){
        const position = this.hash(key);
        let index = 0;
        if (this.table[position][index] != key && this.table[position][index] != NULL){
            return this.table[position][index];
        } 
        else { 
            return null;
        }
        //index++;
    }
}




console.log(p)