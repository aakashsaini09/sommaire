import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge
              variant={"secondary"}
              className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors"
            >
              <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
              <p className="text-base">AI-Powered Content Creation</p>
            </Badge>
          </div>
          <h1>Start Uploading Your PDF's</h1>
          <p>Upload your PDF and let our AI do the magic! 🪄</p>
        </div>
      </div>
    </section>
  );
};

export default page;
