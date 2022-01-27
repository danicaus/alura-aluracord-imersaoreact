import React from "react";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useRouter } from "next/router";
// import { useQuery } from "react-apollo";

import axios from "axios";

import localData from "../config.json";
import Title from "../components/Title";
import UsernameData from "../components/UsernameData";

const usernameStates = {
  DEFAULT: localData.formMemes.status.welcome,
  LOADING: localData.formMemes.status.typing,
  DONE: localData.formMemes.result,
  ERROR: localData.formMemes.status.notFound,
};

function HomePage() {
  const [usernameRequestStatus, setUsernameRequestStatus] = React.useState(
    usernameStates.DEFAULT
  );
  const [username, setUsername] = React.useState("");
  const [timer, setTimer] = React.useState("");
  const [userData, setUserData] = React.useState({
    followers: "",
    following: "",
    accountDate: "",
    starsReceived: "",
    repositories: "",
    commits: "",
    lastCommitDate: "",
  });

  const newPage = useRouter();

 
  function waitBeforeRequest(value) {
    const timeout = timer;
    timeout && clearTimeout(timeout);

    const newTimeout = setTimeout(() => {
      const res = fetcher(value);
      console.log("res: ", res)
    }, 2000);

    setTimer(newTimeout);
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setUsername(value);

    if (value.length > 0) {
      setUsernameRequestStatus(usernameStates.LOADING);
      waitBeforeRequest(value);
    } else {
      setUsernameRequestStatus(usernameStates.DEFAULT);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    newPage.push("chat");
  }

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundImage:
            "url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/staredad.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundPosition: "bottom right",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            marginLeft: {
              xs: "16px",
              sm: "10vw",
            },
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: `${localData.theme.colors.neutrals[700]}CC`,
          }}
        >
          <Box
            styleSheet={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              marginBottom: "16px",
            }}
          >
            {/* Formulário */}
            <Box
              onSubmit={handleFormSubmit}
              as="form"
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: {
                  xs: "100%",
                  sm: "50%",
                },
                textAlign: "center",
                marginBottom: "32px",
              }}
            >
              <Title tag="h2">Boas vindas!</Title>
              <Text
                variant="body3"
                styleSheet={{
                  marginBottom: "32px",
                  color: localData.theme.colors.neutrals[300],
                }}
              >
                {localData.name}
              </Text>

              <TextField
                onChange={handleInputChange}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: localData.theme.colors.neutrals[200],
                    mainColor: localData.theme.colors.neutrals[900],
                    mainColorHighlight: localData.theme.colors.primary[500],
                    backgroundColor: localData.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type="submit"
                label="Entrar"
                fullWidth
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
            {/* Formulário */}

            {/* Area do meme */}
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "300px",
                padding: "16px",
                marginLeft: {
                  xs: "0",
                  sm: "32px",
                },
                backgroundColor: localData.theme.colors.neutrals[800],
                border: "1px solid",
                borderColor: localData.theme.colors.neutrals[999],
                borderRadius: "10px",
                flex: 1,
                minHeight: "240px",
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: "10px",
                  marginBottom: "16px",
                }}
                src={usernameRequestStatus.image}
              />
              <Text
                variant="body3"
                styleSheet={{
                  color: localData.theme.colors.neutrals[200],
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {usernameRequestStatus.message}
              </Text>
            </Box>
            {/* Area do meme */}
          </Box>

          {/* Area do resultado */}
          <Box
            styleSheet={{
              borderTop: "1px solid",
              borderTopColor: localData.theme.colors.neutrals[800],
              paddingTop: "16px",
              paddingBottom: "8px",
            }}
          >
            <Title tag="h3"> Dados do usuário </Title>
          </Box>
          <Box
            styleSheet={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            {/* Imagem do user */}
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "200px",
                padding: "16px",
                backgroundColor: localData.theme.colors.neutrals[800],
                border: "1px solid",
                borderColor: localData.theme.colors.neutrals[999],
                borderRadius: "10px",
                flex: 1,
                minHeight: "240px",
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: "50%",
                  marginBottom: "16px",
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: localData.theme.colors.neutrals[200],
                  backgroundColor: localData.theme.colors.neutrals[900],
                  padding: "3px 10px",
                  borderRadius: "1000px",
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Imagem do user */}

            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "16px",
                margin: "16px",
                maxWidth: "400px",
                backgroundColor: localData.theme.colors.neutrals[800],
                borderRadius: "4px",
                flex: 1,
              }}
            >
              <UsernameData>Seguidores: {userData.followers}</UsernameData>
              <UsernameData>Seguindo: {userData.following}</UsernameData>
              <UsernameData>Estrelas recebidas:</UsernameData>
              <UsernameData>Repositórios: {userData.repositories}</UsernameData>
              <UsernameData>Commits: {userData.commits}</UsernameData>
              <UsernameData>Data de criação do Github:</UsernameData>
              <UsernameData>Data do último commit:</UsernameData>
            </Box>
          </Box>

          <Box
            styleSheet={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=10&theme=panda`}
            />
          </Box>
          {/* Dados do user */}
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
