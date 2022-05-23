import React from 'react';
import AddProduct from '../components/product/AddProduct';


const AdminPage = () => {
  return (
    <div>
      <img className='bebe' src="https://thumbs.dreamstime.com/b/chocolate-cake-gray-background-horizontal-photo-nuts-smudges-stand-free-space-179750769.jpg" alt="" />
      <h2 className='admin' >Admin Panel</h2>
      <AddProduct />
    </div>
  );
};

export default AdminPage;