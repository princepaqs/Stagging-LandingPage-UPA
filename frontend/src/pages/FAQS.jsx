import React, { useEffect, useState } from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';
import axios from 'axios';

function FAQS() {
  const [faqs, setFaqs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [categories, setCategories] = useState([
    'All Category', // Add "All Category" to the categories list
    'General', 
    'Account Management', 
    'Property Listing', 
    'Payment & Transaction', 
    'Contract & Agreement', 
    'Maintenance Request', 
    'Reports and Issues', 
    'Feedback and Support'
  ]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faqs');
        console.log('FAQs:', response.data); // Log the response to inspect
  
        // Filter FAQs to only include those with status === 'active'
        const activeFaqs = response.data.filter(faq => faq.status === 'Active');
        
        // Set the state with the filtered FAQs
        setFaqs(activeFaqs);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
  
    fetchFaqs();
  }, []);
  

  // Filter FAQs based on the selected category
  const filteredFaqs = selectedCategory === 'All Category'
    ? faqs
    : faqs.filter(faq => faq.category && faq.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
      <Header1 />
      <div className="h-screen px-6 flex flex-col items-center">
        <div className="pt-10 w-1/2">
          <div className="w-full mb-6">
            <h1 className="text-6xl font-bold text-center">
              <strong>FAQs</strong>
            </h1>
          </div>
          {/* Category Dropdown */}
          <div className="w-full mb-6">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="outline-none w-full p-2 border border-gray-300 rounded"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Display FAQs for selected category */}
          <div className="w-full overflow-y-auto" style={{ maxHeight: '500px' }}>
            {selectedCategory && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{selectedCategory} FAQs</h2>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <div key={faq.id} className="mb-4">
                      <h3 className="text-xl font-semibold">{faq.faqQuestion}</h3>
                      <p>{faq.faqAnswer}</p>
                    </div>
                  ))
                ) : (
                  <p>No FAQs available for this category.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQS;
