import { useState } from "react";

const allStories = [
  {
    id: 1,
    title: "AI Revolution in 2025: What Developers Should Expect",
    author: "Sarah Johnson",
    date: "2025-11-01",
    details:
      "Experts predict AI tools will automate more than 40% of software development tasks.",
    content:
      "Artificial Intelligence continues to reshape industries in 2025. Developers now use AI copilots for debugging, architecture design, and rapid prototyping. However, creativity and problem-solving remain essential human strengths. Companies using hybrid AI workflows are reporting a 60% increase in delivery speed.",
    likes: 92,
    comments: 14,
    replies: 3,
    image:
      "https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/wp-cms/uploads/2023/07/3_ways_to_lead_a_business_through_the_AI_revolution.jpg",
  },
  {
    id: 2,
    title: "South Africa Pushes for Green Tech Innovation",
    author: "Michael Ndlovu",
    date: "2025-11-02",
    details:
      "The government has announced a new innovation fund to support green energy startups.",
    content:
      "South Africa is accelerating its investment in renewable energy technologies. The latest Innovation Fund supports solar, wind, and electric mobility startups. Analysts believe this move will create thousands of tech jobs, especially for young developers entering the field.",
    likes: 74,
    comments: 9,
    replies: 1,
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200",
  },
  {
    id: 3,
    title: "SpringBoot 4: Major Advancements for Java Developers",
    author: "David Miller",
    date: "2025-11-03",
    details:
      "SpringBoot 4 introduces faster startup times and improved native image performance.",
    content:
      "SpringBoot 4 brings major performance upgrades ideal for cloud-native microservices. Developers benefit from faster cold starts, minimal memory consumption, and improved containerization compatibility. Analysts predict rapid adoption across global enterprises.",
    likes: 60,
    comments: 7,
    replies: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizYdfNR8bUNU1bGrfNp53iFsnSyvhE4JLrQ&s",
  },
  {
    id: 4,
    title: "Why Every Business Needs an Online Presence in 2025",
    author: "Amanda Khoza",
    date: "2025-11-04",
    details:
      "Small businesses still lag in digital adoption despite huge growth potential.",
    content:
      "Businesses with a strong online presence report a 300% increase in customer engagement. Websites, mobile apps, and digital marketing have become essential survival tools. Experts advise businesses to invest in branding, SEO, and user-friendly websites.",
    likes: 88,
    comments: 12,
    replies: 5,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
  },
  {
    id: 5,
    title: "FastAPI Continues Its Rise as the Top Python Framework",
    author: "Carlos Ramirez",
    date: "2025-11-05",
    details:
      "Developers praise FastAPI for its speed, simplicity, and built-in validation.",
    content:
      "FastAPI is gaining worldwide adoption thanks to its async support, minimalism, and powerful validation features. Many developers now choose FastAPI for microservices, internal APIs, and startup MVPs. Cloud-native support further accelerates its popularity.",
    likes: 120,
    comments: 18,
    replies: 4,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },
  {
    id: 6,
    title: "Tech Salaries Expected to Increase in 2026",
    author: "Lerato Maseko",
    date: "2025-11-06",
    details:
      "Demand for cloud engineers, AI specialists, and full-stack developers surges.",
    content:
      "Global recruitment data shows rising salaries for tech roles, especially cloud engineering, cybersecurity, and AI development. Junior developers with strong portfolios and open-source contributions are increasingly preferred by employers.",
    likes: 98,
    comments: 11,
    replies: 2,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
  },
  {
    id: 7,
    title: "React 19 Improves App Performance Dramatically",
    author: "Emily Carter",
    date: "2025-11-07",
    details:
      "React 19 ships with new compiler optimization and improved Suspense.",
    content:
      "React 19 introduces groundbreaking features that reduce re-renders and improve UI responsiveness. The new React Compiler automatically optimizes components, resulting in smaller bundle sizes and improved performance across devices.",
    likes: 84,
    comments: 10,
    replies: 1,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
  },
  {
    id: 8,
    title: "Cybersecurity Threats in 2025: What Users Must Know",
    author: "Dr. Isaac Daniels",
    date: "2025-11-08",
    details:
      "Cybercrime is expected to cost businesses over $14 trillion globally.",
    content:
      "Cyber experts warn that phishing, identity theft, and zero-day exploits are more sophisticated. Users should adopt MFA, strong passwords, and regular updates. Companies are shifting toward zero-trust security infrastructures.",
    likes: 130,
    comments: 15,
    replies: 6,
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1200",
  },
];

export default function StoriesHero() {
  const [selectedStory, setSelectedStory] = useState(null);

  const leftStories = allStories.slice(0, 6);
  const rightStories = allStories.slice(6, 8);

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex flex-col items-center overflow-y-auto">
      
      {!selectedStory && (
        <div className="w-full max-w-6xl flex gap-6">
          
      
          <div className="flex flex-col gap-4 w-1/2">
            {leftStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="flex gap-3 cursor-pointer bg-opacity-10 p-3 rounded-md hover:bg-opacity-20 transition"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex flex-col justify-start">
                  <span className="text-xs text-gray-300">{story.date}</span>
                  <span className="text-sm font-semibold">{story.author}</span>
                  <h3 className="text-md font-semibold">{story.title}</h3>
                </div>
              </div>
            ))}

        
            <div className="mt-6 flex flex-col gap-2">
              <a href="#" className="text-yellow-400 text-sm hover:underline">Latest Articles</a>
              <a href="#" className="text-yellow-400 text-sm hover:underline">Recent Articles</a>
              <a href="#" className="text-yellow-400 text-sm hover:underline">Follow Me</a>
              <a href="#" className="text-yellow-400 text-sm hover:underline">More</a>
            </div>
          </div>

          <div className="w-px bg-gray-600 my-2" />

  
          <div className="flex flex-col gap-5 min-w-1/2">
            {rightStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="cursor-pointer flex flex-col bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-96 h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <span className="text-sm mb-1">{story.date}</span>
                <p className="text-sm mb-1">{story.content.substring(0, 150)}</p>
                <span className="text-sm mb-2">By {story.author}</span>
                <div className="flex justify-between text-sm">
                  <span>👍 {story.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedStory && (
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow w-full max-w-3xl mt-6 text-black">
          <img
            src={selectedStory.image}
            alt={selectedStory.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">{selectedStory.title}</h2>
          <span className="text-sm mb-2 block">
            By {selectedStory.author} - {selectedStory.date}
          </span>
          <p className="mb-6">{selectedStory.content}</p>
          
          <button
            onClick={() => setSelectedStory(null)}
            className="mt-6 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
        </div>
      )}
    </section>
  );
}
