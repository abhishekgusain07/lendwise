const Security = () => {
    return (
        <section id="security" className="py-20 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Bank-Grade Security</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">Your financial data is protected by enterprise-level security measures</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 animate__animated animate__fadeInLeft">
                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                    <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold">End-to-End Encryption</h3>
                    </div>
                    <p className="text-gray-300">All sensitive data is encrypted using industry-standard AES-256 encryption</p>
                </div>

                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                    <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Two-Factor Authentication</h3>
                    </div>
                    <p className="text-gray-300">Additional layer of security for all financial transactions and account access</p>
                </div>

                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
                    <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Regular Audits</h3>
                    </div>
                    <p className="text-gray-300">Continuous security monitoring and regular third-party security audits</p>
                </div>
                </div>

                <div className="animate__animated animate__fadeInRight">
                <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
                    <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <span className="text-lg">Data Encryption</span>
                        <span className="text-green-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </span>
                    </div>
                    <div className="w-full bg-neutral-700 h-1 rounded-full">
                        <div className="bg-green-500 h-1 rounded-full" style={{width: "100%"}}></div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-lg">SSL Security</span>
                        <span className="text-green-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </span>
                    </div>
                    <div className="w-full bg-neutral-700 h-1 rounded-full">
                        <div className="bg-green-500 h-1 rounded-full" style={{width: "100%"}}></div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-lg">Fraud Protection</span>
                        <span className="text-green-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </span>
                    </div>
                    <div className="w-full bg-neutral-700 h-1 rounded-full">
                        <div className="bg-green-500 h-1 rounded-full" style={{width: "100%"}}></div>
                    </div>

                    <div className="mt-8 p-4 bg-green-600/10 rounded-lg border border-green-600/20">
                        <p className="text-center text-green-500 font-semibold">
                        100% Secure &amp; Compliant with Financial Regulations
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Security;