import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { flubber1,flubber3,flubber4,flubber5,flubber6,flubber7,flubber8,flubber9,container5appear,container6appear,container7appear,container8appear,container9appear,container1appear,container2appear,container3appear,container4appear} from "./incidents";
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
});

clip.addIncident(container1appear(".container1,#flubber",1000), 0);
clip.addIncident(container2appear(".container2",1000),2000);
clip.addIncident(flubber1("#flubber",1000),2000);
clip.addIncident(container3appear(".container3",1000),4000);
clip.addIncident(flubber3("#flubber",1000),4000);
clip.addIncident(container4appear(".container4",1000),6000);
clip.addIncident(flubber4("#flubber",1000),6000);
clip.addIncident(container5appear(".container5",1000),8000);
clip.addIncident(flubber5("#flubber",1000),8000);
clip.addIncident(container6appear(".container6",1000),10000);
clip.addIncident(flubber6("#flubber",1000),10000);
clip.addIncident(container7appear(".container7",1000),12000);
clip.addIncident(flubber7("#flubber",1000),12000);
clip.addIncident(container8appear(".container8",1000),14000);
clip.addIncident(flubber8("#flubber",1000),14000);
clip.addIncident(container9appear(".container9",1000),16000);
clip.addIncident(flubber9("#flubber",1000),16000);






