declare module "*.svg" {
  export default ({
    children,
    class: className,
  }: {
    children: Children;
    class?: string;
  }) => string;
}
declare module "*.css" {
  export default string;
}
