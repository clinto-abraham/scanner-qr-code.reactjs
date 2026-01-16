"use strict";
import { useMutation } from "@tanstack/react-query";
import { scanFoodService } from "../../services";

export function useScanFood() {
  return useMutation({
    mutationFn: scanFoodService,
  });
}
