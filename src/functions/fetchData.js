import store from "store";

export const fetchData = async (endpoint, setState) => {
  const state = store.getState();
  const token = state.user.token;
  console.log(token);
  if (endpoint === "turniej")
    setState({
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
    });
    else if (endpoint === "protokol")
    setState({
      name: "DODAJ/EDYTUJ PROTOKÓŁ Z DEBATY",

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
            "John Stones",
            "Ponnappa Priya",
            "Mia Wong",
            "Peter Stanbridge",
          ],
        },
      ],
	});
	else if (endpoint === "debata")
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
};
