import type { Children } from "@kitajs/html";

declare global {
  declare module "*.svg" {
    export default ({
      children,
      class: className,
    }: {
      children?: Children;
      class?: string;
    }) => string;
  }
  declare module "*.css" {
    export default string;
  }
  declare module "*.og.tsx" {
    export default string;
  }
}
