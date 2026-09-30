function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="text-lg font-bold">
            Yared Technology School
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Building skills for the future.
          </p>
        </div>

        <p className="text-sm text-slate-400">
          © 2026 Yared Technology School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;