import store from "store";
//const fetch = require('node-fetch');

export const rest_address = "http://77.55.192.26:2137";
//TMP:
const tournament_id = 2;

function make_promise_request(api_url,method){
  var promise_fetch = new Promise(function(fullfill,reject){
    var url = api_url;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(request.responseText);
        fullfill({
          from: url,
          content: response});
      }
      else if (this.readyState === 4 && this.status !== 200){
        reject(this.status)
      }
    };
    console.log(url);
    request.open(method, url, true);
    request.send(); 
  });
  return promise_fetch;
}

export const fetchData = async (endpoint, setState) => {
  const state = store.getState();
  const token = state.user.token;
  console.log(token);
  if (endpoint === "turniej"){

    var url1 = rest_address + "/api/tournament/"+tournament_id;
    var url2 = rest_address + "/api/tournament/"+tournament_id+"/jury"
    var url3 = rest_address + "/api/tournament/"+tournament_id+"/marshall"
    var url4 = rest_address + "/api/tournament/"+tournament_id+"/team"

    var finaljson = {};
    Promise.all([
    make_promise_request(url1,"GET"),
    make_promise_request(url2,"GET"),
    make_promise_request(url3,"GET"),
    make_promise_request(url4,"GET")]).then(
      (responses)=>{
        responses.forEach(element => {
          if(element.from === url1){
            finaljson.name = element.content.name;
            finaljson.informations = "lorem ipsum";
            finaljson.timeAndPlace = element.content.start_date + ", " + element.content.city + ", " + element.content.location;
          }
          if(element.from === url2){
            finaljson.judges = element.content;
          }
          if(element.from === url3){
            finaljson.marshalls = element.content;
          }
          if(element.from === url4){
            finaljson.teams = element.content;
          }
        });
      }
    );

    setState(finaljson);
    

    /*setState({

      name: "NAZWA <br /> TURNIEJU",

      informations: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
  metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
  Nam vel nulla consectetur, consectetur odio ac, pharetra eros. Phasellus
  maximus finibus enim vitae ornare. Aliquam erat volutpat. Proin facilisis
  nibh ac sapien efficitur, quis molestie diam tincidunt.`,

      timeAndPlace: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
  metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
  Nam vel nulla consectetur, consectetur odio ac, pharetra eros.`,

      judges: [
        "John Stone",
        "Ponnappa Priya",
        "Mia Wong",
        "Peter Stanbridge",
        "Natalie Lee-Walsh",
      ],

      marshals: ["Ang Lie", "Nguta Ithya", "Tamzyn French"],

      teams: [
        {
          name: "Drużyna 1",
          participants: [
            "John Stone",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
        {
          name: "Drużyna 2",
          participants: [
            "John Stone",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
        {
          name: "Drużyna 3",
          participants: [
            "John Stone",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
        {
          name: "Drużyna 4",
          participants: [
            "John Stone",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
        {
          name: "Drużyna 5",
          participants: [
            "John Stone",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
        {
          name: "Drużyna 6",
          participants: [
            "John Stone",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
      ],

      upcomingDebates: [
        {
          name: "Debata 4",
          link: "link1",
        },
        {
          name: "Debata 5",
          link: "link2",
        },
        {
          name: "Debata 6",
          link: "link3",
          my: true,
        },
      ],

      pastDebates: [
        {
          name: "Debata 1",
          link: "link1",
        },
        {
          name: "Debata 2",
          link: "link2",
          my: true,
        },
        {
          name: "Debata 3",
          link: "link3",
        },
      ],

      result: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
  metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
  Nam vel nulla consectetur, consectetur odio ac, pharetra eros.`,

      links: [
        {
          name: "PLIK 1",
          href: "http://www.google.pl",
        },
        {
          name: "PLIK 2",
          href: "http://www.google.pl",
        },
        {
          name: "PLIK 3",
          href: "http://www.google.pl",
        },
      ],
    });
  else if (endpoint === "konto")
    setState({
      firstName: "John",
      lastName: "Stone",
      email: "jstone@gmail.com",
      teamName: "A",
      points: "26",
      debates: [
        {
          name: "Debata 1",
          link: "link1",
          upcoming: true,
        },
        {
          name: "Debata 2",
          link: "link2",
          upcoming: true,
        },
        {
          name: "Debata 3",
          link: "link3",
          upcoming: true,
        },
        {
          name: "Debata 1",
          link: "link1",
          past: true,
        },
        {
          name: "Debata 2",
          link: "link2",
          past: true,
        },
        {
          name: "Debata 3",
          link: "link3",
          past: true,
        },
      ],

    setState({
      name: "DEBATA 1",

      informations: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
    metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
    Nam vel nulla consectetur, consectetur odio ac, pharetra eros. Phasellus
    maximus finibus enim vitae ornare. Aliquam erat volutpat. Proin facilisis
    nibh ac sapien efficitur, quis molestie diam tincidunt.`,

      timeAndPlace: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
    metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
    Nam vel nulla consectetur, consectetur odio ac, pharetra eros.`,

      judges: [
        "John Stone",
        "Ponnappa Priya",
        "Mia Wong",
        "Peter Stanbridge",
        "Natalie Lee-Walsh",
      ],

      marshals: ["Ang Lie", "Nguta Ithya", "Tamzyn French"],

      teams: [
        {
          name: "Drużyna 1",
          participants: [
            "John Stone",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
        {
          name: "Drużyna 2",
          participants: [
            "John Stone",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
      ],

      result: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
    metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
    Nam vel nulla consectetur, consectetur odio ac, pharetra eros.`,
    });
    */
};
}