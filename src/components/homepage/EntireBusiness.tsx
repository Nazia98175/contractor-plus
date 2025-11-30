import CommonFormField from "../common/CommonFormField";

interface EntireBusiness {
  title: string;
  subTitle: string;
  txt: string;
  btnText: string;
  mobileBtn: string;
  url: string;
  placeholder: string;
}
interface TheEntireBusinessProps {
  entireBusiness: EntireBusiness;
  ncc_text: string;
  mobileBtn: string;
  createBtn: string;
}

const EntireBusiness: React.FC<TheEntireBusinessProps> = ({
  entireBusiness,
  ncc_text,
  mobileBtn,
  createBtn,
}) => {
  return (
    <div className="relative z-10 px-2 pt-[38px] pb-7 md:py-11">
      <CommonFormField
        variant="primary"
        title={entireBusiness?.title}
        subTitle={entireBusiness?.subTitle}
        placeholder={entireBusiness?.placeholder}
        createBtn={createBtn}
        mobileBtn={mobileBtn}
        ncc={ncc_text}
        variantBtn="light"
           showonlybutton={false}
      />
    </div>
  );
};

export default EntireBusiness;
