const shows = [
  {
    id: "id1",
    title: "Dexter",
    rating: 8.7,
    description:
      "Dexter Morgan, a man with homicidal tendencies, lives a double life. He works as a forensic technician for the police department during the day and kills heinous perpetrators in his free time.",
    img: "https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg",
    liked: false,
    genre: ["Drama", "Action"],
    comments: [],
  },
  {
    id: "id2",
    title: "Game of Thrones",
    rating: 9.2,
    description:
      "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
    img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91iY86ZIuOL._AC_UF894,1000_QL80_.jpg",
    liked: false,
    genre: ["Drama", "Action", "Fantasy"],
    comments: [
      {
        text: "This is a test comment!",
        author: "Alen Šober",
        date: "2024.01.26",
      },
    ],
  },
  {
    id: "id3",
    title: "Breaking Bad",
    rating: 9.5,
    description:
      "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx",
    liked: false,
    genre: ["Drama", "Crime"],
    comments: [],
  },
];

module.exports = shows;
