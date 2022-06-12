/* funcoes dec */

function next_lore(next) {
   let imagem;
   var a = next;
   var show = "<table border = '1' style = width: 100%;>" + "<tr>" + "<th>" + "<strong>" + "Nação" + "</strong>" + "</th>" + "<th>" + "<strong>" + "Casa" + "</strong>" +"</th>" + "<th>" + "<strong>" + "Descricao" + "</strong>" + "</th>" + "</tr>" + "<tr>" + "<td>" + "<strong>" + details[a].nacao + "</strong>" + "</td>" + "<td>" + "<strong>" + details[a].casa + "</strong>" + "</td>" + "<td>" + "<strong>" + details[a].descricao + "</strong>" +"</td>" + "</tr>" + "</table>" + "<br><br>";

   var element = document.getElementById("dynamic").innerHTML = show;

   imagem = document.createElement('img');
   imagem.setAttribute("src",details[a].imagem);

   if(a == 3) {
      imagem.setAttribute("width","400");
      imagem.setAttribute("height","400");
      imagem.style.display = "flex";
      imagem.style.margin = "0,auto";
   } else {
      imagem.setAttribute("width","auto");
      imagem.setAttribute("height","auto");
      imagem.style.display = "flex";
      imagem.style.margin = "0,auto";
   }

   document.getElementById("dynamic").append(imagem);

   details_cont++;

   return details_cont;
   
}

function previous_lore(prev) {
   var a = prev - 1;
   var show = "<table border = '1' style = width: 100%;>" + "<tr>" + "<th>" + "<strong>" + "Nação" + "</strong>" + "</th>" + "<th>" + "<strong>" + "Casa" + "</strong>" +"</th>" + "<th>" + "<strong>" + "Descricao" + "</strong>" + "</th>" + "</tr>" + "<tr>" + "<td>" + "<strong>" + details[a].nacao + "</strong>" + "</td>" + "<td>" + "<strong>" + details[a].casa + "</strong>" + "</td>" + "<td>" + "<strong>" + details[a].descricao + "</strong>" +"</td>" + "</tr>" + "</table>" + "<br><br>";

   var element = document.getElementById("dynamic").innerHTML = show;

   let imagem = document.createElement('img');
   imagem.setAttribute("src",details[a].imagem);

   if(a == 3) {
      imagem.setAttribute("width","400");
      imagem.setAttribute("height","400");
      imagem.style.display = "flex";
      imagem.style.margin = "0,auto";
   } else {
      imagem.setAttribute("width","auto");
      imagem.setAttribute("height","auto");
      imagem.style.display = "flex";
      imagem.style.margin = "0,auto";
   }


   document.getElementById("dynamic").append(imagem);

   details_cont = a;

   return details_cont;
}

/*funcao formularios dinamicos */

function add_btn(a) {
    if(cont < 8) {
        var form = document.querySelector('.form_container').cloneNode(true);
        document.querySelector('.form_container').after(form);
    } else {
        return 0;
    }

    return (++cont);
}

function rmv_btn() {
    var form = document.querySelector('.form_container');
    if(cont > 1) {
        form.remove();
        --cont;
    } else return 0;
}
/* variaveis declar.*/

let details_cont = 0;
let cont = 1;


var details = [
    {
       "id":1,
       "nacao":"Hobbit",
       "casa":"O condado",
       "descricao":"Os hobbits pés-peludos são o tipo mais comum de hobbit. São morenos, preferem planícies e regiões banhadas por rios. Os cascalvas tem a pele e o cabelo mais claros, são mais altos e mais esguios que os outros tipos de hobbit, preferem bosques e florestas para mortar além de serem descendentes de elfos. Outros hobbits dizem que estes têm 'sangue de fada', por conta de sua ascendência. Os grados são tipos de hobbit mais robustos e frequentemente cultivam barbas. São mais próximos aos anões, e Sméagol costumava ser um cascalva antes de ser corrompido pelo anel.",
       "personagens-saga":[
          "Bilbo Bolseiro",
          "Samwise Gamgee",
          "Frodo Bolseiro",
          "Peregrin Tũk",
          "Rosinha Villa"
       ],
       "imagem":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bilbo_Bols%C3%B3n.png/227px-Bilbo_Bols%C3%B3n.png"
    },
    {
       "id":2,
       "nacao":"Cavaleiro de Rohan",
       "casa":"Abismo de Helm",
       "descricao":"Durante a XIII século de Terceira Idade (TA), os governantes de Gondor formaram uma aliança estreita com os habitantes do território do norte deRhovanion, um pai de três pessoas Casas do Edain da Primeira Era. Estes homens foram dizimados pela  Grande  Peste  de  1636  TA,  e  ainda  mais  pelas  invasões  dos  carrinhos  de Pessoas-de-no final do XX século. Após essas invasões, alguns desses homens, liderados por um certo Frumgar, migraram para o vale superior do Anduin em 1977 TA. No local, eles entraram em conflito com os Anões sobre o compartilhamento do tesouro do dragão Scatha, morto por Fram, filho de Frumgar. Esses homens, que tomaram o nome de Éothéod, viveram por vários séculos ao redor das nascentes do Anduin, mas se tornaram cada vez mais numerosos e se sentiam confinados em suas terras.  Apesar  do  afastamento,  eles  mantiveram  laços  com  Gondor,  e  quando  o Administrador Cirion se viu atacado por hordas de Orientais e Orcs, em 2510 AT, ele chamou Eorl, o Jovem, o novo Senhor dos Éothéod. Ele chegou inesperadamente e  venceu  a  batalha  decisiva  dos  Campos  de  Celebrant.",
       "personagens-saga":[
          "Théoden",
          "Théodred",
          "Deorwine"
       ],
       "imagem":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cavalier-rohan.jpg/220px-Cavalier-rohan.jpg"
    },
    {
       "id":3,
       "nacao":"Elfos",
       "casa":"Lothlórien",
       "descricao":"Os Elfos são descritos como altos e belos, parecidos com os Valar (espécie de anjos), só que menores em estatura e poder, e são imortais, pelos menos enquanto o Mundo, chamado Arda, existir. Não envelhecem nem adoecem, e se forem mortalmente feridos ou se sofrerem um grande desgosto seu corpo morre, mas seu espírito sobrevive sendo então enviado para as Mansões de Mandos onde permanece até poder reencarnar, em um corpo idêntico e com as mesmas lembranças. Um direito que os elfos têm é o de ir, se assim desejarem, para Valinor, no continente sagrado de Aman, destino esse vedado aos mortais.",
       "personagens-saga":[
          "Elfo de Lothlórien",
          "Elfo da floresta"
       ],
       "imagem":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Un_elfe_un_peu_frimeur_jnl_fal.jpg/150px-Un_elfe_un_peu_frimeur_jnl_fal.jpg"
    },
    {
       "id":4,
       "nacao":"Guerreiro de Gondor",
       "casa":"Gondor",
       "descricao":"Os guerreiros de Gondor são fortes e preparados guerreiros que lutam como aliados ao reinado de Gondor.",
       "personagens-saga":[
          "Guerreiro"
       ],
       "imagem":"https://i.pinimg.com/550x/15/3d/85/153d85d8bf901f487e380bc33d1e53fa.jpg"
    },
    {
       "id":5,
       "nacao":"Orc",
       "casa":"Uruk warriors",
       "descricao":"Embora sejam estúpidos, orcs são retratados como seres infelizes, que odeiam todos, incluindo a si mesmos e aos seus mestres, que servem por medo. São incapazes de fazer coisas belas como os Elfos, mas conseguem criar instrumentos para ferir e destruir. Uruk-Hai são considerados uma espécie mais forte e mais selvagem de orcs",
       "personagens-saga":[
          "orc",
          "uruk-hai"
       ],
       "imagem":"https://i0.wp.com/www.valinor.com.br/wp-content/uploads/2005/06/orcs_uruk-hai.jpg?fit=299%2C295&ssl=1"
    }
 ]




