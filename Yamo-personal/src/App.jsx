import "./index.css";
import Navbar from "./Nav";
import MyBackViewImg from "./assets/MyBackViewImg.png";
import CustomWidget from "./ChatBot";
import SongPlayer from "./SongPlayer";
export default function App() {
  return (
    <>
      <div id="bgImg" className=" bg-fixed h-screen bg-cover">
        <div id="WholePanel">
          <Navbar />
          <img
            src={MyBackViewImg}
            className=" w-80 -mt-30  -z-1 flex ml-740 "
            alt="myphoto"
          />
          <div className=" ml-220 mt-200 w-150 ">
            <p className="text-2xl flex w-150">
              'Yamo' igama lami. I'm mostly Popular on{" "}
              <a href="https://www.facebook.com">
                <svg
                  className="w-7 ml-3  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 560 512"
                >
                  <path
                    fill="#FFFFFF"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </a>
            </p>
            <p className="text-2xl w-150 flex ">
              (ngiyadlala) and many other things. okwamanje ngenza iziqu e-ukzn.
              usungaqagela ke ukuthi ezani.
            </p>
          </div>
          <CustomWidget />
        </div>
      </div>
      <SongPlayer />
    </>
  );
}
