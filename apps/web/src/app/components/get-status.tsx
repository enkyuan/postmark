"use client";

import type { GetStatusResponse } from "@monorepo/types";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader } from "@monorepo/ui/components/card";
import { cn } from "@monorepo/utils/styles";
import { useEffect, useState } from "react";

const GetStatus = () => {
  const [test, setTest] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await fetch("http://localhost:3001/status");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: GetStatusResponse = await response.json();
        setTimeout(() => {
          setTest(data.message);
          setLoading(false);
        }, 3000);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };
    fetchTest();
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <h3
          className={cn(
            "text-xl font-semibold",
            loading && "text-yellow-500",
            test && !error && "text-green-500",
            error && "text-red-500"
          )}
        >
          API
        </h3>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon
              icon="svg-spinners:bars-rotate-fade"
              className="w-4 h-4 animate-spin"
            />
            Testing connection...
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-green-500">{test}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default GetStatus;
