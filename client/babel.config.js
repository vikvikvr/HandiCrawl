module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            hooks: "./hooks",
            components: "./components",
            containers: "./containers",
            services: "./services",
          },
        },
      ],
    ],
  };
};
