# DashBoard

 ## Docs ( Good Article to understand what's what.)
 1. [Detailed blogpost on how was our project built](http://blog.joanboixados.com/building-a-boilerplate-for-a-koa-redux-react-application-including-webpack-mocha-and-sass/)
 2. [Second Source against inspiration of our project](https://github.com/RyanCCollins/react-redux-simple-starter)
 2. [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
 3. [How to set up the project](https://www.robinwieruch.de/react-eslint-webpack-babel/)
 4. [Fix Elint Error using this link](https://stackoverflow.com/questions/44531243/eslint-module-build-failed-error-with-eslint-config-airbnb)

 # Documentation

## Getting Started
To try the example application out or to use the project, follow the instructions below.

1. **Clone repo**

    git clone https://github.com/Dheeraj-Karki/DashBoard.git

2. **Install dependencies**

    npm run setup

3. **Run development server**

   npm run start

   Development server should be running at http://localhost:8080/

4. **Make build**

   npm run build

##Instruction

1. *Install webpack webpack-dev-serv globally so you can use these module globally.
> 	npm install -g webpack webpack-dev-server

#How to Install all dependency
We are using package.json, which will take care of all dependency. Just fire below command to install those dependency.
>npm install // Use sudo if need sdmin permission to install

#How to add dependency package on package.json
Please add your dependency on package.json, whenever you use any package. So that new developer will use your code and don't get compile error. Use below command to add
> npm install {your-Package-name} -save // this command will install your package and save the entry on package.json

#How to add Dev-dependency package on package.json
Please add your dependency on package.json, whenever you use any package. So that new developer will use your code and don't get compile error. Use below command to add
> npm install {your-Package-name} --save-dev // this command will install your package and save the entry on package.json

## Technologies / Libraries

- [Node](https://nodejs.org/en/) - JS runtime environment
- [npm](https://www.npmjs.com/) - package manager
- [Babel](https://babeljs.io/) - ES6 transpiler
- [Webpack](https://webpack.github.io/) - module bundler & task runner
- [React](https://facebook.github.io/react/) - interfaces
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - hot reloading for react
- [react-router](https://github.com/rackt/react-router) - react application router
- [react-redux](https://github.com/rackt/react-redux) - react bindings for redux
- [react-css-modules](https://github.com/gajus/react-css-modules) - React CSS Modules implement automatic mapping of CSS modules.
- [react-foundation](https://github.com/nordsoftware/react-foundation) - Foundation React components, use or don't use.
- [Immutable](https://github.com/facebook/immutable-js) - data structures
- [Redux](https://github.com/rackt/redux) - awesome flux architecture
- [Redux Form](https://github.com/erikras/redux-form)- works with React Redux to enable an html form in React to use Redux to store all of its state.
- [redux-thunk](https://github.com/gaearon/redux-thunk) - thunk middleware for redux
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - API fetch network requests
- [redux-devtools](https://github.com/gaearon/redux-devtools) - redux development tool
- [SASS](http://sass-lang.com/) - styles
- [ESLint](http://eslint.org/) - linter
- [Mocha](http://mochajs.org/) - unit tests
- [jsdom](https://github.com/tmpvar/jsdom) - vdom to test React without browser
- [Expect](https://github.com/mjackson/expect) - assertion library
- [Chai / Immutable](http://chaijs.com/) - assertion library for Immutable JS
- A bunch of useful scripts

### Acknowledgements

This project is loosely based on: [This boilerplate](https://github.com/mezod/boilerplate-koa-redux-react).

Thank you to @mezod for their hard work and inspiration.