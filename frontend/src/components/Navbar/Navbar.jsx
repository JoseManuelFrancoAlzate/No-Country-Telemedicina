'use client'
import Link from "next/link";
import { navigationItem } from "../../constants/";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const isAuthenticated = false;

  return (
    <nav className="  py-4  bg-transparent   w-full">
      <div className="flex items-center justify-between w-full  container ">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/logo.svg"
              className=""
              width={64}
              height={101}
              alt="logo"
            />
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-8  ">
              {navigationItem.map((item) => (
                <li key={item.title} className="font-inter  text-primary/90 ">
                  {" "}
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {!isAuthenticated ? (
          <div className="flex items-center gap-x-2">
            <Link
              href="/login"
              className="flex items-center px-2  py-1 hover:opacity-95  group border-e-red-500 transition-all duration-300    font-semibold text-sm  text-black/75"
            >
              <IoMdSearch size={30} className="group-hover:opacity-80" />
            </Link>

            <Link
              href="/login"
              className="bg-gradient-to-r flex items-center from-[#0049F9] to-[#32C0D6] px-5 py-2  hover:opacity-65  transition-all duration-300  rounded-md  font-semibold text-sm  text-white"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-1.5  border-2 border-[#2299E2]  transition-all duration-300  rounded-md  text-sm "
            >
              SignUp
            </Link>
          </div>
        ) : (
          <div>Authenticated</div>
          // <Menu as="div" className="relative  ml-3">
          //   <div>
          //     <Menu.Button className="relative  flex rounded-full bg-gray-800 text-sm focus:outline-none">
          //       <img
          //         className="h-10 w-10 rounded-full border-2 focus:outline-none  border-primary"
          //         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          //         alt=""
          //       />
          //     </Menu.Button>
          //   </div>
          //   <Transition
          //     as={Fragment}
          //     enter="transition ease-out duration-100"
          //     enterFrom="transform opacity-0 scale-95"
          //     enterTo="transform opacity-100 scale-100"
          //     leave="transition ease-in duration-75"
          //     k
          //     leaveFrom="transform opacity-100 scale-100"
          //     leaveTo="transform opacity-0 scale-95"
          //   >
          //     <Menu.Items className="absolute  -right-4   w-48 origin-top-right rounded-br-md rounded-bl-md  bg-secondary py-2 px-1   focus:outline-none">
          //       <Menu.Item>
          //         {({ active }) => (
          //           <Link
          //             to="/create-accommodation"
          //             className={
          //               "block px-4 py-2 text-sm text-primary/90  font-inter"
          //             }
          //           >
          //             Add Hotel
          //           </Link>
          //         )}
          //       </Menu.Item>
          //       <Menu.Item>
          //         {({ active }) => (
          //           <Link
          //             to="/settings"
          //             className={
          //               "block px-4 py-2 text-sm text-primary/90  font-inter"
          //             }
          //           >
          //             Settings
          //           </Link>
          //         )}
          //       </Menu.Item>
          //       <Menu.Item>
          //         {({ active }) => (
          //           <button
          //             onClick={handleSignOut}
          //             className={
          //               "block px-4 py-2 text-sm text-primary/90  font-inter"
          //             }
          //           >
          //             Sign out
          //           </button>
          //         )}
          //       </Menu.Item>
          //     </Menu.Items>
          //   </Transition>
          // </Menu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
