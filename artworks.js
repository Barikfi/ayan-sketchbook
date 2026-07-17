/* ============================================================
   ARTWORKS — add a new drawing by copying one block below.

   file     -> filename inside the /images folder
   title    -> name shown on the card
   medium   -> short medium/tool label (e.g. "fineliner", "ink wash")
   category -> one of: "myth", "portrait", "pop"
               (controls which filter button shows the piece)
   hero     -> optional, set to true on ONE piece to use it
               as the big hero image at the top of the page
   ============================================================ */

const ARTWORKS = [
  { file: "hanuman.webp",       title: "Hanuman",               medium: "ink & gel pen",   category: "myth",   },
  { file: "artist.webp",       hero: true },
  { file: "luffy.webp",         title: "Jai Bajrangbali",       medium: "acryllic",         category: "pop"     },
  { file: "ambedkar.webp",      title: "Dr. B.R. Ambedkar",     medium: "ballpoint",       category: "portrait" },
  { file: "krishna.webp",       title: "Krishna",               medium: "ink & wash",      category: "myth"    },
  { file: "anime-profile.webp", title: "Side Profile",          medium: "fineliner",       category: "pop"     },
    { file: "animie.webp", title: "Zulinger",          medium: "fineliner",       category: "pop"     },
  { file: "tagore.webp",        title: "Rabindranath Tagore",   medium: "ballpoint",       category: "portrait" },
  { file: "buddha.webp",        title: "Little Buddha",         medium: "ink & marker",    category: "myth"    },
  { file: "turban-man.webp",    title: "Swami Vivekananda",     medium: "fineliner",       category: "portrait" },
  { file: "gorango.webp",        title: "Mahaprabhu",               medium: "acryllic",  category: "myth" },
  { file: "cute.webp",        title: "cute_thakur",               medium: "water-color",  category: "portrait" },
  { file: "lion.webp",        title: "The King",               medium: "pencil-color",  category: "portrait" },
  { file: "elephant-boy.webp",  title: "The Gentle Giant",      medium: "ink wash",        category: "portrait" }
   


  // 👇 example — copy this, edit it, and drop it above this line
  // { file: "new-sketch.webp", title: "Title Of Piece", medium: "fineliner", category: "portrait" },
];
