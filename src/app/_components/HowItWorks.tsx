const HowItWorks = () => {
    return (
        <section id="howitworks" className="py-20 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">Simple steps to manage your lending group effectively</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-blue-500 transform -translate-y-1/2"></div>
                <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-blue-500 transform -translate-y-1/2"></div>
                <div className="relative bg-neutral-800 p-6 rounded-xl border border-neutral-700 animate__animated animate__fadeInLeft">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">Setup Group</h3>
                    <p className="text-gray-300">Define your group size, monthly contribution amount, and scheme duration</p>
                    <div className="mt-6 p-4 bg-neutral-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span>Members:</span>
                        <span className="font-bold">10-50</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Duration:</span>
                        <span className="font-bold">24 Months</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="relative bg-neutral-800 p-6 rounded-xl border border-neutral-700 animate__animated animate__fadeIn" style={{animationDelay: "0.2s"}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">Collect &amp; Manage</h3>
                    <p className="text-gray-300">Track monthly contributions and manage lending requests</p>
                    <div className="mt-6 p-4 bg-neutral-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span>Monthly:</span>
                        <span className="font-bold">₹1,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Interest:</span>
                        <span className="font-bold">2%</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="relative bg-neutral-800 p-6 rounded-xl border border-neutral-700 animate__animated animate__fadeInRight" style={{animationDelay: "0.2s"}}>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">Monitor &amp; Grow</h3>
                    <p className="text-gray-300">Track returns and reinvest interest for maximum growth</p>
                    <div className="mt-6 p-4 bg-neutral-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span>Returns:</span>
                        <span className="font-bold text-green-500">+24%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Growth:</span>
                        <span className="font-bold text-green-500">Compound</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 animate__animated animate__fadeIn" style={{animationDelay: "0.2s"}}>
                Start Your Group Now
                </button>
            </div>
            </div>
        </section>
    )
}

export default HowItWorks;