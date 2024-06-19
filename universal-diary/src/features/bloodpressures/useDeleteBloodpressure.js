import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBloodpressure as deleteBloodpressureApi } from "../../services/apiBloodpressures";

export function useDeleteBloodpressure() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBloodpressure } = useMutation({
    mutationFn: deleteBloodpressureApi,
    onSuccess: () => {
      toast.success("bloodpressure successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["bloodpressures"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBloodpressure };
}
