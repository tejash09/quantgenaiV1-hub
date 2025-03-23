
import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = React.useRef<HTMLIFrameElement>(null);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      const iframe = videoRef.current;
      const player = new (window as any).YT.Player(iframe);
      
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      const iframe = videoRef.current;
      const player = new (window as any).YT.Player(iframe);
      
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
    }
  };
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl">
      {title && (
        <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/70 to-transparent">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      )}
      
      <div className="relative aspect-video">
        <iframe
          ref={videoRef}
          src={videoUrl}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title={title || "Video Player"}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-between">
        <button
          onClick={togglePlay}
          className="text-white hover:text-quantum-300 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMute}
            className="text-white hover:text-quantum-300 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-quantum-300 transition-colors"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
