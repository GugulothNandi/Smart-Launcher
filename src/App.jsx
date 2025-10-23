import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import AppGrid from "./components/AppGrid";
import HomeHandle from "./components/HomeHandle";

function App() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [battery, setBattery] = useState(100);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      const am = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m.toString().padStart(2, "0")} ${am}`);
      setDate(
        d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    if (navigator.getBattery) {
      navigator.getBattery().then((b) => {
        setBattery(Math.round(b.level * 100));
        b.addEventListener("levelchange", () =>
          setBattery(Math.round(b.level * 100))
        );
      });
    }
    return () => clearInterval(interval);
  }, []);

  const apps = [
    {
      name: "YouTube",
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      link: "https://www.youtube.com",
    },
    {
      name: "Chrome",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732209.png",
      link: "https://www.google.com",
    },
    {
      name: "Play Store",
      icon: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      link: "https://play.google.com",
    },
    {
      name: "Gmail",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
      link: "https://mail.google.com",
    },
    {
      name: "Maps",
      icon: "https://cdn-icons-png.flaticon.com/512/927/927667.png",
      link: "https://maps.google.com",
    },
    {
      name: "Camera",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      link: "https://camera.google.com",
    },
    {
      name: "Files",
      icon: "https://cdn-icons-png.flaticon.com/512/3767/3767084.png",
      link: "https://drive.google.com",
    },
    {
      name: "Settings",
      icon: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png",
      link: "https://myaccount.google.com",
    },
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src="https://i.pinimg.com/736x/62/32/ef/6232ef50dd5b94cb97960e22c7c6dafb.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div onClick={() => setOpen(!open)} className="absolute inset-0"></div>

      {!open && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-semibold">{time}</h1>
          <p className="text-lg mt-2">{date}</p>
        </div>
      )}

      <TopBar open={open} time={time} battery={battery} />

      <div
        className={`absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm rounded-t-2xl transition-transform duration-400 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <AppGrid apps={apps} />
      </div>

      {!open && <HomeHandle onOpen={() => setOpen(true)} />}
    </div>
  );
}

export default App;
