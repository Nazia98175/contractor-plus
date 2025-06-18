"use client";
import CommonFormField from "../common/CommonFormField";

interface EntireBusiness {
  title: string;
  sub_title: string;
  txt: string;
  btnTxt: string;
  mobileBtn: string;
  url: string;
}
interface TheEntireBusinessProps {
  entireBusiness: EntireBusiness[];
  ncc_text: string;
}

const EntireBusiness: React.FC<TheEntireBusinessProps> = ({
  entireBusiness,
  ncc_text,
}) => {
  return (
    <div className="relative z-10 px-2 pt-[38px] pb-7 md:py-11">
      <CommonFormField
        title={entireBusiness?.[0]?.title}
        sub_title={entireBusiness?.[0]?.sub_title}
        placeholder={entireBusiness?.[1]?.txt}
        createBtn={entireBusiness?.[0]?.btnTxt}
        mobileBtn={entireBusiness?.[1]?.mobileBtn}
        ncc={ncc_text}
      />
    </div>
  );
};

export default EntireBusiness;
