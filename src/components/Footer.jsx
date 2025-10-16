import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="custom-cointainer bg-[#000] text-white md:pt-16 md:pb-8 pt-12 pb-6  text-center"
    >
      <h2 className="font-semibold text-3xl mb-6">Свяжитесь с нами:</h2>
      <ul className="mb-10 flex flex-col  gap-y-3.5">
        <li className="flex gap-x-5 items-center justify-center">
          <Phone className="text-gold" size={26} />
          <span>+998 907102442</span>
        </li>
        <li className="flex gap-x-5 items-center justify-center">
          <Mail className="text-gold" size={26} />
          <span>bozorovrustam2442@gmail.com</span>
        </li>
      </ul>
      <p className="text-center text-sm">ООО «METALAYER PROF»</p>
    </div>
  );
};

export default Footer;
