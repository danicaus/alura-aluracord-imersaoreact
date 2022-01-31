# Discord Alura Memes

Projeto criado na Imersão React da Alura. 

A Imersão React desenvolveu um projeto de sala de chat para troca de mensagens entre usuários. Contém uma tela de login, que se comunica com a api do Github para trazer a foto e o nome do usuário.

Após entrar na sala de chat, o usuário consegue enviar mensagens, que são armazenadas em um banco de dados. No caso desse projeto, foi utilizado o Supabase para essa finalidade.

---

## Desafios implementados

Além do conteúdo das aulas, segui com alguns desafios propostos e ideias particulares.

### <ins>**Tema "Memes"**</ins>
Na ideia original, o tema era "Matrix". Fomos desafiados a trazer um tema diferente, apliquei o meme do pai encarando.

### <ins>**Dados do usuário do Github**</ins>
Inspirada na ideia dos memes, trouxe alguns dados do Github:
- Data de criação da conta no Github
- Número de seguidores
- Número de pessoas que o user segue
- Quantidade de estrelas recebidas em todos os repositórios
- Quantidade de repositórios públicos
- Número de commits
- Data do último commit

Com isso, essas informações o app seleciona um meme.

Também adaptei uma aplicação que uso no meu perfil para mostrar as linguagens mais usadas pelo usuário:

<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=danicaus&layout=compact&langs_count=7&theme=omni"/>

Link do repositório da aplicação: https://github.com/anuraghazra/github-readme-stats

Obrigada pelo [vídeo](https://youtu.be/TsaLQAetPLU), [Rafa Ballerini!](https://github.com/rafaballerini)

### <ins>**Gravar nome do user no localStorage**</ins>
Na aula o login do usuário é implementado à url, no entanto usei o armazenamento em localStorage.

### <ins>**Botão de enviar**</ins>
Adicionado um botão para enviar mensagem no chat, que executa a mesma função que a tecla "Enter", ensinada na Imersão.

### <ins>**Botão de remoção da mensagem**</ins>
Incluído um botão para excluir a mensagem. Adaptei o CSS para que ele ficasse na extremidade direita da caixa de mensagem.

### <ins>**Formato de data**</ins>
Adicionado o horário da mensagem enviada. O bloco passado na Imersão só enviada a data.

Além disso, como o Supabase grava o horário do post da mensagem sem considerar o fuso horário do Brasil, fiz com que o horário das mensagens obedecesse o horário do Brasil.

### <ins>**Página de erro**</ins>
Foi criada uma página de 404, também com um meme feliz.

---
## **Tecnologias utilizadas**
### <ins>**Next**</ins>
Aplicação criada com [NextJS](https://nextjs.org/) com [setup manual](https://nextjs.org/docs/getting-started#manual-setup).

Aplicamos o [next/router](https://nextjs.org/docs/api-reference/next/router) para redirecionamento de página entre o login e a página de chat. Isso permite com que a transição entre as páginas seja feita do lado do browser, melhorando a performance de carregamento da aplicação.

### <ins>**@skynexui**</ins>

A fim de facilitar a estilização dos blocos e acelerar a implementação do projeto, foi utilizado componentes já prontos da [SkynexUI](https://github.com/skynexui/components), que são facilmente editáveis para personalização.

[O Storybook](https://storybook.skynexui.dev/?path=/story/introduction--page) dessa biblioteca permite a visualização de possíveis adaptações, o que facilita ainda mais sua implementação.

Valeu, [Dev Soutinho!](https://github.com/omariosouto) ❤

### <ins>**Supabase**</ins>

O [Supabase](https://supabase.com/) foi usado como um serviço de backend. Ele pode ser usado de várias formas, mas neste projeto foi usado como um database para armazenar e alterar as mensagens enviadas.

Para atualização do chat em tempo real, foi usada a feature de [*subscribe*](https://supabase.com/docs/reference/javascript/subscribe).

Extremamente fácil de criar, administrar e usar, além de ser de graça!

### <ins>**@crello/react-lottie**</ins>

[Biblioteca](https://github.com/crello/react-lottie) para uso de animações baixadas em um arquivo json a partir da página [Lottie Files](https://lottiefiles.com/). Permite adicionar a animação como um componente React, bem como configurar alguns parâmetros para a animação.

As animações são muito lindas! 😍

Usada na página 404.

---
## Contribuição

Esse projeto ainda não está bem estruturado para receber contribuições, mas já criei [algumas issues](https://github.com/danicaus/aluracord-imersaoreact-0122/issues), que registram melhorias e bugs já encontrados.

Caso encontre um bug ou tenha uma nova sugestão de melhoria, sinta-se à vontade para criar uma issue para discutirmos sua implementação! 

---
## Agradecimentos

Sou especialmente grata ao professores dessa Imersão [Mario Souto](https://github.com/omariosouto) e [Paulo Silveira](https://github.com/peas) pelos aprendizados alcançados com esse projeto, e pela oportunidade de exercitar os conhecimentos que ganhei desde Julho/21, quando comecei a aprender React.

Agradeço também ao time da Alura por essa entrega! Admiro demais vocês! 🤩
