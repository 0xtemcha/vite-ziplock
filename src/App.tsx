function App() {
  return (
    <div className="relative grid h-screen w-full place-content-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(var(--color-gray-300)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <h1 className="mb-5 text-center text-5xl">React Vite Ziplock</h1>
      <p className="text-center text-lg font-light">
        Simple React SPA boilerplate. Built with Vite, React, TypeScript,
        Prettier, Tailwind 4, and more.
      </p>
    </div>
  );
}

export default App;
