import CategorySelect from "@/components/storefront/CategorySelect";
import Hero from "@/components/storefront/Hero";
import React from "react";

type Props = {};

const HomePage: React.FC<Props> = ({}) => {
  return (
    <div>
      <Hero />
      <CategorySelect />
    </div>
  );
};

export default HomePage;
