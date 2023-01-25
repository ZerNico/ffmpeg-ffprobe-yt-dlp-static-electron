# ffmpeg-ffprobe-yt-dlp-static-electron

## Description

I made this package as a replacement for my project's dependency on Vitaliy Alekhnovich's youtube-dl-ffmpeg-ffprobe-static which has been removed from npm. I incorporated ideas from [pietrop](https://www.npmjs.com/~pietrop)'s [ffmpeg-static-electron](https://www.npmjs.com/package/ffmpeg-static-electron) to make the binary paths electron-builder friendly.

Currently this module is only supporting the platforms needed for my project which are Mac OSX Intel and Windows 64bit.

Contains binaries for [ffmpeg, ffprobe](https://ffmpeg.org/) and [yt-dlp](https://github.com/yt-dlp/yt-dlp). I replaced youtube-dl with yt-dlp as youtube-dl support is slowly dying and takes forever to download anything.

## Installation

```
npm i ffmpeg-ffprobe-yt-dlp-static-electron
```

## Usage

```
import { ffmpeg, ffprobe, ytdlp } from 'ffmpeg-ffprobe-yt-dlp-static-electron'
import { fixPathForAsarUnpack } from 'electron-util'

console.log(fixPathForAsarUnpack(ffmpeg.path))
console.log(fixPathForAsarUnpack(ffprobe.path))
console.log(fixPathForAsarUnpack(ytdlp.path))

// /path/to/ffmpeg-ffprobe-yt-dlp-static-electron/bin/[mac|win]/ffmpeg[|.exe]
// /path/to/ffmpeg-ffprobe-yt-dlp-static-electron/bin/[mac|win]/ffprobe[|.exe]
// /path/to/ffmpeg-ffprobe-yt-dlp-static-electron/bin/[mac|win]/yt-dlp[|.exe]
```

^Using with fixPathForAsarUnpack from [sindresorhus](https://www.npmjs.com/~sindresorhus)'s [electron-util](https://www.npmjs.com/package/electron-util)


```
// electron-builder.yml

files:
  -"node_modules/ffmpeg-static/bin/${os}${/*}"
  -"node_modules/ffmpeg-static/index.js"
  -"node_modules/ffmpeg-static/package.json"

win:
  files:
    - "!node_modules/ffmpeg-ffprobe-yt-dlp-static-electron/bin/mac${/*}"

mac:
  files:
    - "!node_modules/ffmpeg-ffprobe-yt-dlp-static-electron/bin/win${/*}"

```