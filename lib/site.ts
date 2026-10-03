export const site = {
  name: "Miss Meg Loves Books",
  teacher: "Megan Geiger",
  owner: "Megan Geiger",
  tagline:
    "Personalized literacy support for children, locally in Burbank or online.",
  location: "Burbank, CA",
  audience: "Elementary readers, roughly K–6",
  domain: "missmeglovesbooks.com",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "missmeglovesbooks@gmail.com",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
] as const;

export const intakeQuestions = [
  "Parent name and email",
  "Child’s first name and grade",
  "In-person in Burbank or virtual",
  "What you’d most like support with as a reader",
];

const DEFAULT_INTRO_BOOKING = "https://calendar.app.google/mTL1SAMP2BMAQJdc9";
const DEFAULT_INTRO_EMBED =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2T0rUR_tLDsc9HuI0CZNLVoe20L6WxJtBMpbFlu1GFgi0C6Tdg5lwmMQ265SPNChW3ppsR1Kqq?gv=true";

export const scheduleConfig = {
  introBookingUrl:
    process.env.NEXT_PUBLIC_INTRO_SCHEDULE_URL || DEFAULT_INTRO_BOOKING,
  introEmbedUrl: DEFAULT_INTRO_EMBED,
};

export const pricing = [
  {
    name: "Intro call",
    time: "20 minutes",
    price: "Free",
    note: "A parent conversation to share what’s going on and see if we’re a good fit.",
  },
  {
    name: "Reading session",
    time: "30 minutes",
    price: "$55",
    note: "A shorter visit, often a good fit for younger readers.",
  },
  {
    name: "Reading session",
    time: "60 minutes",
    price: "$90",
    note: "The usual weekly session for most children.",
  },
  {
    name: "Eight-session pack",
    time: "Eight 60-minute visits",
    price: "$680",
    note: "$85 per session when you pay for eight at once.",
  },
  {
    name: "Reading assessment",
    time: "About an hour, plus a written plan",
    price: "$140",
    note: "Scheduled after the intro call — not booked on this site yet.",
  },
] as const;
