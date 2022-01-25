import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { socialMediaAppear,text1appear,text1remove,text2appear,text2remove,subscribeButton,containerAboutUsaAppear,flubber2,flubber3,flubber4,flubber5,flubber6,flubber7,flubber8,flubber9,container1appear,container2appear,container3appear,container4appear,container5appear,container6appear,container7appear,container8appear,container9appear} from "./incidents";
import { initParamsValidationRules, initParams } from "./initParams";
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

clip.addIncident(container1appear(".container1,#flubber",1000), 0);
clip.addIncident(container2appear(".container2",1000),2000);
clip.addIncident(flubber2("#flubber",1000),2000);
clip.addIncident(container3appear(".container3",1000),3500);
clip.addIncident(flubber3("#flubber",1000),3500);
clip.addIncident(container4appear(".container4",1000),5000);
clip.addIncident(flubber4("#flubber",1000),5000);
clip.addIncident(container5appear(".container5",1000),6500);
clip.addIncident(flubber5("#flubber",1000),6500);
clip.addIncident(container6appear(".container6",1000),8500);
clip.addIncident(flubber6("#flubber",1000),8500);
clip.addIncident(container7appear(".container7",1000),10500);
clip.addIncident(flubber7("#flubber",1000),10500);
clip.addIncident(container8appear(".container8",1000),12000);
clip.addIncident(flubber8("#flubber",1000),12000);
clip.addIncident(container9appear(".container9",1000),13500);
clip.addIncident(flubber9("#flubber",1000),13500);
clip.addIncident(containerAboutUsaAppear(".aboutUs",500),15000);
clip.addIncident(text1appear(".aboutUs #text1",500),15500);
clip.addIncident(text1remove(".aboutUs #text1",500),16500);
clip.addIncident(text2appear(".aboutUs #text2",500),17000);
clip.addIncident(text2remove(".aboutUs #text2",500),18000);
clip.addIncident(subscribeButton(".aboutUs #subscribe",500),18500);
clip.addIncident(socialMediaAppear(".sm svg",200),19000);









