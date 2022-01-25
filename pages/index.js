import React from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';

import stylesConfig from '../config.json';
import Title from '../components/Title';

function HomePage() {
  const [username, setUsername] = React.useState('');
  const newPage = useRouter();

  function handleInputChange(event) {
    const value = event.target.value;
    setUsername(value);
  }
  
  function handleFormSubmit(event) {
    event.preventDefault();
    newPage.push('chat');
  }

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: stylesConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover', 
          backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', 
            maxWidth: '700px',
            borderRadius: '5px', 
            padding: '32px', 
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: stylesConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            onSubmit={handleFormSubmit}
            as="form"
            styleSheet={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: { 
                xs: '100%', 
                sm: '50%' 
              }, 
              textAlign: 'center', 
              marginBottom: '32px',
            }}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text 
              variant="body3" 
              styleSheet={{ 
                marginBottom: '32px', 
                color: stylesConfig.theme.colors.neutrals[300] 
              }}
            >
              {stylesConfig.name}
            </Text>

            <TextField
              onChange={handleInputChange}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: stylesConfig.theme.colors.neutrals[200],
                  mainColor: stylesConfig.theme.colors.neutrals[900],
                  mainColorHighlight: stylesConfig.theme.colors.primary[500],
                  backgroundColor: stylesConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: stylesConfig.theme.colors.neutrals["000"],
                mainColor: stylesConfig.theme.colors.primary[500],
                mainColorLight: stylesConfig.theme.colors.primary[400],
                mainColorStrong: stylesConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: stylesConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: stylesConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: stylesConfig.theme.colors.neutrals[200],
                backgroundColor: stylesConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  )
}

export default HomePage;