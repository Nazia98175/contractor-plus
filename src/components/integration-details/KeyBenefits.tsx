import React from 'react'

interface KeyBenefitsProps {
  integrationData: any;
}

const KeyBenefits: React.FC<KeyBenefitsProps> = ({integrationData}) => {
    console.log(integrationData,"integrationData");
    
  return (
    <div className="basis-[40%] space-y-3.5 xl:space-y-3.5">
      <h4 className="mb-2 text-xl font-bold text-white capitalize">
        {integrationData?.title ?? ""} 
      </h4>
      <ul className="list-disc space-y-3 pl-6 xl:pl-10">
        {integrationData?.benefitList &&
          integrationData?.benefitList.map((obj: any) => (
            <li
              key={obj.id}
              className="xs-heading text-coldGrey font-semibold italic duration-300"
            >
              {obj.text}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default KeyBenefits