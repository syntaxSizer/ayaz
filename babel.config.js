module.exports = {
  babelrcRoots: ['.', 'packages/*'],
  presets: ["@babel/preset-react", ["@babel/preset-env",
  {
    targets: {
      esmodules: true,
    },
  }]]
};
