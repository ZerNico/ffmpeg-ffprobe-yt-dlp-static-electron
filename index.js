var os = require('os')
var path = require('path')

var platform = os.platform()
var ext = ''

if (platform === 'win32') {
  platform = 'win'
  ext = '.exe'
} else if (platform === 'darwin') {
  platform = 'mac'
} else {
  console.error(new Error('Unsupported platform.'))
  process.exit(1)
}

var binDir = path.join(__dirname, 'bin', platform)
var paths = {}

paths.ffmpeg = {}
paths.ffmpeg.path = path.join(binDir, 'ffmpeg' + ext)

paths.ffprobe = {}
paths.ffprobe.path = path.join(binDir, 'ffprobe' + ext)

paths.ytdlp = {}
paths.ytdlp.path = path.join(binDir, 'yt-dlp' + ext)

module.exports = paths
