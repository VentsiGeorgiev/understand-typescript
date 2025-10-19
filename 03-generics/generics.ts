let names = ['John', 'Max']

type DataStor<T> = {
  [key: string]: T
}

let myStore: DataStor<string | boolean> = {}
myStore.id = '0x001'
myStore.isOpen = false
// myStore.open = 08

function merge<T>(a: T, b: T) {
  return [a, b]
}

const ids = merge<number>(1, 2)

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b }
}

const obj = mergeObj({ id: 1 }, { userName: 'Max' })
