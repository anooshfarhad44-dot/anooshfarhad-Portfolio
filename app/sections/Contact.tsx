'use client';

import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { SocialButton } from '../components/SocialButton';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { contact, socials } from '../data/portfolio';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <SectionHeader
          title={contact.title}
          subtitle={contact.description}
        />
        
        {/* CTA Card */}
        <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to start your project?
            </h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              I&apos;m currently available for freelance work and full-time opportunities.
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href={`mailto:${contact.email}`}
                variant="primary"
                size="lg"
                icon="mail"
              >
                Send Email
              </Button>
              {contact.phone && (
                <Button
                  href={`tel:${contact.phone}`}
                  variant="outline"
                  size="lg"
                  icon="phone"
                >
                  {contact.phone}
                </Button>
              )}
              <Button
                href={socials[1]?.url || "#"}
                variant="secondary"
                size="lg"
                icon="linkedin"
                external
              >
                LinkedIn
              </Button>
            </div>
            
            {contact.location && (
              <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Based in {contact.location}
              </p>
            )}
          </Card>
        </div>
        
        {/* Social Links */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-slate-500 mb-4">Or connect with me on</p>
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <SocialButton
                key={social.name}
                href={social.url}
                icon={social.icon}
                label={social.name}
                external
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
