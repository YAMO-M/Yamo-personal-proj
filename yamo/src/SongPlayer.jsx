import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function SongPlayer() {
  // State to hold the current song URL and playing state
  const [songUrl, setSongUrl] = useState("");
  const [playing, setPlaying] = useState(false);

  // Function to handle when a song is clicked
  const handleSongClick = (url) => {
    // If the same song is clicked again, toggle play/pause
    if (songUrl === url) {
      setPlaying(!playing); // Toggle the playing state
    } else {
      setSongUrl(url); // Set new song URL
      setPlaying(true); // Start playing the new song
    }
  };

  return (
    <>
      <div className="justify-self-start text-center ml-10 ali">
        <h1 className="text-7xl"> Hit List</h1>
        <h6 className="text-gray-600">Hip Hop</h6>
        <ul className="text-3xl">
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fibYknUCIU4?si=0YSFvuVNucutE1HW"
                )
              }
            >
              NF-CLOUDS
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fnlJw9H0xAM?si=zMxwmEHq4L1_XBx1"
                )
              }
            >
              Before I'm Gone
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick("https://www.youtube.com/watch?v=example3")
              }
            >
              Family Business
            </a>
          </li>
        </ul>
        <h6 className="text-gray-600">Amapiano</h6>
        <ul className="text-3xl">
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fibYknUCIU4?si=0YSFvuVNucutE1HW"
                )
              }
            >
              Rekere 6
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fnlJw9H0xAM?si=zMxwmEHq4L1_XBx1"
                )
              }
            >
              Rekere 9
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick("https://www.youtube.com/watch?v=example3")
              }
            >
              iLog Drum
            </a>
          </li>
        </ul>
        <h6 className="text-gray-600">Maskandi</h6>
        <ul className="text-3xl">
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fibYknUCIU4?si=0YSFvuVNucutE1HW"
                )
              }
            >
              Ubaba KaBafana
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fnlJw9H0xAM?si=zMxwmEHq4L1_XBx1"
                )
              }
            >
              Vele Sekonakele
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick("https://www.youtube.com/watch?v=example3")
              }
            >
              Bamphambanisela
            </a>
          </li>
        </ul>
        <h6 className="text-gray-600">Old School</h6>
        <ul className="text-3xl">
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fibYknUCIU4?si=0YSFvuVNucutE1HW"
                )
              }
            >
              Inyoni Yami Leh
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick(
                  "https://youtu.be/fnlJw9H0xAM?si=zMxwmEHq4L1_XBx1"
                )
              }
            >
              Stand By Me
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                handleSongClick("https://www.youtube.com/watch?v=example3")
              }
            >
              {" "}
              Call Out
            </a>
          </li>
        </ul>
      </div>
      <div className=" border-2 border-gray-600 w-200 h-100 justify-self-center flex -mt-290 sm:-70">
        {songUrl && (
          <ReactPlayer
            url={songUrl}
            playing={playing}
            controls={true} // Show player controls
            width="100%" // Full width (or you can adjust to fit your layout)
            height="100%" // Adjust height as needed
            volume={1} // Set volume
            loop={true} // Optionally loop the song
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1, // Auto-play when the video loads
                  controls: 0, // Show YouTube controls
                  modestbranding: 1, // Hide YouTube branding
                  mute: 0, // Unmute the video
                  start: 0, // Start time (in seconds)
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
}
