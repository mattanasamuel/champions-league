var team; //oggetto contenente il team selezionato
var requestURL = "DATA_JSON/Season_2024/AFC_Bournemouth_989_2024.json";
const selStagione = document.getElementById("sel-stagione");
const selTeam = document.getElementById("sel-team");
const btnLoad = document.getElementById("btnLoad");
btnLoad.addEventListener("click",getRemoteData);
var tabel = document.getElementById("elenco");
tabel.innerText = "";

const listaTeam = ["Arsenal FC", "Aston Villa", "AFC Bournemouth", "Brendtford FC", "Brighton and Hove Albion", "Chlsea FC", "Crystal Palace", "Everton FC", "Fulham FC", "Ipswich Town", 
                   "Leicester City", "Liverpool FC", "Manchester City", "Manchester United", "Newcastle United", "Nottingham Forest", "Southhampton FC", "Tottenam Hotspur", "West Ham United", "Wolverhampton Wanderers",
                   "Burnley FC", "Luton Town", "Sheffield United", "Barnsley FC", "Birmingham City", "Blackburn Rovers", "Blackpool FC", "Bolton Wanderers", "Bradford City", "Cardiff City",
                   "Charlton Athletic", "Coventy City", "Derby County", "Huddersfield Town", "Hull City", "Leeds United", "Middlesbrough FC", "Norwich City", "Oldham Athletic", "Portsmouth FC",
                   "Queens Park Rangers", "Reading FC", "Sheffield Wednesday", "Stoke City", "Sunderland AFC", "Swansea City", "Swindon Town", "Watford FC", "West Bromwich Albion", "Wigam Athletic",
                   "Wimbledon FC (- 2004)"];
const listaTeamId = ["11", "405", "989", "1148", "1237", "631", "873", "29", "931", "677", 
                     "1003", "31", "281", "985", "762", "703", "180", "148", "379", "543",
                    "1132", "1031", "350", "349", "337", "164", "1181", "355", "1027", "603",
                    "358", "990", "22", "1110", "3008", "399", "641", "1123", "1078", "1020",
                    "1039", "1032", "1035", "512", "289", "2288", "352", "1010", "984", "1071",
                    "114309"];
const listaSeason = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
         2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995,
         1994, 1993, 1992];

async function getRemoteData() {
  setUrl();
  try {
    const response = await fetch(requestURL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    team = await response.json();
  } catch (error) {
    console.error(`Errore reperimento strutture recettive: ${error}`);

  }
  //a questo punto la variabile team contiele la squadra selezionata
  console.log(team);

  //visualizzo i dati della squadra selezionata
  loadTeamSelected();
  
}

/* carica negli elementi select le opzioni per le stagioni ed i team */ 
function caricaOpzioniTeamSeason(){
  //TODO Caricare opzioni stagione
  for(const stagione of listaSeason)
  {
    var opzione = document.createElement("option")
    opzione.innerText = stagione
    opzione.value = stagione
    selStagione.appendChild(opzione)
  }

  //TODO Caricare opzioni squadra 
  for(var i=0; i<listaTeam.length; i++)
  {
    var opzione = document.createElement("option")
    opzione.innerText = listaTeam[i];
    opzione.value = listaTeamId[i];
    selTeam.appendChild(opzione);
  }
}

/* riceve un elemento select e restituisce il testo dell'opzione selezionata */
function getSelectedOptionText(selectElement) {
  if (selectElement.selectedOptions.length > 0) {
    return selectElement.selectedOptions[0].textContent;
  }
  return null;
}

function setUrl(){
  
  
  requestURL = "DATA_JSON/Season" + selStagione.value + "/" + selTeam.innerText + 
  
  requestURL = "DATA_JSON/Season_2024/AFC_Bournemouth_989_2024.json";
  //TODO comporre l'URL in base a stagioe e squadra selezionati






}

/* carica i dati della squadra reperiti dal server (contenuti nell'oggetto team) */
function loadTeamSelected(){
  //TODO




  var tabella = document.createElement("table")

  var tabella_intestazione = document.createElement("thead");
  tabella.appendChild(tabella_intestazione)

  var tabella_intestazione_nome = document.createElement("th");
  tabella_intestazione.appendChild(tabella_intestazione_nome);
  tabella_intestazione_nome.innerText= "nome";
  tabella_intestazione_nome.style.border = "1px solid black";

  var tabella_intestazione_ruolo = document.createElement("th")
  tabella_intestazione.appendChild(tabella_intestazione_ruolo);
  tabella_intestazione_ruolo.innerText= "ruolo";
  tabella_intestazione_ruolo.style.border = "1px solid black";

  var tabella_intestazione_data = document.createElement("th")
  tabella_intestazione.appendChild(tabella_intestazione_data);
  tabella_intestazione_data.innerText= "data di nascita";
  tabella_intestazione_data.style.border = "1px solid black";

  var tabella_intestazione_nazionalita = document.createElement("th")
  tabella_intestazione.appendChild(tabella_intestazione_nazionalita);
  tabella_intestazione_nazionalita.innerText= "nazionalita";
  tabella_intestazione_nazionalita.style.border = "1px solid black";

  var tabella_corpo = document.createElement("tbody")
  tabella.appendChild(tabella_corpo)

  for(const giocatore of team.players)
  {
    var tabella_corpo_riga = document.createElement("tr") //riga che conterra tutti i parametri
    tabella_corpo.appendChild(tabella_corpo_riga)

    var tabella_corpo_riga_nome = document.createElement("td")
    tabella_corpo_riga.appendChild(tabella_corpo_riga_nome)
    tabella_corpo_riga_nome.innerText = giocatore.name
    tabella_corpo_riga_nome.style.border = "1px solid black";

    var tabella_corpo_riga_ruolo = document.createElement("td")
    tabella_corpo_riga.appendChild(tabella_corpo_riga_ruolo)
    tabella_corpo_riga_ruolo.innerText = giocatore.dateOfBirth
    tabella_corpo_riga_ruolo.style.border = "1px solid black";

    var tabella_corpo_riga_data = document.createElement("td")
    tabella_corpo_riga.appendChild(tabella_corpo_riga_data)
    tabella_corpo_riga_data.innerText = giocatore.position
    tabella_corpo_riga_data.style.border = "1px solid black";

    var tabella_corpo_riga_nazionalita = document.createElement("td")
    tabella_corpo_riga.appendChild(tabella_corpo_riga_nazionalita)
    var nazionalita = ""
    for(const nazione of giocatore.nationality)
    {
      nazionalita+=nazione +", "
    }
    tabella_corpo_riga_nazionalita.innerText = nazionalita
    tabella_corpo_riga_nazionalita.style.border = "1px solid black";
  }
tabel.appendChild(tabella)
}

caricaOpzioniTeamSeason();
getRemoteData();

