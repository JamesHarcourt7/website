import socials from "@/data/socials";
import { IconContext } from "react-icons";
import Image from "next/image";

function Index() {
  return (
    <div className="w-screen h-screen bg-radial-gradient grid place-content-center px-6 relative">
      <main className="bg-card backdrop-blur-md border border-stroke max-w-lg rounded-xl overflow-hidden relative z-10">
        <div className="w-full h-64 relative">
          <Image
            src="/image/james2.jpeg"
            alt="James Harcourt"
            fill
            className="object-cover"
            style={{
              filter: "sepia(1) hue-rotate(300deg) saturate(0.5) contrast(1.2)"
            }}
          />
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <h1>James Harcourt</h1>
            <h2>
              Co-Founder, Full Stack Engineer at <a href="https://aardvark.studio/" target="_blank">Aardvark Studio</a>.
            </h2>
            <h2>
              MEng Computer Science at University of Southampton.
            </h2>
          </div>
          <p>
            I&apos;m a keen web developer, great problem solver and collaborative team player. I&apos;ve been known
            to dabble in other areas of tech, such as game development, machine learning, and more. My passions
            include music, cooking and art.
          </p>
          <p className="font-medium">
            <a href="mailto:james@harcourt.dev">james@harcourt.dev</a>
          </p>
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