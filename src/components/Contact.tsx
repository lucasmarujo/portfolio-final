import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_f321mo7',
        'template_f7iskbn',
        {
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
        },
        '-lZl33DFNQYgKHTEA'
      );

      // Limpar o formulário após envio bem-sucedido
      setFormData({
        name: '',
        subject: '',
        message: ''
      });
      
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800 transition-all duration-300 py-2.5 px-4 outline-none group-hover:border-gray-400 dark:group-hover:border-zinc-600"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="group">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800 transition-all duration-300 py-2.5 px-4 outline-none group-hover:border-gray-400 dark:group-hover:border-zinc-600"
            required
            placeholder="Enter subject"
          />
        </div>
        <div className="group">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800 transition-all duration-300 py-2.5 px-4 outline-none resize-none group-hover:border-gray-400 dark:group-hover:border-zinc-600"
            required
            placeholder="Type your message here..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
}

export default Contact;