var MyNode = /** @class */ (function () {
    function MyNode(element) {
        this.element = element;
        this.next = null;
    }
    return MyNode;
}());
var Linkedlist = /** @class */ (function () {
    function Linkedlist() {
        this.head = null;
        this.size = 0;
    }
    Linkedlist.prototype.add = function (element) {
        var node = new MyNode(element);
        var current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            // kalau current.nect == null, maka while nya berhenti
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size += 1;
    };
    Linkedlist.prototype.search = function (element) {
        var index = 0;
        var current = this.head;
        while (current != null) {
            if (current.element == element) {
                return index;
            }
            index += 1;
            current = current.next;
        }
        return -1;
    };
    return Linkedlist;
}());
var linkedlist1 = new Linkedlist();
linkedlist1.add(3);
linkedlist1.add(7);
console.log(linkedlist1);
console.log(linkedlist1.search(7));
linkedlist1.add(10);
console.log(JSON.stringify(linkedlist1));
