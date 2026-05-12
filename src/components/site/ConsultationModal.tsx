"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  interest: z.string().min(1, "Please select an area of interest"),
});

type FormValues = z.infer<typeof formSchema>;

export function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interest: "Investment",
    }
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Construct WhatsApp message
    const message = `Hello True Waves Group, I am interested in ${data.interest}. My name is ${data.name} and my phone number is ${data.phone}.`;
    const whatsappUrl = `https://wa.me/919944331000?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-background border border-border rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 sm:p-12">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <span className="eyebrow text-accent mb-3 block">Expert Consultation</span>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                      Let's Build Your <span className="text-gradient-brand">Future</span> Together
                    </h2>
                    <p className="text-muted-foreground mt-4">
                      Fill out the form below and our specialist will reach out to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground px-1">Full Name</label>
                      <input
                        {...register("name")}
                        placeholder="Enter your name"
                        className={`w-full px-5 py-4 rounded-2xl bg-muted/50 border ${errors.name ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all`}
                      />
                      {errors.name && <p className="text-xs text-destructive px-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground px-1">Phone Number</label>
                      <input
                        {...register("phone")}
                        placeholder="Enter your mobile number"
                        className={`w-full px-5 py-4 rounded-2xl bg-muted/50 border ${errors.phone ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all`}
                      />
                      {errors.phone && <p className="text-xs text-destructive px-1">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground px-1">Interested In</label>
                      <select
                        {...register("interest")}
                        className="w-full px-5 py-4 rounded-2xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="Investment">Investment Opportunities</option>
                        <option value="Real Estate">Real Estate Development</option>
                        <option value="Valuation">Asset Valuation</option>
                        <option value="Partnership">Strategic Partnership</option>
                        <option value="Careers">Careers</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group btn-primary py-5 text-lg shadow-brand hover:shadow-elegant mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Connecting..." : "Schedule Consultation"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                    className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 text-accent"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h2 className="font-display text-3xl font-bold mb-4">Request Sent!</h2>
                  <p className="text-muted-foreground text-lg mb-10">
                    Thank you for your interest. We've received your request and will contact you shortly via phone or WhatsApp.
                  </p>
                  <button
                    onClick={onClose}
                    className="w-full py-4 rounded-full border border-border font-medium hover:bg-muted transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
