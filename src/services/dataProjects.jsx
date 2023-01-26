import coronaImg from "../assets/Corona.png";
import automacaoImg from "../assets/automacao.png";
import quizLogicaImg from "../assets/quizLogica.png";
import loginPage from "../assets/LangingPage-login.png";
const data = [
  {
    id: 1,
    titulo: "Corona NEWS",
    img: coronaImg,
    Descricao:
      "Sistema de consulta de dados relacionados aos Casos de COVID-19 no mundo, o usúario atravéz da interface visual poderá fazer uma busca de um Determinado País de escolha, o sistema mostrará dados, como o numero atual de casos, o número total de Mortes, e também o número total de Recuperados, e mais alguns dados interessantes...",
    link: "https://github.com/PFelipe15/coronanews/",
    linkBuild: null,
    tecnologias: ["Javascript", "React", "Api", "Axios"],
  },
  {
    id: 2,
    titulo: "AUTOMAÇÃO JS",
    img: automacaoImg,
    Descricao:
      "Parcial Sistema de Web Scrapping, esse é um sistema Backend de automação NODE, em que é possivel por meio de JS abrir o navegador, entrar em uma determinada pagina, e retornar todos os titulos de pesquisa que o usuario digitar, pelo lado do servidor é feito uma requisição em que o sistema filtra todos os titulos de pesquisa relacionados ao que o usuario pesquisou, não só isso, mas o usuário tem as opções e ferramentas de gerar um Scrennshot da tela onde mostra os titulos como também tem a opção de gerar um PDF exclusivo do que ele pesquisou.",
    link: "https://github.com/PFelipe15/Challenger02/",
    linkBuild: null,
    tecnologias: ["Javascript", "Node", "express", "Api", "Puppeter"],
  },
  {
    id: 3,
    titulo: "QUIZ ",
    img: quizLogicaImg,
    Descricao:
      " Esse é um quiz desenvolvido em FrontEnd com o propósito de ajudar a minha turma de graduação a medir o conhecimento em logica de programação, nesse quiz foi usado um array de banco de dados onde esta localizado as perguntas e respostas que serão ultilizadas no quiz, o usuario começa o quiz inserindo seu nome e após isso o mesmo já é direcionado para as perguntas, no quiz há uma medida de score para cada pergunta que o usuario acertar, e no final é mostrado um botão de analise de pontuação onde ao clicar é mostrado o score e uma analise..",
    link: "https://github.com/PFelipe15/quizlogica",
    linkBuild: "https://quizlogica.netlify.app/",
    tecnologias: ["Javascript", "React", "ApiContext"],
  },
  {
    id: 4,
    titulo: "Pagina de Login ",
    img: loginPage,
    Descricao:
      " Essa é uma Landing page, uma pagina estática de login onde treinei meus conhecimentos em css e Html, minha primeira pagina de login supostamente de uma compania de acessoria que se chama Dev&Cia, não foi ultilizado nenhum framework.",
    link: "https://github.com/PFelipe15/LoginDevCia",
    linkBuild: "https://pfelipe15.github.io/LoginDevCia/",
    tecnologias: ["CSS", "HTML"],
  },
  
];

export default { data };
