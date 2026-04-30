import { Navbar, Hero, Experience, About, Tech, Works, Feedbacks, Contact, QuickContactBar, StarsCanvas } from "../../components";
import { notFound } from 'next/navigation';

import { buildLocalizedContent } from '../../constants';
import { getDictionary } from '../../i18n/get-dictionary';
import { isValidLocale } from '../../i18n/config';

export default async function Page({ params }) {
    const { lang } = await params;

    if (!isValidLocale(lang)) {
        notFound();
    }

    const dictionary = await getDictionary(lang);
    const content = buildLocalizedContent(dictionary);

    return (
        <div>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar
                        navLinks={content.navLinks}
                        roleLabel={dictionary.navbar.role}
                        currentLang={lang}
                        languageLabel={dictionary.navbar.languageLabel}
                        localeNames={dictionary.navbar.localeNames}
                    />
                    <Hero copy={dictionary.hero} />
                </div>
                <About copy={dictionary.about} services={content.services} />
                <Experience copy={dictionary.experience} experiences={content.experiences} />
                <Tech/>
                <Works copy={dictionary.works} projects={content.projects} />
                <Feedbacks copy={dictionary.testimonials} testimonials={content.testimonials} />
                <div className="relative z-0">
                    <Contact copy={dictionary.contact} />
                    <QuickContactBar copy={dictionary.contact.quickContact} />
                    <StarsCanvas/>
                </div>
            </div>
        </div>
    );
}