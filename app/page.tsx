import { CareersPage } from "@/components/careers-page";
import { Model_3Page } from "@/components/model-3-page";
import { ModelXPageEnhanced } from "@/components/model-x-page-enhanced";
import { ModelYPage } from "@/components/model-y-page";
import { SolarRoofPage } from "@/components/solar-roof-page";
import { TeslaHomepage } from "@/components/tesla-homepage";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <TeslaHomepage />
    <ModelYPage/>
    <Model_3Page/>
    <ModelXPageEnhanced/>
    <SolarRoofPage/>
    <CareersPage/>
    </>
  );
}
