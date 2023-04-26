import React from 'react'
import AdBanner from '../homeComponents/AdBanner';


function DetailScreen() {  
  return (
    <section>
      <AdBanner />
      <div className="detailScreenContainer">
        <div className="detailCardContainer">
          <div className='detailRecipeCard'>
          <h2 className='detailH2'>Recipe</h2>
            <h4 className='deatailH4'>Prep Time: </h4>
            <h4 className='deatailH4'>Cook Time: </h4>
            <h4 className='deatailH4'>Serves: </h4>
            <br/>
            <h2 className='detailH2'>Ingredients</h2>
            <h4 className='deatailH4'>2 Eggs</h4>
          </div>
          <div className='instructionCard'>
            <h2 className='detailH2'>Instructions</h2>
            <h4 className='deatailH4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
