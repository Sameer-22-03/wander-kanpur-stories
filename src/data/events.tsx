
export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time?: string;
  location: string;
  category: string;
  featured: boolean;
}

export const events: Event[] = [
  {
    id: "ganga-mahotsav",
    title: "Ganga Mahotsav",
    description: "Annual cultural festival celebrating the river Ganges with music, dance, and cultural performances.",
    image: "https://images.unsplash.com/photo-1604577464198-2239d8b8d568?q=80&w=1000",
    date: "2023-11-15",
    time: "5:00 PM - 10:00 PM",
    location: "Bithoor Ghat, Kanpur",
    category: "Cultural",
    featured: true
  },
  {
    id: "kanpur-food-festival",
    title: "Kanpur Food Festival",
    description: "Celebrate the diverse culinary heritage of Kanpur featuring local delicacies and traditional recipes.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000",
    date: "2023-12-10",
    time: "12:00 PM - 10:00 PM",
    location: "Moti Jheel Park, Kanpur",
    category: "Food",
    featured: true
  },
  {
    id: "leather-expo",
    title: "International Leather Expo",
    description: "Exhibition showcasing Kanpur's world-famous leather products, craftsmanship, and industry innovations.",
    image: "https://images.unsplash.com/photo-1531553274245-3f7248bf8e7a?q=80&w=1000",
    date: "2024-01-20",
    time: "10:00 AM - 6:00 PM",
    location: "Kanpur Trade Center",
    category: "Exhibition",
    featured: true
  },
  {
    id: "kanpur-literature-festival",
    title: "Kanpur Literature Festival",
    description: "Annual gathering of authors, poets, and literary enthusiasts with book launches and panel discussions.",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000",
    date: "2024-02-05",
    time: "11:00 AM - 7:00 PM",
    location: "CSJM University, Kanpur",
    category: "Cultural",
    featured: false
  },
  {
    id: "holi-celebrations",
    title: "Traditional Holi Celebrations",
    description: "Experience the vibrant colors and traditions of Holi, the festival of colors, in Kanpur.",
    image: "https://images.unsplash.com/photo-1624468619997-0d76f7ec7191?q=80&w=1000",
    date: "2024-03-25",
    time: "9:00 AM - 2:00 PM",
    location: "Phool Bagh, Kanpur",
    category: "Festival",
    featured: true
  },
  {
    id: "music-concert",
    title: "Classical Music Concert",
    description: "Enjoy an evening of classical music performances by renowned musicians from across the country.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000",
    date: "2023-12-22",
    time: "6:00 PM - 9:00 PM",
    location: "JK Temple Auditorium, Kanpur",
    category: "Cultural",
    featured: false
  },
  {
    id: "heritage-walk",
    title: "Kanpur Heritage Walk",
    description: "Guided tour exploring the colonial architecture and historical landmarks of Kanpur city.",
    image: "https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?q=80&w=1000",
    date: "2023-11-30",
    time: "7:00 AM - 10:00 AM",
    location: "Starting from Civil Lines, Kanpur",
    category: "Tour",
    featured: false
  },
  {
    id: "handicraft-bazaar",
    title: "Handicraft Bazaar",
    description: "Exhibition and sale of traditional handicrafts made by local artisans of Kanpur and surrounding regions.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=1000",
    date: "2024-01-10",
    time: "11:00 AM - 8:00 PM",
    location: "Ganga Shoppee, Mall Road, Kanpur",
    category: "Exhibition",
    featured: false
  }
];

export const eventCategories = [
  "All",
  "Cultural",
  "Food",
  "Exhibition",
  "Festival",
  "Tour"
];
