import React from "react";

const Search = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h1 className="text-4xl font-bold text-left text-teal-600">
        Search Engine Optimization (SEO)
        </h1>
      </div>
      <div className="flex flex-wrap bg-gray-100">
        <div className="w-full lg:w-1/4 bg-teal-600 text-white p-8">
          <ul className="space-y-4">
            <li className="py-2 font-medium">Web Design & Development</li>
            <li className="py-2 font-medium">Ecommerce Solutions</li>
            <li className="py-2 font-medium">App Development</li>
            <li className="py-2 font-medium">Web Application</li>
            <li className="py-2 font-medium">School Management</li>
            <li className="py-2 font-medium">CRM Development</li>
          </ul>
        </div>

        <div className="w-full lg:w-3/4 bg-white p-8">
          <h1 className="text-3xl font-bold text-teal-600 mb-6">
          Search Engine Optimization (SEO)
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            With the number of active internet users having long crossed the 1
            Billion mark, internet as a medium of commerce bears immense
            potential. The growing technological infrastructure has made
            technology and internet accessible to people across the world. A
            number of businesses around the world are making substantial
            transactions only through the online mode. With the growing
            popularity of the web space as a market place, people's buying
            patterns have also gone through a massive overhaul. There is
            increased dependence on internet as a medium of selling and buying.
            The popularity of the web space as a convenient place for commerce
            is owing to the ease and convenience that internet offers. Ecommerce
            websites are therefore a thing of the present and the future. Modern
            day businesses across all realms are waking up to the importance of
            E-commerce.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Static Website */}
            <div className="bg-red-600 text-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">User-Friendly Interface</h2>
              <p className="mt-4">
              One of the most important features of an ecommerce website is its user interface. The site should be intuitive and easy to navigate, ensuring that customers can find what they're looking for quickly and efficiently.
              </p>
            </div>

            {/* Dynamic Website */}
            <div className="bg-green-600 text-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Easy-to-use Shopping Cart</h2>
              <p className="mt-4">
              An e-commerce website must have a secure and intuitive shopping cart system. This allows customers to easily add items to their cart, make modifications, and smoothly proceed to checkout.
              </p>
            </div>

            {/* WordPress Website */}
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Secure Payment Gateway</h2>
              <p className="mt-4">
              A secure and trustworthy payment gateway is essential. This not only protects your customers but also helps to build trust, encouraging repeat purchases.
              </p>
            </div>
          </div>
          <h1 className="mt-10 text-3xl font-bold text-teal-600 mb-6">
          Benefits
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            User-Friendly Interface : WordPress offers a user-friendly
            interface, making it easy even for beginners to create and manage
            their websites. <br />
            Plugin Functionality : WordPress has a vast library of plugins that
            can add additional functionality to your website. This includes SEO
            tools, social media integration, and e-commerce capabilities. <br />
            Blogging Support : WordPress originally started as a blogging
            platform and thus provides robust support for blog creation and
            management, making it ideal for businesses that rely on content
            marketing. <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Search;
