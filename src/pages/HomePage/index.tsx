import { Header } from "@/components/Header";
import { StepTwo } from "./components/StepTwo";
// import { StepOne } from "./components/StepOne";


export function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* <StepOne /> */}
        <StepTwo />
      </main>
    </>
  )
}