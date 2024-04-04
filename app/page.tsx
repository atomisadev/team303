import Hero from "../components/hero";
import Mission from "../components/mission";
import Bot from "../components/bot";

export default async function Home() {
  return (
      <main className=" bg-[url('/content/test.svg')] bg-no-repeat">
          <Hero />
          <Mission />
          <Bot />
      </main>
  );
}