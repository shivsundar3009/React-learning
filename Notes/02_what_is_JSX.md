JSX, which stands for JavaScript XML, is a syntax extension used in React to describe the structure of UI components. It allows developers to write HTML-like code directly within JavaScript files, making it easier to create and visualize UI elements in React applications.

Here's a basic example of JSX:

``` Javascript

import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a JSX element.</p>
    </div>
  );
};

```

export default App;

In this example:

JSX elements look similar to HTML tags but are written within JavaScript code.

JSX allows embedding JavaScript expressions inside curly braces {}. This enables dynamic content and logic within JSX elements.

JSX elements can be nested and composed together to build complex UI structures.

If you don't use JSX syntax then the respective JavaScript code should be written as below,

``` Javascript

import { createElement } from 'react';

export default function App() {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello, this is a JSX Code!'
  );
}

```

Before JSX, developers had to use JavaScript functions like React.createElement() to create DOM elements, which could make the code harder to read and maintain, especially for larger UI structures. JSX simplifies the process by providing a more intuitive and HTML-like syntax for defining UI components in React applications.