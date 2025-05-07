import { MakeOperationlist } from "../common/Helper";

const MakeOperation = () => {
  return (
    <section className="bg-black">
      <div className="main-container py-10">
        <h3 className=" text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center">
          Make operations your competitive edge
        </h3>
        <p className="text-[22px] text-secondary text-center font-jakarta pt-2">
          The ROI from Contractor+ makes the choice easy
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
          {MakeOperationlist.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center"
            >
              <span>{item.icon}</span>
              <h3 className="text-2xl font-bold text-white font-jakarta">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-secondary font-montserrat">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="pt-[75px]">
          <h3 className="text-[26px] text-center sm:text-[28px] md:text-[32px] font-extrabold text-white font-jakarta">
            Everything to run your entire business in one place
          </h3>
          <p className="text-sm sm:text-lg md:text-xl font-medium text-decemberSky font-jakarta text-center py-4">
            Start using Contractor+ free (for real)!
          </p>
          <form className="flex flex-col md:flex-row justify-center items-start gap-3">
            <div className="md:max-w-[414px] w-full">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-[#1C2731] border-white border-b rounded-[6px] text-white outline-none px-2 w-full h-[40px]"
              />
              <p className="hidden md:flex items-center gap-2 pt-3">
                <span>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9522 1.22493C10.1141 0.517469 8.8879 0.517471 8.04971 1.22493L7.28637 1.86923C6.93011 2.16992 6.48926 2.35254 6.02473 2.39183L5.02937 2.476C3.93643 2.56843 3.06941 3.43546 2.97698 4.52839L2.8928 5.52375C2.85352 5.98828 2.6709 6.42914 2.37021 6.7854L1.72591 7.54874C1.01845 8.38692 1.01845 9.61308 1.72591 10.4513L2.37021 11.2146C2.6709 11.5708 2.85352 12.0117 2.8928 12.4762L2.97698 13.4716C3.06941 14.5646 3.93643 15.4316 5.02937 15.524L6.02473 15.6081C6.48926 15.6475 6.93011 15.8301 7.28638 16.1308L8.04971 16.7751C8.8879 17.4825 10.1141 17.4825 10.9522 16.7751L11.7156 16.1308C12.0718 15.8301 12.5127 15.6475 12.9772 15.6081L13.9726 15.524C15.0656 15.4316 15.9326 14.5646 16.025 13.4716L16.1091 12.4762C16.1485 12.0117 16.3311 11.5708 16.6318 11.2146L17.2761 10.4513C17.9835 9.61308 17.9835 8.38692 17.2761 7.54874L16.6318 6.78539C16.3311 6.42914 16.1485 5.98828 16.1091 5.52375L16.025 4.52839C15.9326 3.43546 15.0656 2.56843 13.9726 2.476L12.9772 2.39183C12.5127 2.35254 12.0718 2.16992 11.7156 1.86923L10.9522 1.22493ZM13.5924 7.46599C13.9878 7.07059 13.9878 6.42951 13.5924 6.03411C13.1971 5.63869 12.5559 5.63869 12.1605 6.03411L8.37646 9.81816L6.84241 8.28411C6.44701 7.88869 5.80592 7.88869 5.41052 8.28411C5.01511 8.67951 5.01511 9.32059 5.41052 9.71599L7.66052 11.9659C8.05592 12.3614 8.69701 12.3614 9.09241 11.9659L13.5924 7.46599Z"
                      fill="#5ED5A8"
                    />
                  </svg>
                </span>
                <span className="text-sm font-semibold font-myriad text-white">
                  No Credit Card Required
                </span>
              </p>
            </div>
            <button type="submit" className="bg-red-linear h-10 primary-btn">
              Create Free Account
            </button>
            <div className="md:hidden flex justify-center items-center w-full">
              <p className="flex items-center  gap-2 pt-1">
                <span>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9522 1.22493C10.1141 0.517469 8.8879 0.517471 8.04971 1.22493L7.28637 1.86923C6.93011 2.16992 6.48926 2.35254 6.02473 2.39183L5.02937 2.476C3.93643 2.56843 3.06941 3.43546 2.97698 4.52839L2.8928 5.52375C2.85352 5.98828 2.6709 6.42914 2.37021 6.7854L1.72591 7.54874C1.01845 8.38692 1.01845 9.61308 1.72591 10.4513L2.37021 11.2146C2.6709 11.5708 2.85352 12.0117 2.8928 12.4762L2.97698 13.4716C3.06941 14.5646 3.93643 15.4316 5.02937 15.524L6.02473 15.6081C6.48926 15.6475 6.93011 15.8301 7.28638 16.1308L8.04971 16.7751C8.8879 17.4825 10.1141 17.4825 10.9522 16.7751L11.7156 16.1308C12.0718 15.8301 12.5127 15.6475 12.9772 15.6081L13.9726 15.524C15.0656 15.4316 15.9326 14.5646 16.025 13.4716L16.1091 12.4762C16.1485 12.0117 16.3311 11.5708 16.6318 11.2146L17.2761 10.4513C17.9835 9.61308 17.9835 8.38692 17.2761 7.54874L16.6318 6.78539C16.3311 6.42914 16.1485 5.98828 16.1091 5.52375L16.025 4.52839C15.9326 3.43546 15.0656 2.56843 13.9726 2.476L12.9772 2.39183C12.5127 2.35254 12.0718 2.16992 11.7156 1.86923L10.9522 1.22493ZM13.5924 7.46599C13.9878 7.07059 13.9878 6.42951 13.5924 6.03411C13.1971 5.63869 12.5559 5.63869 12.1605 6.03411L8.37646 9.81816L6.84241 8.28411C6.44701 7.88869 5.80592 7.88869 5.41052 8.28411C5.01511 8.67951 5.01511 9.32059 5.41052 9.71599L7.66052 11.9659C8.05592 12.3614 8.69701 12.3614 9.09241 11.9659L13.5924 7.46599Z"
                      fill="#5ED5A8"
                    />
                  </svg>
                </span>
                <span className="text-sm font-semibold font-myriad text-white">
                  No Credit Card Required
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeOperation;
