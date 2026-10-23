import { useEffect, useState, type CSSProperties } from "react";
import { builds, beliefs, stack, skillGroups, timeline, syllabus, NAME, FULL_NAME, EMAIL, GITHUB, LINKEDIN } from "./data";
import { useReveal } from "./useReveal";

const d = (s: number) => ({ "--dl": `${s}s` }) as CSSProperties;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-bg/80 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-2xl font-black uppercase tracking-tight">{FULL_NAME}</a>
        <nav className="hidden gap-8 font-display text-sm font-semibold uppercase tracking-[.2em] text-fg/70 md:flex">
          <a href="#about" className="hover:text-lav">About</a>
          <a href="#skills" className="hover:text-lav">Skills</a>
          <a href="#work" className="hover:text-lav">Work</a>
          <a href="#contact" className="hover:text-lav">Contact</a>
        </nav>
        <span className="flex items-center gap-2 rounded-full border border-lav/30 px-3 py-1.5 text-xs uppercase tracking-widest text-lav">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="hidden sm:inline">Open to roles, training & freelance</span>
          <span className="sm:hidden">Available</span>
        </span>
      </div>
    </header>
  );
}

const blobs = [
  { c: "#2B6468", x: "12%", y: "17%", s: "28vw", t: "5.2s" },
  { c: "#7B3F6E", x: "74%", y: "14%", s: "24vw", t: "6.4s" },
  { c: "#8A3D4E", x: "86%", y: "72%", s: "22vw", t: "4.8s" },
  { c: "#4C6230", x: "6%", y: "81%", s: "20vw", t: "5.8s" },
  { c: "#3E5591", x: "50%", y: "85%", s: "30vw", t: "6.8s" },
];

function Hero() {
  const [m, setM] = useState({ x: 0, y: 0 });
  return (
    <section
      id="top"
      onMouseMove={(e) => setM({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 })}
      className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5"
    >
      {blobs.map((b, i) => (
        <div
          key={i}
          className="blob absolute rounded-full opacity-70"
          style={{ background: b.c, left: b.x, top: b.y, width: b.s, height: b.s, translate: "-50% -50%", "--t": b.t } as CSSProperties}
        />
      ))}
      <p className="reveal relative font-serif text-2xl italic text-lav md:text-4xl" style={d(0.2)}>Inside the pipeline of</p>
      <h1
        className="reveal relative select-none font-display text-[34vw] font-black uppercase leading-[.8] tracking-tighter md:text-[26vw]"
        style={{ ...d(0.4), transform: `translate(${m.x * -20}px, ${m.y * -20}px)` }}
      >
        {NAME}
      </h1>
      <div className="reveal relative mt-6 flex flex-col items-center gap-2 text-center" style={d(0.8)}>
        <span className="font-display text-sm font-semibold uppercase tracking-[.35em] text-lav">DevOps Engineer · Trainer</span>
        <p className="max-w-md text-lg text-fg/80 md:text-xl">I automate the path from code to production, and teach others to do the same.</p>
      </div>
      <div className="reveal relative mt-8 rounded-xl border border-white/15 bg-black/40 px-5 py-3 font-mono text-sm text-emerald-300 backdrop-blur" style={d(1.1)}>
        <span className="text-fg/50">jibin@devops:~$</span> kubectl get pods <span className="caret">▋</span>
      </div>
      <a href="#about" className="absolute bottom-8 flex flex-col items-center gap-2 text-xs uppercase tracking-[.3em] text-fg/60">
        Scroll
        <span className="h-10 w-px animate-pulse bg-fg/50" />
      </a>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-32 md:grid-cols-12 md:px-8">
      <h2 className="reveal font-display text-7xl font-black uppercase leading-[.85] md:col-span-6 md:text-9xl">
        Hi, I'm <span className="font-serif font-normal normal-case italic text-lav">{NAME}.</span>
      </h2>
      <div className="reveal self-end space-y-6 md:col-span-6" style={d(0.2)}>
        <p className="text-2xl leading-snug text-fg/85 md:text-3xl">
          DevOps engineer and trainer. I build CI/CD pipelines, containerise applications, automate infrastructure and run workloads on Kubernetes.
        </p>
        <p className="text-lg leading-relaxed text-fg/70">
          After completing my BCA at Bengaluru North University with an A grade, I did a DevOps internship. I'm currently pursuing my MCA online. Today I work as a DevOps trainer and take on freelance projects, helping teams and students ship faster and more reliably.
        </p>
      </div>
    </section>
  );
}

const words = ["automated", "scalable", "secure", "resilient", "repeatable"];
const stages = ["Code", "Build", "Test", "Secure", "Deploy", "Monitor"];
function Pipeline() {
  const [i, setI] = useState(0);
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 1800);
    const s = setInterval(() => setStage((v) => (v + 1) % (stages.length + 1)), 700);
    return () => { clearInterval(t); clearInterval(s); };
  }, []);
  return (
    <section className="relative overflow-hidden bg-lav py-32 text-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="reveal font-display text-3xl font-bold uppercase tracking-widest">I build</p>
        <h2 className="reveal font-display text-[15vw] font-black uppercase leading-[.85] md:text-[11vw]" style={d(0.1)}>
          <span key={i} className="inline-block font-serif font-normal normal-case italic text-hibiscus" style={{ animation: "fadeUp .6s ease" }}>
            {words[i]}
          </span>
          <br />
          pipelines.
        </h2>
        <p className="reveal mt-10 max-w-2xl text-2xl leading-snug md:text-3xl" style={d(0.2)}>
          Code becomes a build. Builds become containers. Containers become reliable services running at scale, without anyone clicking a button.
        </p>
        <div className="mt-14 flex flex-wrap items-center gap-3 font-display text-lg font-bold uppercase">
          {stages.map((w, k) => (
            <span key={w} className="reveal flex items-center gap-3" style={d(k * 0.1)}>
              <span className={`flex items-center gap-2 rounded-full border-2 border-bg px-5 py-2 transition-colors duration-300 ${k < stage ? "bg-bg text-lav" : ""}`}>
                {k < stage && <span className="text-emerald-400">✓</span>}
                {w}
              </span>
              {k < stages.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-32 md:px-8">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <h2 className="reveal font-display text-7xl font-black uppercase leading-[.85] md:text-9xl">
          My <span className="font-serif font-normal normal-case italic text-lav">toolbox.</span>
        </h2>
        <p className="reveal max-w-sm text-lg text-fg/70" style={d(0.2)}>From the Linux shell to Kubernetes clusters, these are the tools I use and teach every day.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, k) => (
          <div
            key={g.title}
            className="reveal group relative overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2"
            style={{ ...d((k % 3) * 0.1), background: g.color }}
          >
            <span className="absolute -right-4 -top-6 font-display text-[7rem] font-black text-white/10 transition-transform duration-700 group-hover:scale-125">{g.glyph}</span>
            <span className="font-display text-sm font-bold tracking-[.3em] text-fg/60">0{k + 1}</span>
            <h3 className="mt-4 font-display text-4xl font-extrabold uppercase">{g.title}</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {g.tools.map((t) => (
                <span key={t} className="rounded-full bg-black/25 px-3 py-1.5 text-sm font-medium">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Beliefs() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-32 md:px-8">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <h2 className="reveal font-display text-7xl font-black uppercase leading-[.85] md:text-9xl">
          Ship. <span className="font-serif font-normal normal-case italic text-lav">With confidence.</span>
        </h2>
        <p className="reveal font-serif text-2xl italic text-fg/70" style={d(0.2)}>How I think about DevOps.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {beliefs.map((b, k) => (
          <article
            key={b.title}
            className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-8 transition-colors duration-500 hover:bg-white/[.07] md:p-10"
            style={d(k * 0.1)}
          >
            <span className="inline-block h-3 w-12 rounded-full" style={{ background: b.color }} />
            <h3 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[.95] md:text-5xl">{b.title}</h3>
            <p className="mt-6 text-lg leading-relaxed text-fg/80">{b.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Syllabus() {
  return (
    <section className="bg-fg py-32 text-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="reveal font-display text-7xl font-black uppercase leading-[.85] md:text-9xl">
          Course <span className="font-serif font-normal normal-case italic text-lav">syllabus.</span>
        </h2>
        <p className="reveal mt-6 max-w-2xl text-lg text-fg/80" style={d(0.1)}>
          I teach the full Zoople DevOps Course syllabus (2026 Updated) — 15 modules covering everything from Linux fundamentals to a capstone project.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {syllabus.map((m, k) => (
            <div key={m.module} className="reveal rounded-3xl border border-white/10 bg-white/[.03] p-8 transition-colors duration-500 hover:bg-white/[.07]" style={d(k * 0.08)}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-sm font-bold uppercase tracking-[.3em] text-hibiscus">Module {m.module}</span>
                <span className="text-xs uppercase tracking-wider text-fg/50">Zoople 2026</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">{m.title}</h3>
              <ul className="mt-4 space-y-2 text-fg/70 text-sm leading-relaxed">
                {m.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full" style={{ background: m.module % 3 === 0 ? "#2B6468" : m.module % 3 === 1 ? "#3E5591" : "#7B3F6E" }} />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainer() {
  return (
    <section className="grain relative overflow-hidden bg-black py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-5 text-center md:px-8">
        <p className="reveal font-serif text-3xl italic text-lav md:text-5xl">"It works on my machine" is not a deployment strategy.</p>
        <p className="reveal font-display text-4xl font-extrabold uppercase md:text-6xl" style={d(0.1)}>Good DevOps is invisible. Bad DevOps is a 3 AM phone call.</p>
        <p className="reveal font-display text-5xl font-black uppercase text-kokum md:text-8xl" style={d(0.2)}>I teach what I practise.</p>
        <p className="reveal mx-auto max-w-3xl text-xl leading-relaxed text-fg/80 md:text-2xl" style={d(0.3)}>
          As a DevOps trainer, I guide learners from their first Linux command to deploying on Kubernetes, with hands-on labs, real pipelines and the reasons behind every tool.
        </p>
        <div className="reveal flex flex-wrap justify-center gap-3 pt-4" style={d(0.4)}>
          {["Linux & Shell", "Git & GitHub", "Jenkins CI/CD", "Docker", "Terraform", "Ansible", "Kubernetes", "DevSecOps", "MLOps"].map((t) => (
            <span key={t} className="rounded-full border border-white/20 px-4 py-2 font-display text-sm font-bold uppercase tracking-widest">{t}</span>
          ))}
        </div>
        <div className="reveal pt-10" style={d(0.5)}>
          <h2 className="font-display text-5xl font-black uppercase leading-[.9] md:text-7xl">
            That's what I build.<br />
            <span className="font-serif font-normal normal-case italic text-lav">That's what I teach.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-32 md:px-8">
      <div className="mb-16 grid gap-6 md:grid-cols-2">
        <h2 className="reveal font-display text-7xl font-black uppercase leading-[.85] md:text-9xl">What I build</h2>
        <div className="reveal self-end space-y-3 text-xl text-fg/80" style={d(0.2)}>
          <p>Pipelines, infrastructure and deployments I build for freelance clients and in training labs, from CI/CD to Kubernetes and MLOps.</p>
          <p>
            See my code on{" "}
            <a href={GITHUB} target="_blank" rel="noreferrer" className="text-lav underline underline-offset-4">GitHub</a>.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-6">
        {builds.map((p, k) => (
          <a
            key={p.name}
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] transition-colors hover:bg-white/[.06] ${k < 2 ? "md:col-span-3" : "md:col-span-2"}`}
            style={d((k % 3) * 0.1)}
          >
            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden" style={{ background: p.color }}>
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "22px 22px" }} />
              <span className="relative font-display text-[6rem] font-black leading-none text-white/90 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-125">{p.glyph}</span>
              <span className="absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 text-xs uppercase tracking-widest">{p.tag}</span>
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-fg text-bg transition-transform group-hover:rotate-45">↗</span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-4xl font-black uppercase">{p.name}</h3>
              <p className="mt-1 font-serif text-xl italic text-lav">{p.title}</p>
              <p className="mt-4 flex-1 text-fg/75">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-fg/70">{s}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="bg-fg py-32 text-bg">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="reveal font-serif text-5xl italic leading-tight md:text-7xl">
          From the classroom <span className="font-display font-black not-italic uppercase text-hibiscus">to production,</span> and back to the classroom.
        </h2>
        <p className="reveal mt-10 max-w-3xl text-xl leading-relaxed text-bg/80" style={d(0.1)}>
          A BCA degree gave me the foundation, an internship gave me real-world experience, and training plus freelance work keep me hands-on every single day.
        </p>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-bg/15 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map(([l, t, s], k) => (
            <div key={l} className="reveal bg-fg p-8" style={d(k * 0.1)}>
              <p className="font-display text-sm font-bold uppercase tracking-[.3em] text-hibiscus">{l}</p>
              <p className="mt-4 font-display text-3xl font-extrabold uppercase leading-none">{t}</p>
              <p className="mt-3 text-bg/60">{s}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 overflow-hidden border-y border-bg/20 py-6">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-5xl font-black uppercase">
          {[...stack, ...stack].map((s, k) => (
            <span key={k} className="flex items-center gap-12">
              {s} <span className="text-hibiscus">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl gap-4 px-5 md:px-8">
        <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full bg-bg px-6 py-3 font-display font-bold uppercase tracking-widest text-fg hover:bg-hibiscus">GitHub ↗</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full border-2 border-bg px-6 py-3 font-display font-bold uppercase tracking-widest hover:bg-bg hover:text-fg">LinkedIn ↗</a>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  return (
    <section id="contact" className="grain relative overflow-hidden py-32">
      <div className="blob absolute left-[20%] top-[30%] h-[30vw] w-[30vw] rounded-full bg-hibiscus opacity-60" style={{ "--t": "6s" } as CSSProperties} />
      <div className="blob absolute bottom-[10%] right-[10%] h-[26vw] w-[26vw] rounded-full bg-monsoon opacity-60" style={{ "--t": "5s" } as CSSProperties} />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="reveal font-display text-sm font-bold uppercase tracking-[.35em] text-lav">Let's deploy something together</p>
        <h2 className="reveal mt-6 font-display text-[18vw] font-black uppercase leading-[.8] md:text-[12vw]" style={d(0.1)}>
          Ready to <br />
          <span className="font-serif font-normal normal-case italic text-lav">ship?</span>
        </h2>
        <p className="reveal mt-10 max-w-2xl text-xl leading-relaxed text-fg/80" style={d(0.2)}>
          A DevOps role, a freelance project, a training batch, or just a pipeline that keeps breaking. I'd love to hear from you.
        </p>
        <div className="reveal mt-12 flex flex-wrap items-center gap-4" style={d(0.3)}>
          <a href={`mailto:${EMAIL}`} className="rounded-full bg-fg px-8 py-5 font-display text-xl font-bold text-bg transition-transform hover:scale-105 md:text-3xl">
            {EMAIL} ↗
          </a>
          <button
            onClick={() => { navigator.clipboard?.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1600); }}
            className="rounded-full border border-fg/40 px-6 py-4 font-display font-bold uppercase tracking-widest hover:bg-fg/10"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-14 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-serif text-4xl italic">Thanks for stopping by.</h3>
          <p className="mt-2 text-fg/70">Build. Ship. Automate. Repeat.</p>
        </div>
        <div className="flex gap-6 font-display text-sm font-bold uppercase tracking-widest text-fg/70">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-lav">GitHub ↗</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-lav">LinkedIn ↗</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-lav">Email ↗</a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs uppercase tracking-[.3em] text-fg/40">© {new Date().getFullYear()} {FULL_NAME} · DevOps Engineer & Trainer</p>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Intro />
      <Pipeline />
      <Skills />
      <Beliefs />
      <Trainer />
      <Syllabus />
      <Work />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
