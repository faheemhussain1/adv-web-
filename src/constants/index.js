import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  chromecast,
  disc02,
  python,
  discordBlack,
  facebook,
  figma,
  file02,
  react,
  homeSmile,
  instagram,
  vite,
  huggingface,
  plusSquare,
  pytorch,
  tailwind,
  recording01,
  recording03,
  roadmap2,
  roadmap3,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  summifylogo,
  faheem,
  zeeshan,
  sir
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Summarizer",
    url: "#summarize",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const contentIcons = [homeSmile, file02, searchMd, plusSquare];



export const companyLogos = [summifylogo, summifylogo, summifylogo, summifylogo, summifylogo];

export const summifyServices = [
  "summary generaton",
  "context enhancement",
  "Seamless Integration",
];

export const summifyServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [

  {
    id: "1",
    title: "Feature Expansion",
    text: "Add features like emotion analysis, transcription support, and keyword extraction.",
    date: "May 2024",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Integration with Communication Platforms",
    text: " Develop and test integrations with Zoom and Microsoft Teams.",
    date: "May 2024", 
    imageUrl: roadmap3,
  },
  
];

export const collabText =
  "A perfect solution for teams looking for a swift user response";

export const collabContent = [
  {
    id: "0",
    title: "API Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Time Saving",
  },
  {
    id: "2",
    title: "Futuristic",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Vite",
    icon: vite,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Python",
    icon: python,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "huggingface",
    icon: huggingface,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Pytorch",
    icon: pytorch,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "React",
    icon: react,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Tailwind",
    icon: tailwind,
    width: 38,
    height: 32,
  },
];



export const benefits = [
  {
    id: "0",
    title: "Real-time Dialogue Summarization",
    text: "Automatically generates concise summaries from dialogue-based data as it is typed or pasted into the text box.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
   
  },
  {
    id: "1",
    title: "Interactive User Interface",
    text: "Features a user-friendly and interactive interface with real-time text input, adjustable settings, and immediate display of the summarized output.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
   
    
  },
  {
    id: "2",
    title: "Integration and API Access",
    text: "Offers API access for developers to integrate SummifyX’s summarization capabilities into other applications, such as chat applications or messaging platforms, to provide real-time summarization of conversations.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find summaries of their quieries.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    
  },
  {
    id: "4",
    title: "summarize  anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find summaries of their quieries.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
   
    
  }
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const teamMembers = [
  {
    id: "0",  
    name: "Prof. ZAFAR KHAN KHATTAK",
    role: "SUPERVISOR",
    bio: "PHD (ARTIFICIAL INTELLIGENCE)",
    imageUrl: sir
  },
  {
    id: 1,
    name: "FAHEEM HUSSAIN",
    role: "STUDENT",
    bio: "",
    imageUrl: faheem
  },
  {
    id: 2,
    name: "MUHAMMAD ZEESHAN",
    role: "STUDENT",
    bio: " ",
    imageUrl: zeeshan
  },
 
];
