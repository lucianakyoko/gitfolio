import { Header } from "../../components/Header"
import { StepFive } from "./components/StepFive";
import { StepFour } from "./components/StepFour";
import { StepOne } from "./components/StepOne";
import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="m-10">
        <StepOne />
        {/* <StepTwo /> */}
        {/* <StepThree /> */}
        {/* <StepFour /> */}
        {/* <StepFive /> */}
      </main>
    </div>
  );
}
