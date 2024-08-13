import React from 'react';
import toast from 'react-hot-toast';

const Logout = ({ onClick }) => {
  const handleLogout = () => {
    localStorage.removeItem('Users'); 
    toast.success('Successfully logged out!');
    if (onClick) {
      onClick();
    }
  };
  return (
    <div>
      <button
        className='px-3 py-2 badge-error text-white rounded-md cursor-pointer hover:bg-red-500'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
