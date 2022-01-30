import React from "react";
import { Box, Text, TextField, Image, Button, Icon } from "@skynexui/components";
import localData from "../config.json";
import Title from "../components/Title";
import ExitButton from "../components/ExitButton";

export default function ChatPage() {
  const [message, setMessage] = React.useState([]);
  const [messageList, setMessageList] = React.useState([]);

  function sendMessage(message) {
    const messageData = {
      id: Date.now(),
      message,
      user: "danicaus",
    };
    setMessageList([
      messageData,
      ...messageList, 
    ]);
    setMessage('')
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/staredad.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: localData.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: localData.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: localData.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList list={messageList} setMessageList={setMessageList} />
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
            onSubmit={event => {
              event.preventDefault()
              sendMessage(message)
            }}
          >
            <TextField
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: localData.theme.colors.neutrals[800],
                marginRight: "12px",
                color: localData.theme.colors.neutrals[200],
              }}
              id="textMessage"
              value={message}
              onChange={event => setMessage(event.target.value)}
              onKeyPress={(event) => {
                if (event.key == "Enter") {
                  event.preventDefault();
                  sendMessage(event.target.value);
                }
              }}
            />
            <Button
              label="Enviar"
              type="submit"
              buttonColors={{
                contrastColor: localData.theme.colors.neutrals["050"],
                mainColor: localData.theme.colors.primary[500],
                mainColorLight: localData.theme.colors.primary[400],
                mainColorStrong: localData.theme.colors.primary[600],
              }}
              styleSheet={{
                fontWeight: 600,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title variant="heading5">Chat</Title>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList({ list, setMessageList }) {
  function removeMessage(messageId) {
    const filterMessageClicked = list.filter( message => {
      return message.id != messageId
    })
    setMessageList(filterMessageClicked)
  }
  
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
                src={`https://github.com/${message.user}.png`}
              />
              <Text tag="strong">{message.user}</Text>
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: localData.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
              <ExitButton
                removeMessage={removeMessage}
                messageId={message.id}
              />
            </Box>
            {message.message}
          </Text>
        )
      })}
    </Box>
    );
}
