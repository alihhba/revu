import { useParams } from "react-router-dom";
import { contactItems } from "../../initials";
import ContactCart from "./ContactCart";

const ContactsCartsWrapper = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-p-7">
      {contactItems
        .filter((item) => (id === "all_contacts" ? item : item.role === id))
        .map((item) => (
          <ContactCart item={item} />
        ))}
    </div>
  );
};

export default ContactsCartsWrapper;
