# DashBoard

## Project Structure

We can make this more granular over time, and move things around as we see fit, but let’s go over what’s here.

* **src/api** - We’ll probably need to make calls to a backend API at some point. Put all that code here.– like userApi.js, productApi.js, etc.

* **src/components** - All pour Presentational (aka Dumb) components go here. These are the simple stateless ones that just take props.

* **src/containers** - The Container components go here. These are the stateful ones, and the ones that make the API calls. If you’re using Redux, these are the ones that are connected to the store. Notice that CSS and tests are in the same folder as their respective components.

* **src/resources** - Put the images and other resources in one place to start with.

* **src/index.js** - This is where we initialize the app and call ReactDOM.render, so it makes sense to keep this at the top level.

* **src/utils** - We’ll probably end up with miscellaneous utility functions – error handlers, formatters, and the like. We’ll usually put them in a file inside utils so we can access them easily.

* **package.json** - This file holds various metadata relevant to the project. The version field is used by npm to make sure the right version of the package is being installed.

* **.gitignore** - Git uses it to determine which files and directories to ignore, before you make a commit. A .gitignore file should be committed into your repository, in order to share the ignore rules with any other users that clone the repository.

* **.gitkeep** - Git cannot add a completely empty directory. So if we want to track empty directories in Git have created the convention of putting files called “.gitkeep” in these directories. The file could be called anything; Git assigns no special significance to this name.

* **.eslint.json** - ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013. Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines. Please add global rules here.

* **.vscode/settings.json** - Provides entry to configure user and workspace settings. You are provided with a list of Default Settings. Copy any setting that you want to change to the appropriate settings.json file.

## Important Article

 - [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
 - [Example](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c)
 - [Every Post Ever](https://daveceddia.com/archives/)

## Instruction

### Install webpack webpack-dev-serv globally so you can use these module globally.
> npm install -g webpack webpack-dev-server

### How to Install all dependency
We are using package.json, which will take care of all dependency. Just fire below command to install those dependency.
> npm install // Use sudo if need sdmin permission to install

### How to add dependency package on package.json
Please add your dependency on package.json, whenever you use any package. So that new developer will use your code and don't get compile error. Use below command to add
> npm install {your-Package-name} -save // this command will install your package and save the entry on package.json

### How to add Dev-dependency package on package.json
Please add your dependency on package.json, whenever you use any package. So that new developer will use your code and don't get compile error. Use below command to add
> npm install {your-Package-name} --save-dev // this command will install your package and save the entry on  package.json
