import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Hr,
  lightGray,
  vscBackground,
  vscForeground,
} from "../components";
import KeyboardShortcutsDialog from "../components/dialogs/KeyboardShortcuts";
import { IdeMessengerContext } from "../context/IdeMessenger";
import { useNavigationListener } from "../hooks/useNavigationListener";

const TutorialButton = styled(Button)`
  padding: 2px 4px;
  margin-left: auto;
  margin-right: 12px;
  background-color: transparent;
  color: ${vscForeground};
  border: 1px solid ${lightGray};
  &:hover {
    background-color: ${lightGray};
  }
`;

function HelpPage() {
  useNavigationListener();
  const navigate = useNavigate();
  const ideMessenger = useContext(IdeMessengerContext);

  return (
    <div className="overflow-y-scroll overflow-x-hidden">
      <div
        className="items-center flex m-0 p-0 sticky top-0"
        style={{
          borderBottom: `0.5px solid ${lightGray}`,
          backgroundColor: vscBackground,
        }}
      >
        <ArrowLeftIcon
          width="1.2em"
          height="1.2em"
          onClick={() => navigate("/")}
          className="inline-block ml-4 cursor-pointer"
        />
        <h3 className="text-lg font-bold m-2 inline-block">Help Center</h3>
        <TutorialButton
          onClick={() => {
            ideMessenger.post("showTutorial", undefined);
          }}
        >
          Open tutorial
        </TutorialButton>
      </div>

      <h3
        className="my-0 py-3 mx-auto text-center cursor-pointer"
        onClick={() => {
          navigate("/stats");
        }}
      >
        View My Usage
      </h3>
      <Hr className="my-0" />
      <KeyboardShortcutsDialog />
    </div>
  );
}

export default HelpPage;
