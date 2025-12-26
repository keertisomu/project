import React from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

interface ContactProps {
  email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          I'm always interested in discussing new opportunities, innovative projects, 
          or just having a conversation about technology and development.
        </p>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-medium">Get in touch</span>
            </div>
          </div>
          
          <a 
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <Send className="w-5 h-5" />
            Send me an email
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            I typically respond within 24 hours
          </p>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-2 text-gray-500">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">Open to freelance opportunities and full-time positions</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;