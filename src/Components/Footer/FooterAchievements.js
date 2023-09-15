import React from 'react';
import achievement from './achievements.png';

const FooterAchievements = () => {
  return (
    <div className="container mx-auto py-6 text-center">
      {/* Footer Row-2 */}
      <div>
        {/* Image to showcase achievements */}
        <img src={achievement} alt="Achievements" className="mx-auto w-full md:w-1/4" />
      </div>
    </div>
  );
};

export default FooterAchievements;
