

var mgjPlugin;

mgjPlugin = function (ghost) {
	this.app = ghost;
};

mgjPlugin.prototype.install = function(ghost) {
		var text = 'zxcvbnm'
		console.log(Object.keys(ghost))
};

mgjPlugin.prototype.uninstall = function (ghost) {
    return;
};

/** 
 * A method that will be called when the plugin is enabled.
 * Can optionally return a promise if async.
 * @parameter {Ghost} The current Ghost app instance
 */
mgjPlugin.prototype.activate = function (ghost) {
    return;
};

/** 
 * A method that will be called when the plugin is disabled.
 * Can optionally return a promise if async.
 * @parameter {Ghost} The current Ghost app instance
 */
mgjPlugin.prototype.deactivate = function (ghost) {
    return;
};



module.exports = mgjPlugin