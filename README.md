# lab-try-js-basic-env

good for trying js tech stack in node.js cmd mode and browser mode. 

```
prepare

dir:
src
dist
static
luggage

dev dependencies:
npm install
or
babel
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/cli
webpack
npm install --save-dev webpack webpack-cli  webpack-dev-server
npm install --save-dev html-webpack-plugin clean-webpack-plugin
css
npm install --save-dev style-loader css-loader
static files
npm install --save-dev copy-webpack-plugin
lint
npm install --save-dev eslint
npx eslint --init （To chech syntax and find problems; JS modules import export; ~~React framework~~）
lint with webpack
npm install --save-dev eslint-webpack-plugin
```

```
node

cd src
node 11.mjs

```
```
lint
(syntax check only)

cd src
npx eslint 11.mjs
```
```
browser

npm run build, python3 -m http.server 8080
or
npm start
```
