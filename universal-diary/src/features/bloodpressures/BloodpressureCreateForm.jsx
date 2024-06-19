import { useForm, Controller } from "react-hook-form";
import { useEditBloodpressure } from "./useEditBloodpressure";
import { useCreateBloodpressure } from "./useCreateBloodpressure";
import { toast } from "react-hot-toast";
import Form from "../../gui/Form";
import FormZeile from "../../gui/FormZeile";
import Input from "../../gui/Input";
import Button from "../../gui/Button";

import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/* eslint-disable react/prop-types */
function BloodpressureCreateForm({ bloodpressureToEdit = {}, onCloseModal }) {
  const {
    id: editId,
    created_at: editCreatedAt,
    pressureDate: editPressureDate,
    ...editValues
  } = bloodpressureToEdit;
  const isEditSession = Boolean(editId);

  console.log("isEditSession " + isEditSession);

  const { control, register, handleSubmit, reset, getValues, formState } =
    useForm({
      defaultValues: isEditSession ? editValues : {},
    });

  const { errors } = formState;
  console.log(errors);

  const { isCreating, createBloodpressure } = useCreateBloodpressure();
  const { isEditing, editBloodpressure } = useEditBloodpressure();

  const isWorking = isCreating || isEditing;

  const [sysMmhg, setSysMmhg] = useState(0);

  //Datepicker
  const [created_at, setCreated_at] = useState(
    isEditSession ? new Date(editCreatedAt) : new Date()
  );
  console.log("created_at: " + created_at);

  const [pressureDate, setPressureDate] = useState(
    isEditSession ? new Date(editPressureDate) : new Date()
  );
  console.log("pressureDate: " + pressureDate);

  function onError(errors) {
    toast.error("Bloodpressure could not be inserted");
    console.log(errors);
  }

  function onSubmit(data) {
    //console.log("onSubmit(): " + created_at);
    //console.log("onSubmit2(): " + isEditSession);
    console.log("created_at(): " + created_at);
    if (isEditSession) {
      editBloodpressure(
        {
          newBloodpressureData: { ...data },
          id: editId,
          pressureDate: pressureDate,
          created_at: created_at,
        },
        {
          onSuccess: (data) => {
            console.log("onSuccess..." + data);
            onCloseModal?.();
          },
        }
      );
    } else {
      createBloodpressure(
        { newBloodpressureData: { ...data } },
        {
          onSuccess: (data) => {
            console.log("data1");
            console.log("data2" + data);
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }
  return (
    <>
      <div>Bloodpressure Dialog</div>
      <br />
      <Form
        onSubmit={handleSubmit(onSubmit, onError)}
        type={onCloseModal ? "modal" : "regular"}
      >
        <FormZeile label="Created At" error={errors?.created_at?.message}>
          <Controller
            control={control}
            name="created_at"
            render={() => (
              <DatePicker
                dateFormat="dd-MM-yyyy HH:mm aa"
                selected={created_at}
                onChange={(date) => setCreated_at(date)}
              />
            )}
          />
        </FormZeile>
        <FormZeile label="Pressure Date" error={errors?.pressureDate?.message}>
          <Controller
            control={control}
            name="pressureDate"
            render={() => (
              <DatePicker
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={15}
                dateFormat="dd-MM-yyyy HH:mm aa"
                selected={pressureDate}
                onChange={(date) => setPressureDate(date)}
              />
            )}
          />
        </FormZeile>
        <FormZeile label="Sys [mmHg]" error={errors?.sys_mmhg?.message}>
          <Input
            onChange={(e) => setSysMmhg(e.target.value)}
            type="number"
            id="sys_mmhg"
            disabled={isWorking}
            {...register("sys_mmhg", { required: "this is required" })}
          />
        </FormZeile>
        <FormZeile label="Dia [mmHg]" error={errors?.diammhg?.message}>
          <Input
            type="number"
            id="diammhg"
            disabled={isWorking}
            {...register("dia_mmhg", {
              required: "This value is required",
              min: {
                value: 1,
                message: "Dia should be at least 1",
              },
            })}
          />
        </FormZeile>
        <FormZeile
          label="Pulse [beats/min]"
          error={errors?.pulseperminute?.message}
        >
          <Input
            type="number"
            id="pulseperminute"
            disabled={isWorking}
            {...register("pulse_per_minute", {
              required: "This value is required",
              min: {
                value: 1,
                message: "Pulse should be at least 1",
              },
            })}
          />
        </FormZeile>
        <FormZeile>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isWorking} onChange={(e) => e.preventDefault()}>
            {isEditSession ? "Edit Bloodpressure" : "Create New Bloodpressure"}
          </Button>
        </FormZeile>
        <FormZeile></FormZeile>
      </Form>
    </>
  );
}

export default BloodpressureCreateForm;
