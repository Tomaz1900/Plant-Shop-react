import Header from "./components/Header";
import TopBaner from "./components/TopBaner";
import Hero from "./components/Hero";
import Title from "./components/Title";

export default function App() {
  return (
    <>
      <TopBaner />
      <Header />
      <Hero />
      <Title text1={"Shop"} text2={"By categorry"} showLink={false} />
    </>
  );
}
