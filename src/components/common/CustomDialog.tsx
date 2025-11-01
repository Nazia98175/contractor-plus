import React, { useEffect, ReactNode, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ModalCrossIcon } from "./Icons";

interface CustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  progress: number;
  step: number;
  totalSteps: number;
  renderStep: () => ReactNode;
  prevStep: () => void;
  nextStep: () => void;
  isSubmitting: boolean;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onOpenChange,
  progress,
  step,
  totalSteps,
  renderStep,
  prevStep,
  nextStep,
  isSubmitting,
}) => {
  const [visible, setVisible] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setVisible(false), 300); // wait for animation to finish
      document.body.style.overflow = "";
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center transition-opacity duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-[#000000aa] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => onOpenChange(false)}
      />

      {/* Modal */}
      <div
        className={`custom-scrollbar relative z-[10001] max-h-[90vh] w-full max-w-[90%] transform overflow-y-auto rounded-lg bg-white shadow-2xl transition-all duration-300 ease-out sm:max-w-2xl ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onOpenChange(false)}
          className={`absolute top-[10px] right-[10px] w-fit cursor-pointer rounded-full p-2`}
        >
          <ModalCrossIcon />
        </button>
        {/* Header */}
        <div className="bg-white px-6 pt-6 pb-2">
          <h2 className="text-xl font-semibold">Get Your Bookkeeping Quote</h2>

          {/* Progress Bar */}
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-red-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-black">
            Step {step} of {totalSteps}
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-4">{renderStep()}</div>

        {/* Footer */}
        <div className="flex justify-between border-t px-6 py-4">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition ${
              step === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={nextStep}
              disabled={isSubmitting}
              className={`bg-romanRed flex items-center rounded-md px-4 py-2 text-white transition ${
                isSubmitting
                  ? "cursor-not-allowed opacity-50"
                  : "hover:opacity-80"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Next"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => onOpenChange(false)}
              className="bg-romanRed hover:bg-romanRed/80 rounded-md px-4 py-2 text-white"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
