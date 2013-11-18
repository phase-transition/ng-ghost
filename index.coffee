

cluster = require 'cluster'
	
# running our socket-server on a worker process. 
unless cluster.isMaster then return require './socket-server'
cluster.fork()

# quick hack, and Ghost is running as a master process
require './Ghost'

#
# from now on, must write code to manage workers failure and stuff
#



