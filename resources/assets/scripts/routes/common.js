import cookieBar from "../components/cookieBar";
import { handleNavigationToggler } from "../components/navigation";
import { lightboxGallery, smoothScroll } from "../components/utils";

export default {
  init() {
    cookieBar.init();
    lightboxGallery();
    smoothScroll();
    handleNavigationToggler();
  },
  finalize() {}
};
