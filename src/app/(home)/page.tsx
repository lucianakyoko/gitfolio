import { Header } from "../../components/Header"
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="m-10">
        {/* <StepOne /> */}
        <StepTwo />
      </main>
    </div>
  );
}
