import React, { useState, FormEvent, ChangeEvent } from "react";
import { CheckIcon } from "../common/Icons";

const EntireBusiness: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Start loading
    setLoading(true);

    // Simulate API call - stops loading after 2 seconds
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      // Here you would typically handle the form submission success
      console.log("Form submitted with email:", email);
    }, 2000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div className="bg-transparent md:bg-kuroiBlack px-2">
      <div className="py-[75px]">
        <h3 className="text-[26px] text-center sm:text-[28px] md:text-[32px] font-extrabold text-white font-jakarta">
          Everything to run your entire business in one place
        </h3>
        <p className="paragraph-text font-medium text-decemberSky font-jakarta text-center py-4">
          Start using Contractor+ free (for real)!
        </p>
        <form
          className="flex flex-col md:flex-row justify-center items-start gap-3"
          onSubmit={handleSubmit}
        >
          <div className="md:max-w-[414px] w-full">
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={handleEmailChange}
              className="bg-lightBlack border-white border-b rounded-[6px] text-white outline-none px-2 w-full h-[40px]"
            />
            <p className="hidden md:flex items-center gap-2 pt-3">
              <span>
                <CheckIcon />
              </span>
              <span className="text-sm font-semibold font-myriad text-white">
                No Credit Card Required
              </span>
            </p>
          </div>
          <button
            type="submit"
            className="bg-red-linear h-10 primary-btn flex items-center justify-center !min-w-[230px] !w-auto"
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Create Free Account"
            )}
          </button>
          <div className="md:hidden flex justify-center items-center w-full">
            <p className="flex items-center gap-2 pt-1">
              <span>
                <CheckIcon />
              </span>
              <span className="text-sm font-semibold font-myriad text-white">
                No Credit Card Required
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntireBusiness;
