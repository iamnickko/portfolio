"use client";
import SectionTitle from "../../UI/SectionH2";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Employer({
  company,
  companySummary,
  role,
  start,
  end,
  summary,
  role2,
  summary2,
}) {
  return (
    <article className="mb-10 md:flex justify-evenly">
      <p className="text-pale text-xs mb-2 uppercase w-full md:max-w-xs md:mb-0 md:font-bold">
        {start} - {end}
      </p>
      <div className="flex border-l-2 pl-3 border-slate-400 md:max-w-lg w-full">
        <div className="text-pale">
          <h4 className="text-xs font-bold uppercase">{company}</h4>
          <p className="italic">{companySummary}</p>
          <h3 className="font-bold text-2xl mb-3">{role}</h3>
          <p>{summary}</p>
          <h3 className="font-bold text-2xl mb-3">{role2}</h3>
          <p>{summary2}</p>
        </div>
      </div>
    </article>
  );
}
