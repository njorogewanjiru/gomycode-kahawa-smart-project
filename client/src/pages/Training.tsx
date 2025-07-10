
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
      content: `Two main methods:
- *Wet/Washed*: De-pulp, ferment, wash, then dry.
- *Dry/Natural*: Sun-dry whole cherries.
After drying to ~11% moisture, beans are hulled.`,
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
      content: `Grind roasted beans just before brewing. Grind size varies by method:
- Coarse: French press
- Medium: Drip coffee
- Fine: Espresso
Use clean water, and maintain brew temperatures (90–96°C).`,
    },
    {
      title: "11. Enjoying the Coffee ☕",
      content: `Enjoy your fresh coffee black or with milk/sugar. Appreciate the journey from seed to cup — a farmer's art in every sip.`,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fdfaf6] to-[#e2dbd2] min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-[#2e1f1b] mb-6 text-center">
        Coffee Training: From Farm to Cup
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#eadcd0] rounded-2xl shadow-md p-6 text-[#2e1f1b]"
          >
            <h2 className="text-2xl font-semibold text-[#915b3c] mb-2">
              {section.title}
            </h2>
            <p className="text-base leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
