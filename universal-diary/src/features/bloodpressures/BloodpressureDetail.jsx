import Button from "../../gui/Button";
import ButtonGruppe from "../../gui/ButtonGruppe";
import ConfirmDeletion from "../../gui/ConfirmDeletion";
import ModalDialog from "../../gui/ModalDialog";
import { useMoveBack } from "../../hooks/useMoveBack";
import { deleteBloodpressure } from "../../services/apiBloodpressures";
import { useNavigate } from "react-router-dom";
import { useDeleteBloodpressure } from "./useDeleteBloodpressure";
import Zeile from "../../gui/Zeile";
import { useBloodpressure } from "./useBloodpressure";
import Heading from "../../gui/Heading";
import styled from "styled-components";
import MySpinner from "../../gui/MySpinner";
import EmptyResource from "../../gui/EmptyResource";
import BloodpressureDataBox from "./BloodpressureDataBox";

const HeadingGruppe = styled.div`
  align-items: center;
  display: flex;
  gap: 2.5rem;
`;

function BloodpressureDetail() {
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const { deleteBloodpressure, isDeleting } = useDeleteBloodpressure();
  const { bloodpressure, isLoading, error } = useBloodpressure();

  if (isLoading) return <MySpinner />;
  if (!bloodpressure) return <EmptyResource resourceName="bloodpressure" />;

  //console.log("error: " + error);

  //console.log("bloodpressure:::::: " + bloodpressure);
  const { id: bloodpressureId } = bloodpressure;

  return (
    <>
      <Zeile>
        <HeadingGruppe>
          <Heading as="h1">Bloodpressure ID: {bloodpressureId}</Heading>
        </HeadingGruppe>
      </Zeile>

      <BloodpressureDataBox bloodpressure={bloodpressure} />

      <ButtonGruppe>
        <ModalDialog>
          <ModalDialog.Open opens="delete">
            <Button variation="secondary">Delete bloodpressure</Button>
          </ModalDialog.Open>

          <ModalDialog.Window name="delete">
            <ConfirmDeletion
              resourceName="bloodpressure"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBloodpressure(bloodpressureId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </ModalDialog.Window>
        </ModalDialog>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGruppe>
    </>
  );
}

export default BloodpressureDetail;
