import "custom-event-polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Swiper from "swiper/js/swiper.js";

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}

import Router from "./util/Router";
import common from "./routes/common";
import home from "./routes/home";
import aboutUs from "./routes/about";

const routes = new Router({
  common,
  home,
  aboutUs
});

jQuery(document).ready(() => routes.loadEvents());
