import subprocess

# Your RTSP input and RTMP output URLs
rtsp_url = 'rtsp://admin:iomc2024@192.168.100.63/LiveMedia/ch1/Media1/trackID=1'
rtmp_url = 'rtmp://localhost:1935/camera4'

# FFmpeg command to transcode H265 to H264, disable B-frames, and stream to RTMP
ffmpeg_command = [
    "ffmpeg",
    "-i", rtsp_url,                # Input RTSP stream (H265)
    "-c:v", "libx264",             # Transcode to H264
    "-x264opts", "bframes=0",      # Disable B-frames (important for WebRTC)
    "-preset", "fast",             # Fast encoding preset
    "-f", "flv",                   # Output format (FLV for RTMP)
    rtmp_url                       # RTMP destination (MediaMTX server)
]

# Run the command
subprocess.run(ffmpeg_command)
