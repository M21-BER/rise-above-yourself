import CheckItem from "@/app/components/CheckItem";
import Header from "../../components/Header";
import Exercises from "./components/Exercises";

const FunctionalTraining = () => {
  return (
    <div>
      <Header page="Functional Training" />
      <section className="bg-black text-gray-200 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section: Introduction */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
              Why We Believe in Functional Training at Ray Athletics
            </h2>
            <p className="text-lg leading-relaxed">
              At{" "}
              <span className="text-red-500 font-semibold">Ray Athletics</span>,
              functional training is the core of everything we do. We believe
              everyone — no matter your age, background, or fitness level — can
              become stronger and more confident by learning to own their body.
              Our programs focus on real movements, real strength, and real
              progress.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Think about the way you move during your day: picking up
              groceries, playing with your kids, climbing stairs, or even
              sprinting to catch a bus. Functional training focuses on those
              kinds of movements — building strength, balance, and coordination
              that actually help you in real situations.
            </p>
          </div>

          {/* Section: What is Functional Training */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-50 mb-4">
              What Is Functional Training?
            </h3>
            <p className="text-lg leading-relaxed">
              Simply put, functional training is all about training your body
              for real life. Instead of isolating muscles or just lifting heavy
              weights, you train to move better — so you can squat, jump, lift,
              run, and carry yourself through daily life without pain or
              struggle.
            </p>
          </div>

          {/* Section: Why It Matters */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-50 mb-4">
              Why Functional Training Matters
            </h3>
            <div className="list-disc list-inside space-y-4 text-lg leading-relaxed">
              <CheckItemComp
                text="Builds Real-World Strength:"
                subtext="Lift, carry, or push things without risking injury."
              />

              <CheckItemComp
                text="Improves Mobility and Balance:"
                subtext="Move more freely and reduce your injury risk."
              />
              <CheckItemComp
                text="Makes You More Athletic:"
                subtext="Enhances your speed, power, and agility."
              />

              <CheckItemComp
                text=" Fits Everyone:"
                subtext="No gym needed — just your body and willingness."
              />
            </div>
          </div>

          {/* Section: Exercises */}
          {/* <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-50  mb-4">
              Common Functional Exercises
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-lg font-medium text-black">
              {[
                "Squats",
                "Push-ups",
                "Lunges",
                "Pull-ups",
                "Planks",
                "Jumping / Sprinting",
              ].map((exercise) => (
                <div
                  key={exercise}
                  className="bg-white rounded-xl py-3 px-2 shadow-lg hover:bg-red-100 transition"
                >
                  {exercise}
                </div>
              ))}
            </div>
          </div> */}

          <Exercises />
        </div>
      </section>
    </div>
  );
};

export default FunctionalTraining;

function CheckItemComp({ text, subtext }) {
  return (
    <div className="flex items-start gap-3 text-gray-200">
      <div className="mt-1 min-w-[0.75rem] sm:min-w-[1rem] aspect-square rounded-full red_grad_bg shadow-md" />
      <div>
        <span className="text-sm sm:text-base leading-snug text-red-400 font-semibold">
          {text}
        </span>
        &nbsp;{subtext}
      </div>
    </div>
  );
}
