# Codeigniter_React_Vue

> A Simple  **Front-end Scaffolding** using  **React/Vue** for       **Codeigniter**
>

# Introduction

React or Vue Front-end Framework top on Codeigniter  ..
laravel like Front-end scaffolding using npm package **[laravel-mix](https://github.com/JeffreyWay/laravel-mix)** 

- **CSS Frameworks**


	> "Twitter **Bootstrap** / **Materialize-css** " .
	
   >Custom CSS using sass [7-1 architecture pattern]

## Usage

- Download   **Codeigniter latest Version** and unzip it .
- Clone or Download the Repository into  codeigniter folder..
- Open `package.json` file in a text editor remove unnecessary packages...


if you don't want to use `Vue` remove  below lines from package.json file

     "vue": "^2.6.10",
    "vue-template-compiler": "^2.6.10"
============================
    or if you don't need `React` remove below lines
    ============================
   

     "@babel/preset-react": "^7.0.0",
       "react": "^16.8.6",
      "react-dom": "^16.8.6",

 - Run `npm install`  
 -  **For  React**
	 >by default its configured for  react ... 
	 if you don't want to use `Vue` remove  below lines from **package.json** file
	`"vue": "^2.6.10",`
	`"vue-template-compiler": "^2.6.10"`

- **For Vue**  
	> Open `webpack.mix.js` file in a text editor
   
   comment the section  
   `mix.react(.....).sass(....);`
   
	>and  remove comment for `vue` configuration 
   
	 >`mix.js(.....).sass(....);`

    
	 >and open `app.js` file in folder  `resources/js/app.js`
 
	 >remove Line comment  `window._ = require('lodash');` and `require('./vue');`
 and comment Line `require('./react/Index');`

	>if you want to use other js libraries such as **Axios** , **lodash**, **Bootstrap** or **Materialize-css** ...etc remove the Comment in appropriate line....

- Link `css and js` files into `view` file
	
	>`<link rel="stylesheet" href="<?php echo base_url(); ?>public/css/style.css">`
	
	and 
	
	>`<script src="<?php echo base_url(); ?>public/js/main.js"></script>`
	
	>add **url** helper in  `autoload.php `   

- run  `npm run watch` or `npm run prod` 
