import {
  CheckBadgeIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import { ToCoreFromIdeOrWebviewProtocol } from "core/protocol/core";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { lightGray } from "../../components";
import ConfirmationDialog from "../../components/dialogs/ConfirmationDialog";
import { Input } from "../../components";
import { IdeMessengerContext } from "../../context/IdeMessenger";
import {
  setDialogMessage,
  setShowDialog,
} from "../../redux/slices/uiStateSlice";
import { isJetBrains } from "../../util";
import { FREE_TRIAL_LIMIT_REQUESTS, hasPassedFTL } from "../../util/freeTrial";
import { Div, StyledButton } from "./components";
import { useOnboarding } from "./utils";

type OnboardingMode =
  ToCoreFromIdeOrWebviewProtocol["completeOnboarding"][0]["mode"];

function Onboarding() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ideMessenger = useContext(IdeMessengerContext);

  const [dstackToken, setDstackToken] = useState("");
  const [selectedOnboardingMode, setSlectedOnboardingMode] = useState<
    OnboardingMode | undefined
  >(undefined);

  const { completeOnboarding } = useOnboarding();

  function onSubmit() {
    ideMessenger.post("completeOnboarding", {
      mode: selectedOnboardingMode,
    });
    ideMessenger.post("index/forceReIndex", undefined);
    navigate("/localOnboarding");
  }

  function myOnSubmit() {
    completeOnboarding();
  }

  return (
    <div className="max-w-96  mx-auto leading-normal">
      <div className="leading-relaxed">
        <h1 className="text-center">Welcome to EA Copilot Config</h1>
        <p className="text-center ">
          For more advanced configuration, You can edit "~/.continue/config.json".
          {/* You can update your configuration after onboarding by clicking the
          <Cog6ToothIcon className="inline-block h-5 w-5 align-middle px-1" />
          icon in the bottom-right corner of Continue. */}
        </p>
      </div>

      <div className="flex flex-col gap-6 pb-8 pt-4">
        <Div
          selected={true}
          onClick={() => setSlectedOnboardingMode("local")}
        >
          <h3>
            <ComputerDesktopIcon
              width="1.4em"
              height="1.4em"
              className="align-middle pr-2"
            />
            EA-dstack Token
          </h3>
          <p>
            If you have an personal EA-dstack token, you can paste it here.
          </p>
          <Input
            placeholder="Paste token here"
            value={dstackToken}
            onChange={(e) => setDstackToken(e.target.value)}
          />
        </Div>

      </div>

      <div className="flex justify-end">
        <div className="flex items-center gap-4 ml-auto">
          <div
            className="cursor-pointer"
            style={{ color: lightGray }}
            onClick={(e) => {
              dispatch(setShowDialog(true));
              dispatch(
                setDialogMessage(
                  <ConfirmationDialog
                    text="Are you sure you want to skip onboarding? Unless you are an existing user or already have a config.json we don't recommend this."
                    onConfirm={() => {
                      completeOnboarding();
                    }}
                  />,
                ),
              );
            }}
          >
            Skip
          </div>
          <StyledButton disabled={!selectedOnboardingMode} onClick={myOnSubmit}>
            Continue
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
