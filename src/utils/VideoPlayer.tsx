import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import Player from 'video.js/dist/types/player';
import "video.js/dist/video-js.css"; // Import Video.js styles

interface VideoPlayerProps {
  src: string;
  type?: string;
}

const VideoPlayer = ({ src, type = "video/mp4" }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (playerRef.current) {
      playerRef.current.dispose();
      playerRef.current = null;
    }

    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        controls: false,
        autoplay: true,
        muted: true,
        loop: true,
        fluid: true,
        responsive: true,
        preload: "auto",
        sources: [
          {
            src: src,
            type: type,
          },
        ],
        bigPlayButton: false,
      });

      player.addClass("vjs-no-control-bar");

      player.on("loadedmetadata", function () {
        console.log("Video metadata loaded");
        player.play();
        
        // Add click handler to unmute
        const wrapper = document.querySelector('[data-vjs-player]');
        if (wrapper) {
          wrapper.addEventListener('click', () => {
            player.muted(false);  // Unmute on click
          }, { once: true });
        }
      });

      player.on('error', function() {
        console.error('Video Player Error:', player.error());
      });

      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [isMounted, src, type]);

  if (!isMounted) return null;

  return (
    <div style={{ width: '100%', position: 'relative', borderRadius: '50px' }}>
      <div 
        data-vjs-player 
        style={{ 
          top: 0,
          left: 0,
          width: '100%',
          maxHeight: '610px'
        }}
      >
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered vjs-fluid"
          playsInline
          muted
          style={{ width: '100%', height: '100%' }}
        >
          <source src={src} type={type} />
          <p className="vjs-no-js">
            To view this video please enable JavaScript, or consider upgrading to a web browser that supports HTML5 video
          </p>
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
