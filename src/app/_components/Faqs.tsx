const Faqs = () => {
    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about our lending management system</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-gray-50 rounded-xl animate__animated animate__fadeInUp">
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 rounded-xl focus:outline-none">
                    <span className="text-lg font-semibold">How is the interest calculated?</span>
                    <svg className="w-6 h-6 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div className="faq-answer hidden px-6 pb-4">
                    <p className="text-gray-600">Interest is calculated at 2% monthly on the principal amount. The system automatically computes interest based on the loan duration and displays detailed breakdowns for transparency.</p>
                </div>
                </div>
                <div className="bg-gray-50 rounded-xl animate__animated animate__fadeInUp" style={{animationDelay: "0.1s"}}>
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 rounded-xl focus:outline-none">
                    <span className="text-lg font-semibold">What happens if a member wants early repayment?</span>
                    <svg className="w-6 h-6 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div className="faq-answer hidden px-6 pb-4">
                    <p className="text-gray-600">Members can make early repayments at any time before the scheme ends. The system will automatically adjust the interest calculations accordingly.</p>
                </div>
                </div>
                <div className="bg-gray-50 rounded-xl animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 rounded-xl focus:outline-none">
                    <span className="text-lg font-semibold">How are monthly contributions managed?</span>
                    <svg className="w-6 h-6 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div className="faq-answer hidden px-6 pb-4">
                    <p className="text-gray-600">The system tracks all monthly contributions automatically. Members receive notifications for due dates, and the admin dashboard shows real-time contribution status for all members.</p>
                </div>
                </div>
                <div className="bg-gray-50 rounded-xl animate__animated animate__fadeInUp" style={{animationDelay: "0.3s"}}>
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 rounded-xl focus:outline-none">
                    <span className="text-lg font-semibold">Can the interest rate be modified?</span>
                    <svg className="w-6 h-6 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div className="faq-answer hidden px-6 pb-4">
                    <p className="text-gray-600">Yes, group administrators can set custom interest rates at the beginning of each scheme. Once set, the rate remains fixed for that particular scheme duration.</p>
                </div>
                </div>
                <div className="bg-gray-50 rounded-xl animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                <button className="faq-button w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 rounded-xl focus:outline-none">
                    <span className="text-lg font-semibold">How secure is the platform?</span>
                    <svg className="w-6 h-6 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div className="faq-answer hidden px-6 pb-4">
                    <p className="text-gray-600">We implement bank-grade security measures including end-to-end encryption, two-factor authentication, and regular security audits to protect all financial data and transactions.</p>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Faqs;