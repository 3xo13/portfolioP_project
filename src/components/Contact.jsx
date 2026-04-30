"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { CONTACT_ERROR_CODES, sanitizeContactDraft, sanitizeContactInput } from "../lib/contact";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = ({ copy }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const mapErrorCodeToMessage = (errorCode) => {
    if (copy.feedback.validation[errorCode]) {
      return copy.feedback.validation[errorCode];
    }

    if (errorCode === CONTACT_ERROR_CODES.rateLimited) {
      return copy.feedback.rateLimited;
    }

    return copy.feedback.genericError;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const nextForm = sanitizeContactDraft({
      ...form,
      [name]: value,
    });

    setForm(nextForm);
    setFeedback({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const sanitizedForm = sanitizeContactInput(form);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedForm),
      });

      const result = await response.json();

      if (!response.ok) {
        const firstError = result?.errors
          ? Object.values(result.errors)[0]
          : result?.code;

        setFeedback({
          type: "error",
          message: mapErrorCodeToMessage(firstError),
        });
        return;
      }

      setFeedback({
        type: "success",
        message: copy.feedback.success,
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setFeedback({
        type: "error",
        message: copy.feedback.genericError,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex items-stretch xl:flex-row flex-col-reverse gap-10 overflow-visible`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='relative z-10 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,rgba(20,28,45,0.34),rgba(11,17,29,0.24))] p-8 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.78)] backdrop-blur-xl xl:flex-[0.82]'
      >
        <div className='pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#915eff] via-[#7b61ff] to-[#00cea8]' />
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(145,94,255,0.09),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,206,168,0.08),transparent_28%)]' />
        <div className='relative'>
        <p className={styles.sectionSubText}>{copy.intro}</p>
        <h3 className={styles.sectionHeadText}>{copy.title}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{copy.fields.name}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              autoComplete='name'
              maxLength={80}
              placeholder={copy.placeholders.name}
              className='rounded-xl border border-white/8 bg-white/5 py-4 px-6 font-medium text-white outline-none backdrop-blur-md placeholder:text-secondary focus:border-[#915eff]/35 focus:bg-white/8'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{copy.fields.email}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              autoComplete='email'
              inputMode='email'
              maxLength={160}
              placeholder={copy.placeholders.email}
              className='rounded-xl border border-white/8 bg-white/5 py-4 px-6 font-medium text-white outline-none backdrop-blur-md placeholder:text-secondary focus:border-[#915eff]/35 focus:bg-white/8'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{copy.fields.phone} <span className='text-secondary'>({copy.fields.optional})</span></span>
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              autoComplete='tel'
              inputMode='tel'
              maxLength={30}
              placeholder={copy.placeholders.phone}
              className='rounded-xl border border-white/8 bg-white/5 py-4 px-6 font-medium text-white outline-none backdrop-blur-md placeholder:text-secondary focus:border-[#915eff]/35 focus:bg-white/8'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{copy.fields.message}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              maxLength={2000}
              placeholder={copy.placeholders.message}
              className='rounded-xl border border-white/8 bg-white/5 py-4 px-6 font-medium text-white outline-none backdrop-blur-md placeholder:text-secondary focus:border-[#915eff]/35 focus:bg-white/8'
            />
          </label>

          {feedback.message ? (
            <p
              className={`text-sm ${
                feedback.type === "error" ? "text-red-300" : "text-green-300"
              }`}
            >
              {feedback.message}
            </p>
          ) : null}

          <button
            type='submit'
            disabled={loading}
            className='w-fit rounded-xl border border-[#915eff]/24 bg-[#915eff]/12 py-3 px-8 font-bold text-white outline-none shadow-[0_18px_45px_-20px_rgba(145,94,255,0.75)] transition hover:bg-[#915eff]/18 disabled:cursor-not-allowed disabled:opacity-70'
          >
            {loading ? copy.actions.sending : copy.actions.send}
          </button>
        </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='relative xl:-ml-28 xl:flex-[1.08] xl:min-h-[820px] xl:self-stretch md:h-[620px] h-[380px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");