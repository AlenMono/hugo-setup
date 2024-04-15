module.exports = {
  plugins: [
    require("postcss-inline-svg"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("postcss-custom-media"),
    require("postcss-color-function"),
    require("postcss-responsive-type"),
    require("postcss-svgo"),
    require("postcss-calc"),
    require("postcss-normalize"),
    require("autoprefixer")({
      browserlist: [
        ">1%",
        "last 2 versions",
        "Firefox ESR",
        "not ie < 9", // React doesn't support IE8 anyway
      ],
      flexbox: "no-2009",
    }),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: { removeAll: true },
          calc: false,
        },
      ],
    }),
  ],
};
