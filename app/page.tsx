export default function Home() {
   return (
      <main className="min-h-screen bg-[#0b0d12] text-white">
         <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/60">
               Madhav.ai
            </p>

            <h1 className="max-w-4xl font-[family:var(--font-heading)] text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
               India&apos;s first native legal AI platform
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
               Legal intelligence built with context in mind.
            </p>

            <div className="mt-12 flex flex-wrap gap-3 text-sm text-white/70">
               <span className="rounded-full border border-white/15 px-4 py-2">
                  Coming soon
               </span>
               <span className="rounded-full border border-white/15 px-4 py-2">
                  Built for modern legal teams
               </span>
            </div>
         </section>
      </main>
   );
}