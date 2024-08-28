const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
            AI Content Generator
            <strong className="font-extrabold text-black sm:block">
              Custom Learning Path, powered by AI
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Unlock the power of AI to generate custom learning paths for your
            students. Our AI will analyze your course content and generate a
            custom learning path for your students.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-secondary sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
