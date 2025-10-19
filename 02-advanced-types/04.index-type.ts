type DataStore = {
  [prop: string]: number | boolean
}
// another ways of achieving is:
let someObj: Record<string, number | boolean>

let store: DataStore = {}
store.id = 5;
// store.name = 'OneStore'
store.isOpen = true
