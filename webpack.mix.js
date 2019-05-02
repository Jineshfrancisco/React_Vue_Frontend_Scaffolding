const mix = require('laravel-mix');
// more about laravel-mix : https://laravel-mix.com/docs/4.0/
/**
 * For React
 */

 /**
 * if you use browserSync
 * first run :=  npm install  browser-sync browser-sync-webpack-plugin@2.0.1 --save-dev
 */

mix
	.react('resources/js/app.js', 'public/js/main.js')
	.sass('resources/sass/app.scss', 'public/css/style.css');
// .options({ processCssUrls: false })
// .browserSync(
// 	'http://localhost/php/CodeIgniter/codeigniter_mycustom_frontend/'
// );

/**
 * For Vue
 */

// mix
// 	.js('resources/js/app.js', 'public/js/main.js')
// 	.sass('resources/sass/app.scss', 'public/css/style.css');
// .options({
// 	processCssUrls: false
// })
// .browserSync('http://localhost/PHP/codeigniter/fionnweb/');


