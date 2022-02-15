import cookieBar from "../components/cookieBar";
import { handleNavigationToggler } from "../components/navigation";
import { lightboxGallery, smoothScroll } from "../components/utils";
import { featuredSlider} from "../components/slider";

export default {
  init() {
    cookieBar.init();
    lightboxGallery();
    smoothScroll();
    handleNavigationToggler();
    featuredSlider.init();
  },
  finalize() {}
};

