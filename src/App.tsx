/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import { Heart, Stars, Camera, Music, Calendar, MapPin, Sparkles, Quote, BookOpen, Gift, Sun, Moon, Cloud, Infinity as InfinityIcon } from 'lucide-react';

const moments = [
  {
    title: "Your proposal",
    date: "May Holidays",
    location: "straight into my heart",
    description: "The moment I knew you were something special. The way you made me adore you made the whole world fade away.",
    image: "https://media.discordapp.net/attachments/1261311956049203333/1483082035860996186/552308969_1148944383817013_8779871374706653354_n.jpg?ex=69b94b47&is=69b7f9c7&hm=97c00543d0a92bf3477ce9a4316df19724bf6e95c0a2dc9ace547f470522764b&=&format=webp&width=266&height=590"
  },
  {
    title: "Our First Date",
    date: "February",
    location: "Mimic",
    description: "Watching you use 100% fo ur brain was the most adorable I've ever seen. Just us.",
    image: "https://media.discordapp.net/attachments/1261311956049203333/1483083004820586576/Screenshot_2026-02-14_174729.png?ex=69b94c2e&is=69b7faae&hm=2b7d724bb88428a0b797eb25dfdda866ddc91140e1f1f446a78d641978d2941e&=&format=webp&quality=lossless&width=1006&height=590"
  },
  {
    title: "The day we met",
    date: "Every day in may, 2025",
    location: "Our favorite game :3",
    description: "Out of millions of games, and millions of servers, I joined yours, and I talked with you, this wasn't a coincidence",
    image: "https://media.discordapp.net/attachments/1261311956049203333/1483083005361918147/Screenshot_2026-02-14_192033.png?ex=69b94c2e&is=69b7faae&hm=15a9b04d83a085c7f591720dbd32790f8b1bacb94f16ba03acc3f2a45696a29d&=&format=webp&quality=lossless"
  }
];

const reasons = [
  "The way talk, it makes me ask, 'how does something so beautiful exist?'",
  "How you make the most ordinary days feel extraordinary.",
  "Your laugh that makes everyone around you disapear.",
  "The way you remember the smallest details about us.",
  "The gossips we share, and laugh together :3",
  "How you believe in me even when I don't believe in myself."
];

const playlist = [
  { name: "Ordinary", url: "https://open.spotify.com/track/6qqrTXSdwiJaq8SO0X2lSe?si=32f1262a3ef34aa1" },
  { name: "Those Eyes", url: "https://open.spotify.com/track/50x1Ic8CaXkYNvjmxe3WXy?si=74d28fa3b4334e50" },
  { name: "Dance Partner", url: "https://open.spotify.com/track/6pERLwGg6WN0MvQ7YujWsG?si=3f548cf1b4a34eab" },
  { name: "Lover like you", url: "https://open.spotify.com/track/2ArLfwU02n5xHpvT1Na1j8?si=751ebf64d2f54d31" },
  { name: "crush", url: "https://open.spotify.com/track/0havv7ozSTF6wMHEDKdibs?si=213a07c4ae224889" },
  { name: "Boy in Love", url: "https://open.spotify.com/track/19TlagHWD2YdNCOoZc1Fjp?si=4c625113da944d7f" },
  { name: "When you say my name", url: "https://open.spotify.com/track/3a8b6uo4vnQSJroGhaNhgG?si=2f457d54bedf4336" }
];

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-rose-400/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-rose-400 rounded-full pointer-events-none z-[9999]"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: '-50%', 
          translateY: '-50%',
        }}
      />
    </>
  );
};

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-300/10"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%",
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 360
          }}
          animate={{ 
            y: "-10%",
            rotate: Math.random() * 360 + 360
          }}
          transition={{ 
            duration: Math.random() * 15 + 15, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
        >
          <Heart fill="currentColor" size={Math.random() * 40 + 20} />
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Opening animation transforms (Book/Box style)
  const leftPageRotate = useTransform(scrollYProgress, [0, 0.15], [0, -110]);
  const rightPageRotate = useTransform(scrollYProgress, [0, 0.15], [0, 110]);
  const contentScale = useTransform(scrollYProgress, [0, 0.15, 0.25], [0.8, 0.9, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const coverOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const heartScale = useTransform(scrollYProgress, [0, 0.1], [1, 15]);
  const heartOpacity = useTransform(scrollYProgress, [0.08, 0.12], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[500vh] bg-[#0a0502] text-stone-200 font-serif selection:bg-rose-500/30 overflow-x-hidden cursor-none">
      <CustomCursor />
      <FloatingHearts />

      {/* Opening Intro (The "Gift Box" or "Book Cover") */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center z-50 pointer-events-none">
        <motion.div 
          style={{ opacity: coverOpacity }}
          className="absolute inset-0 flex items-center justify-center bg-[#0a0502]"
        >
          <div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">
            {/* Left Flap/Page */}
            <motion.div 
              style={{ rotateY: leftPageRotate, originX: 0 }}
              className="absolute left-0 w-1/2 h-full bg-[#120a07] border-r border-rose-900/30 flex items-center justify-end pr-12 z-20 shadow-2xl"
            >
              <div className="text-right">
                <h2 className="text-rose-400 font-sans tracking-[0.5em] text-xs uppercase mb-4">A Journey</h2>
                <div className="text-4xl italic text-stone-500">Of Us</div>
              </div>
            </motion.div>

            {/* Right Flap/Page */}
            <motion.div 
              style={{ rotateY: rightPageRotate, originX: 1 }}
              className="absolute right-0 w-1/2 h-full bg-[#120a07] border-l border-rose-900/30 flex items-center justify-start pl-12 z-20 shadow-2xl"
            >
              <div className="text-left">
                <h2 className="text-rose-400 font-sans tracking-[0.5em] text-xs uppercase mb-4">A Gift</h2>
                <div className="text-4xl italic text-stone-500">For You</div>
              </div>
            </motion.div>

            {/* Central Heart/Flower that "blooms" */}
            <motion.div 
              style={{ scale: heartScale, opacity: heartOpacity }}
              className="z-30 text-rose-500"
            >
              <Heart fill="currentColor" size={120} className="drop-shadow-[0_0_30px_rgba(244,63,94,0.4)]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Content (Emerges from the opening) */}
      <motion.div 
        style={{ scale: contentScale, opacity: contentOpacity }}
        className="relative z-10"
      >
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="text-rose-400 font-sans uppercase tracking-[0.3em] text-xs mb-4 block">To My Everything</span>
              <h1 className="text-6xl md:text-9xl font-light mb-8 tracking-tighter leading-none">
                Eternal <span className="italic font-normal text-rose-300">Love</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-stone-400 text-xl md:text-2xl leading-relaxed font-light italic">
                "I thought falling in love meant admiring someone's beauty, but it was really about being so beautiful that others seem like nothing."
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Philosophy Section */}
        <section className="py-40 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2 }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden border border-rose-900/20 shadow-2xl">
                  <img 
                    src="https://media.discordapp.net/attachments/1261311956049203333/1483083005797863496/Screenshot_2026-02-25_222041.png?ex=69b94c2e&is=69b7faae&hm=e02781bdd6c6be40904018c060ddc97312d62065c389ed3697c75d12baa2ba7c&=&format=webp&quality=lossless" 
                    alt="Love" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Quote className="text-rose-400 mb-8 opacity-40" size={48} />
                <h2 className="text-5xl font-light mb-8 leading-tight">
                  No One <span className="italic">Can Replace You</span>
                </h2>
                <p className="text-stone-400 text-lg leading-relaxed mb-8">
                  The world is full of people, but my heart only has room for one. You've changed what beauty means to me. It's not just a face; it's a soul that makes everything else feel quiet.
                </p>
                <div className="flex gap-4 items-center text-rose-300 italic text-xl">
                  <InfinityIcon size={24} />
                  <span>Always and forever.</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Amazing Moments - Enhanced Animation */}
        <section className="py-40 bg-stone-900/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div>
                <span className="text-rose-400 font-sans uppercase tracking-[0.3em] text-xs mb-4 block">The Gallery</span>
                <h2 className="text-6xl font-light italic">Amazing Moments</h2>
              </div>
              <p className="text-stone-500 max-w-xs italic">
                A collection of snapshots from our beautiful journey together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {moments.map((moment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-[#0f0a08] p-4 rounded-[32px] border border-stone-800/50"
                >
                  <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] mb-6">
                    <img 
                      src={moment.image} 
                      alt={moment.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="space-y-3 px-2">
                    <div className="flex items-center gap-2 text-rose-400/60 text-[10px] font-sans uppercase tracking-[0.2em]">
                      <Calendar size={10} />
                      <span>{moment.date}</span>
                    </div>
                    <h3 className="text-xl font-light group-hover:text-rose-300 transition-colors">{moment.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                      {moment.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons Why Section - New Content */}
        <section className="py-40 px-6 bg-rose-950/5">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="text-rose-400 mx-auto mb-12 opacity-50" size={40} />
            <h2 className="text-5xl font-light mb-20 italic">Reasons Why My Heart Chose You</h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start p-6 rounded-2xl bg-stone-900/20 border border-stone-800/30"
                >
                  <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 text-rose-400">
                    <Heart size={14} fill="currentColor" />
                  </div>
                  <p className="text-stone-300 italic leading-relaxed">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Dreams Section - New Content */}
        <section className="py-40 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#120a07] rounded-[60px] p-12 md:p-24 relative overflow-hidden border border-rose-900/10">
              <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-5xl font-light mb-8">Our <span className="italic text-rose-300">Tomorrow</span></h2>
                  <p className="text-stone-400 text-lg leading-relaxed mb-10">
                    The best is yet to come. I dream of traveling the world with you, building a home filled with laughter, and growing old while still looking at you with the same wonder I do today.
                  </p>
                  <div className="space-y-6">
                    {[
                      { icon: <MapPin />, text: "Exploring hidden gems together" },
                      { icon: <Sun />, text: "Waking up to your smile every morning" },
                      { icon: <Stars />, text: "Chasing our biggest dreams side by side" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-stone-300">
                        <div className="text-rose-400">{item.icon}</div>
                        <span className="italic">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-full overflow-hidden border-4 border-rose-900/20 p-4">
                    <img 
                      src="https://media.discordapp.net/attachments/1261311956049203333/1483083005797863496/Screenshot_2026-02-25_222041.png?ex=69b94c2e&is=69b7faae&hm=e02781bdd6c6be40904018c060ddc97312d62065c389ed3697c75d12baa2ba7c&=&format=webp&quality=lossless" 
                      alt="Future" 
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border border-dashed border-rose-400/20 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Playlist - New Content */}
        <section className="py-40 px-6 text-center">
          <Music className="text-rose-400 mx-auto mb-8" size={32} />
          <h2 className="text-4xl font-light mb-12 italic">The Soundtrack of Us</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {playlist.map((song, i) => (
              <motion.a
                key={i}
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-stone-900/40 border border-stone-800 text-stone-400 italic hover:text-rose-300 hover:border-rose-400/30 transition-all block"
              >
                {song.name}
              </motion.a>
            ))}
          </div>
        </section>

        {/* Final Love Letter Section */}
        <section className="py-60 px-6 relative">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="space-y-10"
            >
              <Heart className="text-rose-500 mx-auto mb-6 fill-rose-500/10" size={48} />
              <h2 className="text-6xl font-light leading-tight">
                My Promise <span className="italic">To You</span>
              </h2>
              <div className="w-24 h-px bg-rose-400/30 mx-auto" />
              <p className="text-stone-200 text-2xl leading-relaxed font-light italic">
                "In a world of billions, my eyes will always find you. You are my home, my peace, and my greatest adventure. No one and nothing can ever replace you."
              </p>
              <div className="pt-16">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(244,63,94,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-rose-500/10 border border-rose-400/40 rounded-full text-rose-300 hover:bg-rose-500/20 transition-all duration-500 flex items-center gap-4 mx-auto group"
                >
                  <InfinityIcon size={20} className="group-hover:rotate-180 transition-transform duration-1000" />
                  <span className="tracking-widest uppercase text-xs font-sans font-semibold">Always & Forever Yours :3</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Background Atmospheric Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-900/10 rounded-full blur-[180px] -z-10" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-900/5 rounded-full blur-[150px] -z-10" />
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-stone-900/50 text-center bg-[#0a0502]">
          <div className="flex justify-center gap-6 mb-8 text-stone-600">
            <Sun size={18} />
            <Moon size={18} />
            <Cloud size={18} />
          </div>
          <p className="text-stone-600 text-xs font-sans tracking-[0.4em] uppercase">
            Aravindh X Sreesha • {new Date().getFullYear()}
          </p>
        </footer>
      </motion.div>
    </div>
  );
}
