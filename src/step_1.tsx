import { useLaserEyes } from "@glittr-sdk/lasereyes";
import { CreateContractForm } from "./components/CreateContractFormNoTx";

export default function Mint() {
    const { connected } =
      useLaserEyes();
 return (
  //check that wallet is connected and create a contract form
  //form is all ts at this point, no bitcoin stuff happening
    <div className="z-10 min-h-screen p-8 mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-grow">
          {connected && <CreateContractForm />}
            <div className="space-y-2">
              <div className="h-px bg-gray-700/30 -mx-2 my-6"></div>
            </div>
          </div>
        </div>
      </div>

  );
}