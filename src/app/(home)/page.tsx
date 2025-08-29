'use client'

import { Header } from "@/components/Header"
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { StepFive } from "./components/StepFive";
import { StepFour } from "./components/StepFour";
import { StepOne } from "./components/StepOne";
import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";
import { UserProvider } from "@/contexts/UserContext";
import { useState } from "react";

export default function Home() {
  const [ step, setStep ] = useState(1);

  return (
    <ReactQueryProvider>
      <UserProvider>
        <div>
          <Header />
          <main className="m-10">
            { step === 1 && <StepOne setStep={setStep} /> }
            { step === 2 && <StepTwo /> }
            
            {/* */}
            {/* <StepThree /> */}
            {/* <StepFour /> */}
            {/* <StepFive /> */}
          </main>
        </div>
      </UserProvider>
    </ReactQueryProvider>
  );
}
