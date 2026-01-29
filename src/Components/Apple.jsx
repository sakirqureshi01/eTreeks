function Apple() {
  return (
    <section className="
      bg-gradient-to-r from-red-500 via-pink-600 to-purple-700
      py-6 md:py-10
    ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="
          grid grid-cols-1
          md:grid-cols-3
          gap-6 md:gap-10
          text-white
          text-center md:text-left
        ">

          {/* Item 1 */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="text-4xl md:text-5xl">📘</div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold">
                2,769 online courses
              </h3>
              <p className="text-sm md:text-base text-white/80">
                Explore a variety of fresh topics
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="text-4xl md:text-5xl">👨‍🏫</div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold">
                Expert instruction
              </h3>
              <p className="text-sm md:text-base text-white/80">
                Find the right instructor for you
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="text-4xl md:text-5xl">♾️</div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold">
                Lifetime access
              </h3>
              <p className="text-sm md:text-base text-white/80">
                Learn on your schedule
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Apple;
