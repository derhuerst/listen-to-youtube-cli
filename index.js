'use strict'

const yt = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg')
const got = require('got')
const Speaker = require('speaker')

const findAudioStream = (url) => {
	return yt.getInfo(url, {filter: 'audioonly'})
	.then((info) => {
		const [src] = info.formats
		.filter((f) => !f.resolution) // audio streams don't have a resolution
		.sort((f1, f2) => f1.audioBitrate - f2.audioBitrate)

		if (!src) throw new Error('no audio stream found')
		return src.url
	})
}

const createPCMStream = (input) => {
	return ffmpeg(input) // todo: user-agent
	.noVideo()
	.audioCodec('pcm_s16le')
	.audioChannels(2)
	.format('s16le')
}

const listenToYoutube = (url) => {
	const speaker = new Speaker()

	return findAudioStream(url)
	.then((url) => {
		return new Promise((yay, nay) => {
			createPCMStream(got.stream(url)) // todo: user-agent
			.on('error', nay)
			.on('end', yay)
			.pipe(speaker, {end: true})
		})
	})
}

module.exports = listenToYoutube
