import React from 'react';

interface AudioPlayerProps {
  trackUrl: string;
  title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ trackUrl, title }) => {
  return (
    <div className="w-full">
      <iframe 
        title={title}
        width="100%" 
        height="166" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23a855f7&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
        className="rounded-md"
      ></iframe>
    </div>
  );
};

export default AudioPlayer;