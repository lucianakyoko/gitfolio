import { Header } from "@/components/Header";
import { useState } from "react";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";
import { UserProvider } from "@/contexts/UserContext";
import { StepFive } from "./components/StepFive";

export function HomePage() {
  const [step, setStep] = useState(1)

  return (
    <UserProvider>
      <Header />
      <main>
        { step === 1 && <StepOne onNext={() => setStep(2)} /> }
        { step === 2 && <StepTwo onNext={() => setStep(3)} /> }
        { step === 3 && 
          <StepThree 
            onPrevious={() => setStep(2)} 
            onNext={() => setStep(4)} 
          /> 
        }
        { step === 4 && 
          <StepFour 
            onPrevious={() => setStep(3)} 
            onNext={() => setStep(5)} 
          /> 
        }
        {step === 5 && <StepFive />}
      </main>
    </UserProvider>
  )
}