'use strict'

const yt = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg')
const got = require('got')

const findAudioStream = (url) => {
	return yt.getInfo(url, {filter: 'audioonly'})
	.then((info) => {
		const [src] = info.formats
		.filter(f => typeof f.audioBitrate === 'number')
		.sort((f1, f2) => f2.audioBitrate - f1.audioBitrate) // desc

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

const listenToYoutube = (url, out) => {
	return findAudioStream(url)
	.then((url) => {
		return new Promise((yay, nay) => {
			createPCMStream(got.stream(url)) // todo: user-agent
			.on('error', nay)
			.on('end', yay)
			.pipe(out, {end: true})
		})
	})
}

module.exports = listenToYoutube
