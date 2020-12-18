"use strict";

// ES5
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);

AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let postES5 = new AttachedPostES5("Vasily", "123", "12.12.2020");
postES5.edit("text");
postES5.makeTextHighlighted();
console.log(postES5);

// ES6
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let postES6 = new AttachedPostES6("Jeka", "123", "12.12.2020");
postES6.edit("text");
postES6.makeTextHighlighted();
console.log(postES6);



