
type Shift = {
  initials: string;
  title: string;
  location: string;
  rate: number;
  tag: string;
  tagStyle: "urgent" | "scheduled";
  time: string;
};

const shifts: Shift[] = [
  {
    initials: "WP",
    title: "Line Cook",
    location: "Woodbridge Pub · Downtown · 1.2 mi",
    rate: 26,
    tag: "Tonight",
    tagStyle: "urgent",
    time: "6p–11p · 5h",
  },
  {
    initials: "ML",
    title: "Event Server",
    location: "Michigan League · Ann Arbor · 38 mi",
    rate: 24,
    tag: "Sat",
    tagStyle: "scheduled",
    time: "4p–10p · 6h",
  },
  {
    initials: "TW",
    title: "Bartender",
    location: "The Whitney · Midtown · 2.8 mi",
    rate: 28,
    tag: "Tonight",
    tagStyle: "urgent",
    time: "8p–2a · 6h",
  },
];

const navy = "#00458a";
const navyDim = "#1b5dad";
const orange = "#fd983a";
const orangeSoft = "#ffdcc3";
const navySoft = "#d6e3ff";
const bg2 = "#f6f8fb";
const text = "#0b1220";
const text2 = "#4a5568";
const text3 = "#8a94a6";
const line = "#e7ecf2";

export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto mb-12">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 blur-3xl rounded-full"
        style={{ background: `${navy}0d` }}
      />

      {/* Phone shell */}
      <div
        className="relative p-[14px] rounded-[3rem]"
        style={{
          background: "#0b1220",
          boxShadow:
            "0 60px 120px rgba(11,18,32,0.30), 0 30px 50px rgba(0,69,138,0.18)",
        }}
      >
        {/* Screen */}
        <div
          role="img"
          aria-label="Boost Staff mobile app showing nearby hospitality shifts with earnings summary"
          className="overflow-hidden flex flex-col"
          style={{
            background: "#fff",
            borderRadius: "2.5rem",
            aspectRatio: "9/19",
          }}
        >
          {/* Status bar + Dynamic Island */}
          <div
            className="grid items-center px-4 pt-3 pb-1"
            style={{ gridTemplateColumns: "1fr auto 1fr", fontSize: 10, fontWeight: 700, color: text }}
          >
            <span>9:41</span>
            {/* Dynamic Island */}
            <div
              style={{
                width: 72,
                height: 22,
                background: "#0b1220",
                borderRadius: 20,
              }}
            />
            <div className="flex items-center justify-end gap-1">
              {/* Signal */}
              <svg width="12" height="9" viewBox="0 0 16 11" fill={text}>
                <rect x="0" y="6" width="3" height="5" rx="0.5" />
                <rect x="4" y="4" width="3" height="7" rx="0.5" />
                <rect x="8" y="2" width="3" height="9" rx="0.5" />
                <rect x="12" y="0" width="3" height="11" rx="0.5" />
              </svg>
              {/* WiFi */}
              <svg width="12" height="9" viewBox="0 0 16 11" fill="none" stroke={text} strokeWidth="1.5">
                <path d="M1 4 a10 10 0 0 1 14 0" />
                <path d="M3.5 6.5 a6 6 0 0 1 9 0" />
                <circle cx="8" cy="9" r="1" fill={text} />
              </svg>
              {/* Battery */}
              <svg width="16" height="9" viewBox="0 0 22 11" fill="none" stroke={text} strokeWidth="1.2">
                <rect x="0.5" y="0.5" width="18" height="10" rx="2" />
                <rect x="2" y="2" width="15" height="7" rx="1" fill={text} />
                <rect x="19.5" y="3.5" width="1.5" height="4" rx="0.5" fill={text} />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div className="flex justify-between items-center px-4 pt-1 pb-1">
            <div className="flex items-center gap-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/boost-staff-logo.png" alt="Boost Staff" style={{ width: 28, height: 28, objectFit: "contain" }} />
              <div
                className="flex flex-col leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
              >
                <span style={{ fontSize: 11, color: orange }}>BOOST</span>
                <span style={{ fontSize: 11, color: navy }}>STAFF</span>
              </div>
            </div>
            {/* Bell */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: 28,
                height: 28,
                borderRadius: 100,
                background: bg2,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
              <div
                className="absolute"
                style={{
                  top: 5, right: 6,
                  width: 6, height: 6,
                  borderRadius: 100,
                  background: orange,
                }}
              />
            </div>
          </div>

          {/* Greeting */}
          <div className="text-center px-4 pb-2">
            <div style={{ fontSize: 9, color: text3, fontWeight: 600 }}>Good evening</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: text, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Hi, Marcus — shifts near you
            </div>
          </div>

          {/* Earnings card */}
          <div
            className="mx-3 mb-2 flex justify-between items-center px-3 py-2.5"
            style={{
              background: `linear-gradient(135deg, ${navy}, ${navyDim})`,
              borderRadius: 16,
              color: "#fff",
            }}
          >
            <div>
              <div style={{ fontSize: 8, opacity: 0.75, fontWeight: 700, letterSpacing: "0.6px", textTransform: "uppercase" }}>
                This week
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                $412.50
              </div>
              <div style={{ fontSize: 8, opacity: 0.8, marginTop: 2 }}>3 shifts · 16.5 hrs</div>
            </div>
            <div className="text-right">
              <div style={{ fontSize: 8, opacity: 0.75, fontWeight: 700 }}>Next payout</div>
              <div style={{ fontSize: 10, fontWeight: 700, marginTop: 2 }}>Tue, Apr 28</div>
            </div>
          </div>

          {/* Filter chips */}
          <div className="flex gap-1.5 px-3 mb-2">
            {[
              { label: "Tonight", active: true },
              { label: "Today", navy: true },
              { label: "Nearby" },
              { label: "Weekend" },
            ].map((c) => (
              <span
                key={c.label}
                style={{
                  padding: "4px 9px",
                  borderRadius: 100,
                  fontSize: 8,
                  fontWeight: 700,
                  background: c.active ? orange : c.navy ? navySoft : bg2,
                  color: c.active ? "#fff" : c.navy ? navy : text2,
                  whiteSpace: "nowrap",
                }}
              >
                {c.label}
              </span>
            ))}
          </div>

          {/* Shift cards */}
          <div className="flex-1 flex flex-col gap-2 px-3 overflow-hidden">
            {shifts.map((s) => (
              <div
                key={s.title}
                className="flex gap-2"
                style={{
                  background: "#fff",
                  border: `1px solid ${line}`,
                  borderRadius: 14,
                  padding: "10px 10px",
                }}
              >
                {/* Venue badge */}
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: bg2,
                    border: `1px solid ${line}`,
                    fontSize: 10,
                    fontWeight: 800,
                    color: navy,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {s.initials}
                </div>
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        color: text,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        lineHeight: 1.2,
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: navy,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        lineHeight: 1,
                      }}
                    >
                      ${s.rate}
                      <span style={{ fontSize: 8, fontWeight: 700, color: text3 }}>/hr</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 8, color: text2, marginTop: 2 }}>{s.location}</div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <span
                      style={{
                        padding: "2px 7px",
                        borderRadius: 100,
                        fontSize: 7,
                        fontWeight: 700,
                        background: s.tagStyle === "urgent" ? orangeSoft : navySoft,
                        color: s.tagStyle === "urgent" ? "#b25c14" : navy,
                      }}
                    >
                      {s.tag}
                    </span>
                    <span style={{ fontSize: 7, color: text2 }}>{s.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div
            className="flex justify-around items-center px-4 py-2 mt-2"
            style={{ borderTop: `1px solid ${line}`, background: "#fff" }}
          >
            {/* Home (active) */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={navy} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {/* Map */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={text3} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            {/* Wallet */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={text3} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12V8H6a2 2 0 010-4h12v4" />
              <path d="M4 6v12a2 2 0 002 2h14v-4" />
              <circle cx="16" cy="14" r="1" />
            </svg>
            {/* Profile */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={text3} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
