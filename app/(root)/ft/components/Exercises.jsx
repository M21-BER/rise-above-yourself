function Exercises() {
  const content = [
    {
      title: "Squats",
      video: "/videos/main.mp4",
      description: "Build leg strength and mobility with this core movement.",
    },
    {
      title: "Push-ups",
      video: "/videos/main.mp4",
      description: "Enhance upper body and core strength anywhere.",
    },
    {
      title: "Lunges",
      video: "/videos/main.mp4",
      description: "Improve balance and stability one step at a time.",
    },
    {
      title: "Pull-ups",
      video: "/videos/main.mp4",
      description: "A classic test of upper body strength.",
    },
    {
      title: "Planks",
      video: "/videos/main.mp4",
      description: "Train your core with static stability.",
    },
    {
      title: "Jumping / Sprinting",
      video: "/videos/main.mp4",
      description: "Boost your explosive power and cardio endurance.",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-50 mb-8">
        Common Functional Exercises
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map((exercise) => (
          <div
            key={exercise.title}
            className="bg-zinc-950 border-1 border-[rgba(255,255,255,0.1)] rounded-md overflow-hidden shadow-md hover:bg-[rgba(0,0,0,0.5)] text-white transition duration-300"
          >
            <div className="aspect-video ">
              <video
                src={exercise.video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-left text-gray-50">
              <h4 className="text-xl font-bold text-gray-50 mb-2">
                {exercise.title}
              </h4>
              <p className="text-sm text-gray-700">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;
