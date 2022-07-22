import React from 'react';
import Haeder from '../components/Header/Header'
import MainMenuCategories from '../components/MainMenuCategories/MainMenuCategories';
import SubscripeForm from '../components/SubscripeForm/SubscripeForm';
const Home = () => {


   return (
      <div>
         <MainMenuCategories/>
         <SubscripeForm/>
      </div>
   );
};

export default Home;