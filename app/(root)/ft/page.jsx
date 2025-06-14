import Header from "../../components/Header";
import FunctionalTrainingDescription from "./components/FunctionalTrainingDescription";

const FunctionalTraining = () => {
  return (
    <div>
      <Header />
      <h2 className="text-2xl sm:text-3xl text-white my-10 font-bold text-center ">
        WHAT IS FUNCTIONAL TRAINING?
      </h2>
      <FunctionalTrainingDescription />
    </div>
  );
};

export default FunctionalTraining;
