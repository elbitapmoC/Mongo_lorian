// db: database
// posts: collection(aka tables)
// insertOne - Accepts an object
// insertMany - Accepts an array of objects

// Run connection string via terminal

// Show dbs
show dbs;

// How do we see the posts?
db.posts.find({ category: "EV" });

// How to filter posts?
// -1: Sorts in decending order.
// 1: Sorts in ascending order.
db.posts.find().sort({ title: -1 });

// I don't need all the info, I just want to know how many articles?
db.posts.find().count();

// We can also limit what we're shown (limited to 2)
db.posts.find().limt(2);

db.posts.insertMany([
  {
    title: "Rivian R1 vs Ford Lightning F-150 (Lariat)",
    body: "Showdown of Luxury vs. Iconic American Tradition, who will hold up?",
    category: "EV",
    likes: 7,
    tags: ["comfort", "EV", "trucks"],
    data: Date(),
  },
  {
    title: "Mustang Mach-E... $7500 Tax Credit",
    body: "Mustange is a new, KEY player to the game of EV. I know a lot of you are considering VW, Tesla, Rivian, etc... the thing that sets Mustang apart is this new EV Tax Credit. Imagine getting a high end car and getting paid 10% to own it.",
    category: "EV",
    likes: 11,
    tags: ["EV", "cars", "Hyandai"],
    data: Date(),
  },
  {
    title: "Form > Function",
    body: "Nope nope nope.",
    category: "Cars",
    likes: 1,
    tags: ["cars", "car show"],
    data: Date(),
  },
  {
    title: "Ode to the Z",
    body: "From Iconic 240X -> Nissan Z, is Nissan history time travel well?",
    category: "History",
    likes: 2,
    tags: ["cars", "jdm"],
    data: Date(),
  },
  {
    title: "Hyundai 2023 | EV of the Year",
    body: "Looking for something new? Looking to save on gas? Looking for something more futuristic?",
    category: "EV",
    likes: 10,
    tags: ["EV", "cars", "Hyandai"],
    data: Date(),
  },
]);
