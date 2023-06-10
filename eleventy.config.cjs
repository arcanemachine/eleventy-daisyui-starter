module.exports = function (eleventyConfig) {
  // pass through bundle
  eleventyConfig.addPassthroughCopy({ "./src/css/*.css": "css" });

  return {
    dir: {
      input: "src",
      layouts: "_includes",
    },
  };
};
