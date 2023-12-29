import React from "react";

function Likes({ LikedNumbers })  {
    return (
        <div>
            <h2> Likes:</h2>
            {Object.keys(LikedNumbers).map((key) => (
                <p key={key}>
                 {key}: {LikedNumbers[key]} likes
                </p>
         ))}
        </div>
    );
  }
    
    export default Likes;
