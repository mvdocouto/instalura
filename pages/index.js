import React from "react";
import Header from "../src/components/Molecules/Header";
import Footer from "../src/components/Molecules/Footer";

export default function Home() {
  return (
    <div
     style ={{
       flex: '1',
       display: 'flex',
       flexWrap: 'wrap',
       flexDirection: 'column',
       justifyContent: 'space-between'
     }}
    >
      <Header />
      <Footer/>
    </div>
  );
}
