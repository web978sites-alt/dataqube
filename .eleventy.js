const pluginRss = require("@11ty/eleventy-plugin-rss");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Static passthrough — no build step for these, served as-is.
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  // Concatenate the CSS layers into a single main.css at build time.
  // No PostCSS/webpack — just a fixed, deterministic file order.
  eleventyConfig.on("eleventy.before", () => {
    const cssDir = path.join(__dirname, "src/assets/css");
    const order = [
      "tokens.css",
      "reset.css",
      "base.css",
      "layout.css",
      "components.css",
      "utilities.css",
    ];
    const combined = order
      .map((file) => fs.readFileSync(path.join(cssDir, file), "utf8"))
      .join("\n");
    fs.writeFileSync(path.join(cssDir, "main.css"), combined);
  });
  eleventyConfig.addPassthroughCopy("src/assets/css/main.css");

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
