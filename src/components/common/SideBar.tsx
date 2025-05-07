import React, { useState } from "react";

interface DropdownItemProps {
  title: string;
  items: Array<{ label: string; href: string }>;
  isOpen: boolean;
  onToggle: () => void;
}

const DropdownItem = ({
  title,
  items,
  isOpen,
  onToggle,
}: DropdownItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-2 py-3 text-left font-medium text-gray-800"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 py-2">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href || "#"}
                  className="block px-2 py-1 text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SideBar = ({
  setIsShow,
  isshow,
}: {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isshow: boolean;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (dropdownName: string) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const solutionsItems = [
    { label: "CRM", href: "#" },
    { label: "Field Service Management", href: "#" },
    { label: "Project Management", href: "#" },
    { label: "Estimate AI", href: "#" },
    { label: "Bid Cloud AI", href: "#" },
    { label: "Lead Generation", href: "#" },
    { label: "Bookkeeping", href: "#" },
  ];

  const contractorAppItems = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Support", href: "#" },
  ];

  const industriesItems = [
    { label: "General Contractor", href: "#" },
    { label: "Plumbing", href: "#" },
    { label: "Construction", href: "#" },
    { label: "HVAC", href: "#" },
    { label: "Landscaping", href: "#" },
    { label: "Electrical", href: "#" },
  ];

  return (
    <>
      {isshow && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out lg:hidden"
          onClick={() => setIsShow(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-dvh overflow-hidden flex flex-col w-[280px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden ${
          isshow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col grow overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsShow(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-1 grow overflow-auto">
            <DropdownItem
              title="Solutions"
              items={solutionsItems}
              isOpen={openDropdown === "solutions"}
              onToggle={() => toggleDropdown("solutions")}
            />
            <DropdownItem
              title="Contractor+ App"
              items={contractorAppItems}
              isOpen={openDropdown === "contractor"}
              onToggle={() => toggleDropdown("contractor")}
            />
            <DropdownItem
              title="Industries"
              items={industriesItems}
              isOpen={openDropdown === "industries"}
              onToggle={() => toggleDropdown("industries")}
            />
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full py-2 px-4 border border-gray-300 rounded text-center text-gray-800 font-medium transition-colors duration-200 hover:bg-gray-50">
              Login
            </button>
            <button className="w-full py-2 px-4 bg-red-600 text-white rounded text-center font-medium transition-colors duration-200 hover:bg-red-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
