import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const robotPath = "/models/robot.glb";

const articles = [
  {
    id: 1,
    title: "AI in Daily Life",
    image:
      "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/680361bf57aa3f001dbdeb8b.jpg",
    link: "#",
    snippet: "Discover how AI is shaping everyday routines in 2025.",
    date: "Nov 29, 2025",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "Top 10 Lifestyle Tips",
    image: "https://s20427.pcdn.co/wp-content/uploads/2018/04/mood-boost.jpg",
    link: "#",
    snippet: "Simple habits that can drastically improve your life.",
    date: "Nov 28, 2025",
    author: "John Smith",
  },
  {
    id: 3,
    title: "Business Trends to Watch",
    image:
      "https://bernardmarr.com/wp-content/uploads/2022/10/The-5-Biggest-Business-Trends-In-2023-Everyone-Must-Get-Ready-For-Now.jpg",
    link: "#",
    snippet: "The latest trends that every entrepreneur should know.",
    date: "Nov 27, 2025",
    author: "Alice Lee",
  },
];

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const articleRefs = useRef([]);
  const mountRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(heroRef.current, { y: 20, duration: 1 });
    tl.from(titleRef.current, { y: 20, duration: 1 }, "-=0.5");
    tl.from(subtitleRef.current, { y: 15, duration: 0.8 }, "-=0.7");
    tl.from(
      articleRefs.current,
      { y: 20, stagger: 0.15, duration: 0.7 },
      "-=0.6"
    );
  }, []);

  
  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    
    let model;
    const loader = new GLTFLoader();
    loader.load(
      robotPath,
      (gltf) => {
        model = gltf.scene;
        model.scale.set(2, 2, 2);
        model.position.y = -0.5;
        scene.add(model);
      },
      undefined,
      (err) => console.error(err)
    );

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (model) {
        model.rotation.y += 0.003; 
        model.position.y = Math.sin(t) * 0.1; 
        model.position.x = Math.sin(t / 2) * 0.05; 
      }
      renderer.render(scene, camera);
    };
    animate();

    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      
      <div
        ref={mountRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      
      <nav className="relative z-10 w-full flex items-center justify-between max-w-6xl mx-auto py-6 px-6">
        <div className="text-2xl font-extrabold flex items-center gap-1">
          <span className="text-yellow-400">Daily</span>
          <span className="text-yellow-700">Rumbles</span>
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          {["Home", "Articles", "Categories", "About"].map((link) => (
            <a key={link} href="#" className="hover:text-white transition">
              {link}
            </a>
          ))}
        </div>

        <button className="text-sm px-4 py-2 rounded-md border border-gray-600 hover:border-white hover:text-white transition">
          Login
        </button>
      </nav>

      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start h-full px-6">
      
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          {articles.map((article, i) => (
            <div
              key={article.id}
              ref={(el) => (articleRefs.current[i] = el)}
              className="relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg rotate-[-3deg] font-bold text-xs shadow-md">
                {article.date}
              </div>

              <a
                href={article.link}
                className="flex gap-3 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-shadow shadow-md"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <h4 className="text-yellow-400 font-semibold hover:text-yellow-200 transition">
                    {article.title}
                  </h4>
                  <p className="text-gray-300 text-sm line-clamp-2 mt-1">
                    {article.snippet}
                  </p>
                </div>
              </a>

              <div className="mt-2 text-gray-400 text-xs text-center">
                By {article.author}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-center md:pl-12 text-center md:text-left">
          <h2
            ref={titleRef}
            className="text-6xl font-extrabold tracking-tight drop-shadow-lg"
          >
            Explore Stories That Inspire
          </h2>
          <p
            ref={subtitleRef}
            className="mt-4 text-lg text-gray-300 max-w-2xl"
          >
            Daily insights, articles, and deep dives into topics that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
