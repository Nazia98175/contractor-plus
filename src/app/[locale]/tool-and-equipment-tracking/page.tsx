import AutomatedClientHero from "@/components/automatedclientagreements/AutomatedClientHero";
import {
  clientReviews,
  dealflowhero,
  toolManagingData,
} from "@/components/common/Helper";
import SwitchingTool from "@/components/crmbussiness/SwitchingTool";
import TrustedService from "@/components/crmbussiness/TrustedService";

const ToolAndTipEquipmentPage = () => {
  return (
    <main className="overflow-hidden">
      <AutomatedClientHero
        hero={{
          heroTitle:
            "Finally, a way to track and audit every tool across every job",
          heroDescription:
            "One system to tag, assign, scan and recover every asset.",
        }}
        featureTag="Tool Inventory Software"
        heroImg="/images/png/tool-and-equipment-1.png"
        slug="crm"
        commonData={dealflowhero}
      />
      <TrustedService reviews={clientReviews} slug="crm" apiData={false} />
      <SwitchingTool switchingTool={toolManagingData} />
    </main>
  );
};

export default ToolAndTipEquipmentPage;
