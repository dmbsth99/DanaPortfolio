/**
 * Gallery Data
 * ------------
 * 1. Import your images at the top (Vite will handle bundling).
 * 2. Add entries to the `galleryItems` array.
 *
 * `featured: true` makes the item slightly taller in the brick layout.
 *
 * Categories must exactly match the URL slugs used in +page.svelte:
 *   '3denv' | 'graphicdesign' | 'gamedev' | '3dassets'
 *   | 'illustrations&digitalart' | 'paintings&sculptures'
 */

// 3d ASSETS
import spellbook1 from "$lib/imgs/spellbook.jpg"
// 3D Environments
import arcade1 from "$lib/imgs/arcade1.jpg"
import arcade2 from "$lib/imgs/arcade2.jpg"
import arcade3 from "$lib/imgs/arcade3.jpg"
import arcade4 from "$lib/imgs/arcade4.jpg"
import bathroom1 from "$lib/imgs/bathroom1.jpg"
import bathroom2 from "$lib/imgs/bathroom2.jpg"
import lighthouse1 from "$lib/imgs/lighthouse1.png"
// GAMEDEV
import obsidian1 from "$lib/imgs/obsidianmain.png"
import obsidian2 from "$lib/imgs/obsidian01.png"
import obsidian3 from "$lib/imgs/obsidian02.png"
import obsidian4 from "$lib/imgs/obsidian03.png"
import obsidian5 from "$lib/imgs/obsidian04.png"
import witch1 from "$lib/imgs/witchmain.png"
import coginit1 from "$lib/imgs/coginit1.png"
import coginit2 from "$lib/imgs/coginit2.png"
import coginit3 from "$lib/imgs/coginit3.png"
import coginit4 from "$lib/imgs/coginit4.png"
import coginit5 from "$lib/imgs/coginit5.png"
import ui1 from "$lib/imgs/ui stuff-01.jpg"
// GRAPHIC DESIGN
import boardgame1 from "$lib/imgs/boardg1.jpg"
import boardgame2 from "$lib/imgs/boardg2.jpg"
import boardgame3 from "$lib/imgs/boardg3.jpg"
import boardgame4 from "$lib/imgs/boardg4.jpg"
import coupon1 from "$lib/imgs/couples.jpg"
import bar from "$lib/imgs/bar.png"
import logo1 from "$lib/imgs/logo1.jpg"
import logo2 from "$lib/imgs/logo6.png"
import logo3 from "$lib/imgs/logo3.jpg"
import logo4 from "$lib/imgs/logo2.jpg"
import logo5 from "$lib/imgs/logo9.jpg"
import logo7 from "$lib/imgs/logo7.jpg"
import logo8 from "$lib/imgs/logo8.jpg"
import logo9 from "$lib/imgs/logo5.jpg"
import maris1 from "$lib/imgs/Sign Maris GIna PrintReady File Black-01.jpg"
import maris2 from "$lib/imgs/Maris infographic-01.jpg"
import maris3 from "$lib/imgs/infographic sugar direction-01.jpg"
import maris4 from "$lib/imgs/diagram cycle of hair-01.jpg"
import maris5 from "$lib/imgs/diagram cycle of hair-02.jpg"
import maris6 from "$lib/imgs/Ad Lamina-01.png"
import dnd1 from "$lib/imgs/CUSTOM SECRETS CHARACTER SHEETS-01.jpg"
import prophouse from "$lib/imgs/prophouse-01.jpg"
// ILLUSTRATIONS & DIGITAL ART
import bookmark1 from "$lib/imgs/bookmark1.jpg"
import bookmark2 from "$lib/imgs/bookmark2.jpg"
import bookmark3 from "$lib/imgs/bookmark3.jpg"
import bookmark4 from "$lib/imgs/bookmark9.jpeg"
import bookmark5 from "$lib/imgs/bookmark5.jpeg"
import bookmark6 from "$lib/imgs/bookmark6.jpeg"
import bookmark7 from "$lib/imgs/bookmark7.jpeg"
import bookmark8 from "$lib/imgs/bookmark8.jpeg"
import bookmark9 from "$lib/imgs/bookmark10.jpeg"
import sticker1 from "$lib/imgs/sticker1.png"
import sticker2 from "$lib/imgs/sticker2.png"
import sticker3 from "$lib/imgs/sticker3.png"
import cards1 from "$lib/imgs/cards1.jpg"
import cards2 from "$lib/imgs/cards2.jpg"
import cards3 from "$lib/imgs/cards3.jpg"
import cards4 from "$lib/imgs/cards4.jpg"
import cards5 from "$lib/imgs/cards5.jpg"
import illust1 from "$lib/imgs/illust1.jpeg"
import illust2 from "$lib/imgs/illust2.jpeg"
import illust3 from "$lib/imgs/illust3.jpeg"
// PAINTINGS & SCULPTURES
import painting1 from "$lib/imgs/painting1.jpg"
import painting2 from "$lib/imgs/painting2.jpg"
import painting3 from "$lib/imgs/painting3.jpg"
import painting4 from "$lib/imgs/painting4.jpg"
import painting5 from "$lib/imgs/painting5.jpg"
import painting6 from "$lib/imgs/painting6.jpg"
import painting7 from "$lib/imgs/painting7.jpg"
import painting8 from "$lib/imgs/painting8.jpg"
import painting9 from "$lib/imgs/painting9.jpg"
import painting10 from "$lib/imgs/painting10.jpg"
import painting11 from "$lib/imgs/painting11.jpg"
import sculpt1 from "$lib/imgs/sculpt1.jpg"
import sculpt2 from "$lib/imgs/sculpt2.jpg"
import sculpt3 from "$lib/imgs/sculpt3.jpg"
import draw1 from "$lib/imgs/draw1.jpeg"
import draw2 from "$lib/imgs/draw2.jpg"

export const categories = [
  { slug: '3denv',                    label: '3D Environments',             ballClass: 'ball1' },
  { slug: 'graphicdesign',            label: 'Graphic Design',              ballClass: 'ball2' },
  { slug: 'gamedev',                  label: 'Game Dev',                    ballClass: 'ball3' },
  { slug: '3dassets',                 label: '3D Assets',                   ballClass: 'ball4' },
  { slug: 'illustrations&digitalart', label: 'Illustrations & Digital Art', ballClass: 'ball5' },
  { slug: 'paintings&sculptures',     label: 'Paintings & Sculptures',      ballClass: 'ball6' },
];

export const galleryItems = [

  // ── 3D Environments ──────────────────────────────────────────────────────
  { id: 1,  src: arcade1,    title: 'Arcade — Wide Shot', description: 'A 3D environment created for my Demo Reel. Appropriately named "Apocalypse Arcade".',          category: '3denv',                    featured: true  },
  { id: 2,  src: arcade2,    title: 'Arcade — Detail',    description: 'A 3D environment created for my Demo Reel. Appropriately named "Apocalypse Arcade".',         category: '3denv',                    featured: false },
  { id: 3,  src: arcade3,    title: 'Arcade — Lighting',  description: 'A 3D environment created for my Demo Reel. Appropriately named "Apocalypse Arcade".',         category: '3denv',                    featured: false },
  { id: 4,  src: arcade4,    title: 'Arcade — Corner',    description: 'A 3D environment created for my Demo Reel. Appropriately named "Apocalypse Arcade".',         category: '3denv',                    featured: true  },
  { id: 5,  src: bathroom1,  title: 'Bathroom — Overview', description: 'A 3D environment created in my 2nd term of my Asset Creation Degree, I really love how the lighting came out with this, and I was able to play with some VFX such as smoke and particle systems.',        category: '3denv',                    featured: false },
  { id: 6,  src: bathroom2,  title: 'Bathroom — Close-up', description: 'A 3D environment created in my 2nd term of my Asset Creation Degree, I really love how the lighting came out with this, and I was able to play with some VFX such as smoke and particle systems.',        category: '3denv',                    featured: false },
  { id: 7,  src: lighthouse1,title: 'Lighthouse',          description: 'A 3D environment made for my first term of my Asset Creation Degree, my first attempt at a stylized environment. Was a great learning opportunity.',        category: '3denv',                    featured: false  },

  // ── 3D Assets ────────────────────────────────────────────────────────────
  { id: 10, src: spellbook1, title: 'Spellbook',     description: 'A 3D hero prop made for my 2nd term of my Asset Creation degree.',              category: '3dassets',                 featured: true  },

  // ── Game Dev ─────────────────────────────────────────────────────────────
  { id: 31, src: ui1,   title: 'Mock UI/UX Design', description: 'I have a passion for UI/UX design, I find it to be a key factor in the overall experience a user has when playing a game. I made a mock UI kit to practice and hone my skills in this area of design.',  category: 'gamedev',                  featured: true },
  { id: 20, src: obsidian1,  title: 'Obsidian Hypothesis — Title Screen',   description: 'This was a side project that I started, I wanted to create a game that had a very stylized visual style. I love the idea I had for the game and hope to go back to this project in the near future.',       category: 'gamedev',                  featured: true  },
  { id: 21, src: obsidian2,  title: 'Obsidian Hypothesis — Screenshot 01',  description: 'This was a side project that I started, I wanted to create a game that had a very stylized visual style. I love the idea I had for the game and hope to go back to this project in the near future.',  category: 'gamedev',                  featured: false },
  
  { id: 23, src: obsidian4,  title: 'Obsidian Hypothesis — Props — Screenshot 03', description: 'This was a side project that I started, I wanted to create a game that had a very stylized visual style. I love the idea I had for the game and hope to go back to this project in the near future.',   category: 'gamedev',                  featured: true  },
  { id: 24, src: obsidian5,  title: 'Obsidian Hypothesis — Screenshot 04', description: 'This was a side project that I started, I wanted to create a game that had a very stylized visual style. I love the idea I had for the game and hope to go back to this project in the near future.',   category: 'gamedev',                  featured: false },

  { id: 26, src: coginit1,   title: 'Cog Init — Key Art',    description: 'My first fully completed game. Cog Init is a rhythm action horror game. Initially made for The Bad Game Jam - 2025, it ended up turning into a project I am quite proud of.',      category: 'gamedev',                  featured: false },
{ id: 22, src: obsidian3,  title: 'Obsidian Hypothesis — Props — Screenshot 02', description: 'This was a side project that I started, I wanted to create a game that had a very stylized visual style. I love the idea I had for the game and hope to go back to this project in the near future.',   category: 'gamedev',                  featured: false },
  { id: 27, src: coginit2,   title: 'Cog Init — Screenshot 01', description: 'My first fully completed game. Cog Init is a rhythm action horror game. Initially made for The Bad Game Jam - 2025, it ended up turning into a project I am quite proud of.',  category: 'gamedev',                  featured: false },
  { id: 28, src: coginit3,   title: 'Cog Init — Screenshot 02', description: 'My first fully completed game. Cog Init is a rhythm action horror game. Initially made for The Bad Game Jam - 2025, it ended up turning into a project I am quite proud of.',  category: 'gamedev',                  featured: false },
  { id: 29, src: coginit4,   title: 'Cog Init — Screenshot 03', description: 'My first fully completed game. Cog Init is a rhythm action horror game. Initially made for The Bad Game Jam - 2025, it ended up turning into a project I am quite proud of.',  category: 'gamedev',                  featured: true  },
  { id: 30, src: coginit5,   title: 'Cog Init — Title Screen', description: 'My first fully completed game. Cog Init is a rhythm action horror game. Initially made for The Bad Game Jam - 2025, it ended up turning into a project I am quite proud of.',  category: 'gamedev',                  featured: false },
  
 
  { id: 25, src: witch1,     title: 'Untitled Witch Game — Key Art',  description: 'This was a game idea I worked on a bit to introduce myself to combat systems and Enemy AI. This was also my first introduction to pixel art.',      category: 'gamedev',                  featured: true  },
  

  // ── Graphic Design ───────────────────────────────────────────────────────
  { id: 38, src: dnd1, title: 'Redesign - DND Character Sheet',  description: 'My own personally designed character sheet for my DND esque table top game.',          category: 'graphicdesign',            featured: true  },
  { id: 39, src: prophouse, title: 'Event Poster',     description: 'Mock exercise designing for a local business in back in Canada. I was inspired the the unique nature of the business and wanted to demonstrate my interpretation of branding and advertisement for the business.',       category: 'graphicdesign',            featured: true  },
  { id: 40, src: boardgame1, title: 'Board Game — Board',     description: 'My original party came board. A combination of the board game Sequence and Common drinking games.',       category: 'graphicdesign',            featured: true  },
  { id: 41, src: boardgame2, title: 'Board Game — Cards 01',   description: 'My original party came board. A combination of the board game Sequence and Common drinking games.',       category: 'graphicdesign',            featured: false },
  { id: 42, src: boardgame3, title: 'Board Game — Cards 02',   description: 'My original party came board. A combination of the board game Sequence and Common drinking games.',       category: 'graphicdesign',            featured: false },
  { id: 43, src: boardgame4, title: 'Board Game — Cards 03',  description: 'My original party came board. A combination of the board game Sequence and Common drinking games.',       category: 'graphicdesign',            featured: true  },
  { id: 44, src: coupon1,    title: 'Couples Coupon Book',  description: 'A gift for some friends of mine, personalized coupon book for their relationship.',        category: 'graphicdesign',            featured: false },
  { id: 45, src: bar,        title: 'Bar Menu Graphic',          description: 'Themed bar menu for a Great Gatspy inspired party with a comedic and personalized twist.',        category: 'graphicdesign',            featured: false },
  { id: 46, src: logo1,      title: 'Mr. Chill Ice Cream Logo',              description: 'Logo design/illustration for a ice cream business.',        category: 'graphicdesign',            featured: false },
  { id: 47, src: logo2,      title: 'Planner Studio Logo',              description: 'Logo Design for a business.',        category: 'graphicdesign',            featured: false },
  { id: 48, src: logo3,      title: 'Medical Field Business Card',              description: 'A project I took on for my mothers small business.',        category: 'graphicdesign',            featured: true  },
  { id: 49, src: logo4,      title: 'Medical Field Flyer',              description: 'A project I took on for my mothers small business.',        category: 'graphicdesign',            featured: false },
  { id: 50, src: logo5,      title: 'PixelHeart Banner',              description: 'Marketing materials for the development of a web application.',        category: 'graphicdesign',            featured: false },
  { id: 51, src: maris6,      title: 'Employment Recruitment Ad',   description: 'An advertisement made for recruitment of Japanese Salon staff for a Tokyo based business.',                   category: 'graphicdesign',            featured: true },
  { id: 52, src: logo7,      title: 'The Cottageside Logo Sheet',               description: 'Logo Design for a business.',       category: 'graphicdesign',            featured: false },
  { id: 53, src: logo8,      title: 'PixelHeart Logo',                 description: 'A logo design that was used in the development of a web application.',     category: 'graphicdesign',            featured: true  },
  { id: 54, src: logo9,      title: 'Emblem/Family Crest',                 description: 'A family crest that I eventually woodburnt onto a sheet of wood for display.',     category: 'graphicdesign',            featured: false },
  { id: 55, src: maris1,      title: 'Print Ready Maris Gina Signage',    description: 'Signage for the exterior of a storefront for a business in Tokyo, Japan.',                  category: 'graphicdesign',            featured: true},
  { id: 56, src: maris2,      title: 'Beauty Infographic 01',          description: 'An infographic for a waxing/sugaring salon blog.',            category: 'graphicdesign',            featured: false },
  { id: 57, src: maris3,      title: 'Beauty Infographic 02',          description: 'An infographic for a waxing/sugaring salon blog.',            category: 'graphicdesign',            featured: false },
  { id: 58, src: maris4,      title: 'Hair Removal Diagram - English',  description: 'An English diagram representing the process of professional hair removal for a beauty salon.',                    category: 'graphicdesign',            featured: false },
  { id: 59, src: maris5,      title: 'Hair Removal Diagram - Japanese', description: 'A Japanese diagram representing the process of professional hair removal for a beauty salon.',                     category: 'graphicdesign',            featured: false },

  // ── Illustrations & Digital Art ──────────────────────────────────────────
  { id: 60, src: bookmark1,  title: 'Bookmark Spread 01',        description: 'A spread of several bookmark designs that I designed and produced for my small business in Canada.',         category: 'illustrations&digitalart', featured: false },
  { id: 61, src: bookmark2,  title: 'Bookmark Spread 02',            description: 'A spread of several bookmark designs that I designed and produced for my small business in Canada.',     category: 'illustrations&digitalart', featured: false },
  { id: 62, src: bookmark3,  title: 'Bookmark Spread 03',            description: 'A spread of several bookmark designs that I designed and produced for my small business in Canada.',     category: 'illustrations&digitalart', featured: true  },
  { id: 63, src: bookmark4,  title: 'Bookmark Design 01',            description: 'A designs that I designed and produced for my small business in Canada.',     category: 'illustrations&digitalart', featured: false },
  { id: 64, src: bookmark5,  title: 'Bookmark Design 02',            description: 'A designs that I designed and produced for my small business in Canada.',     category: 'illustrations&digitalart', featured: false },
  { id: 65, src: bookmark6,  title: 'Bookmark Design 03',            description: 'A designs that I designed and produced for my small business in Canada.',     category: 'illustrations&digitalart', featured: false },
  { id: 66, src: bookmark7,  title: 'Bookmark Design 04',            description: 'A designs that I designed and produced for my small business in Canada.',     category: 'illustrations&digitalart', featured: true  },
  { id: 67, src: bookmark8,  title: 'Bookmark Design 05',            description: 'A designs that I designed and produced for my small business in Canada.',     category: 'illustrations&digitalart', featured: false },
  { id: 68, src: bookmark9,  title: 'Bookmark Design 06',            description: 'A designs that I designed and produced for my small business in Canada.',     category: 'illustrations&digitalart', featured: false },
  { id: 69, src: sticker1,   title: 'Sticker 01',             description: 'Personalized caricature stickers.',     category: 'illustrations&digitalart', featured: false },
  { id: 70, src: sticker2,   title: 'Sticker 02',             description: 'Personalized caricature stickers.',     category: 'illustrations&digitalart', featured: false },
  { id: 71, src: sticker3,   title: 'Sticker 03',             description: 'Personalized caricature stickers.',     category: 'illustrations&digitalart', featured: false },
  { id: 72, src: cards1,     title: 'Oracle Card Set 01',            description: 'Oracle card designs.',     category: 'illustrations&digitalart', featured: true  },
  { id: 73, src: cards2,     title: 'Oracle Card Set 02',            description: 'Oracle card designs.',     category: 'illustrations&digitalart', featured: false },
  { id: 74, src: cards3,     title: 'Oracle Card Set 03',            description: 'Oracle card designs.',     category: 'illustrations&digitalart', featured: false },
  { id: 75, src: cards4,     title: 'Oracle Card Set 04',            description: 'Oracle card designs.',     category: 'illustrations&digitalart', featured: false },
  { id: 76, src: cards5,     title: 'Personalized Pokemon Card',            description: 'Joke pokemon card designs.',     category: 'illustrations&digitalart', featured: false },
  { id: 77, src: illust1,    title: 'Digital Illustration 01',        description: 'A digital art illustration.',     category: 'illustrations&digitalart', featured: true  },
  { id: 78, src: illust2,    title: 'Digital Illustration 02',        description: 'A digital art illustration.',     category: 'illustrations&digitalart', featured: false },
  { id: 79, src: illust3,    title: 'Digital Illustration 03',        description: 'A digital art illustration.',     category: 'illustrations&digitalart', featured: false },

  // ── Paintings & Sculptures ───────────────────────────────────────────────
  { id: 80, src: painting1,  title: 'Pet Portrait - Acrylic',                category: 'paintings&sculptures',     featured: true  },
  { id: 81, src: painting2,  title: 'Landcape - Acrylic',             category: 'paintings&sculptures',     featured: false },
  { id: 82, src: painting3,  title: 'Sunflowers - Acrylic',              category: 'paintings&sculptures',     featured: false },
  { id: 83, src: painting4,  title: 'Kittens - Acrylic',             category: 'paintings&sculptures',     featured: true  },
  { id: 84, src: painting5,  title: 'Portrait Lighting Study - Acrylic',             category: 'paintings&sculptures',     featured: false },
  { id: 85, src: painting6,  title: 'Self Portrait - Acrylic',               category: 'paintings&sculptures',     featured: false },
  { id: 86, src: painting7,  title: 'Family Portrait - Acrylic',            category: 'paintings&sculptures',     featured: false },
  { id: 87, src: painting8,  title: 'Puppets - Acrylic',              category: 'paintings&sculptures',     featured: true  },
  { id: 88, src: painting9,  title: 'Abstract Cat Painting - Acrylic',                category: 'paintings&sculptures',     featured: false },
  { id: 89, src: painting10, title: 'Greenpath - Acrylic',               category: 'paintings&sculptures',     featured: false },
  { id: 90, src: painting11, title: 'Portrait Studies - Acrylic',              category: 'paintings&sculptures',     featured: false },
  { id: 91, src: sculpt1,    title: 'Me as a Puppet',             category: 'paintings&sculptures',     featured: true  },
  { id: 92, src: sculpt2,    title: 'Cute Monster Sculpture',            category: 'paintings&sculptures',     featured: false },
  { id: 93, src: sculpt3,    title: 'Puppet Build',              category: 'paintings&sculptures',     featured: false },
  { id: 94, src: draw1,      title: 'Abstract Drawing - Marker',              category: 'paintings&sculptures',     featured: false },
  { id: 95, src: draw2,      title: 'Hanging Jacket - Charcoal',               category: 'paintings&sculptures',     featured: false },
];
 