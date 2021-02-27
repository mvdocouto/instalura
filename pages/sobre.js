import Header from "../src/components/Molecules/Header";
import Footer from "../src/components/Molecules/Footer";

export default function About() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
    
      <Header />
      <h1>Pagina Sobre</h1>
      <Footer />
    </div>
  );
}
