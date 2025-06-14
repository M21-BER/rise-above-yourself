import Exercises from "./components/Exercises";
import CheckItem from "@/app/components/CheckItem";
function Detail() {
  return (
    <section className="bg-black text-gray-200 py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
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
        <Exercises />
      </div>
    </section>
  );
}

export default Detail;

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
