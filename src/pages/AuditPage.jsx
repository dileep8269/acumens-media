import AContent from "../components/contactPageComponents/AContent";
import Contact from "../components/contactPageComponents/Contact";
import { contactCheckboxes, contactFields } from "../props/contactInfo";

const AuditPage = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 w-full p-4 mt-20">
      <div className="md:ml-8">
        <AContent />
      </div>
      <div>
        <Contact
          title="Contact Us"
          fields={contactFields}
          checkboxes={contactCheckboxes}
          buttonText="Get in touch"
        />
      </div>
    </div>
  );
};

export default AuditPage;
