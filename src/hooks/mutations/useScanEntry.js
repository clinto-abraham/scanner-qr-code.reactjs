"use strict";
import { useMutation } from "@tanstack/react-query";
import { scanEntryService } from "../../services";

export function useScanEntry() {
  return useMutation({
    mutationFn: scanEntryService,
  });
}
