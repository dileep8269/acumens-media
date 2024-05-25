import Contact from "../components/contactPageComponents/Contact"
import Content from "../components/contactPageComponents/Content"
import { contactFields,contactCheckboxes } from "../props/contactInfo"


const ContactPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4 mt-20">
              <div className="md:ml-8">
                <Content />
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
  )
}

export default ContactPage
