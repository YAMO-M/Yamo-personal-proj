import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function SongPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Auto-play the audio when the component mounts
    setPlaying(true);
  }, []);

  return (
    <div>
      <ReactPlayer
        url="https://youtu.be/fibYknUCIU4?si=l0BMgYri0Hnk0WkD" // Replace with your song URL
        playing={playing}
        controls={false} // You can set this to true if you want to show controls
        width="0" // Hide the player (optional, if you just want audio)
        height="0" // Hide the player (optional, if you just want audio)
        volume={1} // Set volume (0 to 1)
        loop={true} // Optional: if you want to loop the song
        config={{
          youtube: {
            playerVars: {
              autoplay: 1, // Auto-play when the video loads
              controls: 0, // Hide the controls
              modestbranding: 1, // Hide the YouTube logo
              mute: 0, // Unmute the video
              start: 0, // Starting time (seconds)
            },
          },
        }}
      />
    </div>
  );
};


