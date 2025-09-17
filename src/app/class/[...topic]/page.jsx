import React from "react";

const CatchAllPage = async({ params }) => {
    const {topic} = await params;

  return (
    <div>
      <h1>This is Catch all segment stuff topic:{topic} </h1>
    </div>
  );
};

export default CatchAllPage;
