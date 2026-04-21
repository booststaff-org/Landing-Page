import { Bell, Briefcase, Search, Wallet, User, Signal, Wifi, BatteryFull } from "lucide-react";
import { BoostStaffMark } from "./icons/SocialIcons";

type Shift = {
  title: string;
  location: string;
  rate: number;
  tag: "Tonight" | "Sat" | "Fri";
  tagStyle: "urgent" | "scheduled";
  time: string;
};

const shifts: Shift[] = [
  {
    title: "Line Cook",
    location: "The Henry · Dearborn · 0.8 mi",
    rate: 26,
    tag: "Tonight",
    tagStyle: "urgent",
    time: "5p–11p · 6h",
  },
  {
    title: "Event Server",
    location: "Huntington Place Gala · 2.1 mi",
    rate: 24,
    tag: "Sat",
    tagStyle: "scheduled",
    time: "4p–12a · 8h",
  },
  {
    title: "Warehouse Associate",
    location: "Midwest Logistics · 3.4 mi",
    rate: 21,
    tag: "Tonight",
    tagStyle: "urgent",
    time: "10p–6a · 8h",
  },
  {
    title: "Bartender",
    location: "Motor City Events · 1.2 mi",
    rate: 28,
    tag: "Fri",
    tagStyle: "scheduled",
    time: "7p–1a · 6h",
  },
];

export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto mb-12">
      <div
        aria-hidden="true"
        className="absolute -inset-4 bg-primary-container/5 blur-3xl rounded-full"
      />
      <div className="relative bg-on-background p-3 rounded-[3rem] shadow-2xl">
        <div
          role="img"
          aria-label="Boost Staff mobile app showing a feed of nearby hospitality and event shifts with hourly pay"
          className="bg-surface rounded-[2.5rem] overflow-hidden aspect-[9/19] border-4 border-on-background"
        >
          <div className="w-full h-full flex flex-col text-left">
            {/* Status bar */}
            <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[9px] font-semibold text-on-background">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <Signal className="h-2.5 w-2.5" />
                <Wifi className="h-2.5 w-2.5" />
                <BatteryFull className="h-2.5 w-2.5" />
              </div>
            </div>
            {/* App header */}
            <div className="px-4 pt-2 pb-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <BoostStaffMark className="h-4 w-4 flex-shrink-0" />
                  <div className="flex flex-col leading-[0.9] ml-0.5">
                    <span className="text-[9px] font-black tracking-tight text-secondary-container">
                      BOOST
                    </span>
                    <span className="text-[9px] font-black tracking-tight text-primary-container">
                      STAFF
                    </span>
                  </div>
                </div>
                <Bell className="h-3.5 w-3.5 text-on-surface-variant" />
              </div>
              <p className="text-[9px] text-on-surface-variant/80 mt-1.5">
                Hi, Nisha — here are shifts near you
              </p>
            </div>
            {/* Filter chips */}
            <div className="px-4 flex gap-1.5 mb-2">
              <span className="bg-secondary-container text-on-primary text-[8px] font-bold px-2 py-0.5 rounded-full">
                Immediate
              </span>
              <span className="bg-primary-fixed text-primary-container text-[8px] font-bold px-2 py-0.5 rounded-full">
                Today
              </span>
              <span className="bg-surface-container-high text-on-surface-variant text-[8px] font-bold px-2 py-0.5 rounded-full">
                Nearby
              </span>
            </div>
            {/* Feed */}
            <div className="flex-1 px-3 space-y-2 overflow-hidden">
              {shifts.map((s) => (
                <div
                  key={s.title}
                  className="bg-surface-container-lowest rounded-xl p-2.5"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <p className="text-[10px] font-bold text-on-background leading-tight">
                        {s.title}
                      </p>
                      <p className="text-[8px] text-on-surface-variant">
                        {s.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] font-extrabold text-primary-container leading-none">
                        ${s.rate}
                        <span className="text-[8px] font-semibold">/hr</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <span
                      className={
                        s.tagStyle === "urgent"
                          ? "bg-secondary-container/20 text-secondary-container text-[7px] font-bold px-1.5 py-0.5 rounded-full"
                          : "bg-primary-fixed text-primary-container text-[7px] font-bold px-1.5 py-0.5 rounded-full"
                      }
                    >
                      {s.tag}
                    </span>
                    <span className="text-[7px] text-on-surface-variant">
                      {s.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom nav */}
            <div className="bg-surface-container-lowest px-4 py-2 flex justify-around items-center mt-2">
              <Briefcase className="h-4 w-4 text-primary-container fill-primary-container" />
              <Search className="h-4 w-4 text-on-surface-variant/60" />
              <Wallet className="h-4 w-4 text-on-surface-variant/60" />
              <User className="h-4 w-4 text-on-surface-variant/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
