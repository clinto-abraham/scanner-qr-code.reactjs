"use strict";
import { useMutation } from "@tanstack/react-query";
import { scanStayService } from "../../services";

export function useScanStay() {
  return useMutation({
    mutationFn: scanStayService,
  });
}
