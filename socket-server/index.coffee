#
# basic socket.io server. PURE socket.io, no express :)
#

io = require('socket.io').listen 8087

io.sockets.on 'connection', (socket) ->
	socket.emit 'hi', {hello: 'world'}
	socket.on 'res', (data) ->
		console.log data