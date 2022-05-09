import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {
  socialMediaAppear,
  text1appear,
  text1remove,
  text2appear,
  text2remove,
  subscribeButton,
  containerAboutUsaAppear,
  flubber2,
  flubber3,
  flubber4,
  flubber5,
  flubber6,
  flubber7,
  flubber8,
  flubber9,
  container1appear,
  container2appear,
  container3appear,
  container4appear,
  container5appear,
  container6appear,
  container7appear,
  container8appear,
  container9appear,
} from "./incidents";
import {initParams } from "./initParams";
import initParamsValidationRules
 from "./initParamsValidationRules";
export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "720px",
    height: "480px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap",
    },
  ],
});

clip.addIncident(container1appear(".container1,#flubber", 1000), 0);
clip.addIncident(container2appear(".container2", 1000), 2000);
clip.addIncident(flubber2("#flubber", 1000), 2000);
clip.addIncident(container4appear(".container4", 1000), 3500);
clip.addIncident(flubber4("#flubber", 1000), 3500);
clip.addIncident(container6appear(".container6", 1000), 5000);
clip.addIncident(flubber6("#flubber", 1000), 5000);
clip.addIncident(container8appear(".container8", 1000), 6500);
clip.addIncident(flubber8("#flubber", 1000), 6500);
clip.addIncident(containerAboutUsaAppear(".aboutUs", 500), 8000);
clip.addIncident(text1appear(".aboutUs #text1", 500), 8500);
clip.addIncident(text1remove(".aboutUs #text1", 500), 9500);
clip.addIncident(text2appear(".aboutUs #text2", 500), 10000);
clip.addIncident(text2remove(".aboutUs #text2", 500), 11000);
clip.addIncident(subscribeButton("#subscribe", 500), 11500);
