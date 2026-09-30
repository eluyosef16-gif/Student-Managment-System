function Enrollment() {
  return (
    <section className="bg-blue-600 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Start Your Technology Journey Today
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Join Yared Technology School and learn practical skills
          through real projects and hands-on training.
        </p>

        <button
          className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600
          transition hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-white"
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
}

export default Enrollment;