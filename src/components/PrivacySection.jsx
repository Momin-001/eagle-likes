const PrivacySection = () => {
    return (
      <section className="relative pt-10 px-4 overflow-hidden">
        <div className="absolute inset-0 glow-left" />
  
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Privacy is Our Focus
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Being careful about your safety online is smart, scammers constantly look for ways to steal from unsuspecting users. You should also protect your social media accounts, as platforms have detailed rules that can be violated easily by mistake.
            </p>
          </div>
  
          {/* Secure Payments - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl px-10 text-center md:text-left mx-auto justify-center items-center mb-24">
            <div className="max-w-sm order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Secure Payments</h3>
              <p className="text-gray-400 text-sm font-medium mb-3">
                Your online payment details can be vulnerable without proper protection. That's why we use the latest security protocols and advanced fraud prevention systems to keep your information completely safe.
              </p>
              <p className="text-gray-400 text-sm">
                Every transaction on our platform is securely encrypted, and we operate on advanced, protected servers to ensure your financial information stays completely safe from hackers and cybercriminals.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
              <div className="w-74 h-104 flex items-center justify-center">
              <img src="/secure-payments.png" alt="Secure Payments" className="w-full h-full object-cover rounded-[100px]" />
                </div>
              </div>
            </div>
          </div>
  
          {/* Data Protection - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl px-10 text-center md:text-left mx-auto justify-center items-center mb-24">
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
              <div className="w-74 h-104 flex items-center justify-center">
              <img src="/data-protection.png" alt="Data Protection" className="w-full h-full object-cover rounded-[100px]" />
                </div>
              </div>
            </div>
            <div className="max-w-sm order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Data Protection</h3>
              <p className="text-gray-400 text-sm font-medium mb-3">
                Your privacy is our top priority. No one will ever know you've purchased Instagram followers from Eagle Likes. We strictly protect all client data, including your identity and account details, with advanced encryption and security. We never share customer information—ever.
              </p>
              <p className="text-gray-400 text-sm">
                You can order privately no full name required and we offer privacy-friendly payment options like Bitcoin and cards. We also never ask for your Instagram password, so your account remains fully secure.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PrivacySection;
  