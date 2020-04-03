import React, { useState } from 'react';

import './UserAgreement.scss';

function UserAgreement() {
  const returningUser = localStorage.getItem('returningUser');
  const [isNewUser, setIsNewUser] = useState(!returningUser);

  const confirm = () => {
    localStorage.setItem('returningUser', true);

    setIsNewUser(false);
  };
  return (
    <>
      {isNewUser && (
        <div className='user_agreement'>
          <div className='agreement_description'>
            This web app uses local storage to save your input for future
            sessions.
          </div>
          <button className='confirmation_button' onClick={confirm}>
            OK
          </button>
        </div>
      )}
    </>
  );
}

export default UserAgreement;
