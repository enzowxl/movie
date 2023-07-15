interface TextArrayProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export const TextsArray: TextArrayProps[] = [
  {
    id: 1,
    image: require("../../../assets/startScreen/movie-information.png"),
    title: "Movie",
    subtitle:
      "See everything about your favorite movies and actors at a glance.",
  },
  {
    id: 2,
    image: require("../../../assets/startScreen/movie-favorite.png"),
    title: "Customize",
    subtitle: "Add movies to your watch list and favorites",
  },
];
