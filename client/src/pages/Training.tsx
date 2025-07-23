import {
  FaSeedling,
  FaTree,
  FaBug,
  FaHandHoldingWater,
  FaLeaf,
  FaCoffee,
  FaWarehouse,
  FaFire,
  FaMugHot,
} from "react-icons/fa";
import { GiCoffeeBeans, GiFarmTractor } from "react-icons/gi";

const icons = [
  <GiFarmTractor />,
  <FaSeedling />,
  <FaTree />,
  <FaBug />,
  <FaHandHoldingWater />,
  <FaLeaf />,
  <GiCoffeeBeans />,
  <FaWarehouse />,
  <FaFire />,
  <FaMugHot />,
  <FaCoffee />,
];

const Training = () => {
  const sections = [
    {
      title: "1. Site Selection & Land Preparation",
      content: `Choose a high-altitude area with well-drained, fertile volcanic soil. Clear bushes, remove weeds, and prepare raised beds or terraces if on slopes.`,
    },
    {
      title: "2. Planting Coffee",
      content: `Use healthy seedlings. Plant during the rainy season. Space them 5ft x 5ft for good air circulation. Add compost and mulch for moisture retention.`,
    },
    {
      title: "3. Coffee Tree Care",
      content: `Regularly weed and prune. Shade management helps control temperature. Apply organic or NPK fertilizers as needed.`,
    },
    {
      title: "4. Pest & Disease Control",
      content: `Scout regularly for coffee berry disease, leaf rust, or stem borers. Use integrated pest management (IPM): neem sprays, proper hygiene, and pruning.`,
    },
    {
      title: "5. Flowering & Cherry Development",
      content: `After proper rains and care, coffee trees flower. Cherries develop over ~9 months. Uniform irrigation and nutrients help even ripening.`,
    },
    {
      title: "6. Harvesting",
      content: `Handpick only ripe red cherries. Avoid unripe (green) or overripe (black) cherries. Sorting begins at the farm to ensure quality.`,
    },
    {
      title: "7. Processing",
      content: `Two main methods:\n- *Wet/Washed*: De-pulp, ferment, wash, then dry.\n- *Dry/Natural*: Sun-dry whole cherries.\nAfter drying to ~11% moisture, beans are hulled.`,
    },
    {
      title: "8. Grading & Storage",
      content: `Beans are sorted by size, weight, and defect count. Store in cool, dry, pest-free rooms in sisal or jute bags to maintain quality.`,
    },
    {
      title: "9. Roasting",
      content: `Green beans are roasted at 180°C to 240°C. Roasting brings out the aroma, flavor, and color of coffee. Levels: Light, Medium, or Dark.`,
    },
    {
      title: "10. Grinding & Brewing",
      content: `Grind roasted beans just before brewing. Grind size varies by method:\n- Coarse: French press\n- Medium: Drip coffee\n- Fine: Espresso\nUse clean water, and maintain brew temperatures (90–96°C).`,
    },
    {
      title: "11. Enjoying the Coffee ☕",
      content: `Enjoy your fresh coffee black or with milk/sugar. Appreciate the journey from seed to cup — a farmer's art in every sip.`,
    },
  ];

  return (
    <div
      className="bg-cover bg-center min-h-screen py-10 px-6"
      style={{
        backgroundImage: "url('/in-the-farm.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10 bg-white/70 p-4 rounded-xl w-fit mx-auto">
        Coffee Training: From Farm to Cup
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-emerald-200 hover:border-emerald-400 transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4 text-emerald-700 text-3xl">
              <span>{icons[index]}</span>
              <h2 className="text-xl font-semibold text-teal-700">{section.title}</h2>
            </div>
            <p className="text-[#3b2f2f] text-sm whitespace-pre-line leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
