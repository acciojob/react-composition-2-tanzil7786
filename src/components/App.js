import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the import path based on your project structure

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
    <button onClick={() => setShowModal(true)}>Open Modal</button>
    <Modal show={showModal} onClose={handleCloseModal}>
      This is the content of the modal.
    </Modal>
  </div>
  );
}

export default App;