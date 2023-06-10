module.exports = function (eleventyConfig) {
  // pass through: css, robots.txt
  eleventyConfig.addPassthroughCopy({ "./src/css/*.css": "css" });
  eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "robots.txt" });

  return {
    dir: {
      input: "src",
      layouts: "_includes",
    },
  };
};
