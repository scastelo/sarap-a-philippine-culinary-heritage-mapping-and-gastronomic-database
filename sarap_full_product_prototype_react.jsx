export default function SarapPrototype() {
  const dishes = [
    {
      name: "Laing",
      region: "Bicol",
      flavor: "Coconut • Spicy • Earthy",
      story: "Ancient taro-and-coconut traditions shaped by volcanic agriculture.",
    },
    {
      name: "Tiyula Itum",
      region: "Sulu",
      flavor: "Smoky • Deep Umami • Ritual",
      story: "A Tausug celebratory stew built around burnt coconut traditions.",
    },
    {
      name: "Pancit Habhab",
      region: "Quezon",
      flavor: "Vinegar • Savory • Street Food",
      story: "Lucban noodle traditions connected to local coconut vinegar economies.",
    },
  ];

  const routes = [
    {
      title: "Turmeric & Coconut Corridor",
      days: "7 Days",
      regions: "Bicol → Basilan → Lanao",
    },
    {
      title: "Smoke & Sea Route",
      days: "5 Days",
      regions: "Cebu → Samar → Zamboanga",
    },
    {
      title: "Highland Preservation Trail",
      days: "8 Days",
      regions: "Benguet → Ifugao → Kalinga",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#1c140d] font-sans">
      <header className="border-b border-[#d8cdb8] bg-[#f2eadb]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif tracking-tight text-[#7c2613]">
              Sarap!
            </h1>
            <p className="text-sm uppercase tracking-[0.25em] text-[#6e5c49] mt-1">
              Philippine Culinary Heritage Mapping & Gastronomic Database
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-[#5f4b3c]">
            <a href="#atlas" className="hover:text-[#7c2613] transition">
              Atlas
            </a>
            <a href="#flavors" className="hover:text-[#7c2613] transition">
              Flavor Graph
            </a>
            <a href="#routes" className="hover:text-[#7c2613] transition">
              Routes
            </a>
            <a href="#communities" className="hover:text-[#7c2613] transition">
              Communities
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfbea2] px-4 py-2 text-sm text-[#6b563f] bg-[#fff9ef]">
            Culinary Geography Intelligence System
          </div>

          <h2 className="mt-8 text-6xl leading-[1.05] font-serif tracking-tight text-[#24170f]">
            Discover the Philippines through flavor geography.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#5e4b3a] max-w-xl">
            Sarap! maps dishes, ingredients, agricultural ecosystems, and
            culinary traditions into a living cultural atlas — transforming
            gastronomy into tourism infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-2xl bg-[#8d331a] text-white shadow-lg hover:scale-[1.02] transition">
              Explore Culinary Atlas
            </button>

            <button className="px-6 py-3 rounded-2xl border border-[#b8a487] bg-[#fffaf0] text-[#5d4835] hover:bg-[#f5e8d2] transition">
              Build Flavor Route
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            <div>
              <div className="text-3xl font-serif text-[#8d331a]">320+</div>
              <div className="text-sm text-[#6e5d4c] mt-1">Regional Dishes</div>
            </div>

            <div>
              <div className="text-3xl font-serif text-[#8d331a]">87</div>
              <div className="text-sm text-[#6e5d4c] mt-1">Heritage Ingredients</div>
            </div>

            <div>
              <div className="text-3xl font-serif text-[#8d331a]">42</div>
              <div className="text-sm text-[#6e5d4c] mt-1">Communities Mapped</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#d79f3f]/10 blur-3xl rounded-full" />

          <div className="relative bg-[#fffdf8] border border-[#d9ccb7] rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-[#ece2d0] flex items-center justify-between bg-[#faf3e5]">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-[#8d331a]">
                  Culinary Atlas
                </div>
                <div className="text-2xl font-serif mt-2">
                  Bicol Flavor Cluster
                </div>
              </div>

              <div className="text-xs text-[#7d6a58] text-right">
                Coconut-heavy maritime cuisine
              </div>
            </div>

            <div className="aspect-[4/3] bg-gradient-to-br from-[#365c3e] via-[#5d7b4f] to-[#c57b33] p-6 flex items-end">
              <div className="bg-white/90 backdrop-blur rounded-2xl p-5 w-full shadow-xl">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#8d331a]">
                      Flavor DNA
                    </div>
                    <h3 className="text-3xl font-serif mt-2">
                      Laing
                    </h3>
                    <p className="mt-3 text-[#5f4f40] leading-7">
                      Coconut-forward volcanic cuisine shaped by pre-colonial
                      spice routes.
                    </p>
                  </div>

                  <div className="rounded-full bg-[#f6e6cb] px-4 py-2 text-sm text-[#8d331a] whitespace-nowrap">
                    94% Match
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Coconut",
                    "Spicy",
                    "Volcanic Agriculture",
                    "Malay Influence",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#f7efe1] text-sm text-[#6b5845] border border-[#eadcc5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="atlas"
        className="border-y border-[#ded1bc] bg-[#fbf7ef]"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="uppercase tracking-[0.25em] text-sm text-[#8d331a]">
                Culinary Heritage Database
              </div>
              <h3 className="text-5xl font-serif mt-4">
                Living Dish Intelligence
              </h3>
            </div>

            <p className="max-w-xl text-[#655341] leading-8">
              Each dish is treated as a cultural system: connected to
              agriculture, migration, ritual traditions, and community memory.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              <div
                key={dish.name}
                className="bg-[#fffdf8] border border-[#ddd1bc] rounded-[1.75rem] overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="h-56 bg-gradient-to-br from-[#2f573c] via-[#8d331a] to-[#d3a043]" />

                <div className="p-7">
                  <div className="uppercase tracking-[0.2em] text-xs text-[#8d331a]">
                    {dish.region}
                  </div>

                  <h4 className="text-3xl font-serif mt-3">{dish.name}</h4>

                  <div className="mt-4 text-sm text-[#8a745f]">
                    {dish.flavor}
                  </div>

                  <p className="mt-5 text-[#5f4d3d] leading-7">
                    {dish.story}
                  </p>

                  <button className="mt-7 text-[#8d331a] text-sm uppercase tracking-[0.15em]">
                    Open Cultural Dossier →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flavors" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[0.25em] text-sm text-[#8d331a]">
              Recommendation Engine
            </div>

            <h3 className="text-5xl font-serif mt-5 leading-tight">
              Culinary matching based on flavor lineages.
            </h3>

            <p className="mt-8 text-lg leading-8 text-[#5f4e3d]">
              Instead of recommending restaurants, Sarap! recommends connected
              culinary cultures across the archipelago.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Coconut-rich maritime cuisines",
                "Fermented seafood corridors",
                "Woodfire and smoke traditions",
                "Turmeric-spice migration networks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-[#fffdf7] border border-[#e3d6c0] rounded-2xl px-5 py-4"
                >
                  <div className="w-3 h-3 rounded-full bg-[#c37d22]" />
                  <span className="text-[#5d4b3a]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#201610] text-[#f7f0e2] rounded-[2rem] p-8 shadow-2xl border border-[#463326]">
            <div className="text-sm uppercase tracking-[0.25em] text-[#c8943c]">
              Flavor Match Output
            </div>

            <div className="mt-6 text-4xl font-serif leading-tight">
              You appear to prefer coconut-forward maritime cuisines.
            </div>

            <div className="mt-8 grid gap-5">
              {[
                ["Bicol", "Laing • Kinunot • Bicol Express"],
                ["Sulu", "Tiyula Itum • Curacha Alavar"],
                ["Lanao", "Piaparan • Palapa traditions"],
              ].map(([region, dishes]) => (
                <div
                  key={region}
                  className="bg-[#2a1e17] border border-[#4d3a2e] rounded-2xl p-5"
                >
                  <div className="text-[#d9a34b] uppercase tracking-[0.2em] text-xs">
                    {region}
                  </div>
                  <div className="mt-3 text-lg text-[#f5ecdf]">{dishes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="routes"
        className="bg-[#211811] text-[#f6eee2] py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
            <div>
              <div className="uppercase tracking-[0.25em] text-sm text-[#d39a3d]">
                Gastronomic Tourism Infrastructure
              </div>
              <h3 className="text-5xl font-serif mt-5 leading-tight max-w-2xl">
                Build journeys around culinary geography.
              </h3>
            </div>

            <p className="max-w-xl text-[#cbbca8] leading-8">
              Sarap! transforms food tourism into a distributed economic system
              that directly benefits farmers, foragers, cooks, and heritage
              communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {routes.map((route) => (
              <div
                key={route.title}
                className="bg-[#2a1e17] border border-[#4a372d] rounded-[1.75rem] p-8 hover:-translate-y-1 transition"
              >
                <div className="text-[#d39a3d] uppercase tracking-[0.2em] text-xs">
                  {route.days}
                </div>

                <h4 className="mt-5 text-3xl font-serif leading-tight">
                  {route.title}
                </h4>

                <div className="mt-6 text-[#d5c8b6] leading-7">
                  {route.regions}
                </div>

                <div className="mt-10 border-t border-[#4a372d] pt-5 text-sm text-[#a99784]">
                  Includes heritage kitchens, indigenous ingredient trails,
                  seasonal food markets, and traditional cooking communities.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="communities" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[0.25em] text-sm text-[#8d331a]">
              Economic Preservation Layer
            </div>

            <h3 className="text-5xl font-serif mt-5 leading-tight">
              Culinary tourism that sustains agricultural heritage.
            </h3>

            <p className="mt-8 text-lg leading-8 text-[#5e4d3b]">
              Every itinerary generates visibility and demand for local
              producers — creating economic feedback loops between heritage
              preservation and tourism.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              "Native garlic growers in Ilocos",
              "Sakurab farmers supporting Maranao cuisine",
              "Coconut vinegar makers in Quezon",
              "Traditional bagoong producers in Pangasinan",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#fffdf8] border border-[#dfd2bc] rounded-2xl px-6 py-5 flex items-center justify-between"
              >
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-[#8d331a]">
                    Heritage Producer
                  </div>
                  <div className="mt-2 text-xl font-serif">{item}</div>
                </div>

                <div className="text-3xl">🌾</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d8ccb7] bg-[#f5eee0]">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="text-4xl font-serif text-[#7c2613]">Sarap!</div>
            <div className="mt-3 text-[#6f5d4c] max-w-md leading-7">
              A speculative cultural infrastructure project for mapping
              Philippine culinary heritage, flavor systems, and gastronomic
              tourism.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm text-[#5e4b3b]">
            <div>
              <div className="uppercase tracking-[0.2em] text-[#8d331a] mb-4">
                Platform
              </div>
              <div className="space-y-2">
                <div>Culinary Atlas</div>
                <div>Flavor Graph</div>
                <div>Regional Routes</div>
                <div>Producer Mapping</div>
              </div>
            </div>

            <div>
              <div className="uppercase tracking-[0.2em] text-[#8d331a] mb-4">
                Focus Areas
              </div>
              <div className="space-y-2">
                <div>Cultural Preservation</div>
                <div>Tourism Intelligence</div>
                <div>Rural Economies</div>
                <div>Flavor Anthropology</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
