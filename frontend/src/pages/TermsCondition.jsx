import React from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';

function TermsCondition() {
    return (
        <>
        <div className="font-poppins">
            <Header1 />
            <div className="terms-condition-container" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', marginBottom: '100px' }}>
                <br />
                <div className="flex justify-center mb-6">
                    <h1 className="text-6xl font-bold"><strong>Terms and Conditions</strong></h1>
                </div>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    Welcome to UPA. These Terms and Conditions ("Terms") govern your use of the UPA mobile application and services ("Services"). By accessing or using UPA, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you must not use the app.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">1. Acceptance of Terms</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    By creating an account or using UPA, you acknowledge that you have read, understood, and agree to be bound by these Terms. UPA reserves the right to modify these Terms at any time. We will notify users of any significant changes. Your continued use of the app after such changes constitutes acceptance of the new Terms.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">2. User Accounts</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    <strong>Eligibility:</strong> You must be at least 18 years old to create an account on UPA. By creating an account, you represent that you meet this eligibility requirement.
                </p>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account information, including your password. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    <strong>Account Information:</strong> You agree to provide accurate and complete information during the registration process and to keep this information up to date.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">3. User Conduct</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    You agree to use UPA only for lawful purposes and in accordance with these Terms. Prohibited conduct includes, but is not limited to:
                </p>
                <ul>
                    <li className="text-justify" style={{ lineHeight: '2' }}><italic>Posting or transmitting</italic> any false, misleading, or fraudulent information.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><italic>Engaging in harassment, intimidation, or threats</italic> against other users.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><italic>Attempting to gain unauthorized access</italic> to the app or its related systems or networks.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><italic>Using automated systems or software</italic> to extract data from UPA without our prior written consent.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-5 mb-2">4. Property Listings and Transactions</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    <strong>Property Owners:</strong> Property owners are solely responsible for the accuracy, legality, and appropriateness of their property listings. UPA does not guarantee the quality or legality of any listed property.
                </p>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    <strong>Tenants:</strong> Tenants must read and understand the terms of any lease agreement before signing. UPA facilitates communication between property owners and tenants but does not participate in the transaction itself.
                </p>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    <strong>Payments:</strong> All payments for rentals or services are processed through UPA’s secure payment system. Users agree to comply with our Payment Policy regarding payment methods and procedures.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">5. Termination of Accounts</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    UPA reserves the right to suspend or terminate your account if you violate these Terms or engage in fraudulent or illegal activity. We may also terminate accounts that have been inactive for an extended period.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">6. Intellectual Property</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    All content, design, graphics, logos, and other intellectual property displayed in UPA are owned by UPA or its licensors. You are granted a limited, non-exclusive, non-transferable license to access and use the app for personal, non-commercial purposes only. You may not copy, modify, distribute, or create derivative works based on UPA content without express written permission from UPA.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">7. Privacy Policy</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    Your privacy is important to us. Please refer to our <a href="/privacy-policy"> <u>Privacy Policy</u></a> for information on how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">8. Limitation of Liability</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    To the fullest extent permitted by law, UPA is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the app or services. UPA is not responsible for any disputes between property owners and tenants, including any losses or damages resulting from such disputes.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">9. Dispute Resolution</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    Any disputes arising out of or related to these Terms or your use of UPA shall be resolved through binding arbitration in accordance with the rules of [insert arbitration association or organization relevant to your jurisdiction]. The arbitration shall take place in Caloocan City, and the arbitrator's decision shall be final and binding.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">10. Governing Law</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    These Terms shall be governed by and construed in accordance with the laws of Philippines, without regard to its conflict of laws principles.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">11. Changes to Terms</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    UPA reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting in the app. Your continued use of UPA after any changes constitutes your acceptance of the revised Terms.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">12. Contact Information</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    If you have any questions or concerns regarding these Terms, please contact us at:
                </p>
                <p className="text-justify" style={{ lineHeight: '2' }}>
                    <strong>Email:</strong> <a href="mailto:support.upa@gmail.com">support.upa@gmail.com</a>
                </p>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default TermsCondition;
