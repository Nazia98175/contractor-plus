import CloudsAnimation from "../common/CloudsAnimation";
import CommonFormField from "../common/CommonFormField";
interface Props {
  data: any;
  ncc: string;
  createBtn: string;
  mobileBtn: string;
  showClouds?: boolean;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

const CrmSercive: React.FC<Props> = ({
  data,
  ncc,
  createBtn,
  mobileBtn,
  showClouds,
  className,
  variant = "default",
}) => {
  return (
    <section className="relative z-20 overflow-hidden px-2 xl:overflow-visible">
      <div className="pt-14 pb-10 sm:pt-20 sm:pb-[75px] lg:pt-[110px] xl:pt-[120px]">
        <CommonFormField
          title={data?.title}
          sub_title={data?.sub_title}
          ncc={ncc}
          placeholder={data?.placeholder}
          createBtn={createBtn}
          mobileBtn={mobileBtn}
          variant={variant}
          className={className}
        />
      </div>
      {showClouds !== false && (
        <CloudsAnimation
          className="pointer-events-none absolute top-[-13%] -bottom-[11%] left-0 z-50 flex h-[67%] w-full rotate-180 sm:top-[-11%]"
          imageClass="h-[50%] z-20 !bottom-[-30px]"
          imageClassMobile="h-[50%] z-20 !bottom-[30px]"
          cloud1Class="md:bottom-0 !bottom-[47px] sm:bottom-[65px] h-[84px]"
          cloud2Class="bottom-0"
        />
      )}
    </section>
  );
};

export default CrmSercive;
