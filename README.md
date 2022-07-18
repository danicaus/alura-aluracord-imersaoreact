<h1 align="center">
  Discord Alura Memes
</h1>

Aplicação de uma sala de chat para troca de mensagens entre usuários. Contém uma tela de login, que se comunica com a api do Github para trazer a foto e o nome do usuário.

Após entrar na sala de chat, o usuário consegue enviar mensagens, que são armazenadas em um banco de dados. No caso desse projeto, foi utilizado o Supabase para essa finalidade.

Projeto criado na Imersão React da Alura em Janeiro de 2022.

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

Com isso, essas informações o app seleciona um meme:

- Conta sem commits:

<img src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif" width="300" alt="GIF John Travolta confuso" style="margin-left:40px">

- Conta criada há mais de 10 anos:

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrVCShmXFuqPXS1KdZ3_coHie4nkn1np5LWC2N9HUHnWMnUhRiuLRjHSDgv5gYjrx8dI&usqp=CAU" width="300" alt="Desenho de um homem de bigode com cartola, terno e monóculo, representando um meme antigo" style="margin-left:40px">

- Sem commits há mais de 3 meses:

<img src="https://www.criatives.com.br/wp-content/uploads/2020/01/Atriz-de-Titanic-02-600x355.jpeg" width="300" alt="Rose do Titanic idosa" style="margin-left:40px">

- Mais de 100 seguidores:

<img src="https://c.tenor.com/2nQ9LSXvGX8AAAAM/xuxa.gif" width="300" alt="Mulher abrindo porta de entrada de sua casa" style="margin-left:40px">

- Não cumpre nenhum dos outros critérios:  

<img src="https://i.imgflip.com/3q5zzc.png" width="300" alt="Baby Yoda com óculos de grau" style="margin-left:40px">

Por fim, adaptei uma aplicação que uso no meu perfil para mostrar as linguagens mais usadas pelo usuário:

<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=danicaus&layout=compact&langs_count=7&theme=omni"/>

Link do repositório da aplicação: https://github.com/anuraghazra/github-readme-stats


### <ins>**Gravar nome do user no localStorage**</ins>
Na aula o login do usuário é implementado à url, no entanto usei o armazenamento em localStorage.

### <ins>**serverSideProps (NextJS)**</ins>
Aplicada para adicionar uma camada de segurança no uso das chaves do Supabase. A Imersão deixa a chave e a url dentro do código, permitindo com que sejam lidas pelo browser.

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

Usei a função [ServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props) para exportar a chave e a url de requisição para o Supabase. Com isso, o Next pode se comunicar com o Node e obter as chaves de ambiente e passar como props para a página de chat, e essa página pode se comunicar com o Supabase sem expor as variáveis no browser.

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
