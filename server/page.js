const path = require('path')

var page = {
	
	dir: path.join(__dirname,'../template/pages/'),

	getPath: function(name){
		return this.dir + name + '.html'
	},

}

module.exports = page