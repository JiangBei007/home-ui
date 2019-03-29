// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
	"postcss-pxtorem": {
		  "rootValue": 32,
		  "propList": ["*"],
		  "selectorBlackList": [".scroll"],
		},
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    require('autoprefixer')
  }
}
