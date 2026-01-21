import { useEffect, useState } from "react";
import { X, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const startTimer = () => {
      timer = setTimeout(() => {
        setOpen(true);
      }, 10000); // 10 seconds
    };

    startTimer();

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);

    // Restart popup after 10 seconds
    setTimeout(() => {
      setOpen(true);
    }, 10000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
        
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Need a website like this?
        </h2>

        <p className="text-gray-700 text-sm mb-6">
          We design modern, premium school websites. Please call us for more information.
        </p>

        {/* CALL TO ACTION – MAIN FOCUS */}
        <div className="flex flex-col gap-4">
          
          <a href="tel:+919611929845">
            <Button className="w-full text-base py-6 flex gap-2">
              <Phone size={18} />
              Call Now: <strong>+91 96119 29845</strong>
            </Button>
          </a>

          <a href="mailto:kiranrajbadakambi@gmail.com">
            <Button variant="outline" className="w-full flex gap-2">
              <Mail size={16} />
              kiranrajbadakambi@gmail.com
            </Button>
          </a>

          <a
            href="https://trevia.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="w-full flex gap-2">
              <Globe size={16} />
              Visit Our Website
            </Button>
          </a>

        </div>

        <p className="text-xs text-gray-500 text-center mt-5">
          This is a simple demo website
        </p>
      </div>
    </div>
  );
};

export default LeadPopup;
