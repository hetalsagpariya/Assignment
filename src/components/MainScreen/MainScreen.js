import React, { useState } from 'react';
import { Table, Button, Row, Col, Container, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';

const MainScreen = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    // Add more data as needed
  ]);

  const [editingId, setEditingId] = useState(null);
  const [newItem, setNewItem] = useState({ id: '', name: '', price: '' });
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (id) => {
    setEditingId(id);

    // Find the item being edited
    const editedItem = data.find((item) => item.id === id);

    // Set the item's data to the form
    setNewItem({ ...editedItem });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleAdd = () => {
    setEditingId(null);
    setShowForm(true);
    setNewItem({ id: '', name: '', price: '' });
  };

  const handleSave = () => {
    // Validate the new item fields before saving
    if (!newItem.id || !newItem.name || !newItem.price) {
      alert('Please fill out all fields.');
      return;
    }

    // Save the new item to the data array
    if (editingId === null) {
      // If not in editing mode, add a new item
      setData([...data, newItem]);
    } else {
      // If in editing mode, update the existing item
      const updatedData = data.map((item) => (item.id === editingId ? newItem : item));
      setData(updatedData);
    }

    // Reset the form and hide it
    setNewItem({ id: '', name: '', price: '' });
    setShowForm(false);
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setShowForm(false); // Hide the form when canceling edit
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-light">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col md={9} className="p-4">
          {/* Table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{editingId === item.id ? <input value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} /> : item.name}</td>
                  <td>{editingId === item.id ? <input value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} /> : item.price}</td>
                  <td>
                    {editingId === item.id ? (
                      <>
                        <Button variant="success" onClick={handleSave}>
                          Save
                        </Button>{' '}
                        <Button variant="secondary" onClick={handleCancelEdit}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="info" onClick={() => handleEdit(item.id)}>
                          Edit
                        </Button>{' '}
                        <Button variant="danger" onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Add Button */}
          <Button variant="success" onClick={handleAdd}>
            Add New
          </Button>

          {/* Add New Item Form */}
          {showForm && (
            <Form>
              <Form.Group className="mb-3" controlId="formItemId">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" value={newItem.id} onChange={(e) => setNewItem({ ...newItem, id: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formItemName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formItemPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
              </Form.Group>
            
              <Button variant="success" onClick={handleSave} >
                Save
              </Button>
              <Button  className='ms-2' variant="secondary"  onClick={handleCancelEdit}>
                Cancel
              </Button>
          
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainScreen;
