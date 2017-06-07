'use strict'

const listenToYoutube = require('.')

listenToYoutube('https://www.youtube.com/watch?v=rFtP7Xc_Fbo')
.then(() => console.error('end!!'))
.catch((err) => {
	console.error(err)
	process.exit(1)
})
