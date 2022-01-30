import React from "react";
import { Icon } from "@skynexui/components";

import localData from "../../config.json";

export default function ExitButton({removeMessage, messageId}) {
  return (
    <>
      <button 
        className="exitButton"
        onClick={() => removeMessage(messageId)}
      >
        <Icon label="Sair" name="FaTimesCircle" />
      </button>
      <style jsx>{`
        .exitButton {
          color: ${localData.theme.colors.primary['400']};
          font-size: 14px;
          font-weight: 600;
          border: none;
          background-color: transparent;
          margin-left: 20px;
          margin-bottom: 5px;
          cursor: pointer;
          transition: .2s ease-in-out;
        }
        .exitButton:hover {
          color: ${localData.theme.colors.primary['600']};
        }
      `}</style>
    </>
  );
}
