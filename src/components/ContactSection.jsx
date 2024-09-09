
function ContactSection() {
    return (
        <>
            <div className="max-w-3xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-4">Place Your Order</h2>
                <p className="text-gray-600 mb-6">
                    You can place your order by contacting us through any of the
                    following methods:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Order */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg">
                            Order by Phone
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Call us at:
                            <a
                                href="tel:+919637910456"
                                className="text-indigo-600 block mt-1"
                            >
                                +91 9637910456
                            </a>
                        </p>
                    </div>
                    {/* Email Order */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg">
                            Order by Email
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Send us your order details at:
                            <a
                                href="mailto:orders@example.com"
                                className="text-indigo-600 block mt-1"
                            >
                                orders@example.com
                            </a>
                        </p>
                    </div>
                    {/* WhatsApp Order */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg">
                            Order on WhatsApp
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Send us a message on WhatsApp:
                            <a
                                href="https://wa.me/919637910456"
                                className="text-indigo-600 block mt-1"
                            >
                                +91 9637910456
                            </a>
                        </p>
                    </div>
                    {/* Social Media Order */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="font-semibold text-lg">
                            Order via Social Media
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Message us on:
                            <a
                                href="https://facebook.com/yourpage"
                                className="text-indigo-600 block mt-1"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://instagram.com/yourpage"
                                className="text-indigo-600 block mt-1"
                            >
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactSection;
