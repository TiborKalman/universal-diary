import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditBloodpressure } from "../../services/apiBloodpressures";

export function useCreateBloodpressure() {
  console.log("in useCreateBloodpressure ...");

  const queryClient = useQueryClient();
  console.log("in useCreateBloodpressure 2 ...");

  const { mutate: createBloodpressure, isLoading: isCreating } = useMutation({
    mutationFn: ({ newBloodpressureData, created_at, pressureDate }) =>
      createEditBloodpressure(newBloodpressureData, created_at, pressureDate),
    onSuccess: () => {
      toast.success("new Bloodpressure created " + createBloodpressure);
      queryClient.invalidateQueries({ queryKey: ["bloodpressures"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createBloodpressure };
}
