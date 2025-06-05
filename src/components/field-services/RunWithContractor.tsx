import React from "react";

const data = [
  {
    their: "Calling or texting each tech to check availability",
    your: "Drag-and-drop scheduling with real-time crew availability",
  },
  {
    their: "Guessing locations or waiting for callbacks",
    your: "AI receptionist answers, captures lead details, and books jobs",
  },
  {
    their: "Missed calls, forgotten voicemails, manual callbacks",
    your: "AI receptionist answers, captures lead details, and books jobs",
  },
  {
    their: "Miscommunication through group texts or missed updates",
    your: "Field updates sync instantly across mobile, office, and job chat",
  },
  {
    their: "Paper timesheets or unreliable check-ins",
    your: "GPS-stamped time clock inside the mobile app",
  },
  {
    their: "Texts, emails, and Slack all over the place",
    your: "Every job has its own chat thread, visible to all assigned team members",
  },
  {
    their: "Verbal check-ins or unlogged inspections",
    your: "Post-inspections with photos and task completion logs",
  },
  {
    their: "Manually sent invoices and delayed payment",
    your: "Instant invoice creation and onsite payment",
  },
];

const RunWithContractor = () => {
  return (
    <section className="bg-white py-10">
      <h3 className="section-heading text-kuroiBlack mx-auto max-w-[1029px] text-center">
        You don’t have to run things their way anymore. Run it your way with
        Contractor+.
      </h3>

      <div className="mx-auto w-full max-w-[1181px] space-y-3 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center gap-5 text-center"
          >
            {/* Their way */}
            <div className="their-way flex items-center gap-3 rounded-[10px] px-3 py-2">
              <span>
                {/* Red Cross Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M14.4243 12.8758L10.792 9.24285L14.423 5.61051L12.5567 3.74219L8.92366 7.37452L5.29132 3.74219L3.42432 5.61051L7.05533 9.24285L3.42432 12.8752L5.29264 14.7422L8.92366 11.1099L12.5547 14.7422L14.4243 12.8758Z"
                    fill="#E74C3C"
                  />
                  <path
                    d="M13.2642 3.03516L15.1304 4.90332L15.8364 5.61035L15.1304 6.31738L12.2056 9.24219L15.1313 12.1689L15.8394 12.877L15.1304 13.584L13.2612 15.4502L12.5542 16.1562L11.8472 15.4492L8.92334 12.5234L5.99951 15.4492L5.29346 16.1562L4.58545 15.4492L2.71729 13.583L2.01025 12.876L2.71729 12.168L5.64111 9.24219L2.71729 6.31738L2.01025 5.61035L2.71729 4.90332L4.5835 3.03516L5.2915 2.32812L8.92334 5.95996L11.8501 3.03516L12.5571 2.32812L13.2642 3.03516Z"
                    stroke="#F21314"
                    strokeOpacity="0.4"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <p className="font-jakarta text-base font-medium text-[#F4ADA5]">
                {item.their}
              </p>
            </div>

            {/* Your way */}
            <div className="flex items-center gap-2">
              {/* Arrow Icon */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M5.38444 1.27406C5.71398 0.931129 6.23585 0.910279 6.58949 1.21011L6.6589 1.27406L13.1211 8.00013L6.6589 14.7262L6.58949 14.7902C6.23604 15.0898 5.71514 15.0686 5.38558 14.7262C5.03395 14.3603 5.03396 13.7659 5.38558 13.3999L10.5733 8.00013L5.38444 2.60032L5.323 2.52809C5.03488 2.16007 5.05491 1.61698 5.38444 1.27406Z"
                    fill="#5ED5A8"
                  />
                </svg>
              </span>
              <div className="your-way flex items-center gap-3 rounded-[10px] px-3 py-2">
                <span>
                  {/* Green Dot Icon */}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.28809"
                      y="3.12109"
                      width="8.24242"
                      height="8.24242"
                      rx="4.12121"
                      fill="#78FF49"
                    />
                    <rect
                      x="1.74263"
                      y="1.57564"
                      width="11.3333"
                      height="11.3333"
                      rx="5.66667"
                      stroke="#78FF49"
                      strokeOpacity="0.3"
                      strokeWidth="3.09091"
                    />
                  </svg>
                </span>
                <p className="font-jakarta text-start text-base font-bold text-[#34755C]">
                  {item.your}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RunWithContractor;
