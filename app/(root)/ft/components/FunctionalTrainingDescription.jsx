export default function FunctionalTrainingDescription() {
  return (
    <section
      className="w-full px-4 py-16 bg-[#0a0a0a] text-white"
      id="next-section"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Line */}
        <div className="w-20 h-1 mb-6 mx-auto rounded grad"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide mb-8">
          Why Functional Training?
        </h2>

        {/* Content Box */}
        <div className="bg-[#121212] border border-[#D00A02] rounded-lg shadow-lg p-6 sm:p-10 text-left">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-gray-300">
            Functional training is a way of exercising that helps your body move
            better in everyday life. Instead of focusing on just one muscle, it
            trains your whole body to work together. This makes it easier to do
            things like walking, lifting, running, or playing sports. For
            example, when you pick up groceries, your body uses many muscles at
            once.
            <br />
            <br />
            Functional training helps those muscles get stronger and work better
            together—so you don't get hurt and can move with more power and
            control.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            At{" "}
            <strong className="text-[#D00A02] font-semibold italic">
              Ray Athletics
            </strong>
            , we use exercises that improve your balance, strength, and
            flexibility all at the same time. This kind of training helps you be
            stronger and feel better—whether you're playing soccer, working, or
            just moving around every day.
          </p>
        </div>
      </div>
    </section>
  );
}
