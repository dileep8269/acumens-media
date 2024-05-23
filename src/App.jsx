// import './App.css'

import HomePage from "./pages/HomePage"
import AiSection from "./components/AiSection"
import AcumensReview from "./components/AcumensReview"
import Footer from "./components/Footer"
import BlogCard from "./components/BlogCard"
import DisplayCard from "./components/DisplayCard"
import CustomForm from "./components/CustomForm"

const fields = [
  {
    name: 'CompanyName',
    type: 'text',
    label: 'Company Name',
    require : 'Company Name is required',
    placeholder: 'Enter your Company Name',
  },
  {
    name: 'FirstName',
    type: 'text',
    label: 'First Name',
    require : 'First Name is required',
    placeholder: 'Enter your First Name',
  },
  {
    name: 'LastName',
    type: 'text',
    label: 'Last Name',
    require : 'Last Name is required',
    placeholder: 'Enter your Last Name',
  },
  {
    name: 'Email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your Email',
  },
  
  {
    name: 'subscribe',
    type: 'checkbox',
    label: 'I , Agree to the Terms & Conditions and the Privacy policy of Acumens media inc.',
  },
  {
    name: 'terms',
    type: 'checkbox',
    label: 'Yes, I would like to receive promotional emails & newsletters',
  },
  // Add more fields as needed
];

function App() {

  const handleFormSubmit = (data) => {
    console.log('Form Data:', data);
  };
  
  return ( 
   
    <div className="flex justify-center items-center h-screen">

      <CustomForm fields={fields}/>
    </div>
 
  )
}

export default App
