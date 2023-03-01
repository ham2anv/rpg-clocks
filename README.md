# rpg-clocks
A web component for adding clocks to your RPG page.

## Installing
Include a `<script>` element with a `src` attribute pointing to the `rpg-clock.js` file on your site.

## \<rpg-clock\>
The `<rpg-clock>` element will produce a clock as an inline element. `<rpg-clock>` can take a number of optional attributes:

- `size`: The number of segments in the clock. Default: 4.
- `checked`: The number of segments that are filled. Default: 0.
- `color`: The foreground color of the clock. Accepts any CSS color value. Default: black.
- `bg`: The background color of the clock. Accepts any CSS color value. Default: white.
- `alt`: Alt text. This should describe the clock. Example: "a four-segment clock with two filled segments."