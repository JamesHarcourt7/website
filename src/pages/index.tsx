import socials from "@/data/socials";
import { IconContext } from "react-icons";
import Image from "next/image";

function Index() {
  return (
    <div className="w-screen h-screen bg-radial-gradient grid place-content-center px-6 relative">
      <main className="bg-card backdrop-blur-md border border-stroke max-w-lg rounded-xl overflow-hidden relative z-10">
        <div className="w-full h-64 relative">
          <Image
            src="/image/james.JPG"
            alt="James Harcourt"
            fill
            className="object-cover"
            style={{
              filter: "sepia(1) hue-rotate(160deg) saturate(0.5) contrast(1.2)"
            }}
          />
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <h1>James Harcourt</h1>
            <h2>
              Co-Founder, Business Development at <a href="https://novatura.co/" target="_blank">Novatura</a>.
            </h2>
            <h2>
              1st Class Honours BSc Computer Science <br/>University of Southampton
            </h2>
          </div>
          <p>
            As a Co-Founder at Novatura, I've helped deliver over 30 software projects for several business clients; from early stage ventures to nationwide scale-ups. Novatura started as a University of Southampton spin-out, and is now an award-winning software development agency.
          </p>
          <p>
            I've demonstrated successful collaboration while working on scalable software solutions for growing businesses. I am proficient in exploring digital strategies, managing software projects, and creating substantial return on investment for clients.
          </p>
          <div  className="font-medium">
            <p>
              <a href="mailto:james@novatura.co">james@novatura.co</a>
            </p>
          </div>
          <div className="flex gap-4">
            <IconContext.Provider value={{size: "24"}}>
              {socials.map(({ name, url, icon: Icon }, index) => (
                <a href={url} target="_blank" key={index} className="text-light/70 hover:text-light">
                  <span className="sr-only">{name}</span>
                  <Icon />
                </a>
              ))}
            </IconContext.Provider>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;