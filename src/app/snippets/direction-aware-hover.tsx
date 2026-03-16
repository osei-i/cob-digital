"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="border border-red flex flex-col items-start w-68 md:w-105 mx-auto p-4 relative h-100 md:h-[30rem]">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Responsive Website</p>
        <p className="font-normal text-sm">100%</p>
      </DirectionAwareHover>

       <h2 className="text-slate-700 mt-4 text-sm font-light">
        Hover over this card to reveal an awesome effect.
      </h2>
      <p className="text-sm border font-light border-black  rounded-full mt-4  text-slate-700 px-2 py-0.5">
        Watch me hover
      </p>
    </div>
  );
}

