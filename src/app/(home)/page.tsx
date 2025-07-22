import { Header } from "../../components/Header"
import { StepOne } from "./components/StepOne";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="m-10">
        <StepOne />
      </main>
    </div>
  );
}
