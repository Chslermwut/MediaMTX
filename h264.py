import subprocess

# Your RTSP input and RTMP output URLs
rtsp_url = 'rtsp://admin:iomc2024@192.168.100.63/LiveMedia/ch1/Media1/trackID=1'
rtmp_url = 'rtmp://localhost:1935/camera4'

# FFmpeg command to transcode H265 to H264, disable B-frames, and stream to RTMP
ffmpeg_command = [
    "ffmpeg",
    "-i", rtsp_url,
    "-c:v", "libx264",
    "-x264opts", "bframes=0",
    "-preset", "veryfast",          # Balanced preset
    "-s", "1280x720",               # Lower resolution
    "-r", "15",                     # Lower frame rate
    "-threads", "2",                # Limit threads
    "-crf", "23",                   # Adjust CRF for balance
    "-f", "flv",
    rtmp_url
]

# Run the command
subprocess.run(ffmpeg_command)
