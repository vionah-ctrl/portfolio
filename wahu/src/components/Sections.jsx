import React from "react";
import bg from "../assets/contact/contact-bg.jpeg";

const Sections = () => {
  return (
    <section
      className="relative py-14"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">
        {/* Heading with lines (same as Portfolio) */}

       <div className="bg-[#efe7db] border-y border-[#d2c4ad] py-4 mb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-2">     
            <div className="flex-1 h-px bg-[#c9a66b]"></div>
            <h2 className="text-3xl font-serif text-[#2b2b2b] px-6 text-center">
              Contact Me
            </h2>
            <div className="flex-1 h-px bg-[#c9a66b]"></div>
            </div>
            <p className="text-center text-sm text-[#4a4a4a]">
              Let’s work together, Feel free to contact me!
            </p>
        </div>
      </div>


        {/* Form */}
        <div className="max-w-6xl mx-auto px-6">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Shared input style */}
            {/** Height = 42px everywhere **/}

            <input
              type="text"
              placeholder="Name"
              className="h-[42px] bg-[#1b1b1b] text-gray-200 text-sm placeholder-gray-400 px-3 border border-black rounded-[6px] focus:outline-none focus:border-[#c9a76a]"
            />

            <input
              type="email"
              placeholder="Email"
              className="h-[42px] bg-[#1b1b1b] text-gray-200 text-sm placeholder-gray-400 px-3 border border-black rounded-[6px] focus:outline-none focus:border-[#c9a76a]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="h-[42px] bg-[#1b1b1b] text-gray-200 text-sm placeholder-gray-400 px-3 border border-black rounded-[6px] focus:outline-none focus:border-[#c9a76a]"
            />

            {/* Message Left */}
            <textarea
              placeholder="Message"
              className="h-[42px] resize-none bg-[#1b1b1b] text-gray-200 text-sm placeholder-gray-400 px-3 border border-[#c9a76a] rounded-[6px] focus:outline-none"
            />

            {/* Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="h-[42px] bg-gradient-to-b from-[#ecd7ab] to-[#b89255] text-[#2b2b2b] font-serif text-sm px-8 rounded-[6px] shadow-md hover:brightness-110 transition"
              >
                Send Message
              </button>
            </div>

            {/* Message Right */}
            <textarea
              placeholder="Message"
              className="h-[42px] resize-none bg-[#1b1b1b] text-gray-200 text-sm placeholder-gray-400 px-3 border border-black rounded-[6px] focus:outline-none focus:border-[#c9a76a]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sections;
