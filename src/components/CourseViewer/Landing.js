import React from 'react';

const Listing = props => {
  return (
    <div className="row">
      <div className="col">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          arcu sed purus finibus viverra. Pellentesque condimentum interdum
          elit, ac luctus est malesuada sed. Nullam cursus, lectus a molestie
          interdum, felis tortor convallis massa, ac lacinia lorem massa vitae
          lorem. Integer viverra malesuada purus ac consequat. Cras eu ornare
          sem, ut posuere mi. Pellentesque molestie, sem quis eleifend
          ullamcorper, risus enim ullamcorper eros, id dignissim augue nunc ut
          quam. Donec vel arcu condimentum, luctus ligula at, dictum erat.
        </p>
      </div>
      <div className="col">
        <img src="https://www.fillmurray.com/460/300" />
      </div>
    </div>
  );
};

export default Listing;
