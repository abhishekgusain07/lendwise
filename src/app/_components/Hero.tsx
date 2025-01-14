const Hero = () => {
    return (
        <section id="hero" className="bg-neutral-900 text-white pt-20 min-h-[70vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2 animate__animated animate__fadeInLeft">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Smart Money Lending, <br/>
                    <span className="text-blue-500">Simplified</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                    Streamline your group lending system with automated interest calculations, 
                    member management, and real-time tracking of loans and payments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Get Started
                    </button>
                    <button className="bg-neutral-800 hover:bg-neutral-700 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Learn More
                    </button>
                </div>
                <div className="mt-8 flex items-center gap-4">
                    <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p className="ml-2 text-gray-300">4.9/5 Rating</p>
                    </div>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <p className="text-gray-300">1000+ Active Users</p>
                </div>
                </div>
                <div className="lg:w-1/2 animate__animated animate__fadeInRight">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
                    <div className="relative bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-neutral-700 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Monthly Collection</h3>
                        <p className="text-2xl font-bold text-blue-500">₹1,000</p>
                        </div>
                        <div className="bg-neutral-700 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Interest Rate</h3>
                        <p className="text-2xl font-bold text-green-500">2%</p>
                        </div>
                    </div>
                    <div className="bg-neutral-700 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold">Scheme Duration</h3>
                        <p className="text-2xl font-bold text-purple-500">24 Months</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Total Pool Amount</h3>
                        <p className="text-3xl font-bold">₹24,000</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Hero;