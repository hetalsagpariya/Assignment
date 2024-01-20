import React, { useState } from 'react';
import axios from 'axios';
import { Table, Modal, Button } from 'react-bootstrap';

const ItemTable = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItemDetails = async (itemId) => {
    try {
      // Display loading state
      setLoading(true);

      // Make API call using Axios
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${itemId}`);
      const data = response.data;

      // Update state with fetched details
      setSelectedItem(data);

    } catch (error) {
      // Handle errors gracefully
      setError(error);

    } finally {
      // Hide loading state
      setLoading(false);
    }
  };

  const handleItemSelected = (itemId) => {
    // Call the API function when an item is selected
    fetchItemDetails(itemId);
  };

  const closeModal = () => {
    // Clear selected item and error when closing modal
    setSelectedItem(null);
    setError(null);
  };

  return (
    <div>
        <h1 className="justify-content-center m-4">Item Table With API Integration</h1>
      {/* Table with items */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleItemSelected(1)}>
            <td>1</td>
            <td>Item A</td>
          </tr>
          <tr onClick={() => handleItemSelected(2)}>
            <td>2</td>
            <td>Item B</td>
          </tr>
          <tr onClick={() => handleItemSelected(3)}>
            <td>3</td>
            <td>Item C</td>
          </tr>
          <tr onClick={() => handleItemSelected(4)}>
            <td>4</td>
            <td>Item D</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>

      {/* Modal for displaying details */}
      <Modal show={!!selectedItem} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error fetching item details.</p>
          ) : (
            <div>
              <p><strong>ID:</strong> {selectedItem?.id}</p>
              <p><strong>Title:</strong> {selectedItem?.title}</p>
              <p><strong>Completed:</strong> {selectedItem?.completed ? 'Yes' : 'No'}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemTable;
