import React, { useState } from 'react';
import Header from './component/header/Header';
import Button from './component/button/Button';
import Card from './component/card/Card';

const App = () => {
  const [seeMore,setSeeMore] = useState(false);
  const handleSeeMore = () => setSeeMore(true);

  return (
    <>
        <Header></Header>
        <Card seeMore={seeMore}></Card>
      {
        seeMore ? "": <span onClick={handleSeeMore}> <Button>See More</Button> </span>
      }
    </>
  );
};

export default App;