"use client";

import { FormEvent, useMemo, useState } from "react";

type LeadForm = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  property: string;
  paymentPlan: string;
  timeline: string;
};

const initialForm: LeadForm = {
  fullName: "",
  phone: "",
  email: "",
  location: "Nigeria",
  property: "Luxury Apartment",
  paymentPlan: "",
  timeline: "",
};

export default function WhatsAppForm() {
  const [form, setForm] = useState<LeadForm>(initialForm);

  const whatsappLink = useMemo(() => {
    const message = `Hello CHEXTON GLOBAL,

I would like to make an enquiry:

Name: ${form.fullName}
Phone: ${form.phone}
Email: ${form.email}
Location: ${form.location}
Property: ${form.property}
Payment Plan: ${form.paymentPlan}
Timeline: ${form.timeline}

Please assist me.`;

    return `https://wa.me/2349050083475?text=${encodeURIComponent(message)}`;
  }, [form]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = whatsappLink;
  };

  return (
    <form onSubmit={onSubmit} className="luxury-form">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(event) =>
            setForm((current) => ({ ...current, fullName: event.target.value }))
          }
        />
        <input
          required
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={(event) =>
            setForm((current) => ({ ...current, phone: event.target.value }))
          }
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
        />
        <select
          value={form.location}
          onChange={(event) =>
            setForm((current) => ({ ...current, location: event.target.value }))
          }
        >
          <option value="Nigeria">Nigeria</option>
          <option value="Diaspora">Diaspora</option>
        </select>
        <select
          value={form.property}
          onChange={(event) =>
            setForm((current) => ({ ...current, property: event.target.value }))
          }
        >
          <option value="Luxury Apartment">Luxury Apartment</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Detached Villa">Detached Villa</option>
          <option value="Investment Land">Investment Land</option>
        </select>
        <input
          required
          type="text"
          placeholder="Payment Plan"
          value={form.paymentPlan}
          onChange={(event) =>
            setForm((current) => ({ ...current, paymentPlan: event.target.value }))
          }
        />
        <input
          required
          type="text"
          placeholder="Timeline"
          value={form.timeline}
          onChange={(event) =>
            setForm((current) => ({ ...current, timeline: event.target.value }))
          }
          className="md:col-span-2"
        />
      </div>
      <button type="submit" className="button-luxury mt-6 w-full sm:w-auto">
        Submit & Chat on WhatsApp
      </button>
    </form>
  );
}
