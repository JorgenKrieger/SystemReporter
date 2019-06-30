const presets = [
  "@babel/typescript",
  [
    "@babel/env",
    {
      "targets": "last 2 version",
      "useBuiltIns": "usage"
    }
  ]
];

module.exports = { presets }