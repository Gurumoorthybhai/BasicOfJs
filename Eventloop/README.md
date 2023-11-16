-> Event loop
-> Event loop visual representation
-> Heap
-> Queue
-> 

delay of 0, means message is not runned immediately.


MicroTask Queue:
Which has the higher priority than the callback queue, they are the crucial for handling asynchronous task, they ensure that critical tasks are completed before next rendering.
such as
-> Promises, when a promise is settled, it immediately calls .then or .catch method 

-> Mutational Observers  ( when their is a DOM )

Callback Queue