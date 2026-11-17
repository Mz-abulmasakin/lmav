import React, { useEffect, useRef } from "react";
import parse from "html-react-parser";
import AdditionalPhotoGallery from "./components/AdditionalPhotoGallery";
import { pageMarkup } from "./pageMarkup";
import "./styles.css";

export default function App() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const toggle = page.querySelector("#mobileToggle");
    const nav = page.querySelector("#navlinks");
    const form = page.querySelector("#interestForm");
<<<<<<< HEAD
=======
    const formMessage = page.querySelector("#formMessage");
>>>>>>> ce9c56f97d2f60881e2f03f242e192f08cc3d4d2
    const year = page.querySelector("#year");

    const handleToggle = () => {
      const isOpen = nav?.classList.toggle("open") ?? false;
      toggle?.setAttribute("aria-expanded", String(isOpen));
      toggle?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    };

    const closeNav = () => {
      nav?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
      toggle?.setAttribute("aria-label", "Open navigation");
    };

    const handleSubmit = (event) => {
      event.preventDefault();
<<<<<<< HEAD
      const values = new FormData(form);
      const message = [
        "LMAV – Register Interest",
        `Full name: ${values.get("fullName") || ""}`,
        `Email: ${values.get("email") || ""}`,
        `State / location: ${values.get("state") || ""}`,
        `Interest: ${values.get("interest") || ""}`,
        `Message: ${values.get("message") || "Not provided"}`,
      ].join("\n");
      const whatsappUrl = `https://wa.me/2348140332887?text=${encodeURIComponent(message)}`;
      window.location.assign(whatsappUrl);
=======
      formMessage?.classList.add("show");
>>>>>>> ce9c56f97d2f60881e2f03f242e192f08cc3d4d2
    };

    toggle?.addEventListener("click", handleToggle);
    nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    form?.addEventListener("submit", handleSubmit);
    if (year) year.textContent = String(new Date().getFullYear());

    return () => {
      toggle?.removeEventListener("click", handleToggle);
      nav?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeNav));
      form?.removeEventListener("submit", handleSubmit);
    };
  }, []);

  const pageOptions = {
    replace(domNode) {
      if (domNode.type === "tag" && domNode.name === "div" && domNode.attribs?.id === "react-additional-photos") {
        return <AdditionalPhotoGallery key="additional-project-photos" />;
      }
      return undefined;
    },
  };

  return <div ref={pageRef}>{parse(pageMarkup, pageOptions)}</div>;
}
