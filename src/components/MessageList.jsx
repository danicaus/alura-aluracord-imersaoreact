
import React from 'react';
import { Box, Text, Image } from "@skynexui/components";

import ExitButton from "./ExitButton";
import handleDateFormat from "../utils/handleDateFormat";
import localData from "../../config.json";

function MessageList({ list, removeMessage }) {
  
  return (
    <Box
    tag="ul"
    styleSheet={{
      overflow: "scroll",
      display: "flex",
      flexDirection: "column-reverse",
      flex: 1,
      color: localData.theme.colors.neutrals["000"],
      marginBottom: "16px",
    }}
    >
      { list.map((message) => {
        return (
          <Text
            key={message.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              width: 'fit-content',
              hover: {
                backgroundColor: localData.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/${message.de}.png`}
              />
              <Text tag="strong">{message.de}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: localData.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {handleDateFormat(message.created_at, 3)}
              </Text>
            </Box>
              <ExitButton
                removeMessage={removeMessage}
                messageId={message.id}
              />
            </Box>
            {message.texto.startsWith(':sticker:')
              ? (
                <Image 
                  src={message.texto.replace(':sticker:', '')}
                  styleSheet={{
                    height: '100px',
                  }}
                />
              )
              : (
                message.texto
              )
            }
          </Text>
        )
      })}
    </Box>
    );
}

export default MessageList;
