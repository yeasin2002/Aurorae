const travelQuotes = [
  {
    quote: "The world is a book and those who do not travel read only one page.",
    writer: "Saint Augustine",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/St_Augustine_Portrait.jpg",
    metadata: {
      nationality: "Roman (North African)",
      source: "Goodreads",
      tags: ["travel", "education", "wisdom"],
    },
  },
  {
    quote: "Traveling leaves you speechless, then turns you into a storyteller.",
    writer: "Ibn Battuta",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Ibn_Battuta.jpg",
    metadata: {
      nationality: "Moroccan",
      source: "Goodreads",
      tags: ["travel", "storytelling", "exploration"],
    },
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    writer: "H. Jackson Brown Jr.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/H_Jackson_Brown.jpg",
    metadata: {
      nationality: "American",
      source: "Quote Investigator",
      tags: ["exploration", "courage", "inspiration"],
    },
  },
  {
    quote: "All that is gold does not glitter, not all those who wander are lost.",
    writer: "J.R.R. Tolkien",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Tolkien_1916.jpg",
    metadata: {
      nationality: "English",
      source: "Goodreads",
      tags: ["wanderlust", "poetry", "mythic"],
    },
  },
  {
    quote: "Take only memories, leave only footprints.",
    writer: "Chief Seattle",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Chief_Seattle.jpg",
    metadata: {
      nationality: "Suquamish (Native American)",
      source: "BrainyQuote",
      tags: ["environment", "respect", "heritage"],
    },
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    writer: "Helen Keller",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Helen_Keller_portrait.jpg",
    metadata: {
      nationality: "American",
      source: "BrainyQuote",
      tags: ["adventure", "courage", "inspiration"],
    },
  },
  {
    quote: "To travel is to live.",
    writer: "Hans Christian Andersen",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/H.C._Andersen_by_Th._Roth.jpg",
    metadata: {
      nationality: "Danish",
      source: "BrainyQuote",
      tags: ["existence", "passion", "wanderlust"],
    },
  },
  {
    quote: "Not all those who wander are lost.",
    writer: "J.R.R. Tolkien",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Tolkien_1916.jpg",
    metadata: {
      nationality: "English",
      source: "BrainyQuote",
      tags: ["wanderlust", "exploration"],
    },
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    writer: "Lao Tzu",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Laozi.jpg",
    metadata: {
      nationality: "Chinese",
      source: "BrainyQuote",
      tags: ["journey", "motivation", "philosophy"],
    },
  },
  {
    quote: "Wherever you go becomes a part of you somehow.",
    writer: "Anita Desai",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Anita_Desai.jpg",
    metadata: {
      nationality: "Indian",
      source: "BrainyQuote",
      tags: ["memory", "identity", "travel"],
    },
  },
];

type travelQuotesType = (typeof travelQuotes)[number];

export { travelQuotes };
export type { travelQuotesType };
