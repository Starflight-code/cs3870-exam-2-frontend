import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ViewContact() {
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  let { name } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://cs3870-exam-2-backend.onrender.com:443/contact/${name}`);
      const data = await res.json().catch(() => null);

      setContactName(data["contact_name"]);
      setPhoneNumber(data["phone_number"]);
      setMessage(data["message"]);
      setImageUrl(data["image_url"]);
    })();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{contactName}</h2>
      <p>Phone: {phoneNumber}</p>
      <p>Message: {message}</p>
      <img src={imageUrl} />
    </div>
  );
}

