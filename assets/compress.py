import os
from moviepy.editor import VideoFileClip

def compress_video(video_full_path, output_file_name, target_size):
    """Compresses an MP4 video to a specified file size (in MB)."""
    # Load the video
    clip = VideoFileClip(video_full_path)
    
    # Get the current size in bytes
    current_size = os.path.getsize(video_full_path)
    
    # Calculate the target bitrate based on the target size in bits
    target_size_bytes = target_size * 1024 * 1024  # convert MB to bytes
    bitrate = int((target_size_bytes * 8) / clip.duration)  # target bitrate in bits per second

    # Write the compressed video
    clip.write_videofile(output_file_name, bitrate=str(bitrate))

def main(folder_path, target_size_mb=0.3):
    """Compresses all MP4 files in the given folder that are larger than the target size."""
    for file_name in os.listdir(folder_path):
        if file_name.endswith(".mp4"):
            full_path = os.path.join(folder_path, file_name)
            size_in_mb = os.path.getsize(full_path) / (1024 * 1024)  # size in MB
            
            if size_in_mb > target_size_mb:
                print(f"Compressing {file_name}...")
                output_path = os.path.join(folder_path, f"compressed_{file_name}")
                compress_video(full_path, output_path, target_size_mb)
                print(f"{file_name} compressed and saved as {output_path}")

if __name__ == "__main__":
    # Set the directory of the MP4 files
    video_folder = "loc2450"
    main(video_folder)

