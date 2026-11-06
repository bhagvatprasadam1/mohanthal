import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, CheckCircle2, Send } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { siteConfig } from '../../data/siteConfig';

const inquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone/WhatsApp number'),
  email: z.string().email('Please enter a valid email address'),
  inquiryType: z.enum(['Personal Order', 'Gift Box', 'Bulk Order', 'Corporate Gifting']),
  preferredPack: z.enum(['250g', '500g', '1kg', 'Custom Bulk']),
  city: z.string().min(2, 'Please enter your delivery city'),
  message: z.string().min(5, 'Please provide details about your inquiry or occasion'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export const InquiryForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<InquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      inquiryType: 'Personal Order',
      preferredPack: '500g',
    },
  });

  const onSubmit = (data: InquiryFormData) => {
    setSubmissionData(data);
    setIsSubmitted(true);

    // Format WhatsApp inquiry text
    const message = `*New Mohanthal Inquiry*%0A%0A*Name:* ${encodeURIComponent(data.fullName)}%0A*Phone:* ${encodeURIComponent(data.phone)}%0A*Email:* ${encodeURIComponent(data.email)}%0A*Inquiry Type:* ${encodeURIComponent(data.inquiryType)}%0A*Pack Size:* ${encodeURIComponent(data.preferredPack)}%0A*Delivery City:* ${encodeURIComponent(data.city)}%0A*Message:* ${encodeURIComponent(data.message)}`;

    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
    window.open(waUrl, '_blank');
  };

  if (isSubmitted && submissionData) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-light-beige text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-muted-green/10 text-muted-green flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif font-bold text-2xl text-deep-brown">
          Inquiry Initiated Successfully!
        </h3>
        <p className="text-muted-text text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-dark-text">{submissionData.fullName}</strong>. We have opened WhatsApp with your order details. If WhatsApp did not open automatically, you can also send an email or click below:
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hello! I submitted an inquiry for ${submissionData.inquiryType} (${submissionData.preferredPack}) in ${submissionData.city}. Name: ${submissionData.fullName}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full text-sm font-medium"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Open WhatsApp Chat</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              reset();
            }}
            className="px-6 py-3 rounded-full border border-light-beige text-xs text-muted-text hover:text-dark-text"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-light-beige space-y-6"
      noValidate
    >
      <div className="border-b border-light-beige pb-3 mb-5">
        <h3 className="font-serif font-normal text-xl sm:text-2xl text-deep-brown">
          Order & Gifting Inquiry
        </h3>
        <p className="text-muted-text text-xs sm:text-sm mt-1">
          Tell us about your requirement and our sweet master will assist you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Ramesh Patel"
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/20'
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* WhatsApp / Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            WhatsApp / Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 8850011652"
            {...register('phone')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.phone ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/20'
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. ramesh@example.com"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/20'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Delivery City */}
        <div>
          <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            Delivery City *
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Ahmedabad, Mumbai, Delhi..."
            {...register('city')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.city ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/20'
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            Interested In
          </label>
          <select
            id="inquiryType"
            {...register('inquiryType')}
            className="w-full px-4 py-3 rounded-xl border border-light-beige bg-cream/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Personal Order">Personal / Family Order</option>
            <option value="Gift Box">Festive Gift Box</option>
            <option value="Corporate Gifting">Corporate Gifting</option>
            <option value="Bulk Order">Bulk Order / Wedding Favors</option>
          </select>
        </div>

        {/* Preferred Pack */}
        <div>
          <label htmlFor="preferredPack" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            Preferred Packaging
          </label>
          <select
            id="preferredPack"
            {...register('preferredPack')}
            className="w-full px-4 py-3 rounded-xl border border-light-beige bg-cream/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="250g">250g Box (6-8 Pcs)</option>
            <option value="500g">500g Box (14-16 Pcs) • Most Popular</option>
            <option value="1kg">1kg Box (28-32 Pcs)</option>
            <option value="Custom Bulk">Custom Bulk Weight</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
          Your Requirement / Notes *
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Please share number of boxes, delivery deadline, or any special occasion notes..."
          {...register('message')}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/20'
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
        >
          <Send className="w-4 h-4" />
          <span>Send Inquiry via WhatsApp</span>
        </button>
        <p className="text-center text-xs text-muted-text mt-3">
          Direct inquiry dispatch. We value your privacy and never share your details.
        </p>
      </div>
    </form>
  );
};
