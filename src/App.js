
//import NewPersonage from "./Personazh/NewPersonage";
//import React from 'react';


//const App = () => {
    //return (
       // <div>
         //   <NewPersonage id={72} name ={'Cool Rick'} gender = {"Male"} species = {'Human'} image ={'https://rickandmortyapi.com/api/character/avatar/72.jpeg'}/>
          //  <NewPersonage id = {219}name ={'Mechanical Summer'} gender = {"Female"} species = {'Robot'} image ={'https://rickandmortyapi.com/api/character/avatar/219.jpeg'}/>
          //  <NewPersonage id = {373}name ={'Unmuscular Michael'} gender = {"Male"} species = {'Human'} image ={'https://rickandmortyapi.com/api/character/avatar/373.jpeg'}/>
          //  <NewPersonage id = {544}name ={'Miles Knightly'} gender = {"Male"} species = {'Alien'} image ={'https://rickandmortyapi.com/api/character/avatar/544.jpeg'}/>
          //  <NewPersonage id = {577}name ={'Snake Terminator'} gender = {"Male"} species = {'Robot'} image ={'https://rickandmortyapi.com/api/character/avatar/577.jpeg'}/>
           // <NewPersonage id = {676}name ={'Japheths Middle Son'} gender = {"Male"} species = {'Humanoid'} image ={'https://rickandmortyapi.com/api/character/avatar/676.jpeg'}/>
       // </div>
   // );
//};

//export default App;

import React from 'react';

import Simpson from "./Simpsons/Sipson";


const App = () => {
    return (
        <div>
            <Simpson name={'Bart'} age={10} photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
            <Simpson name={'Homer'} age={40,} photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpson name={'Marge'} age={38} photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpson name={'Lisa'} age={9} photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
            <Simpson name={'Maggie'} age={1} photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
};

export default App;






