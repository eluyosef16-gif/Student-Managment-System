function Contact() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Contact Us
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Have a Question?
          </h2>

          <p className="mt-4 text-gray-600">
            Send us a message and our team will get back to you.
          </p>
        </div>

        <form className="mt-10 space-y-4">
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;