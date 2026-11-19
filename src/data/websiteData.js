// =============================================================================
// HEY MALU, THIS ONE'S FOR YOU! ♡ - Data & Content Configuration
// =============================================================================
// Personal digital diary & scrapbook for Vinaya (Malu)

export const WEBSITE_CONFIG = {
  name: "Vinaya",
  nickname: "Malu",
  title: "Hey Malu, This One's For You! ♡",
  subtitle: "A little corner of the internet, made with lots of love, just for you.",
  heroPortrait: "/photos/malu-new-main.jpeg",
  heroStickyNote: "look at that smile! keep shining, birthday girl ♡",
  heroLead: "Celebrating the one and only Vinaya — M.Tech scholar, loving daughter, caring sister, beloved senior to Diya & Aadhya, and best friend to Amit Jomon and her cherished crew. Grab a warm drink, make yourself comfortable, and explore your little scrapbook!",
};

// -----------------------------------------------------------------------------
// SECTION 3: HER STORY ("Look How Far You've Come!")
// -----------------------------------------------------------------------------
export const HER_STORY_TIMELINE = [
  {
    id: 1,
    chapter: "Chapter 01",
    tag: "Little Malu ✿",
    title: "Where the Story Began",
    date: "Childhood Days & Family Roots",
    desc: "A sweet little girl with bright curious eyes and a heart of pure gold. Blessed from day one by mom and dad whose endless prayers, quiet strength, and warm home shaped her into the kind, humble person she is today.",
    photo: "/photos/malu-family.jpeg",
    note: "Rooted in so much family love ♡",
    tapeColor: "#FFCCD8",
    stamp: "🏡",
    objectPosition: "50% 0%", // Top-aligned so Dad's head & Mom's face are 100% visible!
  },
  {
    id: 2,
    chapter: "Chapter 02",
    tag: "Growing Up ♡",
    title: "Sweet Blossoming Years",
    date: "School & Lifelong Friendships",
    desc: "Finding her stride, collecting cherished friends, and growing into the thoughtful, gentle person she is today. Always the one to share a warm hug when someone needed it most.",
    photo: "/photos/malu-bestie-hug.jpeg",
    note: "Hugs that make everything better ✿",
    tapeColor: "#EAD5FF",
    stamp: "🌸",
    objectPosition: "50% 0%", // Top-aligned so both smiling faces, hair & hug are 100% visible!
  },
  {
    id: 3,
    chapter: "Chapter 03",
    tag: "With Diya ♡",
    title: "Sweet Moments with Diya",
    date: "Her Favorite Junior & Sunshine Sister",
    desc: "Celebrating special days with Diya, one of her absolute favorite juniors! Full of warm hugs, happy giggles, and that sweet sisterly guidance that makes their bond so genuinely special.",
    photo: "/photos/malu-birthday-hug.jpeg",
    note: "With Diya — one of her favorite juniors! ♡",
    tapeColor: "#FFB3C6",
    stamp: "✨",
    objectPosition: "50% 12%", // With excess curtain cropped, 50% 12% frames their heads & smiling faces front and center!
  },
  {
    id: 4,
    chapter: "Chapter 04",
    tag: "With Aadhya ✿",
    title: "Campus Days with Aadhya",
    date: "College Corridors & Shared Smiles",
    desc: "Vibrant engineering campus memories with Aadhya, another wonderful junior so close to her heart! Sharing notes, laughs, sunny conversations, and unforgettable moments between classes.",
    photo: "/photos/malu-btech-campus.jpeg",
    note: "With Aadhya — one of her favorite juniors! ✿",
    tapeColor: "#FFCCD8",
    stamp: "📚",
    objectPosition: "50% 25%", // Perfectly centers both Malu & Aadhya's faces and smiles!
  },
  {
    id: 5,
    chapter: "Chapter 05",
    tag: "B.Tech Days 🎓",
    title: "B.Tech Memories & The College Gang",
    date: "Engineering Milestones & Staircase Hangouts",
    desc: "Four unforgettable years of engineering! Sitting on the campus steps, surviving lab vivas, sharing endless canteen snacks, and building memories with the friends who became family.",
    photo: "/photos/malu-college-gang.jpeg",
    note: "Golden engineering days with the crew 🎓",
    tapeColor: "#EAD5FF",
    stamp: "⭐",
    objectPosition: "50% 45%", // Beautifully centers the gang and friends on the steps!
  },
  {
    id: 6,
    chapter: "Chapter 06",
    tag: "Special Friend & Supporter ✦",
    title: "With Amit Jomon & Her Closest Friends",
    date: "A Very Special Friendship & Strongest Supporter",
    desc: "Through every college milestone, challenge, and silly laugh, having Amit Jomon by her side as a very special friend and one of her biggest supporters has made her journey so much brighter. A true cheerleader and friend who always has her back!",
    photo: "/photos/malu-amit-jomon.jpeg",
    note: "With Amit Jomon — true friend & greatest supporter! ♡",
    tapeColor: "#FFC2D1",
    stamp: "💛",
    objectPosition: "50% 40%", // Perfectly frames Amit Jomon and her friends!
  },
  {
    id: 7,
    chapter: "Chapter 07",
    tag: "M.Tech Scholar 🪷",
    title: "The M.Tech Chapter & Celebrations",
    date: "Present Milestone & Festive Joy",
    desc: "Mastering advanced technology as an M.Tech scholar! Navigating complex research with poise, and never missing a chance to celebrate college fests and joyful laughter on the flower swing.",
    photo: "/photos/malu-onam-college.jpeg",
    note: "Onam fest, Kasavu sarees & swings 🪷",
    tapeColor: "#FFCCD8",
    stamp: "🌿",
    objectPosition: "50% 40%", // Centers the swing, flowers, and festive group!
  },
  {
    id: 8,
    chapter: "Chapter 08",
    tag: "The Horizon ✦",
    title: "Everything Exciting Waiting Ahead",
    date: "Bright Tomorrows",
    desc: "Wearing her traditional Kasavu saree with jhumkas and jasmine flowers — a true queen of hearts looking ahead to a future filled with triumphs, joy, and peace.",
    photo: "/photos/malu-portrait.jpeg",
    note: "Your brightest days are just beginning ♡",
    tapeColor: "#FFB3C6",
    stamp: "👑",
    objectPosition: "50% 20%", // Centers her face, jhumkas, and smile!
  },
];

// -----------------------------------------------------------------------------
// SECTION 4: A LITTLE APPRECIATION ("Things We Love About You")
// -----------------------------------------------------------------------------
export const APPRECIATION_NOTES = [
  {
    id: 1,
    title: "Your Kind Heart",
    doodle: "♡",
    paperColor: "#FFFFFF",
    tapeColor: "#FFCCD8",
    rotation: "-2deg",
    text: "You treat people with genuine gentleness. You never make anyone feel small, and you always listen with your whole heart. That's a superpower.",
  },
  {
    id: 2,
    title: "Your Sweetness",
    doodle: "✿",
    paperColor: "#FFFDFE",
    tapeColor: "#EAD5FF",
    rotation: "1.5deg",
    text: "There's an effortless sweetness about you that calms down any room. Soft-spoken, polite, and naturally lovely without even having to try.",
  },
  {
    id: 3,
    title: "Your Caring Nature",
    doodle: "✦",
    paperColor: "#FFFFFF",
    tapeColor: "#FFB3C6",
    rotation: "-1deg",
    text: "You remember the little things that matter to the people you care about — from checking in on Diya and Aadhya to cheering on Amit Jomon and your close friends.",
  },
  {
    id: 4,
    title: "Your Beautiful Smile",
    doodle: "☼",
    paperColor: "#FFFDFE",
    tapeColor: "#FFE3EC",
    rotation: "2deg",
    text: "Seriously, your smile is instant sunshine. It reaches right up to your eyes and reminds everyone around you that good, warm things exist.",
  },
  {
    id: 5,
    title: "Your Determination",
    doodle: "✎",
    paperColor: "#FFFFFF",
    tapeColor: "#EAD5FF",
    rotation: "-2deg",
    text: "From engineering to pursuing your M.Tech, you put your head down and get things done. You have this quiet, steady strength that is truly inspiring.",
  },
  {
    id: 6,
    title: "Just Being YOU",
    doodle: "★",
    paperColor: "#FFFDFE",
    tapeColor: "#FFB3C6",
    rotation: "1deg",
    text: "Never change who you are to fit anywhere. The world doesn't need another generic face; it needs more of your warmth, grace, and bright spirit.",
  },
];

// -----------------------------------------------------------------------------
// SECTION 5: HER FAVOURITE PEOPLE ("Family, Love & Little Memories")
// -----------------------------------------------------------------------------
// Strictly for Family and Brother (Amit Jomon is in his own dedicated Story Chapter!)
export const FAVOURITE_PEOPLE = {
  heading: "Family, Love & Little Memories",
  subtitle: "Because the best moments in life are the ones we share with the people who matter most.",
  note: "“Having a loving family and a caring brother means you're never truly alone. Through silly jokes, shared meals, and quiet encouragement, they are your forever home.”",
  photos: [
    {
      id: "fam1",
      title: "Pillars of Love & Strength",
      tag: "Mom & Dad ♡",
      caption: "With mom and dad — the quiet strength, endless prayers, and home behind her smile.",
      photo: "/photos/malu-family.jpeg",
      rotation: "-2deg",
      objectPosition: "50% 0%", // Top aligned so Dad's head & Mom's face are 100% visible!
    },
    {
      id: "fam2",
      isEmojiCard: true,
      title: "A Bond Like No Other",
      tag: "Brother & Malu 👦🏻❤️👧🏻",
      caption: "Partner in crime, remote snatcher, and forever protector. Best brother bond! 🤜🤛✨",
      photo: "/photos/sibling-card.svg",
      rotation: "2deg",
      objectPosition: "center center",
    },
  ],
};

// -----------------------------------------------------------------------------
// SECTION 6: OPEN WHEN YOU HAVE A MOMENT (Personal Letter)
// -----------------------------------------------------------------------------
export const BIRTHDAY_LETTER = {
  salutation: "Hey Malu,",
  paragraphs: [
    "Some people are just naturally beautiful from the inside, and you are honestly one of them.",
    "Your kindness, your caring heart, and your sweet nature make you someone truly special to everyone lucky enough to know you — from your loving family and brother to Diya, Aadhya, Amit Jomon, and all of us who adore you.",
    "As you step into another beautiful year, I hope you achieve everything you've been working so hard for. May your M.Tech journey bring you breakthroughs and pride, and may life constantly surprise you with gentle, joyful moments.",
    "Never stop smiling, never stop dreaming, and never stop being the wonderful, warm person you are.",
    "You deserve all the happiness this world has to offer — and then some more."
  ],
  signoff: "Always rooting for you with so much love,",
  author: "Your little well-wisher ♡"
};

// -----------------------------------------------------------------------------
// SECTION 8: ONE LAST THING... (Hidden Surprise)
// -----------------------------------------------------------------------------
export const HIDDEN_SURPRISE = {
  title: "Wait, one last thing for you... 🌟",
  subtitle: "A little reminder to carry with you this year",
  badge: "for Malu ♡",
  message: `Malu, whenever things feel overwhelming or your M.Tech studies get tough, take a slow breath and remind yourself how much resilience and talent you carry. 

You have a quiet strength that gets you through anything, and a good heart that people genuinely cherish.

Don't ever doubt your worth or how far you've already come. We are so, so proud of you.

Have the happiest, warmest birthday, pretty girl! ✿`,
  ps: "P.S. Keep this little page bookmarked — open it whenever you need a quick reminder of how special you are!"
};
