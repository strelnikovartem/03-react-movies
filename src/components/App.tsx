import { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Main content of the page</h1>
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Custom Modal Content</h2>
          <p>This is a reusable modal with dynamic content.</p>
        </Modal>
      )}
    </div>
  );
}
