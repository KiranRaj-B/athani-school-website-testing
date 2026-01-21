import { useEffect, useState } from "react";
import { X, Phone, Mail, Globe, MessageCircle } from "lucide-react";
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
        
        {/* Close Button - RED BOX */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-md p-1.5"
          aria-label="Close popup"
        >
          <X size={16} />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Need a website like this?
        </h2>

        {/* Simple Description */}
        <p className="text-gray-700 text-sm mb-6">
          We design modern school websites. Please contact us for more information.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          
          {/* Call */}
          <a href="tel:+919611929845">
            <Button className="w-full text-base py-6 flex gap-2">
              <Phone size={18} />
              Call Now: <strong>+91 96119 29845</strong>
            </Button>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919611929845?text=Hello%20sir%2C%20I%20need%20more%20information%20about%20school%20website."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full flex gap-2 bg-green-600 hover:bg-green-700">
              <MessageCircle size={16} />
              Chat on WhatsApp
            </Button>
          </a>

          {/* Website */}
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

        {/* Footer Note */}
        <p className="text-xl text-gray-500 text-center mt-5">
          This is a simple demo website
        </p>
      </div>
    </div>
  );
};

export default LeadPopup;
