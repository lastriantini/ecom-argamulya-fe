import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";

const InfoAccount = ({ type, title, value }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      {type === "regular" && (
        <>
          <label className="arya-regular block text-sm mb-2 text-[#F2E6D8]">
            {title}
          </label>
          <textarea
            row="1"
            // placeholder={value}
            className="w-full bg-[#F2E6D8] h-[3.6vw] placeholder:text-[#422D1C]  arya-regular  p-[0.8vw] rounded-[10px]"
          >
            {value}
          </textarea>
        </>
      )}

      {type === "password" && (
        <div className="max-w-sm mb-5">
          <label
            htmlFor="hs-toggle-password-with-checkbox"
            className="arya-regular block text-sm mb-2 text-[#F2E6D8]"
          >
            {title}
          </label>
          <input
            id="hs-toggle-password-with-checkbox"
            type={passwordVisible ? "text" : "password"}
            className="bg-[#F2E6D8] arya-regular py-3 px-4 block w-full placeholder:text-[#422D1C] rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
            placeholder="Enter current password"
            value={value}
            onChange={() => {}}
          />

          <div className="flex mt-4">
            <input
              id="hs-toggle-password-checkbox"
              type="checkbox"
              checked={passwordVisible}
              onChange={() => setPasswordVisible(!passwordVisible)}
              className="mt-[-0.5vw] shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
            <label
              htmlFor="hs-toggle-password-checkbox"
              className="arya-regular mt-[-0.5vw] text-sm text-[#CFCFCF] ml-3 dark:text-neutral-400"
            >
              Show password
            </label>
          </div>
        </div>
      )}
      {type === "text-box" && (
        <>
          <label className="arya-regular block text-sm mb-2 text-[#F2E6D8]">
            {title}
          </label>
          <textarea
            rows="3"
            // placeholder={value}
            className="w-full bg-[#F2E6D8] placeholder:text-[#422D1C] arya-regular p-[0.8vw] rounded-[10px]"
          >
            {value}
          </textarea>
        </>
      )}
    </>
  );
};

export default InfoAccount;
