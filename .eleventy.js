const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Static passthrough — no build step for these, served as-is.
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  // CSS is authored as separate cascade layers (tokens/reset/base/layout/
  // components/utilities) and linked directly in that order in base.njk —
  // no build-time concatenation, since writing a combined file back inside
  // the watched src/ directory would retrigger Eleventy's own watcher.
  eleventyConfig.addPassthroughCopy("src/assets/css");

  // Date filters used in blog templates and JSON-LD.
  eleventyConfig.addFilter("dateFriendly", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  eleventyConfig.addFilter("slugify", (str) => {
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  });

  // Tags on a post minus the internal "posts" bucket tag, for display + tag links.
  eleventyConfig.addFilter("visibleTags", (tags) => {
    return (tags || []).filter((tag) => tag !== "posts" && tag !== "all");
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date);
  });

  // All unique tags used across blog posts, for tag archive pages.
  eleventyConfig.addCollection("postTags", (collectionApi) => {
    const tagSet = new Set();
    collectionApi.getFilteredByTag("posts").forEach((post) => {
      (post.data.tags || []).forEach((tag) => {
        if (tag !== "posts" && tag !== "all") tagSet.add(tag);
      });
    });
    return [...tagSet].sort();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "txt"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
