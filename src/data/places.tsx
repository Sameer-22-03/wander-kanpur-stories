
export interface Place {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  tags: string[];
  location: string;
  timings?: string;
  entryFee?: string;
  rating: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const places: Place[] = [
  {
    id: "jajmau-fort",
    title: "Jajmau Fort",
    description: "Ancient fort with historical significance dating back to the early medieval period.",
    fullDescription: "Jajmau is an ancient mound overlooking the Ganges in Kanpur. The fort is believed to have been built by King Janamejaya, the son of King Parikshit from Mahabharata. Archaeological excavations have revealed pottery and artifacts dating back to 600-1100 CE. The site offers panoramic views of the river and holds significant historical value.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1000",
    category: "Historical",
    tags: ["fort", "ancient", "archaeology", "views"],
    location: "Jajmau, Kanpur, Uttar Pradesh",
    timings: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    rating: 4.3,
    reviews: [
      {
        id: "rev1",
        name: "Aman Singh",
        rating: 5,
        comment: "Amazing historical site with beautiful views of the Ganges. Must visit for history lovers!",
        date: "2023-03-15"
      },
      {
        id: "rev2",
        name: "Priya Sharma",
        rating: 4,
        comment: "Great place to learn about Kanpur's ancient history. Good for morning visits.",
        date: "2023-02-10"
      }
    ]
  },
  {
    id: "allen-forest-zoo",
    title: "Allen Forest Zoo",
    description: "One of the oldest and largest zoos in India with a wide variety of animal species.",
    fullDescription: "Established in 1971 and commonly known as Kanpur Zoo, Allen Forest Zoo is spread over an area of 190 acres. It's one of the largest zoos in Asia, designed as a natural habitat for animals. The zoo houses a variety of species including tigers, lions, bears, giraffes, and many exotic birds. The sprawling green environment and lake make it a popular recreational spot.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000",
    category: "Nature",
    tags: ["zoo", "animals", "nature", "family"],
    location: "Allen Forest, Kanpur, Uttar Pradesh",
    timings: "9:00 AM - 5:30 PM (Closed on Mondays)",
    entryFee: "₹50 for adults, ₹20 for children",
    rating: 4.5,
    reviews: [
      {
        id: "rev3",
        name: "Rahul Gupta",
        rating: 5,
        comment: "Great zoo with lots of animals and well-maintained facilities. The natural setting is beautiful.",
        date: "2023-05-20"
      },
      {
        id: "rev4",
        name: "Sneha Patel",
        rating: 4,
        comment: "Kids loved it! Nice place for a family outing. Could use more food options though.",
        date: "2023-04-12"
      }
    ]
  },
  {
    id: "jk-temple",
    title: "JK Temple",
    description: "Beautiful marble temple dedicated to Lord Shiva with intricate architecture.",
    fullDescription: "JK Temple, also known as Radhakrishna Temple, was built in 1957 by J.K. Trust. The temple is made entirely of white marble and features stunning architecture. The main sanctum houses Lord Shiva, and there are smaller shrines dedicated to other deities. The temple complex includes beautifully maintained gardens and a large hall for religious gatherings and ceremonies.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1000",
    category: "Religious",
    tags: ["temple", "marble", "architecture", "spiritual"],
    location: "Kamla Nagar, Kanpur, Uttar Pradesh",
    timings: "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
    entryFee: "Free",
    rating: 4.7,
    reviews: [
      {
        id: "rev5",
        name: "Vivek Kumar",
        rating: 5,
        comment: "Peaceful and spiritually uplifting place. The marble work is exquisite!",
        date: "2023-06-05"
      },
      {
        id: "rev6",
        name: "Ananya Joshi",
        rating: 4,
        comment: "Beautiful temple with serene atmosphere. Gets crowded during festivals.",
        date: "2023-01-22"
      }
    ]
  },
  {
    id: "phool-bagh",
    title: "Phool Bagh",
    description: "Historic garden with colonial architecture and memorial dedicated to freedom fighters.",
    fullDescription: "Phool Bagh is a historic garden that holds significant importance in India's freedom struggle. It houses the Martyrs' Memorial (Shaheed Smarak) dedicated to the freedom fighters who lost their lives during the 1857 revolt. The garden features colonial-era architecture, beautiful fountains, and walking paths. It's a popular recreational spot for locals and tourists alike.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1000",
    category: "Historical",
    tags: ["garden", "memorial", "freedom struggle", "colonial"],
    location: "Mall Road, Kanpur, Uttar Pradesh",
    timings: "5:00 AM - 9:00 PM",
    entryFee: "Free",
    rating: 4.2,
    reviews: [
      {
        id: "rev7",
        name: "Rajesh Mishra",
        rating: 4,
        comment: "Important historical site with well-maintained gardens. Great place to learn about our freedom fighters.",
        date: "2023-07-10"
      },
      {
        id: "rev8",
        name: "Meera Verma",
        rating: 5,
        comment: "Peaceful garden with historical significance. Perfect for morning and evening walks.",
        date: "2023-02-28"
      }
    ]
  },
  {
    id: "blue-world-theme-park",
    title: "Blue World Theme Park",
    description: "Modern water and amusement park with thrilling rides and water attractions.",
    fullDescription: "Blue World Theme Park is one of the largest water and amusement parks in Uttar Pradesh. The park features numerous water rides, slides, wave pools, and a lazy river. There are also dry rides, a children's play area, and entertainment shows. The park has restaurants, food courts, and picnic areas, making it a complete day out for families and groups.",
    image: "https://plus.unsplash.com/premium_photo-1663047360393-cbbe7e08df96?q=80&w=1000",
    category: "Entertainment",
    tags: ["water park", "rides", "family", "entertainment"],
    location: "Bithoor Road, Kanpur, Uttar Pradesh",
    timings: "10:00 AM - 7:00 PM",
    entryFee: "₹800 for adults, ₹600 for children",
    rating: 4.4,
    reviews: [
      {
        id: "rev9",
        name: "Amit Srivastava",
        rating: 5,
        comment: "Fantastic water park with great rides. Clean facilities and friendly staff.",
        date: "2023-05-30"
      },
      {
        id: "rev10",
        name: "Kavita Yadav",
        rating: 4,
        comment: "Fun day out with the family. Bit crowded on weekends but worth visiting.",
        date: "2023-06-18"
      }
    ]
  },
  {
    id: "bithoor",
    title: "Bithoor",
    description: "Ancient town on the banks of the Ganges with numerous temples and historical sites.",
    fullDescription: "Bithoor is a historic town located about 27 km from Kanpur on the banks of the Ganges. It's associated with Hindu mythology as the place where Lord Brahma created the universe. The town has numerous temples and ghats, including the Valmiki Ashram where Sita is said to have stayed during her exile. Bithoor also played an important role during the 1857 revolt, as it was the seat of Nana Sahib, a prominent leader of the rebellion.",
    image: "https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=1000",
    category: "Religious",
    tags: ["temples", "ghats", "historical", "river"],
    location: "Bithoor, Kanpur, Uttar Pradesh",
    timings: "Open 24 hours (temples have specific timings)",
    entryFee: "Free (some temples may have nominal entry fees)",
    rating: 4.6,
    reviews: [
      {
        id: "rev11",
        name: "Suresh Tiwari",
        rating: 5,
        comment: "Spiritually enlightening place with great historical significance. The morning aarti at the ghats is beautiful.",
        date: "2023-03-05"
      },
      {
        id: "rev12",
        name: "Neha Agarwal",
        rating: 4,
        comment: "Peaceful town with many temples and ghats. Best visited during mornings or evenings.",
        date: "2023-04-22"
      }
    ]
  }
];

export const categories = [
  "All",
  "Historical",
  "Religious",
  "Nature",
  "Entertainment"
];
