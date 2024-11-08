class MyNode {
    private element : number 
    private next : any

    constructor(element:number){
        this.element = element
        this.next = null 
    }
}

class Linkedlist {
    private head : any 
    private size : number 
    constructor(){
        this.head = null
        this.size = 0
    }

    add(element:number){
        let node = new MyNode(element)

        let current 

        if(this.head == null){
            this.head = node
        } else {

            current = this.head

            // kalau current.nect == null, maka while nya berhenti
            while(current.next){
                current = current.next
            }

            current.next = node
            

        }
        this.size += 1
    }

    search(element:number) { 
        
        let index = 0
        let current = this.head

        while( current != null){
            if(current.element == element) {
                return index 
            }

            index += 1
            current = current.next
           
        }

        return -1

    }
}

const linkedlist1 = new Linkedlist()

linkedlist1.add(3)
linkedlist1.add(7)

console.log(linkedlist1)

console.log(linkedlist1.search(7))

linkedlist1.add(10)

console.log(JSON.stringify(linkedlist1))