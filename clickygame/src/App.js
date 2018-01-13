import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

// Advanced .map(loop) method

// const App = () => (
//   const cards = 
//   friends.map(function(friend) {
//       return
//       <FriendCard
//       name={friend.name}
//       image={friend.image}
//       occupation={friend.occupation}
//       location={friend.location}
//       />;
//     });
  
//   return 
//   <Wrapper>
//     <Title>Friends List</Title>
//     {cards} 
//   </Wrapper>
// );


const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard
      name={friends[0].name}
      image={friends[0].image}
      occupation={friends[0].occupation}
      location={friends[0].location}
    />
    <FriendCard
      name={friends[1].name}
      image={friends[1].image}
      occupation={friends[1].occupation}
      location={friends[1].location}
    />
    <FriendCard
      name={friends[2].name}
      image={friends[2].image}
      occupation={friends[2].occupation}
      location={friends[2].location}
    />
  </Wrapper>
);

export default App;