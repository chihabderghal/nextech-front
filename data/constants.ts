import {faDiscord, faFacebook, faInstagram, faLinkedin, faTiktok} from "@fortawesome/free-brands-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export const LINKS = [
    {
        title: "Members",
        link: "/members"
    },
    {
        title: "Newbie",
        link: "/#newbie"
    },
    {
        title: "NextBot",
        link: "/#app"
    },
    {
        title: "Contact Us",
        link: "/contact-us"
    },
    {
        title: "About Us",
        link: "/#about-us"
    },
];

export const FOOTER_LINKS = [
    {
        title: "Members",
        link: "/members"
    },
    {
        title: "Newbie",
        link: "/#newbie"
    },
    {
        title: "NextBot",
        link: "/#app"
    },
    {
        title: "Faqs",
        link: "/#faqs"
    },
    {
        title: "Contact Us",
        link: "/contact-us"
    },
    {
        title: "About Us",
        link: "/#about-us"
    },
];
export const SOCIAL_MEDIA: { name: string, link: string, image_path: string, icon: IconProp }[] = [
    {
        name: "Facebook",
        link: "https://www.facebook.com/people/NextTech/61553474487971/?mibextid=ZbWKwL",
        image_path: "/facebook.png",
        icon: faFacebook,
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/nextech.squad/?igshid=OHFwZmNvb2QwcDVi",
        image_path: "/instagram.png",
        icon: faInstagram,
    },
    {
        name: "Discord",
        link: "https://discord.gg/d3m3GSaDxb",
        image_path: "/discord.png",
        icon: faDiscord,
    },
    {
        name: "TikTok",
        link: "https://www.tiktok.com/@nextech.squad?_t=8kP8KJyVyFB&_r=1",
        image_path: "/tiktok.png",
        icon: faTiktok,
    },
    {
        name: "Linkdin",
        link: "#", // NO link for now
        image_path: "/linkedin.png",
        icon: faLinkedin,
    },
];

export const LOCATION: string = "Université Constantine 2 Abdelhamid Mehri – Nouvelle ville Ali Mendjeli BP :" +
    " 67A, Constantine – Algérie La Nouvelle Ville Ali Mendjeli, 25016";
export const EMAIL: string = "nextechsquad@gmail.com";

export const CONTACT_MESSAGE = "Don't hesitate to contact us using the form below. You can also email us or even come by to meet." +
    " Our direct messages are open on all social platforms, be sure that a response will find its way back to you right away! ";

export const COPY: string = "Copyright";
export const RIGHT: string = "2024 - All rights reserved";

export const EVENT_NAME: string = "nextopia";

export const FORM_LINK = "#";