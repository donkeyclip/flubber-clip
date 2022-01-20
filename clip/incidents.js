import { CSSEffect } from "@donkeyclip/motorcortex";

export const container1 = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
       
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const container2 = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
