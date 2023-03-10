# LocalStorage JSON Use

## Install

### By NPM

```sh
npm i localstorage-json-use
```

## What Is

_LocalStorage Json Use_ as simple application,
That fasilitates use from localstorage,
base to use object oriented programming with json and asynchronous methods.

## Code Example JS/TS

### Create New Folder With LocalStorage Files

```TS
import localStorageJson from 'localstorage-json-use'

localStorageJson.newLocalStorage('myLocalStorage')
```

### Instance New localStorage File

```TS
import localStorageJson from 'localstorage-json-use'

const myLocal = localStorageJson.create('person'{
  name: 'My name',
  age: 20
})

myLocal.localName// return personLocalStorage FILE
```

### Update Data

```TS
const data = await myLocal.accessData() // return {name: 'My name', age: 20}

data.name = 'newName'
data.age = 32
myLocal.save(data)

const newData = await myLocal.accessData() // return {name: 'newName', age: 32}
```

OR

```TS
await myLocal.update((data) => {
  data.name = 'newName'
  data.age = 32
  return data
})

const newData = await myLocal.accessData() // return {name: 'newName', age: 32}
```

### Clear

Remove localStorage file

```TS
myLocal.clear()
```

### Exists

Check if exists localStorage file

```TS
await myLocal.exists()// return true or false
```
