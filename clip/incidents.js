import { CSSEffect, loadPlugin } from "@donkeyclip/motorcortex";
import FlubberPluginDefinition from "@donkeyclip/motorcortex-flubber";
const FlubberPlugin = loadPlugin(FlubberPluginDefinition);
export const container1appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const container2appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const container3appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const container4appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const container5appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const container6appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const container7appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const container8appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const container9appear = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const flubber2 = (selector, duration, easing = "linear") =>
  new FlubberPlugin.Flubber(
    {
      animatedAttrs: {
        d: "@initParams.SVG2"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const flubber3 = (selector, duration, easing = "easeInOutSine") =>
  new FlubberPlugin.Flubber(
    {
      animatedAttrs: {
        d: "@initParams.SVG3"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const flubber4 = (selector, duration, easing = "easeInOutSine") =>
  new FlubberPlugin.Flubber(
    {
      animatedAttrs: {
        d: "@initParams.SVG4"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const flubber5 = (selector, duration, easing = "easeInOutSine") =>
  new FlubberPlugin.Flubber(
    {
      animatedAttrs: {
        d: "@initParams.SVG5"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const flubber6 = (selector, duration, easing = "easeInOutSine") =>
  new FlubberPlugin.Flubber(
    {
      animatedAttrs: {
        d: "@initParams.SVG6"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const flubber7 = (selector, duration, easing = "easeInOutSine") =>
  new FlubberPlugin.Flubber(
    {
      animatedAttrs: {
        d: "@initParams.SVG7"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const flubber8 = (selector, duration, easing = "easeInOutSine") =>
  new FlubberPlugin.Flubber(
    {
      animatedAttrs: {
        d: "@initParams.SVG8"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const flubber9 = (selector, duration, easing = "easeInOutSine") =>
  new FlubberPlugin.Flubber(
    {
      animatedAttrs: {
        d: "@initParams.SVG9"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const containerAboutUsaAppear = (
  selector,
  duration,
  easing = "easeInOutSine"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const subscribeButton = (selector, duration, easing = "easeInOutSine") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale: 1,
        },
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const text1appear = (selector, duration, easing = "easeInOutSine") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
        fontWeight: "bold",
        fontSize: "25px",
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const text1remove = (selector, duration, easing = "easeInOutSine") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 0,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const text2appear = (selector, duration, easing = "easeInOutSine") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
        fontWeight: "bold",
        fontSize: "25px",
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const text2remove = (selector, duration, easing = "easeInOutSine") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 0,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
export const socialMediaAppear = (
  selector,
  duration,
  delay = "@stagger(0,1200)",
  easing = "easeInOutSine"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: "25px",
        height: "25px",
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
