# listen-to-youtube-cli

**Stream YouTube audio and listen to it.**

When piping it, it will write raw audio ([PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)) to `stdout`. Otherwise, it will use [`speaker`](https://www.npmjs.com/package/speaker).

[![npm version](https://img.shields.io/npm/v/listen-to-youtube-cli.svg)](https://www.npmjs.com/package/listen-to-youtube-cli)
[![build status](https://api.travis-ci.org/derhuerst/listen-to-youtube-cli.svg?branch=master)](https://travis-ci.org/derhuerst/listen-to-youtube-cli)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/listen-to-youtube-cli.svg)
![minimum Node.js version](https://img.shields.io/node/v/listen-to-youtube-cli.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)


## Installing

```shell
npm install listen-to-youtube-cli
```


## Usage

```shell
Usage:
    listen-to-youtube <url>

Examples:
    listen-to-youtube 'https://www.youtube.com/watch?v=rFtP7Xc_Fbo'
```

## Magic UNIX

```shell
# add ./node_modules/.bin to your $PATH

# computer 1
npm i listen-to-youtube-cli airpaste
listen-to-youtube 'some-youtube-url' | airpaste

# computer 2
npm i airpaste speaker-cli
airpaste | speaker
```


## Contributing

If you have a question or have difficulties using `listen-to-youtube-cli`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/listen-to-youtube-cli/issues).
