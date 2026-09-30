function Hero() {
  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-blue-400">
            Yared Technology School
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Build Skills. Build Your Future.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Learn practical technology skills through real projects
            and build the confidence you need for your future.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
              Explore Courses
            </button>

            <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:bg-slate-800">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

