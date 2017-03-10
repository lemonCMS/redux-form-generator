# lemon-react



[![Dependency Status][dep-status-img]][dep-status-link] [![devDependency Status][dev-dep-status-img]][dev-dep-status-link]
[![Gitter][gitter-img]][gitter-link] [![npm version][npm-badge]][npm-link]


> Your One-Stop solution for a full-stack app with ES6/ES2015 React.js featuring universal Redux, React Router, React Router Redux Hot reloading, CSS modules, Express 4.x, and multiple ORMs. :rocket:

_Formerly known as choonkending/react-webpack-node_

[dep-status-img]: https://david-dm.org/choonkending/react-webpack-node.svg
[dep-status-link]: https://david-dm.org/choonkending/react-webpack-node
[dev-dep-status-img]: https://david-dm.org/choonkending/react-webpack-node/dev-status.svg
[dev-dep-status-link]: https://david-dm.org/choonkending/react-webpack-node#info=devDependencies
[gitter-img]: https://badges.gitter.im/Join%20Chat.svg
[gitter-link]: https://gitter.im/choonkending/react-webpack-node?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[npm-badge]: https://badge.fury.io/js/react-webpack-node.svg
[npm-link]: http://badge.fury.io/js/react-webpack-node



## Features:
- ~~isomorphic~~ [**universal**](https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb#.4x2t3jlmx) Rendering
- [**Redux**](https://github.com/reactjs/redux) Predictive state containers.
- Server-side rendering with [**React Router**](https://github.com/reactjs/react-router) 2.x. Having server-side rendering allows you to pre-render the initial state of your components when a user (or search engine crawler) requests a page.
- Integrating Redux with React Router with ~~Redux Simple Router~~ [React Router Redux](https://github.com/reactjs/react-router-redux)
- Asynchronous Data Fetching on server-side rendering
- Server side authentication + Redirecting for components
- Hot reloading using [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr)
- Time travel using [**Redux-Devtools Chrome Extension**](https://github.com/zalmoxisus/redux-devtools-extension)
- [**Webpack**](https://github.com/webpack/webpack) for both development and production bundles. It's (in my opinion) the best bundler for JS, CSS, LESS, images, and lots more!
- [**CSS Modules**](https://github.com/css-modules/css-modules) allows for modular and reusable CSS. Say goodbye to conflicts (most of them) and global scope

- **Unit Testing** with webpack, karma, jsdom, mocha, sinon & enzyme
	- Reducers
	- Components ([Enzyme](http://airbnb.io/enzyme))
	- Synchronous and Asynchronous Actions

- Express 4.x server with a ton of middleware

## What is this repository?
It is a mashup between the repositories of 
 - reactGo (https://github.com/reactGo/reactGo)
 - react-redux-universal-hot-example (https://github.com/erikras/react-redux-universal-hot-example)

##But why?
Because i have multiple projects running on the react-redux-universal-hot-example boilerplate, but support is discontinued.
I was looking for a new boilerplate that is keeping up with the latest features. And hopefully this can be merged easy with this repo.
Also because i need JWT authentification and need the use of a custom backend (Laravel 5.3)
This package together with lemon-laravel will be the basis of a boilerplate for our needs en purposes.

##Should i use this?
Well that is up to you, but there are no garanties. But if you would like to use React and Laravel/Lumen or any other custom framework as backend and you would like to use jwt. i would say give it a go!
 
 ##How to use?
 - Clone this repo
    - install with npm
 - Clone lemon-laravel
    - install with composer
    - run migrations
 -Setup nginx with the nginx config given 
 
 
License
===============
MIT
