#map

Map object holds key-value pairs, it maintains the insertion order of the key, both(object, primitives can be key or values)

A key in the Map may only occurs only once, it is unique in the maps collections.

sameness algorithm

Javascript provides 3 ways to compare the value-comparison

1. == ( does type conversion before comparasion) (NaN != NaN & -0 == +0)
2. === (does not converts, if it finds value type different, returns false)
3. Object.is()