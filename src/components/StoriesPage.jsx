import { useState } from "react";

// Dummy stories
const allStories = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Story Title ${i + 1}`,
  author: `Author ${i + 1}`,
  date: `2025-11-${(i % 30) + 1}`,
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  content: `Full content of story ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 20),
  replies: Math.floor(Math.random() * 10),
  image: `https://picsum.photos/400/250?random=${i + 1}`,
}));

export default function StoriesHero() {
  const [selectedStory, setSelectedStory] = useState(null);

  const leftStories = allStories.slice(0, 6);
  const rightStories = allStories.slice(6, 8);

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex flex-col items-center overflow-y-auto">
      {/* <h1 className="text-5xl font-extrabold mb-8">DailyRumbles Stories</h1> */}

      {!selectedStory && (
        <div className="w-full max-w-6xl flex gap-6">
          {/* Left small stories */}
          <div className="flex flex-col gap-4 w-1/2">
            {leftStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="flex gap-3 cursor-pointer  bg-opacity-10 p-3 rounded-md hover:bg-opacity-20 transition"
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
              <a
                href="#"
                className="text-yellow-400 text-sm hover:underline"
              >
                Latest Articles
              </a>
              <a
                href="#"
                className="text-yellow-400 text-sm hover:underline"
              >
                Recent Articles
              </a>
              <a href="#" className="text-yellow-400 text-sm hover:underline">
                Follow Me
              </a>
              <a href="#" className="text-yellow-400 text-sm hover:underline">
                More
              </a>
            </div>
          </div>

          {/* Vertical line */}
          <div className="w-px bg-gray-600 my-2" />

          {/* Right larger stories */}
          <div className="flex flex-col gap-5 min-w-1/2">
            {rightStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="cursor-pointer flex flex-col  bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition"
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

      {/* Single Story View */}
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
          <div className="flex justify-between items-center text-sm mb-4">
            <span>👍 {selectedStory.likes} Likes</span>
            <span>💬 {selectedStory.comments} Comments</span>
            <span>↩ {selectedStory.replies} Replies</span>
          </div>
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
