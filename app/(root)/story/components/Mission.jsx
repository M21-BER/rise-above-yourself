import { HiMiniRocketLaunch, HiMiniEye, HiMiniBolt } from "react-icons/hi2";
import CheckItem from "../../../components/CheckItem";

export default function Mission() {
  return (
    <section className="py-16 sm:px-6 bg-black text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 font-allerta_stencil">
        MISSION. VISION. VALUES.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* Mission */}
        <div className="bg-zinc-950 border-1 border-[rgba(255,255,255,0.1)] rounded-3xl p-8 shadow-xl hover:shadow-red-500/20 transition-all w-full">
          <div className="flex items-center mb-4 text-white text-3xl">
            <HiMiniRocketLaunch className="mr-3  text-red-500" />
            <h3 className="text-xl sm:text-2xl font-bold">Mission</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            To help people take control of their body through movement that
            builds strength, control, and confidence — using what they already
            have.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-zinc-950 border-1 border-[rgba(255,255,255,0.1)]  rounded-3xl p-8 shadow-xl hover:shadow-red-500/20 transition-all w-full">
          <div className="flex items-center mb-4 text-white text-3xl">
            <HiMiniEye className="mr-3 text-red-500" />
            <h3 className="text-xl sm:text-2xl font-bold">Vision</h3>
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            A world where everyone moves like an athlete — strong, mobile,
            explosive, and in full control of their body.
          </p>
        </div>

        {/* Values */}
        {/* <div className="bg-zinc-900 rounded-3xl p-8 shadow-xl hover:shadow-red-500/20 transition-all w-full md:col-span-2 lg:col-span-1"> */}
        <div className="bg-zinc-950 border-1 border-[rgba(255,255,255,0.1)]  rounded-3xl p-8 shadow-xl hover:shadow-red-500/20 transition-all w-full sm:col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex items-center mb-4 text-white text-3xl">
            <HiMiniBolt className="mr-3  text-red-500" />
            <h3 className="text-xl sm:text-2xl font-bold">Values</h3>
          </div>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base text-gray-300 leading-snug">
            <CheckItem text="Everybody Is an Athlete" addon="text-red-100" />

            <p className="pl-5 text-gray-300 italic">
              ❝If you can move, you can train. If you can train, you can
              perform.❞
            </p>

            <CheckItem text="Discipline Over Hype" addon="text-red-100" />

            <p className="pl-5 text-gray-300 italic">
              ❝We don’t chase energy — we build consistency. Discipline is the
              difference between motion and progress.❞
            </p>

            <CheckItem text="Train the Whole System" addon="text-red-100" />

            <p className="pl-5 text-gray-300 italic">
              ❝Physical growth creates ripple effects — confidence, clarity, and
              control.❞
            </p>
            <CheckItem text="Growth Is the Standard" addon="text-red-100" />

            <p className="pl-5 text-gray-300 italic">
              ❝Every session is a chance to level up — physically, mentally,
              personally.❞
            </p>
            <CheckItem text="Community Built Different" addon="text-red-100" />

            <p className="pl-5 text-gray-300 italic">
              ❝A space where people push each other and show up. No egos, just
              effort.❞
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}
