import React from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

interface ContactProps {
  email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
  return (
	    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6">
          Let's Connect
        </h2>
        
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
          I'm always interested in discussing new opportunities, innovative projects, 
          or just having a conversation about technology and development.
        </p>
        
          <div className="bg-[#f5f0e0] dark:bg-slate-900/70 rounded-lg shadow-sm border border-slate-200 dark:border-purple-800/60 p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-200">
              <Mail className="w-6 h-6 text-purple-500 dark:text-purple-300" />
              <span className="text-lg font-medium">Get in touch</span>
            </div>
          </div>
          
          <a 
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 bg-[#6867b5] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5654a0] transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Send className="w-5 h-5" />
            Send me an email
          </a>
          
          
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-2 text-slate-700 dark:text-slate-400">
          <MessageCircle className="w-4 h-4 text-slate-700 dark:text-slate-400" />
          <span className="text-sm">Open to freelance opportunities and full-time positions</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;