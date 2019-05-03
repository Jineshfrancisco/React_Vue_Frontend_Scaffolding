# React_Vue_Frontend_Scaffolding

> A Simple  **Front-end Scaffolding** using  **React/Vue** for 
> web Development .. support  PHP, Codeigniter , Django, ASP ...etc   
> simply download and extract into your project , link `style.css` and `main.js` files to your master view 

> `<link rel="stylesheet" href="https://www.yoursite.com/public/css/style.css">`

> `<script src="https://www.yoursite.com/public/js/main.js"></script>`
> done

# Introduction

React or Vue Front-end Framework top on other Language  ..

laravel like Front-end scaffolding using npm package **[laravel-mix](https://github.com/JeffreyWay/laravel-mix)** 

- **CSS Frameworks**


	> "Twitter **Bootstrap** / **Materialize-css** " .
	
   >Custom CSS using sass [7-1 architecture pattern]

## Usage
- **Codeigniter using for demonstration**
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
	 
	 >if you don't want to use `Vue` remove  below lines from **package.json** file
	 
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
	 
 	>also comment Line `require('./react/Index');`

	if you want to use other js libraries such as **Axios** , **lodash**, **Bootstrap** or **Materialize-css** ...etc
	remove the Comment in appropriate line....

- **CSS FrameWork**  
	- >**7-1 Sass Architecture** (default configuration)
	- > It a good idea to write custom css using scss... 
	- >more about [7-1 Sass Architecture](https://sass-guidelin.es/)
	- >**Twitter Bootstrap**  
	- - > open app.scss file from `resources\sass\app.scss`
	- - > remove Line comment  `@import './vendor/bootstrap';`
	- - > if you want to use  `Bootstrap.js`  goto `resources\js\app.js` remove Line comment `require('./bootstrap');`
	 - - > jquery and popper.js are bootsrtap dependencies
		

	- >**Materialize-css** 
	- - > open app.scss file from `resources\sass\app.scss`
	- - > remove Line comment  `@import './vendor/materialize';`
	- - > if you want to use  `materialize.js`  goto `resources\js\app.js` remove Line comment `require('./materialize');`
	- - >**warning** Cross-site Scripting (XSS)-Affecting materialize-css
	- - > vulnerability can arise when user input is provided to the `tooltip` [more About](https://snyk.io/vuln/SNYK-JS-MATERIALIZECSS-174148)

- Link `css and js` files into `view` file
	
	>`<link rel="stylesheet" href="<?php echo base_url(); ?>public/css/style.css">`
	
	and 
	
	>`<script src="<?php echo base_url(); ?>public/js/main.js"></script>`
	
	>add **url** helper in  `autoload.php `   

- run  `npm run watch` or `npm run prod` 
