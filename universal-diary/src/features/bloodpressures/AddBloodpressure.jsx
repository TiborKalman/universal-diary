import Button from "../../gui/Button";
import ModalDialog from "../../gui/ModalDialog";
import BloodpressureCreateForm from "./BloodpressureCreateForm";

function AddBloodpressure() {
  return (
    <>
      <ModalDialog>
        <ModalDialog.Open opens="bloodpressure-form">
          <Button>Add new Bloodpressure</Button>
        </ModalDialog.Open>
        <ModalDialog.Window name="bloodpressure-form">
          <BloodpressureCreateForm />
        </ModalDialog.Window>
      </ModalDialog>
    </>
  );
}

export default AddBloodpressure;
