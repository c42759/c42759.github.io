FFmpeg is a versatile command-line tool that is way cooler than it sounds. It provides a robust set of features for handling video, audio, and other multimedia files and streams on Linux. Here are some of the best tricks you can do with FFmpeg to streamline your workflow.

## Play Videos

Sometimes you just need a quick way to watch a video without opening a full graphical application. Using FFmpeg's built-in player, `ffplay`, you can easily play a file from the terminal.

```bash
ffplay your_video_file.mp4
```

To loop the video indefinitely, you can add the `-loop 0` flag.

## Get Media Information

You can quickly grab media information like codecs, bitrates, and frame rates.

| Command | Description |
| :--- | :--- |
| `ffmpeg -i video.mp4` | Displays a comprehensive readout of the media file. |
| `ffprobe -show_streams -i video.mp4` | Provides even more detailed stream information. |

## Convert Media Formats

One of FFmpeg's strongest features is converting videos into different formats, such as extracting audio or creating GIFs.

**Extract Audio to MP3:**
```bash
ffmpeg -i input.mp4 -vn -acodec libmp3lame output.mp3
```
The `-vn` option discards the video stream, keeping only the audio.

**Convert Video to GIF:**
```bash
ffmpeg -i sample_video.mp4 output.gif
```

## Resize, Trim, and Crop

FFmpeg allows you to manipulate video dimensions and length without affecting quality. 

**Resize Video:**
```bash
ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4
```

**Trim Video:**
To extract a specific segment, for instance starting at 10 seconds and ending at 30 seconds:
```bash
ffmpeg -i input.mp4 -ss 00:00:10 -to 00:00:30 -c copy output_trimmed.mp4
```

**Crop Video:**
```bash
ffmpeg -i input.mp4 -vf "crop=640:480:0:0" output_cropped.mp4
```

## Record Your Screen

You can even use FFmpeg to record your desktop screen on Xorg sessions. 

```bash
ffmpeg -f x11grab -video_size 1920x1080 -r 30 -i :0.0+0,0 -t 10 output.mp4
```

This will capture your screen at 1920x1080 resolution at 30 FPS for 10 seconds.

By mastering these FFmpeg tricks, you can quickly manipulate multimedia files directly from your Linux terminal!

Source: [10 tricks you can do with FFmpeg on Linux](https://www.howtogeek.com/10-tricks-you-can-do-with-ffmpeg-on-linux/)
