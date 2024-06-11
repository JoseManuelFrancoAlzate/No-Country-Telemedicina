import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-200 py-10 mt-60">
      <div className="flex justify-center items-center mb-10">
        <Image className="mr-10" src="/logo.svg" width={100} height={100} alt="Logo" />
        <Image src="/medicam.svg" width={257} height={42} alt="Medicam" />
      </div>
      <div className="w-11/12 mx-auto text-center border-b-2 border-gray-300 mb-10">
        <span className="block text-gray-300">——————————————————————————————————————————————————————————————————————</span>
      </div>
      <div className="w-full bg-gray-200 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-lg font-bold mb-4">COMPANY</h2>
              <ul className="space-y-2">
                <li>About Apothart</li>
                <li>Customer speak</li>
                <li>In the News</li>
                <li>Terms and Conditions</li>
                <li>Privacy and Policy</li>
                <li>Fee and Payment Policy</li>
                <li>Shipping and Delivery Policy</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">SOCIALS</h2>
              <ul className="space-y-2">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
                <li>Instagram</li>
                <li>Refer and Earn</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">EMAIL</h2>
              <form className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow p-2 border border-gray-300 rounded-l"
                />
                <button className="p-2 bg-blue-500 text-white rounded-r">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
