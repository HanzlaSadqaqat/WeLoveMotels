"use client";

import React from "react";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export const LeadCaptureForm = ({
  title = "Get Your Cash Offer Now",
  onSubmit,
}) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(form);
    }
  };

  return (
    <Card className="w-full md:w-[350px] xl:w-[450px] h-auto md:h-[494px] bg-white rounded-[20px] border-none">
      <CardContent className="flex flex-col items-center gap-10 p-10">
        <h3 className="w-full font-bold text-app-secondary text-xl text-center">
          {title}
        </h3>

        <div className="flex flex-col items-start gap-5 w-full">
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="h-[50px] px-5 py-2.5 rounded-[5px] border border-[#d0d5dd] text-xs"
          />
          <Input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="h-[50px] px-5 py-2.5 rounded-[5px] border border-[#d0d5dd] text-xs"
          />
          <Input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="h-[50px] px-5 py-2.5 rounded-[5px] border border-[#d0d5dd] text-xs"
          />
          <Input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Property Address"
            className="h-[50px] px-5 py-2.5 rounded-[5px] border border-[#d0d5dd] text-xs"
          />
        </div>

        <Button
          onClick={handleSubmit}
          className="px-[25px] py-2.5 bg-secondary-2 rounded-[10px] font-medium text-app-secondary text-base"
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};
