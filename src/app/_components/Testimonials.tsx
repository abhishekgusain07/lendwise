const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Group Leaders</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">See what our customers say about their experience with LendWise</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate__animated animate__fadeInUp">
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    R
                    </div>
                    <div className="ml-4">
                    <h4 className="text-lg font-semibold">Rajesh Kumar</h4>
                    <p className="text-gray-600">Group Leader, Delhi</p>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                    ★★★★★
                    </div>
                    <p className="text-gray-700">"Managing our lending group has never been easier. The automated calculations and tracking have saved me countless hours of work."</p>
                </div>
                <p className="text-sm text-gray-500">Managing 50+ members</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: "0.2s"}}>
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    S
                    </div>
                    <div className="ml-4">
                    <h4 className="text-lg font-semibold">Suresh Patel</h4>
                    <p className="text-gray-600">Group Leader, Mumbai</p>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                    ★★★★★
                    </div>
                    <p className="text-gray-700">"The transparency and accuracy of LendWise have helped build trust within our lending community. Highly recommended!"</p>
                </div>
                <p className="text-sm text-gray-500">Managing 30+ members</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate__animated animate__fadeInUp" style={{animationDelay: "0.4s"}}>
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    P
                    </div>
                    <div className="ml-4">
                    <h4 className="text-lg font-semibold">Priya Sharma</h4>
                    <p className="text-gray-600">Group Leader, Bangalore</p>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                    ★★★★★
                    </div>
                    <p className="text-gray-700">"The analytics and reporting features give me complete control over our lending operations. It's a game-changer!"</p>
                </div>
                <p className="text-sm text-gray-500">Managing 75+ members</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-12">
                <button className="w-3 h-3 rounded-full bg-blue-600"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors duration-300"></button>
                <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors duration-300"></button>
            </div>
            <div className="mt-16 pt-16 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
                <div className="animate__animated animate__fadeIn">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <p className="text-gray-600">Active Groups</p>
                </div>
                <div className="animate__animated animate__fadeIn" style={{animationDelay: "0.2s"}}>
                    <div className="text-4xl font-bold text-blue-600 mb-2">₹10Cr+</div>
                    <p className="text-gray-600">Loans Managed</p>
                </div>
                <div className="animate__animated animate__fadeIn" style={{animationDelay: "0.4s"}}>
                    <div className="text-4xl font-bold text-blue-600 mb-2">15K+</div>
                    <p className="text-gray-600">Members</p>
                </div>
                <div className="animate__animated animate__fadeIn" style={{animationDelay: "0.6s"}}>
                    <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                    <p className="text-gray-600">Satisfaction Rate</p>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Testimonials;