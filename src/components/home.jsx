import React from 'react';
import PageHeader from "./common/pageHeader";
// import Card from "./card";
// import { useCardsFilterContext } from "../contexts/filter.context";

const Home = ({headTitle}) => {

  // const { filteredCards } = useCardsFilterContext();

  return (
    <>
    <PageHeader
      title={headTitle}
      description="Here you can find business cards from all categories"
      />
      <div className="row">
        {/* {!filteredCards.length ? ( */}
          <p>no cards found...</p>
        {/* ) : ( */}
          {/* filteredCards.map((card) => <div className=" col-12 col-sm-6 col-lg-4 mx-auto mb-2 p-sm-1" key={card._id}><Card card={card} /></div> ) */}
        {/* )} */}
        <div className='text-bg-success fs-1'>test</div>
        <div className='text-bg-danger fs-1'>test</div>
        <div className='text-bg-secondary fs-1'>test</div>
      </div>
      </>
  );
};

export default Home;
