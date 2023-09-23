import type { TwFill } from "./types";

export default ({
  color,
  class: className,
}: {
  class?: string;
  color: TwFill | (string & {});
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={[className, color].join(" ")}
  >
    <path d="M10.5339 2C8.70787 2 7.08024 2.48491 5.98816 3.7791C5.3656 4.51688 4.95902 5.46857 4.76893 6.63743C3.81295 6.77971 2.98696 7.15123 2.32659 7.73683C1.23686 8.70317 0.701294 10.1612 0.701294 11.8255C0.701294 14.0241 1.34412 15.6105 2.49423 16.6325C3.62612 17.6383 5.14141 18 6.70129 18C6.77567 18 6.84974 17.9986 6.92346 17.9958V18H16.022L16.0346 18L16.0509 18H16.2568V17.9968C17.3721 17.9637 18.4635 17.6751 19.2987 16.9333C20.2076 16.1261 20.7013 14.8834 20.7013 13.2C20.7013 11.9374 20.3313 10.7139 19.5066 9.86363C18.8816 9.21916 18.0458 8.84101 17.0427 8.79259C17.2483 6.95522 16.7944 5.28907 15.7122 4.05501C14.5545 2.73475 12.7579 2 10.5339 2Z" />
  </svg>
);