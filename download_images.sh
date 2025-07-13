
#!/bin/bash

IMAGES=(
  "gold-necklace.jpg"
  "diamond-ring.jpg"
  "pearl-earrings.jpg"
  "sapphire-bracelet.jpg"
  "ruby-pendant.jpg"
  "emerald-brooch.jpg"
  "amethyst-necklace.jpg"
  "topaz-ring.jpg"
  "opal-earrings.jpg"
  "hero-bg.jpg"
)

for img in "${IMAGES[@]}"; do
  curl -L "https://placehold.co/600x400/000000/FFFFFF/png?text=${img%.*}" -o "public/images/$img"
done
