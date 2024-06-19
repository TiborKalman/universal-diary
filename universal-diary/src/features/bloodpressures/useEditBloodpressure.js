import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditBloodpressure } from "../../services/apiBloodpressures";

export function useEditBloodpressure() {
  const queryClient = useQueryClient();

  const { mutate: editBloodpressure, isLoading: isEditing } = useMutation({
    mutationFn: ({ newBloodpressureData, id, created_at, pressureDate }) =>
      createEditBloodpressure(
        newBloodpressureData,
        id,
        created_at,
        pressureDate
      ),
    onSuccess: () => {
      toast.success("Bloodpressure successfully edited");
      queryClient.invalidateQueries({ queryKey: ["bloodpressures"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editBloodpressure };
}
