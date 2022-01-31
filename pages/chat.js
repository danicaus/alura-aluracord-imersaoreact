import React from "react";
import { Box, TextField, Button } from "@skynexui/components";
import { createClient } from "@supabase/supabase-js";

import localData from "../config.json";
import Header from "../src/components/Header";
import MessageList from "../src/components/MessageList";
import { ButtonSendSticker } from "../src/components/ButtonSendSticker";

export function getServerSideProps() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_PUBLIC;

  return {
    props: {
      supabaseUrl,
      supabaseKey,
    },
  };
}

export default function ChatPage({ supabaseUrl, supabaseKey }) {
  const [message, setMessage] = React.useState([]);
  const [messageList, setMessageList] = React.useState([]);

  const supabaseClient = createClient(supabaseUrl, supabaseKey);

  function updateChat( data, method) {
    switch(method) {
      case('reload'):
        setMessageList(data);
      break;
      case('post'):
        setMessageList((updatedListState) => { 
          return [
            data,
            ...updatedListState,
          ]
        })
      break;
      case('delete'):
        setMessageList((updatedListState) => {
          const listWithoutMessageClicked = updatedListState.filter( message => {
            return message.id != data
          })
          return listWithoutMessageClicked
        })
      break;
    }
  }
  
  function sendMessage(message) {
    const messageData = {
      texto: message,
      de: localStorage.getItem("user"),
    };
    postMessageToSupabase(messageData);
    setMessage("");
  }

  function postMessageToSupabase(messageData) {
    supabaseClient
      .from("messageList")
      .insert([messageData])
      .then(({ data }) => {
        console.log("Nova mensagem adicionada: ", data)
        //updateChat(data[0], 'post');
      });
  }

  function removeMessage(messageId) {
    supabaseClient
      .from('messageList')
      .delete()
      .match( { id: messageId })
      .then(({ data }) => {
        console.log("Mensagem deletada: ", data)
        //updateChat(data[0].id, 'delete')
      })
  }

  React.useEffect(() => {
    supabaseClient
      .from("messageList")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        updateChat(data, 'reload');
      });
    
    const subscription = supabaseClient
      .from("messageList")
      .on('INSERT', (data) => {
        updateChat(data.new, 'post')
      })
      .on('DELETE', ({old}) => {
        updateChat(old.id, 'delete')
      })
      .subscribe()

    return () => {
      subscription.unsubscribe();
    }  
      
  }, []);

  function onStickerClick(sticker) {
    const message = `:sticker: ${sticker}`
    sendMessage(message);
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
          <MessageList
            list={messageList}
            removeMessage={removeMessage}
          />
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
            onSubmit={(event) => {
              event.preventDefault();
              message.length > 5 && sendMessage(message);
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
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) => {
                if (event.key == "Enter" && event.target.value.length > 5) {
                  event.preventDefault();
                  sendMessage(event.target.value);
                }
              }}
            />
            <Box
              styleSheet={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: '100%',
                marginBottom: '8px'
              }}
            >
              <ButtonSendSticker
                onStickerClick={onStickerClick}
              />
              <Button
                iconName="ArrowAltCircleRight"
                disabled={!(message.length > 5)}
                type="submit"
                buttonColors={{
                  contrastColor: localData.theme.colors.neutrals["050"],
                  mainColor: localData.theme.colors.primary[500],
                  mainColorLight: localData.theme.colors.primary[400],
                  mainColorStrong: localData.theme.colors.primary[600],
                }}
                styleSheet={{
                  fontWeight: 600,
                  minWidth: "50px",
                  minHeight: "50px",
                  fontSize: "20px",
                  lineHeight: "0",
                  marginLeft: '12px'
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
