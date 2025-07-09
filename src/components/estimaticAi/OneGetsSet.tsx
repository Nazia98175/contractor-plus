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
      <div className="flex justify-between rounded-3xl border border-[#51585C] pt-6">
        <div className="col flex w-[45%] flex-col items-center justify-center">
          <div className="text-secondary font-myriad mb-5 flex items-center gap-4 text-xl font-semibold">
            <h4>Other AI estimating software</h4>
            <Image src="/images/png/😖.png" alt="" width={28} height={28} />
          </div>
          <Image
            width={425}
            height={395}
            src="/images/webp/estimate-other.webp"
            alt="Other AI estimating software"
          />
        </div>
        <EstimateDividerIcon />
        <div className="flex w-[52%] flex-col items-center justify-end">
          <Image
            width={140}
            height={20}
            alt=""
            className="mb-3"
            src="/images/svg/estimatic.svg"
          />
          <Image
            width={598}
            height={415}
            src="/images/webp/redone-estimatic.webp"
            alt="Other AI estimating software"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OneGetsSet;
