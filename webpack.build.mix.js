/**
 * Build: Laravel Mix
 *
 * @see https://laravel.com/docs/5.8/mix
 * 
 */

const mix = require("laravel-mix");
const path = require("path");

Mix.manifest.refresh = _ => void 0;
const rootPath = path.join(__dirname);
const themeResources = path.join(__dirname, "resources");

mix.copyDirectory(`${rootPath}/app`, `build/app`);
mix.copyDirectory(`${rootPath}/zkd`, `build/zkd`);
mix.copyDirectory(`${rootPath}/vendor`, `build/vendor`);
mix.copyDirectory(`${rootPath}/dist`, `build/dist`);
mix.copyDirectory(`${themeResources}/views`, `build/resources/views`);
mix.copyDirectory(`${themeResources}/lang`, `build/resources/lang`);
mix.copyDirectory(`${themeResources}/inc`, `build/resources/inc`);
mix.copyDirectory(`${themeResources}/fields`, `build/resources/fields`);
mix.copyDirectory(`${themeResources}/blocks`, `build/resources/blocks`);
mix.copyDirectory(`${themeResources}/assets/svg`, `build/resources/assets/svg`);
mix.copy(`${themeResources}/index.php`, `build/resources`);
mix.copy(`${themeResources}/functions.php`, `build/resources`);
mix.copy(`${themeResources}/screenshot.png`, `build/resources`);
mix.copy(`${themeResources}/style.css`, `build/resources`);
