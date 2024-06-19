import EmptyResource from "../../gui/EmptyResource";
import MySpinner from "../../gui/MySpinner";
import Tabelle from "../../gui/Tabelle";
import BloodpressureZeile from "./BloodpressureZeile";
import { useBloodpressures } from "./useBloodpressures";
import Paging from "../../gui/Paging";
import { useSearchParams } from "react-router-dom";

function BloodpressureTabelle() {
  const { bloodpressures, isLoading, count } = useBloodpressures();
  const [searchParams] = useSearchParams();

  if (isLoading) return <MySpinner />;

  //setNumRows(bloodpressures.length);

  if (!bloodpressures.length)
    return <EmptyResource>No data to show at the moment</EmptyResource>;

  //console.log("bloodpressuresccc {bloodpressures}");

  //console.log("bloodpressures2 " + { bloodpressures } + " ");
  // Bloodpressure Table {numRows} _ {count}

  //console.log("bloodpressures.length " + bloodpressures.length);

  //bloodpressures.map((item) => {
  //console.log("item.id...222" + item.id);
  //console.log("item.created_at...222" + item.created_at);
  // });

  return (
    <>
      <Tabelle columns="1.0fr 1.0fr 1.0fr 1.0fr 1.0fr 1.0fr 1rem">
        <Tabelle.Header>
          <div>Id</div>
          <div>Creation Date</div>
          <div>Pressure Date</div>
          <div>Sys [mmhg]</div>
          <div>Dia [mmhg]</div>
          <div>Pulse [/min]</div>
        </Tabelle.Header>

        <Tabelle.Body
          data={bloodpressures}
          render={(bloodpressure) => (
            <BloodpressureZeile
              key={bloodpressure.id}
              bloodpressure={bloodpressure}
            />
          )}
        />

        <Tabelle.Footer>
          <Paging count={count}></Paging>
        </Tabelle.Footer>
      </Tabelle>
    </>
  );
}

export default BloodpressureTabelle;
