# Map geometry and styling provenance

This map uses the geometry from [Blank map of the U.S. with territories.svg](https://commons.wikimedia.org/wiki/File:Blank_map_of_the_U.S._with_territories.svg), by Heitordp. The Wikimedia file page identifies the current version as licensed under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). The downloaded source revision is January 6, 2022.

The unmodified source is retained as `source-map.svg`. Its SHA-256 is `10c9ad5d9b9cbb32564d0bbfb4d762d0b6c92faea8c25fcce40d5cd4b3565826`.

Source file: https://upload.wikimedia.org/wikipedia/commons/a/ae/Blank_map_of_the_U.S._with_territories.svg

## Adaptations

- Geometry is unchanged: 50 U.S. states, District of Columbia, and the five permanently inhabited U.S. territories (American Samoa, Guam, Northern Mariana Islands, Puerto Rico, and U.S. Virgin Islands).
- The 959 × 593 geometry uses a matching viewBox for responsive scaling. Alaska and the territories retain the source map's inset positions and scales; geographic simplifications are described in the SVG comments.
- CRM Group's warm white, Heritage Gold, navy, and pale-gold separator colors are applied in `map.css`.
- The `states` URL parameter highlights supplied two-letter codes and updates the map's accessible description. Empty or invalid codes do not imply licensure.
- External styling and JavaScript are served from this same static site. No analytics, contact submissions, or external runtime services are included.
