
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

interface FeedbackData {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create feedback object
      const feedbackData: FeedbackData = {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        'service_tpg97mp',  // Your service ID from EmailJS
        'template_m043fzm', // Your template ID from EmailJS
        feedbackData,       // Data to pass to the email template
        'yexGhRB6DNhat2YoP'      // Your user ID from EmailJS
      );

      console.log('Feedback sent successfully:', response);
      
      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Feedback submitted",
        description: "Thank you for your feedback! We'll get back to you soon.",
      });

      // Reset form after 2 seconds
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(false);
      }, 2000);

    } catch (error) {
      console.error("Error submitting feedback:", error);
      setIsSubmitting(false);

      toast({
        title: "Submission failed",
        description: "There was a problem submitting your feedback. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <div className="p-6 md:p-8 bg-gradient-to-r from-quantum-700 to-quantum-900 text-white">
        <h3 className="text-2xl font-bold mb-2">We Value Your Feedback</h3>
        <p className="text-quantum-100">
          Share your thoughts, suggestions, or questions with us.
        </p>
      </div>

      <div className="p-6 md:p-8 bg-white dark:bg-gray-900">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Your feedback has been submitted successfully. We appreciate your input!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500 resize-none"
                placeholder="Your feedback, questions, or suggestions"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-quantum-500 hover:bg-quantum-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="w-4 h-4 mr-2" />
                  <span>Submit Feedback</span>
                </div>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, CheckCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';

// const FeedbackForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!name || !email || !message) {
//       toast({
//         title: 'Missing information',
//         description: 'Please fill in all fields.',
//         variant: 'destructive',
//       });
//       return;
//     }

//     // Construct mailto link
//     const subject = encodeURIComponent(`Feedback from ${name}`);
//     const body = encodeURIComponent(
//       `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//     );

//     // Trigger user's mail client
//     window.location.href = `https://mail.google.com/mail/?view=cm&to=sayitqwerty@gmail.com?subject=${subject}&body=${body}`;

//     setIsSubmitted(true);

//     toast({
//       title: 'Redirecting to email',
//       description: 'Your email app will open shortly. Thank you!',
//     });

//     // Reset form after a delay
//     setTimeout(() => {
//       setName('');
//       setEmail('');
//       setMessage('');
//       setIsSubmitted(false);
//     }, 4000);
//   };

//   return (
//     <div className="rounded-2xl overflow-hidden shadow-lg">
//       <div className="p-6 md:p-8 bg-gradient-to-r from-quantum-700 to-quantum-900 text-white">
//         <h3 className="text-2xl font-bold mb-2">We Value Your Feedback</h3>
//         <p className="text-quantum-100">
//           Share your thoughts, suggestions, or questions with us.
//         </p>
//       </div>

//       <div className="p-6 md:p-8 bg-white dark:bg-gray-900">
//         {isSubmitted ? (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-col items-center justify-center py-8 text-center"
//           >
//             <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
//             <p className="text-gray-600 dark:text-gray-300 max-w-md">
//               Your feedback email is ready to be sent. Please check your email app!
//             </p>
//           </motion.div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500"
//                 placeholder="Your email"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 rows={4}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500 resize-none"
//                 placeholder="Your feedback, questions, or suggestions"
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-quantum-500 hover:bg-quantum-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
//             >
//               <div className="flex items-center">
//                 <Send className="w-4 h-4 mr-2" />
//                 <span>Submit Feedback</span>
//               </div>
//             </Button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, CheckCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';

// interface FeedbackData {
//   name: string;
//   email: string;
//   message: string;
//   timestamp: string;
// }

// const FeedbackForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!name || !email || !message) {
//       toast({
//         title: "Missing information",
//         description: "Please fill in all fields.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       // Create feedback object
//       const feedbackData: FeedbackData = {
//         name,
//         email,
//         message,
//         timestamp: new Date().toISOString(),
//       };
      
//       // In a real application with Supabase, you would save to database:
//       // const { data, error } = await supabase
//       //   .from('feedback')
//       //   .insert([feedbackData]);
      
//       // Simulate API call to send email
//       console.log("Sending feedback email to sayitqwerty@gmail.com:", feedbackData);
      
//       // Simulate server delay
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       setIsSubmitting(false);
//       setIsSubmitted(true);
      
//       toast({
//         title: "Feedback submitted",
//         description: "Thank you for your feedback! We'll get back to you soon.",
//       });
      
//       // Reset form after 2 seconds
//       setTimeout(() => {
//         setName('');
//         setEmail('');
//         setMessage('');
//         setIsSubmitted(false);
//       }, 2000);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       setIsSubmitting(false);
      
//       toast({
//         title: "Submission failed",
//         description: "There was a problem submitting your feedback. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="rounded-2xl overflow-hidden shadow-lg">
//       <div className="p-6 md:p-8 bg-gradient-to-r from-quantum-700 to-quantum-900 text-white">
//         <h3 className="text-2xl font-bold mb-2">We Value Your Feedback</h3>
//         <p className="text-quantum-100">
//           Share your thoughts, suggestions, or questions with us.
//         </p>
//       </div>
      
//       <div className="p-6 md:p-8 bg-white dark:bg-gray-900">
//         {isSubmitted ? (
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-col items-center justify-center py-8 text-center"
//           >
//             <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
//             <p className="text-gray-600 dark:text-gray-300 max-w-md">
//               Your feedback has been submitted successfully. We appreciate your input!
//             </p>
//           </motion.div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500"
//                 placeholder="Your name"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500"
//                 placeholder="Your email"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 rows={4}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-quantum-500 resize-none"
//                 placeholder="Your feedback, questions, or suggestions"
//               />
//             </div>
            
//             <Button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-quantum-500 hover:bg-quantum-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
//             >
//               {isSubmitting ? (
//                 <div className="flex items-center">
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
//                   <span>Submitting...</span>
//                 </div>
//               ) : (
//                 <div className="flex items-center">
//                   <Send className="w-4 h-4 mr-2" />
//                   <span>Submit Feedback</span>
//                 </div>
//               )}
//             </Button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;
