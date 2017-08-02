#!/usr/bin/env node
'use strict'

const mri = require('mri')
const tty = require('tty')
const Speaker = require('speaker')
const listenToYoutube = require('.')

const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: ['help', 'h', 'version', 'v']
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    listen-to-youtube <url>

Examples:
    listen-to-youtube 'https://www.youtube.com/watch?v=rFtP7Xc_Fbo'
\n`)
	process.exit()
}

if (argv.version || argv.v) {
	process.stdout.write(pkg.name + ' ' + pkg.version + '\n')
	process.exit(0)
}

const showError = function (err) {
	if (process.env.NODE_DEBUG === 'listen-to-youtube-cli') console.error(err)
	else process.stderr.write(err.toString() + '\n')
	process.exit(err.code || 1)
}

const isPiped = !tty.isatty(process.stdout.fd)
const out = isPiped ? process.stdout : new Speaker()

const url = argv._[0]
if (!url) showError('Missing url.')

listenToYoutube(url, out)
.catch(showError)
