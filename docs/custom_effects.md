## Custom effects

## `get`
The `get` effect is used in pure event handlers to make `GET` requests to given endpoints. 

The value associated to the `get` effect id in the effects map is a map that configures how the effect will be processed. 

Example:
```js
registerEventHandler(
    "loadTodos",
    function(coeffects, payload) {
        return {
            get: {
                url: coeffects.serverUri + "/todos",
                successEvent: ["loadTodosSucceeded"]
            }
        };
    }
);
```
In the example above, we use the `get` effect inside the event handler for the `loadTodos` event in order to retrieve data from an endpoint. For the *TODO app* example we have implemented only two common configuration options: 
a. `url`: the url used in to make the `GET` request.
b. `successEvent`: The event that will be dispatched when the request finishes successfully.

### `mutate`
The `mutate` effect is used to mutate a value located on the `app-state` at a given path.

Example:

```js
registerEventHandler(
    "loadTodosSucceeded", 
    function loadTodosSucceeded(coeffects, [response]) {
        const todos = payload.results.map(item => ({
                        id: item.id,
                        text: 'Describe: ' + item.name,
                        done: !!item.description
                      }));;
        return {
          mutate: [{ path: ["todos"], newValue: todos }]
        };
    }
);
```

In the example shown above, the event handler for `loadTodosSucceeded` event returns an effects map containing a `mutate` effect that will set the new value of a part of the application state located at the `"todo"` path. 

Notice that the data associated to the `mutate` effect in the effects map is always a list of mutations. Each mutation is an object comprised of two properties: 
1. `path`: the path in the app state to get to the value we'd like to mutate. A path can be an array of strings like `['todos', 'status']` or a string in which each part of the path is separated by a dot, like `'todos.status'`. In both cases, the piece of state being mutated would be `appState.todos.status`.
2. `newValue`: the new value to be set .

### toast

The `toast` effect is used to display a toast.

Example:

```js
registerEventHandler(
    "displayError", 
    function displayError(coeffects, { message }) {
        return {
            toast: {
                text: message,
                milliseconds: 3000
            }
        };
  }
}
```
In the previous example, the event handler for `displayError` event returns an effects map containing a `toast` effect that will show a message during 3000 milliseconds. 

The value associated to the `toast` effect in the effects map is an object comprised of two properties:
1. `text`: the text that will be displayed by the toast.
2. `milliseconds`: the time in milliseconds that the toast will be visible.
