import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://cs3870-exam-2-backend.onrender.com:8081/contacts");
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        alert("There was an Error loading contacts " + error.message);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-4">Contacts List</h2>
      <ul className="list-group">
        {contacts.map((contact) => (
          <a onClick={() => navigate(`/view/${contact.contact_name}`)}>
          <li key={contact.id} className="list-group-item d-flex align-items-center">
            {contact.image_url && (
              <img
                src={contact.image_url}
                alt={contact.contact_name}
                style={{ width: '50px', height: '50px', marginRight: '15px', objectFit: 'cover' }}
              />
            )}
            <div>
              <strong>{contact.contact_name}</strong> - {contact.phone_number}
              <p>{contact.message}</p>
            </div>
          </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
export default Contacts;
