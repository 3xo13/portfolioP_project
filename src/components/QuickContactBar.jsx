import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

const contactEmail = "alkarim1310@gmail.com";
const contactPhone = "+905528643473";
const whatsappPhone = contactPhone.replace(/\D/g, "");

const QuickContactBar = ({ copy }) => {
  const whatsappHref = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    copy.whatsappMessage
  )}`;

  return (
    <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-6 pb-12 sm:px-16">
      <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,rgba(18,26,42,0.3),rgba(12,18,31,0.2))] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.78)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(145,94,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,206,168,0.07),transparent_30%)]" />
        <div className="h-1 w-full bg-gradient-to-r from-[#915eff] via-[#7b61ff] to-[#00cea8]" />
        <div className="relative grid gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_1fr_1fr] lg:items-center">
          <div className="pr-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
              {copy.label}
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#f2efff] sm:text-[15px]">
              {copy.description}
            </p>
          </div>
          <a
            href={`mailto:${contactEmail}`}
            className="group rounded-2xl bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-1 hover:bg-white/[0.08]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#915eff]/15 text-[#c8b8ff]">
                <FaEnvelope className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                  {copy.emailLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {contactEmail}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-secondary">
              {copy.emailHint}
            </p>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-1 hover:bg-white/[0.08]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00cea8]/12 text-[#7cf6da]">
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                  {copy.whatsappLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {contactPhone}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-secondary">
              {copy.whatsappHint}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickContactBar;