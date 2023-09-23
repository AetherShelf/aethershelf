# AetherShelf

TODO: Explain what this is

# Running

This project uses bun and watchexec, make sure you have those installed

```console
$ bun run dev
```

# Generate OG Image

```
nix run nixpkgs#imagemagick -- -verbose -density 1200 -fill "#eff1f5" -background "#1e1e2e" src/Logotype.svg -gravity center -scale 800x67 -extent 1200x630 -background transparent -font ./fonts/Roboto-Regular.ttf -pointsize 4 - -annotate +0+90 "Coming Soon..." src/Logotype.png
```
