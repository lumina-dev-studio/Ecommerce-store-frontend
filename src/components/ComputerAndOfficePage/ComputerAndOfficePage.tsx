import Container from "@/SharedComponent/Container/Container";
import ComputerAndOfficePageBannerSection from "./ComputerAndOfficePageBannerSection/ComputerAndOfficePageBannerSection";
import ComputerAndOffice from "./ComputerAndOffice/ComputerAndOffice";
import Monitors from "./Monitors/Monitors";
import PrintersAndScanners from "./PrintersAndScanners/PrintersAndScanners";
import InputDevices from "./InputDevices/InputDevices";

const ComputerAndOfficePage = () => {
  return (
    <Container>
        <ComputerAndOfficePageBannerSection/>
        <ComputerAndOffice/>
        <Monitors/>
        <PrintersAndScanners/>
        <InputDevices/>
      
    </Container>
  );
};

export default ComputerAndOfficePage;