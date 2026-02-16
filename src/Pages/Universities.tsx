import { useState } from "react";
import { TopNavOne } from "../Components/TopNavOne";
import { TopNavTwo } from "../Components/TopNavTwo";
import { Footer } from "../Components/Footer";
import "../Styles/universities.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Universities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate()
  const privateUniversities = [
    {
      id: 1,
      name: "Acibadem University",
      logo: "/images/acibadem-university",
    },
    {
      id: 2,
      name: "Alanya University",
      logo: "/images/alanya-university",
    },
    {
      id: 3,
      name: "Altinbas University",
      logo: "/images/altinbas-university",
    },
    {
      id: 4,
      name: "Ankara Medipol University",
      logo: "/images/ankara-medipol-university",
    },
    {
      id: 5,
      name: "Antalya Bilim University",
      logo: "/images/antalya-bilim-university",
    },
    {
      id: 6,
      name: "Atilim University",
      logo: "/images/atilim-university",
    },
    {
      id: 7,
      name: "Bahçeşehir Cyprus University",
      logo: "/images/bahcesehir-cyprus-university",
    },
    {
      id: 8,
      name: "Bahçeşehir University – Istanbul",
      logo: "/images/bahcesehir-cyprus-university",
    },
    {
      id: 9,
      name: "Beykent University",
      logo: "/images/beykent-university",
    },
    {
      id: 10,
      name: "Beykoz University",
      logo: "/images/beykoz",
    },
    {
      id: 11,
      name: "Bezmiâlem Vakıf University",
      logo: "/images/bezmialem-vakif",
    },
    {
      id: 12,
      name: "Biruni University",
      logo: "/images/biruni",
    },
    {
      id: 13,
      name: "Cappadocia University",
      logo: "/images/cappadocia",
    },
    {
      id: 14,
      name: "Cyprus Aydin University",
      logo: "/images/cyprus-aydin",
    },
    {
      id: 15,
      name: "Doğuş University",
      logo: "/images/dogus",
    },
    {
      id: 16,
      name: "Fenerbahçe University",
      logo: "/images/fenerbahce",
    },
    {
      id: 17,
      name: "Haliç University",
      logo: "/images/halic",
    },
    {
      id: 18,
      name: "Higher Specialization University",
      logo: "/images/higher-specialization",
    },
    {
      id: 19,
      name: "Işık University",
      logo: "/images/isik",
    },
    {
      id: 20,
      name: "Istanbul Arel University",
      logo: "/images/istanbul-arel",
    },
    {
      id: 21,
      name: "Istanbul Atlas University",
      logo: "/images/istanbul-atlas",
    },
    {
      id: 22,
      name: "Istanbul Aydin University",
      logo: "/images/Istanbul-Aydin",
    },
    {
      id: 23,
      name: "Istanbul Bilgi University",
      logo: "/images/Istanbul-Bilgi",
    },
    {
      id: 24,
      name: "Istanbul Esenyurt University",
      logo: "/images/Istanbul-Esenyurt",
    },
    {
      id: 25,
      name: "Istanbul Galata University",
      logo: "/images/Istanbul-Galata",
    },
    {
      id: 26,
      name: "Istanbul Gedik University",
      logo: "/images/Istanbul-Gedik",
    },
    {
      id: 27,
      name: "Istanbul Gelişim University",
      logo: "/images/Istanbul-Gesilim",
    },
    {
      id: 28,
      name: "Istanbul Health and Tech University",
      logo: "/images/Istanbul-Health",
    },
    {
      id: 29,
      name: "Istanbul Kent University",
      logo: "/images/Istanbul-Kent",
    },
    {
      id: 30,
      name: "Istanbul Kültür University",
      logo: "/images/Istanbul-Kultur",
    },
    {
      id: 31,
      name: "Istanbul Medipol University",
      logo: "/images/Istanbul-Medipol",
    },
    {
      id: 32,
      name: "Istanbul Nişantaşı University",
      logo: "/images/Istanbul-Nisantasi",
    },
    {
      id: 33,
      name: "Istanbul Okan University",
      logo: "/images/Istanbul-Okan",
    },
    {
      id: 34,
      name: "Istanbul Sabahattin Zaim University",
      logo: "/images/Istanbul-Sabahattin",
    },
    {
      id: 35,
      name: "Istanbul Ticaret University",
      logo: "/images/Istanbul-Ticaret",
    },
    {
      id: 36,
      name: "Istanbul Topkapi University",
      logo: "/images/Istanbul-Topkapi",
    },
    {
      id: 37,
      name: "Istanbul Yeni Yüzyıl University",
      logo: "/images/Istanbul-Yeni",
    },
    {
      id: 38,
      name: "Istinye University",
      logo: "/images/Istinye",
    },
    {
      id: 39,
      name: "Kadir Has University",
      logo: "/images/Kadir-Has",
    },
    {
      id: 40,
      name: "Kavram Vocational School",
      logo: "/images/Kavram-Vocational",
    },
    {
      id: 41,
      name: "Lokman Hekim University",
      logo: "/images/Lokman-Hekim",
    },
    {
      id: 42,
      name: "Maltepe University",
      logo: "/images/Maltepe",
    },
    {
      id: 43,
      name: "OSTIM Technical University",
      logo: "/images/Ostim-Technical",
    },
    {
      id: 44,
      name: "Özyeğin University",
      logo: "/images/Ozyegin",
    },
    {
      id: 45,
      name: "Sabancı University",
      logo: "/images/Sabanci",
    },
    {
      id: 46,
      name: "TED University",
      logo: "/images/Ted.png",
    },
    {
      id: 47,
      name: "Tınaztepe University",
      logo: "/images/Tinaztepe",
    },
    {
      id: 48,
      name: "TOBB Economics and Technology University",
      logo: "/images/Tobb",
    },
    {
      id: 49,
      name: "Turkish Aeronautical Association University",
      logo: "/images/Turkish-Aeronautical",
    },
    {
      id: 50,
      name: "Üsküdar University",
      logo: "/images/Uskudar",
    },
    {
      id: 51,
      name: "Yaşar University",
      logo: "/images/Yasar",
    },
    {
      id: 52,
      name: "Yeditepe University",
      logo: "/images/Yeditepe",
    },
  ];

  // Public Universities
  const publicUniversities = [
    {
      id: 1,
      name: "Alanya Alaaddin Keykubat University",
      logo: "/images/Alanya-Alaaddin",
    },
    {
      id: 2,
      name: "Anadolu University",
      logo: "/images/Anadolu",
    },
    {
      id: 3,
      name: "Balikesir University",
      logo: "/images/Balikesir",
    },
    {
      id: 4,
      name: "Bolu Abant Izzet Baysal University",
      logo: "/images/Bolu-Abant",
    },
    {
      id: 5,
      name: "Çukurova University",
      logo: "/images/Cukurova",
    },
    {
      id: 6,
      name: "Erciyes University",
      logo: "/images/Erciyes",
    },
    {
      id: 7,
      name: "Erzincan Binali Yıldırım University",
      logo: "/images/Erzincan-Binali",
    },
    {
      id: 8,
      name: "Erzurum Technical University",
      logo: "/images/Erzurum-Technical",
    },
    {
      id: 9,
      name: "Gaziantep University",
      logo: "/images/Gaziantep",
    },
    {
      id: 10,
      name: "Hitit University",
      logo: "/images/Hitit",
    },
    {
      id: 11,
      name: "Izmir Democracy University",
      logo: "/images/Izmir-Democrazy",
    },
    {
      id: 12,
      name: "Karabük University",
      logo: "/images/Karabuk",
    },
    {
      id: 13,
      name: "Kastamonu University",
      logo: "/images/Kastamonu",
    },
    {
      id: 14,
      name: "Munzur University",
      logo: "/images/Munzur",
    },
    {
      id: 15,
      name: "Niğde Ömer Halisdemir University",
      logo: "/images/Nigde-Omer",
    },
    {
      id: 16,
      name: "Sakarya University of Applied Sciences",
      logo: "/images/Sakarya",
    },
    {
      id: 17,
      name: "Sivas Cumhuriyet University",
      logo: "/images/Sivas",
    },
    {
      id: 18,
      name: "Trakya University",
      logo: "/images/Trakya",
    },
    {
      id: 19,
      name: "Yalova University",
      logo: "/images/Yalova",
    },
    {
      id: 20,
      name: "Yozgat Bozok University",
      logo: "/images/Yozgat",
    },
  ];

  const allUniversities = [...privateUniversities, ...publicUniversities];
  const normalize = (str) =>
    str
      .normalize("NFD") // decompose accents
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .toLowerCase()
      .trim();

  const filteredUniversities = allUniversities
    .filter((uni) => normalize(uni.name).includes(normalize(searchTerm)))
    .sort((a, b) => {
      const term = normalize(searchTerm);
      const nameA = normalize(a.name);
      const nameB = normalize(b.name);

      // Highest priority if starts with the search term
      if (nameA.startsWith(term) && !nameB.startsWith(term)) return -1;
      if (!nameA.startsWith(term) && nameB.startsWith(term)) return 1;

      // Secondary: alphabetically
      return nameA.localeCompare(nameB);
    });

  return (
    <>
      <div className="main-container">
        <TopNavOne />
        <TopNavTwo />
        <div className="contents-container">
          {/* Search bar */}
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="search Universies"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
              />
              <FaSearch className="icon" />
            </div>

            {showResults && searchTerm && (
              <div className="search-results">
                {filteredUniversities.length > 0 ? (
                  filteredUniversities.map((uni) => (
                    <Link
                      to={`/University/${uni.name}`}
                      key={uni.id}
                      className="search-result-item"
                      onClick={() => {
                        setSearchTerm(uni.name);
                        setShowResults(false);
                        
                      }}
                    >
                      <img src={uni.logo} alt={uni.name} />
                      <span>{uni.name}</span>
                    </Link>
                  ))
                ) : (
                  <div className="no-results">No universities found</div>
                )}
              </div>
            )}
          </div>

          {/* Private Universities */}
          <h1>Public Universities</h1>
          <div className="card-container">
            <div className="card-wrapper">
              {privateUniversities.map((uni) => (
                <div onClick={() => navigate(`/University/${uni.name}`)} className="card" key={uni.id}>
                  <img src={uni.logo} alt={uni.name} />
                  <h3>{uni.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Public Universities */}
          <h1>Public Universities</h1>
          <div className="card-container">
            <div className="card-wrapper">
              {publicUniversities.map((uni) => (
                <div onClick={() => navigate(`/University/${uni.name}`)} className="card" key={uni.id}>
                  <img src={uni.logo} alt={uni.name} />
                  <h3>{uni.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
