import BloodpressureTabelle from "../features/bloodpressures/BloodpressureTabelle";
import Heading from "../gui/Heading";
import Zeile from "../gui/Zeile";
import AddBloodpressure from "../features/bloodpressures/AddBloodpressure";
import BloodpressureTableOperations from "../features/bloodpressures/BloodpressureTableOperations";

function Bloodpressures() {
  return (
    <>
      <Zeile type="horizontal">
        <Heading as="h1">Bloodpressures</Heading>
        <BloodpressureTableOperations />
      </Zeile>
      <BloodpressureTabelle />
      <AddBloodpressure />
    </>
  );
}

export default Bloodpressures;
