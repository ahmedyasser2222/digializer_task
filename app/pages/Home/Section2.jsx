import ProductCard from "../../components/ProductCard";
import CycleTabsItem from "../../components/CycleTabsItem";
import HeadSection from "../../components/HeadSection";
import React from "react";
import Container from "../../components/Container";
import Cards from "./Cards";

const Section2 = () => {
  return (
    <div className="sec-2">
      <HeadSection text="FEATURED TOWNHOMES" />
      <CycleTabsItem
        items={[
          {
            id: 1,
            title: "Buy",
            content: <div></div>,
          },
          {
            id: 2,
            title: "Rent",
            content: <div></div>,
          },
        ]}
      />
      <Container>
          <Cards />
      </Container>
    </div>
  );
};

export default Section2;
