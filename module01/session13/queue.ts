export default class Queue {
    list: number[] = []
    add(value:number){
        this.list.push(value)
    }   
}