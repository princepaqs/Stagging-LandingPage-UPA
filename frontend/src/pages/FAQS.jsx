import React from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';

function FAQS() {
    return(
        <>
        <Header1 />
            <div className="faqs-container" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', marginBottom: '100px' }}>
                <br />
                <div className="flex justify-center mb-6">
                    <h1 className="text-5xl font-bold"><strong>Frequently Asked Questions</strong></h1>
                </div>
            </div>
        <Footer />
        </>
    );
}

export default FAQS;