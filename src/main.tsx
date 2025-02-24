import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Mint from "./step_3.tsx";
import ParticlesBackground from "./components/ParticlesBackground.tsx";
import { LaserEyesProvider, GLITTR_DEVNET, TESTNET4 } from "@glittr-sdk/lasereyes";
import NavigationWrapper from "./components/NavigationWrapper.tsx";
import { NETWORK } from "./constants";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParticlesBackground />
    {/* Provider for Wallet Connection */}
    <LaserEyesProvider config={{ network: NETWORK == "regtest" ? GLITTR_DEVNET : NETWORK == "testnet" ? TESTNET4 : NETWORK}}> 
      <NavigationWrapper />
      <Mint />
    </LaserEyesProvider>
  </StrictMode>
);
