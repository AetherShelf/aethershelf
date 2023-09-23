import type { BunPlugin, OnLoadResult } from "bun";
import type { Children } from "@kitajs/html";

import * as SVGParser from "svg-parser";

type CoreAttribues = {
  id?: string;
  tabindex?: string;
  autofocus?: string;
  lang?: string;
  "xml:space"?: string;
  class?: string;
  style?: string;
};
type GlobalEventAttributes = {
  oncancel?: string;
  oncanplay?: string;
  oncanplaythrough?: string;
  onchange?: string;
  onclick?: string;
  onclose?: string;
  oncuechange?: string;
  ondblclick?: string;
  ondrag?: string;
  ondragend?: string;
  ondragenter?: string;
  ondragexit?: string;
  ondragleave?: string;
  ondragover?: string;
  ondragstart?: string;
  ondrop?: string;
  ondurationchange?: string;
  onemptied?: string;
  onended?: string;
  onerror?: string;
  onfocus?: string;
  oninput?: string;
  oninvalid?: string;
  onkeydown?: string;
  onkeypress?: string;
  onkeyup?: string;
  onload?: string;
  onloadeddata?: string;
  onloadedmetadata?: string;
  onloadstart?: string;
  onmousedown?: string;
  onmouseenter?: string;
  onmouseleave?: string;
  onmousemove?: string;
  onmouseout?: string;
  onmouseover?: string;
  onmouseup?: string;
  onpause?: string;
  onplay?: string;
  onplaying?: string;
  onprogress?: string;
  onratechange?: string;
  onreset?: string;
  onresize?: string;
  onscroll?: string;
  onseeked?: string;
  onseeking?: string;
  onselect?: string;
  onshow?: string;
  onstalled?: string;
  onsubmit?: string;
  onsuspend?: string;
  ontimeupdate?: string;
  ontoggle?: string;
  onvolumechange?: string;
  onwaiting?: string;
  onwheel?: string;
};
type DocumentEventAttributes = {
  oncopy?: string;
  oncut?: string;
  onpaste?: string;
};
type BaseElementAttributes = CoreAttribues &
  GlobalEventAttributes &
  DocumentEventAttributes;
type StopProps = {
  offset?: string;
  "stop-color"?: string;
  "stop-opacity"?: string;
} & BaseElementAttributes;
type PatternProps = {
  children?: Children;
  width?: string;
  height?: string;
  x?: string;
  y?: string;
  patternUnits: string;
} & BaseElementAttributes;
type PathProps = {
  children?: Children;
  d?: string;
  fill?: string;
} & BaseElementAttributes;
type RectProps = {
  x?: string;
  y?: string;
  rx?: string;
  ry?: string;
  width?: string;
  height?: string;
  fill?: string;
} & BaseElementAttributes;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      defs: { children: Children } & BaseElementAttributes;
      rect: RectProps;
      path: PathProps;
      pattern: PatternProps;
      stop: StopProps;
    }
  }
}

type LinearGradientProps = {
  x1?: string;
  y1?: string;
  x2?: string;
  y2?: string;
  gradientUnits?: string;
  gradientTransform?: string;
  spreadMethod?: string;
  href?: string;
} & BaseElementAttributes;
export function LinearGradient({
  children,
  ...props
}: {
  children: Children;
} & LinearGradientProps) {
  return `<linearGradient ${Object.entries(props)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ")}>${children}</linearGradient>`;
}

function renderNode(node: SVGParser.Node | string): string {
  if (typeof node === "string") {
    return node;
  }
  if (node.type === "text") {
    return (node.value ?? "").toString();
  }

  return `<${node.tagName} ${Object.entries(node.properties ?? {})
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ")}>${node.children.map(renderNode).join("")}</${node.tagName}>`;
}
function renderSvg(
  svg: SVGParser.RootNode,
  props?: Record<string, string | undefined>
): string {
  const svgNode = svg.children[0];

  if (svgNode.type !== "element") {
    throw new Error("Expected an svg element");
  }

  return `<svg ${Object.entries(props ?? {})
    .filter(([k, v]) => v !== undefined)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ")} ${Object.entries(svgNode.properties ?? {})
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ")}>${svgNode.children.map(renderNode).join("")}</svg>`;
}

function mergeDefs(
  orgDefs: SVGParser.ElementNode,
  newDefsRoot: SVGParser.RootNode
): string {
  if (orgDefs.tagName !== "defs") {
    return renderNode(orgDefs);
  }
  const newDefs = newDefsRoot.children[0];
  if (newDefs.type !== "element" || newDefs.tagName !== "defs") {
    throw new Error("newDefs Node must be a `defs` element");
  }

  orgDefs.children = orgDefs.children.map((d) => {
    if (typeof d === "string" || d.type === "text") {
      return d;
    }
    const el = newDefs.children.find((v) =>
      typeof v === "string"
        ? false
        : v.type === "text"
        ? false
        : v.properties?.id === undefined
        ? false
        : v.properties?.id === d.properties?.id
    );
    return el ?? d;
  });

  return renderNode(orgDefs);
}
export type SvgElement = ({
  children,
  ...props
}: { children: Children } & { class?: string }) => string;
export const svgPlugin: BunPlugin = {
  name: "SVG Loader",
  setup(build) {
    build.onLoad({ filter: /\.svg$/ }, async (args) => {
      const svg = SVGParser.parse(await Bun.file(args.path).text());

      if (
        svg.children.length !== 1 ||
        svg.children[0].type !== "element" ||
        svg.children[0].tagName !== "svg"
      ) {
        throw new Error("Expected one root `svg` element");
      }
      const defsIndex = svg.children[0].children.findIndex(
        (child) =>
          typeof child !== "string" &&
          child.type === "element" &&
          child.tagName === "defs"
      );

      return {
        loader: "object",
        exports: {
          default: (
            props:
              | {
                  children?: Children;
                  class?: string;
                }
              | undefined
          ) => {
            if (
              props?.children !== undefined &&
              props?.children !== null &&
              Array.isArray(props.children) &&
              props.children.length !== 0 &&
              svg.children[0].type === "element" &&
              typeof svg.children[0].children[defsIndex] !== "string"
            ) {
              try {
                svg.children[0].children[defsIndex] = {
                  type: "text",
                  value: mergeDefs(
                    //@ts-ignore
                    svg.children[0].children[defsIndex],
                    SVGParser.parse(props.children.toString())
                  ),
                };
              } catch {
                console.log(props.children);
              }
            }
            return renderSvg(svg, { class: props?.class });
          },
        },
      } satisfies OnLoadResult;
    });
  },
};
