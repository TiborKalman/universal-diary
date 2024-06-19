import SortBy from "../../gui/SortBy";
import TabellenOperationen from "../../gui/TabellenOperationen";

function BloodpressureTableOperations() {
  return (
    <TabellenOperationen>
      <SortBy
        options={[
          { value: "pressureDate-desc", label: "Sort by date (recent first)" },
          { value: "pressureDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "sys_mmhg-desc",
            label: "sys_mmhg (high first)",
          },
          { value: "sys_mmhg-asc", label: "Sort by sys_mmhg (low first)" },
        ]}
      />
    </TabellenOperationen>
  );
}
export default BloodpressureTableOperations;
