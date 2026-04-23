"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";

const queryClient = new QueryClient();

interface Props {
  children: ReactElement;
}

export default function TanstackLayout(props: Props) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
