function Testimonial() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Student Testimonial
        </p>

        <blockquote className="mt-6 text-2xl font-semibold leading-relaxed text-slate-900 sm:text-3xl">
          "Yared Technology School helped me build practical skills
          and gave me the confidence to work on real technology projects."
        </blockquote>

        <p className="mt-6 font-medium text-gray-600">
          — Yared Technology School Student
        </p>
      </div>
    </section>
  );
}

export default Testimonial;