import { Header } from "@/components/Header";
import { StepThree } from "./components/StepThree";
// import { StepTwo } from "./components/StepTwo";
// import { StepOne } from "./components/StepOne";


export function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* <StepOne /> */}
        {/* <StepTwo /> */}
        <StepThree />
      </main>
    </>
  )
}