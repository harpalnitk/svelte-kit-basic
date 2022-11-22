NPM module three.js added for 3-D Modelling website only in web site folder

remove type:module from package.json in folder three/examples/jsm to use OrbitControls

## to update all npm packages

npm i -g npm-check-updates
ncu -u
npm install

## To update svelte
npm i @sveltejs/adapter-auto --save-dev

npx svelte-migrate routes

# Different type of config files

## config files can be written in different languages like json,js,yaml etc


.editorconfig
.prettierrc  beautify code and save configuration

.eslintrc.js   : code specific config like no unused vars    earlier we had tslint which has now been dropped

tsconfig.json   controls the behavior of typescript compiler    es6: traget flavor of javascript to which ts files will get compiled to

vite.config.js/webpack/rollup : module bundler which bundles all files to a module before they get compiled to javascript
 vite uses rollup underneath

 package.json : needed for module bundler where we define all packages downloded from node

 .stylelintrc : checks for css formatting, consistent style

 tailwind.config.js: for help in css
 tailwind in turn requires postcss.config to remove unnecessary css

 .firebase.json  : controls hosting behavior on server
 .gitignore   : files not to be included in git repository

