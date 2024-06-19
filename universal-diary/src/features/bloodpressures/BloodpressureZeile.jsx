import Tabelle from "../../gui/Tabelle";
import styled from "styled-components";
import { getDateConverted } from "../../utils/helpers";
import ModalDialog from "../../gui/ModalDialog";
import ConfirmDeletion from "../../gui/ConfirmDeletion";
import { useDeleteBloodpressure } from "./useDeleteBloodpressure";
import { deleteBloodpressure } from "../../services/apiBloodpressures";
import MyMenus from "../../gui/MyMenus";
import { useNavigate } from "react-router-dom";

import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
  HiPencil,
} from "react-icons/hi2";
import BloodpressureCreateForm from "./BloodpressureCreateForm";

const ZeileFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey5);
    font-size: 1.2rem;
  }
`;

/* eslint-disable react/prop-types */
function BloodpressureZeile({ bloodpressure }) {
  const { deleteBloodpressure, isDeleting } = useDeleteBloodpressure();
  const navigate = useNavigate();

  const {
    id: bloodpressureId,
    created_at,
    pressureDate,
    sys_mmhg,
    dia_mmhg,
    pulse_per_minute,
  } = bloodpressure;

  return (
    <Tabelle.Zeile>
      <ZeileFlex>{bloodpressureId}</ZeileFlex>
      <ZeileFlex>{getDateConverted(created_at)}</ZeileFlex>
      <ZeileFlex>{getDateConverted(pressureDate)}</ZeileFlex>
      <ZeileFlex>{sys_mmhg}</ZeileFlex>
      <ZeileFlex>{dia_mmhg}</ZeileFlex>
      <ZeileFlex>{pulse_per_minute}</ZeileFlex>
      <ModalDialog>
        <MyMenus>
          <MyMenus.Menu>
            <MyMenus.Toggle id={bloodpressureId} />
            <MyMenus.List id={bloodpressureId}>
              <MyMenus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/bloodpressure/${bloodpressureId}`)}
              >
                Details without Dialog
              </MyMenus.Button>

              <ModalDialog.Open opens="edit">
                <MyMenus.Button icon={<HiPencil />}>
                  Edit Bloodpressure
                </MyMenus.Button>
              </ModalDialog.Open>

              <ModalDialog.Open opens="delete">
                <MyMenus.Button icon={<HiTrash />}>
                  Delete bloodpressure
                </MyMenus.Button>
              </ModalDialog.Open>
            </MyMenus.List>
          </MyMenus.Menu>
        </MyMenus>

        <ModalDialog.Window name="edit">
          <BloodpressureCreateForm bloodpressureToEdit={bloodpressure} />
        </ModalDialog.Window>

        <ModalDialog.Window name="delete">
          <ConfirmDeletion
            resourceName="bloodpressure"
            disabled={isDeleting}
            onConfirm={() =>
              deleteBloodpressure(bloodpressureId, {
                onSettled: () => navigate("/bloodpressure"),
              })
            }
          />
        </ModalDialog.Window>
      </ModalDialog>
    </Tabelle.Zeile>
  );
}

export default BloodpressureZeile;
