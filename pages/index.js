import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={openModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
