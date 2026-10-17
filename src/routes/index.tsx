import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../birthday.css";

import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";
import m4 from "@/assets/m4.png";
import m8 from "@/assets/m8.png";
import m9 from "@/assets/m9.png";
import m10 from "@/assets/m10.png";
import m11 from "@/assets/m11.png";
import m12 from "@/assets/m12.jpg";
import m13 from "@/assets/m13.jpg";

export const Route = createFileRoute("/")({
  component: Birthday,
});

type Remaining = { days: string; hrs: string; min: string; sec: string };

function pad(n: number) {
  return n < 0 ? "0" : String(n).padStart(2, "0");
}

function useCountdown(target: string): Remaining {
  const [remaining, setRemaining] = useState<Remaining>({
    days: "--",
    hrs: "--",
    min: "--",
    sec: "--",
  });

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) {
        setRemaining({ days: "00", hrs: "00", min: "00", sec: "00" });
        return;
      }
      const days = Math.floor(diff / 86400000);
      const hrs = Math.floor((diff % 86400000) / 3600000);
      const min = Math.floor((diff % 3600000) / 60000);
      const sec = Math.floor((diff % 60000) / 1000);
      setRemaining({ days: pad(days), hrs: pad(hrs), min: pad(min), sec: pad(sec) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return remaining;
}

function Timer({ r }: { r: Remaining }) {
  return (
    <div className="timer">
      <div className="unit">
        <span className="num">{r.days}</span>
        <span className="lbl">Days</span>
      </div>
      <div className="unit">
        <span className="num">{r.hrs}</span>
        <span className="lbl">Hrs</span>
      </div>
      <div className="unit">
        <span className="num">{r.min}</span>
        <span className="lbl">Min</span>
      </div>
      <div className="unit">
        <span className="num">{r.sec}</span>
        <span className="lbl">Sec</span>
      </div>
    </div>
  );
}

function Birthday() {
  const engagement = useCountdown("2026-10-12T00:00:00");
  const wedding = useCountdown("2027-03-09T00:00:00");

  return (
    <div className="bd">
      <div className="wrap">
        {/* Hero */}
        <header className="hero">
          <div className="toran">
            <span /><span /><span /><span /><span />
          </div>
          <p className="script">Happy Birthday</p>
          <h1>
            Shivani <span className="heart">❤️</span>
          </h1>
          <p className="sub">
            a story that began with two quiet meetings, and is still being
            written —
          </p>
          <div className="names">Ankit &amp; Shivani</div>
          <div className="scroll-cue">scroll down ↓</div>
        </header>

        {/* First Meeting */}
        <section>
          <div className="head-row">
            <div className="node">🌸</div>
            <div className="txt">
              <p className="eyebrow">The First Meeting</p>
              <h2>Where it quietly began</h2>
            </div>
          </div>
          <div className="card">
            <div className="photo-frame">
              <img src={m1} alt="Ankit and Shivani's first meeting" loading="lazy" />
            </div>
            <p className="quote">"The day our story quietly began."</p>
            <p className="body-text">
              Two people standing a little apart, a little unsure of what to say
              next. Every glance was careful, every word thought twice before it
              was spoken — but somewhere under all that nervousness, something
              had already begun.
            </p>
            <div>
              <span className="mood-tag">a little nervous</span>
            </div>
          </div>
        </section>

        <div className="drop">✦</div>

        {/* Second Meeting */}
        <section>
          <div className="head-row">
            <div className="node">☕</div>
            <div className="txt">
              <p className="eyebrow">The Second Meeting</p>
              <h2>A few more smiles</h2>
            </div>
          </div>
          <div className="card">
            <div className="photo-frame">
              <img src={m2} alt="Ankit and Shivani's second meeting with family" loading="lazy" />
            </div>
            <p className="quote">"A few more conversations, a few more smiles."</p>
            <p className="body-text">
              The silences got shorter and the laughs got easier. Surrounded by
              family, the nervousness of the first day had softened into
              something warmer — the beginning of feeling at home with each
              other.
            </p>
            <div>
              <span className="mood-tag">a little more comfortable</span>
            </div>
          </div>
        </section>

        <div className="drop">✦</div>

        {/* Third Meeting */}
        <section>
          <div className="head-row">
            <div className="node">🌙</div>
            <div className="txt">
              <p className="eyebrow">The Third Meeting</p>
              <h2>Fully, easily, us</h2>
            </div>
          </div>
          <div className="card">
            <div className="photo-frame tall">
              <img src={m3} alt="Ankit and Shivani together" loading="lazy" />
            </div>
            <div className="photo-frame tall">
              <img src={m4} alt="Rooftop evening" loading="lazy" />
            </div>
            <div className="gallery">
              <div className="photo-frame wide">
                <img src={m8} alt="Ankit and Shivani at dinner" loading="lazy" />
              </div>
              <div className="photo-frame wide">
                <img src={m9} alt="Ankit and Shivani close together" loading="lazy" />
              </div>
            </div>
            <p className="quote">
              "No more careful words, no more second-guessing — just us."
            </p>
            <p className="body-text">
              Flowers, a rooftop full of city lights, dinner that stretched a
              little longer than planned. No nervous pauses left, no need to be
              anyone but themselves. Just two people, fully comfortable, exactly
              where they wanted to be.
            </p>
            <div>
              <span className="mood-tag">fully comfortable</span>
            </div>
          </div>
        </section>

        <div className="drop">✦</div>

        {/* Fourth Meeting - Lucknow Bike Ride */}
        <section>
          <div className="head-row">
            <div className="node">🏍️</div>
            <div className="txt">
              <p className="eyebrow">The Fourth Meeting</p>
              <h2>Exploring Lucknow, together</h2>
            </div>
          </div>
          <div className="card">
            <div className="gallery">
              <div className="photo-frame wide">
                <img src={m10} alt="Ankit and Shivani on the bridge in Lucknow" loading="lazy" />
              </div>
              <div className="photo-frame wide">
                <img src={m11} alt="Shivani with the bike on the Lucknow bridge" loading="lazy" />
              </div>
              <div className="photo-frame wide">
                <img src={m12} alt="Ankit and Shivani sitting on the blue bridge" loading="lazy" />
              </div>
              <div className="photo-frame wide">
                <img src={m13} alt="Cafe hangout with friends in Lucknow" loading="lazy" />
              </div>
            </div>
            <p className="quote">
              "Open roads, endless talks, and the best day we've had together."
            </p>
            <p className="body-text">
              Exploring Lucknow on the bike — the wind, the bridges, the little
              stops for photos, and the kind of laughter that doesn't need a
              reason. It was easily one of the best days we've spent together,
              the sort of day you want to remember exactly as it was.
            </p>
            <div>
              <span className="mood-tag">our favourite day</span>
            </div>
          </div>
        </section>

        <div className="drop">✦</div>

        {/* Birthday letter */}
        <section>
          <div className="head-row">
            <div className="node">🎂</div>
            <div className="txt">
              <p className="eyebrow">21 July 2026</p>
              <h2>Happy Birthday ❤️</h2>
            </div>
          </div>
          <div className="letter">
            <p style={{ fontStyle: "italic" }}>My Shivani,</p>
            <p>
              From that first nervous hello to now — every meeting with you has
              felt like turning a page I didn't want to end. You turned my
              careful words into easy laughter, and my ordinary days into ones I
              look forward to.
            </p>
            <p>
              Today isn't just your birthday, it's a celebration of every
              version of you I've had the joy of meeting — the nervous one, the
              comfortable one, and the one who feels completely like home now.
            </p>
            <p>
              Here's to you, and to everything we're still writing together.
            </p>
            <p className="sign">Always yours, Ankit</p>
          </div>
        </section>
      </div>

      {/* Engagement countdown */}
      <section className="countdown-wrap">
        <p className="eyebrow">Next Milestone</p>
        <h2>Our Engagement Begins In</h2>
        <Timer r={engagement} />
        <div className="datestamp">12 October 2026 💍</div>
      </section>

      <div className="wrap">
        {/* Engagement section */}
        <section>
          <div className="head-row">
            <div className="node">💍</div>
            <div className="txt">
              <p className="eyebrow">Engagement</p>
              <h2>The promise</h2>
            </div>
          </div>
          <div className="card">
            <p className="quote">
              "That day we will make a promise for forever."
            </p>
            <p className="body-text">
              A ring, two hands, and a promise that turns two stories into one.
              Once it happens, this space will hold the real moment — for now,
              imagine it here.
            </p>
          </div>
        </section>
      </div>

      {/* Wedding countdown */}
      <section className="countdown-wrap">
        <p className="eyebrow">Next Milestone</p>
        <h2>Our Wedding Begins In</h2>
        <Timer r={wedding} />
        <div className="datestamp">9 March 2027 👰🤵</div>
      </section>

      {/* Forever */}
      <section className="forever">
        <h2>❤️ Forever Starts Here</h2>
        <p>From two meetings... to a lifetime together.</p>
      </section>

      {/* The End */}
      <section className="the-end">
        <p className="q1">✨ The End?</p>
        <p className="q2">No...</p>
        <p className="q3">This is just Chapter One</p>
        <div className="couple">Ankit &amp; Shivani</div>
      </section>
    </div>
  );
}
