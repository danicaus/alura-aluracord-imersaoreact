import React from "react";
import { Box, TextField, Button } from "@skynexui/components";
import { createClient } from '@supabase/supabase-js';

import localData from "../config.json";
import Header from "../src/components/Header";
import MessageList from "../src/components/MessageList";

export function getServerSideProps() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_PUBLIC

  return {
    props: {
      supabaseUrl,
      supabaseKey
    }
  };
}

export default function ChatPage({ supabaseUrl, supabaseKey }) {
  const [message, setMessage] = React.useState([]);
  const [messageList, setMessageList] = React.useState([]);

  const supabaseClient = createClient(supabaseUrl, supabaseKey)

  function sendMessage(message) {
    const messageData = {
      texto: message,
      de: localStorage.getItem('user'),
    };
    postMessageToSupabase(messageData)
    setMessage('')
  }

  function postMessageToSupabase(messageData) {
    supabaseClient
      .from('messageList')
      .insert([messageData])
      .then(({ data }) => {
        setMessageList([
          data[0],
          ...messageList,
        ])
      })
  }

  React.useEffect(() => {
   supabaseClient
      .from('messageList')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setMessageList(data)
      })
  }, [])

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
            setMessageList={setMessageList} 
            supabaseClient={supabaseClient}
          />
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
