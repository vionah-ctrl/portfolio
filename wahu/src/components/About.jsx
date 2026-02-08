import camera from "../assets/icons/camera.svg";
import clients from "../assets/icons/clients.svg";
import travel from "../assets/icons/travel.svg";
import award from "../assets/icons/award.svg";
import aboutImg from "../assets/about.jpeg";

const stats = [
  { icon: camera, value: "1000+", label: "Photos Taken" },
  { icon: clients, value: "300+", label: "Satisfied Clients" },
  { icon: travel, value: "20+", label: "Countries Visited" },
  { icon: award, value: "100+", label: "Awards Won" },
];

const About = () => {
  return (
    <section className="bg-[#efe9df] py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading with lines */}
        <div className="flex items-center justify-center mb-14">
          <div className="flex-1 h-px bg-gray-400"></div>
          <h2 className="text-4xl font-serif tracking-wide text-center px-6">
            About Me
          </h2>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="flex items-center">
            <img
              src={aboutImg}
              alt="Photographer"
              className="max-h-[420px] w-full object-cover rounded-md shadow-md"
            />
          </div>

          {/* Text + Stats */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              A versatile, detail-oriented visual storyteller with a passion
              for capturing authentic moments. I specialize in nature, travel,
              and portrait photography, blending natural light with timeless
              composition.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              Over the years, I’ve collaborated with clients worldwide,
              delivering visuals that connect brands with people and tell
              meaningful stories through the lens.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((item, index) => (
                <div key={index} className="text-center">
                  {/* Big circle containing icon + value + label */}
                  <div className="w-28 h-28 mx-auto mb-3 bg-[#efe9df] rounded-full flex flex-col items-center justify-center shadow-md transition-transform hover:scale-105 p-3">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-6 h-6 opacity-90 mb-1"
                    />
                    <h3 className="text-sm font-semibold text-grey-700">{item.value}</h3>
                    <p className="text-xs text-grey-700">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
