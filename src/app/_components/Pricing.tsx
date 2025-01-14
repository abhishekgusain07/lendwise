const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your lending group size</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 animate__animated animate__fadeInUp">
                <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                    <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-5xl font-bold text-gray-900">₹999</span>
                    <span className="text-gray-500 ml-1">/month</span>
                    </div>
                    <p className="text-gray-600 mb-6">Perfect for small lending groups</p>
                    <ul className="space-y-4">
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Up to 25 members
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Basic analytics
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Email support
                    </li>
                    </ul>
                </div>
                <div className="border-t border-gray-200 p-6">
                    <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">Get Started</button>
                </div>
                </div>
                <div className="bg-blue-600 border border-blue-500 rounded-2xl shadow-lg transform scale-105 animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-400 text-gray-900 rounded-tr-2xl rounded-bl-2xl text-sm font-semibold">
                    Popular
                </div>
                <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
                    <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-5xl font-bold text-white">₹1,999</span>
                    <span className="text-blue-200 ml-1">/month</span>
                    </div>
                    <p className="text-blue-100 mb-6">For growing lending communities</p>
                    <ul className="space-y-4 text-white">
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Up to 100 members
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Advanced analytics
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Priority support
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Custom reports
                    </li>
                    </ul>
                </div>
                <div className="border-t border-blue-500 p-6">
                    <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">Get Started</button>
                </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                    <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-5xl font-bold text-gray-900">₹4,999</span>
                    <span className="text-gray-500 ml-1">/month</span>
                    </div>
                    <p className="text-gray-600 mb-6">For large scale operations</p>
                    <ul className="space-y-4">
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Unlimited members
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        AI-powered analytics
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        24/7 dedicated support
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Custom solutions
                    </li>
                    </ul>
                </div>
                <div className="border-t border-gray-200 p-6">
                    <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">Contact Sales</button>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Pricing;