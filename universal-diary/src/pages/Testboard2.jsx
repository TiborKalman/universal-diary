import MeineKomponente from "../tutorial/a2/MeineKomponente.jsx";

function Testboard2() {
  return (
    <>
      <div>Testboard2</div>
      <MeineKomponente
        onMyClick={() => alert("onMyClick pressed")}
        onMyMouseOver={() => alert("onMyMouseOver")}
      />
    </>
  );
}

export default Testboard2;
