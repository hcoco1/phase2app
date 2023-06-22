import React from "react";
import CarouselHome from "./CarouselHome";
import FooterHome from "./FooterHome";

function Home() {
  return (
    <div>
      <hr className="style1" />
                  <h2 className='filterFormh2'>Let’s find a home that’s perfect for you</h2>
      <hr className="style1" />
       <CarouselHome/>
       <FooterHome/>
    </div>

    
  );
}

export default Home;