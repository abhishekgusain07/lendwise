const Navbar = () => {
    return (
        <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
            <span className="text-xl font-bold">LendWise</span>
            </div>

            <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <a href="#hero" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#features" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#howitworks" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
                <a href="#pricing" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#testimonials" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                <a href="#contact" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium ml-4">Login</button>
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">Sign Up</button>
            </div>
            </div>
            
            <div className="md:hidden">
            <button id="mobile-menu-button" className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className="hamburger" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path className="close hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            </div>
        </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-neutral-800">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Home</a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Features</a>
            <a href="#howitworks" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">How It Works</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Pricing</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">Contact</a>
            <button className="w-full text-left bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium mt-1">Login</button>
            <button className="w-full text-left bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium mt-1">Sign Up</button>
        </div>
        </div>
    </nav>
    )
}

export default Navbar;