module.exports = function(eleventyConfig) {
    console.log(process.env.FULL_URL)
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget("./src/");
    eleventyConfig.addGlobalData('deployURL',process.env.FULL_URL)
    
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "docs",
        includes: "_includes",
      }
    }
  };