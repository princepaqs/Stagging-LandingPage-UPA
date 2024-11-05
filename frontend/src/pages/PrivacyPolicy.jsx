import React from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';

function PrivacyPolicy() {
    return (
        <>
        <div className="font-poppins">
            <Header1 />
            <div className="privacy-policy-container" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', marginBottom: '100px' }}>
                <br />
                <div className="flex justify-center mb-6">
                    <h1 className="text-6xl font-bold mb-6"><strong>Privacy Policy</strong></h1>
                </div>
                <p className="text-justify" style={{ lineHeight: '2' }}><strong>Effective Date:</strong> November 05, 2024</p>
                <p className="text-justify" style={{ lineHeight: '2' }}><strong>Last Updated:</strong> November 05, 2024</p>
                <br />
                <p className="text-justify" style={{ lineHeight: '2' }}>Thank you for choosing UPA, owned and operated by [Your Company Name]. Your privacy is important to us, and this Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our app.</p>
                <br />

                <h2 className="text-2xl font-semibold mt-5 mb-2">1. Information We Collect</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>We may collect various types of information to provide you with the best experience possible. This includes:</p>
                <ul className="list-disc list-inside ml-4">
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Personal Information:</strong> Information you provide to us when registering, such as your name, email address, phone number, address, and identification documents.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Financial Information:</strong> Payment information collected for rental transactions, which is processed securely through the app.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Device Information:</strong> Details such as your device type, operating system, and IP address, which helps us improve the app’s performance and security.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Usage Information:</strong> Information on how you interact with the app, including browsing actions and search queries, to personalize and enhance your experience.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-5 mb-2">2. How We Use Your Information</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>We use the information collected for purposes such as:</p>
                <ul className="list-disc list-inside ml-4">
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Account Management:</strong> To create and manage your account, including profile settings and preferences.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Payment Processing:</strong> To enable secure rental and related payments within the app.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Communication:</strong> To send updates, notifications, and support messages related to your account and app usage.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Improving Services:</strong> To analyze app usage, troubleshoot issues, and optimize features.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Legal and Security Purposes:</strong> To comply with legal obligations, resolve disputes, and enforce our terms of service.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-5 mb-2">3. How We Share Your Information</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>We may share your information with:</p>
                <ul className="list-disc list-inside ml-4">
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Service Providers:</strong> Third-party companies that help us with essential services, such as payment processing, customer support, and data analytics.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Legal Obligations:</strong> When required by law, such as for legal proceedings, investigations, or compliance with regulatory requirements.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the transaction.</li>
                </ul>
                <p className="text-justify" style={{ lineHeight: '2' }}>We do not sell or rent your personal information to third parties.</p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">4. Data Security</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>We implement various security measures to protect your data, including encryption, secure payment gateways, and restricted access. While we strive to protect your information, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.</p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">5. Your Rights and Choices</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>Depending on your location, you may have certain rights related to your personal data, including:</p>
                <ul className="list-disc list-inside ml-4">
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Access:</strong> Request access to the information we hold about you.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Deletion:</strong> Request deletion of your data, subject to legal or contractual limitations.</li>
                    <li className="text-justify" style={{ lineHeight: '2' }}><strong>Opt-Out:</strong> Adjust your notification and marketing preferences through your account settings.</li>
                </ul>
                <p className="text-justify" style={{ lineHeight: '2' }}>To exercise these rights, please contact us at <a href="mailto:support.upa@gmail.com">support.upa@gmail.com</a>.</p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">6. Third-Party Links</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>Our app may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">7. Age Requirement</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>UPA is intended only for users aged 18 and above. We do not knowingly collect or store personal information from individuals under 18. If we become aware that we have collected information from someone under 18, we will take prompt steps to delete such information from our systems.</p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">8. Changes to this Privacy Policy</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy in the app and updating the "Effective Date" above.</p>

                <h2 className="text-2xl font-semibold mt-5 mb-2">9. Contact Us</h2>
                <p className="text-justify" style={{ lineHeight: '2' }}>If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at</p>
                <p className="text-justify" style={{ lineHeight: '2' }}><strong>Email </strong> <a href="mailto:support.upa@gmail.com"> : support.upa@gmail.com</a></p>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default PrivacyPolicy;
