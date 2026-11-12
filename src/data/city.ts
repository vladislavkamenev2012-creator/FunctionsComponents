export type CityPhoto = {
    src: string;
    alt: string;
};

export type City = {
    name: string;
    country: string;
    founded: string;
    description: string;
    photos: CityPhoto[];
};

export const city: City = {
    name: "Kyiv",
  country: "Ukraine",
  founded: "482",
  description:
    "Kyiv is Ukraine’s capital, known for its historic architecture, green spaces, and location on the Dnipro River.",
  photos: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Saint_Sophia_Cathedral_in_Kyiv_2006.jpg",
      alt: "Saint Sophia Cathedral in Kyiv",
    },
    {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Golden_Gate_Kiev_2018_G1.jpg/1280px-Golden_Gate_Kiev_2018_G1.jpg",
      alt: "The Golden Gate of Kyiv",
    },
    {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/All_Saints_Church_Kiev_Pechersk_Lavra_2018_G1.jpg/1280px-All_Saints_Church_Kiev_Pechersk_Lavra_2018_G1.jpg",
      alt: "All Saints Church at Kyiv Pechersk Lavra",
    },
  ],
}
