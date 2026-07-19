'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, ContactFormData } from '@/lib/validation';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would integrate with your email service
      // For now, we'll just simulate the submission
      console.log('Form data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: portfolioData.social.email,
      href: `mailto:${portfolioData.social.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: portfolioData.personal.location,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/50 to-white -z-10" />

      {/* Animated background elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary-200/10 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-300/10 blur-3xl -z-10 animate-pulse" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600">
            Ready to discuss how I can support your executive operations? Get in touch!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
                  <info.icon size={24} className="text-primary-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.label}</h3>
              <p className="text-gray-600 group-hover:text-primary-700 transition-colors font-medium">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold font-grotesk text-gray-900 mb-8">Send Me a Message</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className={`w-full px-4 py-3 rounded-lg bg-white/50 border ${
                  errors.name ? 'border-red-500' : 'border-primary-200'
                } focus:outline-none focus:border-primary-500 transition-colors`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className={`w-full px-4 py-3 rounded-lg bg-white/50 border ${
                  errors.email ? 'border-red-500' : 'border-primary-200'
                } focus:outline-none focus:border-primary-500 transition-colors`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                Subject
              </label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className={`w-full px-4 py-3 rounded-lg bg-white/50 border ${
                  errors.subject ? 'border-red-500' : 'border-primary-200'
                } focus:outline-none focus:border-primary-500 transition-colors`}
                placeholder="What's this about?"
              />
              {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 border ${
                  errors.message ? 'border-red-500' : 'border-primary-200'
                } focus:outline-none focus:border-primary-500 transition-colors resize-none`}
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-emerald-100 text-emerald-800 rounded-lg"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 text-red-800 rounded-lg"
              >
                × Something went wrong. Please try again.
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isSubmitting}
              disabled={isSubmitting}
              icon={!isSubmitting && <FiArrowRight />}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
