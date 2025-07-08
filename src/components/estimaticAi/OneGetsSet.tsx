import Image from "next/image";
import { EstimateDividerIcon, TripleChevronIcon } from "../common/Icons";

const OneGetsSet = () => {
  return (
    <div className="main-container">
      <div className="section-heading service-text flex items-center justify-center gap-3">
        <span>
          <TripleChevronIcon />
        </span>
        One gets sent. The other gets redone.
        <span>
          <TripleChevronIcon />
        </span>
      </div>
      <div className="flex justify-between rounded-3xl border border-[#51585C] pt-4">
        <div className="flex w-[45%] items-center justify-center">
          <h4>Other AI estimating software</h4>
          <Image
            width={425}
            height={395}
            src="/images/webp/estimate-other.webp"
            alt="Other AI estimating software"
          />
        </div>
        <EstimateDividerIcon />
        <div className="flex w-[52%] items-center">
          <Image
            width={595}
            height={410}
            src="/images/webp/redone-estimatic.webp"
            alt="Other AI estimating software"
          />
        </div>
      </div>
    </div>
  );
};

export default OneGetsSet;
