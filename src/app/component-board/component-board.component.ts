import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';

interface TourGuides {
  name: string;
  avatarImg: string;
  status: "Invited" | "Joined" | "Declined";
}

interface TimePeriod {
  era: string;
  image: string;
  startingPrice: number;
}

interface FareClass {
  name: string;
  price: number;
  available: boolean;
}

interface TripOptions {
  tripType: "One Way" | "Round Trip" | "Multi Destination";
  preferredFare: FareClass;
  numberOfTravelers: number;
}

interface Accommodation {
  type: "Hotel" | "Campground" | "Home Stay" | "Resort" | "Hostel";
  name: string;
  stars: number;
  rating: number;
  startingPrice: number;
  eraId: string;
  description: string;
  notes: string;
}

@Component({
  selector: 'app-component-board',
  imports: [
    AvatarModule,
    ButtonModule,
    CardModule, 
    FieldsetModule,
    InputTextModule,
    MessageModule,
    TableModule
  ],
  templateUrl: './component-board.component.html',
  styleUrl: './component-board.component.scss',
  standalone: true
})
export class ComponentBoardComponent {

  constructor() { } 

  people: TourGuides[] = [
    {name: "The Doctor", avatarImg: "doctor.jpg", status: "Invited"},
    {name: "Philip J. Fry", avatarImg: "fry.jpg", status: "Joined"},
    {name: "Marty McFly", avatarImg: "marty.jpg", status: "Declined"},
    {name: "Sam Beckett", avatarImg: "sam.jpg", status: "Invited"},
    {name: "Sarah Connor", avatarImg: "sarah.jpg", status: "Joined"},
  ]

  timePeriods: TimePeriod[] = [
    {era: "Jurassic", image: "jurassic.jpg", startingPrice: 1755},
    {era: "Medieval Baghdad", image: "medieval.jpg", startingPrice: 1200},
    {era: "Precolumbian Mesoamerica", image: "mesoamerica.jpg", startingPrice: 2000},
    {era: "Srivijaya Empire", image: "srivijaya.jpg", startingPrice: 1000},
    {era: "Maurya Empire", image: "maurya.jpg", startingPrice: 1000},
    {era: "Tang Dynasty", image: "tang.jpg", startingPrice: 1500},
    {era: "Great Zimbabwe", image: "zimbabwe.jpg", startingPrice: 1000},
    {era: "Victorian Hong Kong", image: "victorian.jpg", startingPrice: 800},
    {era: "1950s Soviet", image: "soviet.jpg", startingPrice: 1500},
    {era: "1980s Miami", image: "miami.jpg", startingPrice: 2000},
    {era: "Cyberpunk Lunar Colonies", image: "cyberpunk.jpg", startingPrice: 3770},
    {era: "Post-nuclear Wastelands", image: "postapocalyptic.jpg", startingPrice: 5000},
    {era: "Post-work Utopia", image: "postwork.jpg", startingPrice: 5000},
    {era: "Belter Wars", image: "belter.jpg", startingPrice: 5000},
    {era: "Dyson Sphere", image: "dyson.jpg", startingPrice: 5500},
  ]

  resorts: Accommodation[] = [
    {
      type: "Campground",
      name: "Pangean Valley",
      stars: 2,
      startingPrice: 1000,
      eraId: "jurassic",
      rating: 3.5,
      description: "Enjoy the charm of prehistoric camping with no cell service, surrounded by dino roars and primeval air. Perfect for adventure seekers—or those with questionable survival instincts!",
      notes: "Guests must sign a waiver acknowledging the risk of being stepped on. Bug spray recommended."
    },
    {
      type: "Hotel",
      name: "Dino Lodge",
      stars: 4,
      startingPrice: 2000,
      eraId: "jurassic",
      rating: 4.2,
      description: "Stay in luxury as you sip cocktails while watching a triceratops graze outside your panoramic window. Guaranteed 95% dinosaur-free rooms!",
      notes: "No refunds for dino-related incidents. Complimentary breakfast included."
    },
    {
      type: "Resort",
      name: "Jurassic Park",
      stars: 5,
      startingPrice: 3000,
      eraId: "jurassic",
      rating: 2.5,
      description: "The ultimate thrill-seekers' paradise! Fine dining, top-tier amenities, and the occasional T-Rex running through the courtyard. A true 'life finds a way' experience!",
      notes: "Liability insurance highly recommended. Guests must provide emergency contact details."
    },
    {
      type: "Campground",
      name: "Temple View Cabins",
      stars: 2,
      startingPrice: 1800,
      eraId: "mesoamerica",
      rating: 4.4,
      description: "Cozy cabins with a stunning view of ancient pyramids! Perfect for sunrise yoga or late-night pondering of ancient mysteries.",
      notes: "Guests are advised not to touch artifacts. Mosquito netting provided but not guaranteed effective."
    },
    {
      type: "Hotel",
      name: "Motel Baghdad",
      stars: 3,
      startingPrice: 1200,
      eraId: "medieval",
      rating: 3.8,
      description: "Affordable comfort in the heart of medieval Baghdad! Ideal for travelers who don't mind the occasional camel parking dispute.",
      notes: "No alcohol permitted on-site. Complimentary tea service available."
    },
    {
      type: "Home Stay",
      name: "Al-Rashid Caravanserai",
      stars: 4,
      startingPrice: 800,
      eraId: "medieval",
      rating: 4.2,
      description: "Experience the legendary hospitality of the Middle East! Enjoy homemade meals and the best stargazing from our cozy rooftop.",
      notes: "Guests must participate in daily poetry recitals. Wi-Fi powered by camel rotation (not very reliable)."
    },
    {
      type: "Resort",
      name: "Golden Lotus Resort",
      stars: 5,
      startingPrice: 2000,
      eraId: "medieval",
      rating: 4.5,
      description: "Float into tranquility with our overwater bungalows and spa treatments inspired by the Srivijaya Empire. Gold-plated everything, because why not?",
      notes: "Guests must wear traditional attire during meals. Swimming only allowed during high tide."
    },
    {
      type: "Campground",
      name: "Hulao Camp",
      stars: 1,
      startingPrice: 800,
      eraId: "tang",
      description: "Basic camping with stunning mountain views, occasional poetry sessions, and an overabundance of Tang Dynasty ambiance.",
      notes: "Guests must chop their own firewood. Bring your own lanterns."
    },
    {
      type: "Hotel",
      name: "Silk Road Inn",
      stars: 2,
      startingPrice: 200,
      eraId: "tang",
      rating: 3.5,
      description: "Affordable lodging for travelers seeking a quiet retreat—or just a place to trade their wares in peace. Breakfast included, but don’t ask about the coffee.",
      notes: "No horses allowed inside. Trading discounts available on Wednesdays."
    },
    {
      type: "Resort",
      name: "Taizong Palace",
      stars: 5,
      startingPrice: 2000,
      eraId: "tang",
      description: "A luxurious palace stay with imperial-level service, rooftop gardens, and koi ponds larger than some cities!",
      notes: "Guests are required to bow to portraits of Emperor Taizong. No loud noises after sunset."
    },
    {
      type: "Hostel",
      name: "Stone Citadel Inn",
      stars: 4,
      startingPrice: 1000,
      eraId: "zimbabwe",
      rating: 4.2,
      description: "Stay inside the ancient stone walls of Great Zimbabwe, with communal dinners and drum circles every evening. History has never been so cozy!",
      notes: "Stone walls are soundproof, but echo a lot. Watch out for falling stones."
    },
    {
      type: "Home Stay",
      name: "Opium Merchant's Manor",
      stars: 4,
      startingPrice: 900,
      eraId: "victorian",
      rating: 4.2,
      description: "Step into Victorian luxury with hand-carved furniture, tea service, and just the right hint of opium-era scandal.",
      notes: "Opium is purely decorative. Top hats available for rent."
    },
    {
      type: "Hostel",
      name: "Cosmo Capsules",
      stars: 2,
      startingPrice: 500,
      eraId: "soviet",
      rating: 3.5,
      description: "Soviet-style minimalist lodging with capsule beds and stern cafeteria staff serving borscht. For the true Comrade experience!",
      notes: "Communal showers only. Free vodka shots on Fridays."
    },
    {
      type: "Hotel",
      name: "Neon Nights",
      stars: 4,
      startingPrice: 2200,
      eraId: "miami",
      rating: 4.2,
      description: "An 80s neon dream with poolside margaritas, disco vibes, and rooms that look straight out of a music video.",
      notes: "Rollerblades required for pool entry. Sunglasses included in room price."
    },
    {
      type: "Hotel",
      name: "LUNAR SKY-RISE",
      stars: 5,
      startingPrice: 4000,
      eraId: "cyberpunk",
      rating: 4.5,
      description: "The epitome of lunar luxury, with zero-gravity hot tubs, neon skyline views, and a staff of charming robots.",
      notes: "Guests must sign an anti-hacking agreement. Bring your own oxygen mask."
    },
    {
      type: "Campground",
      name: "Bunker 22",
      stars: 2,
      startingPrice: 5500,
      eraId: "postapocalyptic",
      rating: 3.5,
      description: "Sleep in a heavily fortified bunker while enjoying post-apocalyptic gourmet meals and scavenger hunts. Mad Max vibes included!",
      notes: "Gas masks provided upon entry. No refunds for mutant attacks."
    },
    {
      type: "Resort",
      name: "Serenity Habitat",
      stars: 5,
      startingPrice: 0,
      eraId: "postwork",
      rating: 4.9,
      description: "Welcome to utopia, where robots do all the work and humans just chill. The perfect place to forget what capitalism feels like.",
      notes: "Guests may not leave once they enter. Relaxation is mandatory."
    },
    {
      type: "Hotel",
      name: "Vesta Station Quarters",
      stars: 2,
      startingPrice: 28000,
      eraId: "belter",
      rating: 3.5,
      description: "Tight quarters for the budget-conscious asteroid miner, with views of the belt and surprisingly decent food rations.",
      notes: "Low gravity might cause nausea. No refunds for asteroid collisions."
    },
    {
      type: "Resort",
      name: "Ceres Oasis",
      stars: 5,
      startingPrice: 5000,
      eraId: "belter",
      description: "An interstellar getaway with spa-grade hydroponics, holographic entertainment, and luxury vacuum suits for spacewalks.",
      notes: "Guests must book their own shuttle. Oxygen costs extra."
    },
    {
      type: "Home Stay",
      name: "Solar Perimeter Suites",
      stars: 3,
      startingPrice: 5500,
      eraId: "dyson",
      rating: 4.2,
      description: "Live like a true solar aristocrat, basking in Dyson Sphere energy while sipping light-infused cocktails.",
      notes: "Sunglasses mandatory. No refunds for sunburns."
    }
  ];
  


}
