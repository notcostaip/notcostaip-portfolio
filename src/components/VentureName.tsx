type VentureNameProps = {
  name: "coldconnectpay" | "ishopbox" | "automation";
  className?: string;
  fullAccent?: boolean;
};

export default function VentureName({ name, className = "", fullAccent = false }: VentureNameProps) {
  if (name === "coldconnectpay") {
    return <span translate="no" className={`notranslate ${fullAccent ? "text-red-500" : ""} ${className}`}>Coldconnect<span className="text-red-500">Pay</span></span>;
  }

  if (name === "ishopbox") {
    return <span translate="no" className={`notranslate ${fullAccent ? "text-red-500" : ""} ${className}`}>iSHOPBOX<span className="text-red-500">.</span></span>;
  }

  return <span className={`text-red-500 ${className}`}>Automation Stack</span>;
}
