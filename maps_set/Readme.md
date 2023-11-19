<!-- Both Map(), Set() follow insertion order -->

Methods in map:

new Map() => initiate map
map.set(key, value) => key with set value
map.get(key) => return value by key, return undefined if key doesn't exist in map
map.has(key) => return boolean true, if key exists, otherwise false
map.delete(key) => delete based on key
map.clear() => remove every element from the map
map.size => returns the current element count



Iterators over map

map.keys()   return iterator arr
map.values()   return iterator value
map.entries()  returns [{key value}]



map keys comparation works sameValueZero algorithm which mean === & differnce is NaN is converted to NaN so that it can used as key

map.size does not include duplicate keys, it takes latest value for both keys
both 1/2, 0.5 numberic keys are same

object can be also a key

const john = { name: 'john'};

map.set(john, 1);

we need to use map methods to set values;

map[key] = 10 // this is act as object


map.set returns chain itself

map.set(key1, value1)
.(key2, value2)
.(key3, value3)


convert map to obj => Object.fromEntries(map)

convert obj to map => Object.entries(obj)


========================================================================

set, is a special type of collection, used to store the unique values.

Methods

set.add(values) => adds a value & return itself
set.has(value)
set.delete(value) => deleted the value & return true, if obj exists
set.size
set.clear()

Iteration through set

=> for..of
=> forEach


<!-- WeakMap() -->

As we know that, Javascript keeps a value in memory, when a object is referable or reachable.


WeakMap doesn't support keys(), values(), entries()
it only supports

weakMap.set()
weakMap.get()
weakMap.has()
weakMap.delete()



Diff Map vs WeakMap

Map accepts any data type as key (primitives & others)
Map refers key, so if we need any reference, we can use, so it prevents object to be garbage collected.Memory is used unwantely


WeakMap accepts only object as keys.
WeapMap doesn't reference its object, key, so object will be garbage collected.Memory is free.

We can use Weakmap when to need to avoid memory leaks, object should be garbage collected when not needed.