// import React, { useState } from 'react';
// import axios from 'axios';

// const NewsletterSignup = () => {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);

//   const subscribe = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/subscribe', { email });
//       if (response.data.success) {
//         setSubscribed(true);
//       } else {
//         console.error(response.data.error);
//       }
//     } catch (error) {
//       console.error('Error subscribing to newsletter:', error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     subscribe();
//   };

//   return (
//     <div>
//         <header>

//         </header>
//         <main>
//       <h1>Dev & Blog is a
//       <mark>weekly newsletter</mark>
//       ,delivered every Sunday where I send weekly articles on various
//       <mark>technical and book recommendations</mark>
//       </h1>
//       <p>Join a community of like-minded developers, where collaboration and knowledge-sharing thrive. Dive into expert tips, engaging discussions, and code snippets that will enhance your skills and streamline your development process. Whether you're a seasoned pro or just starting, there's something for everyone.</p>
//       {subscribed ? (
//         <p>Thank you for subscribing! 🎉</p>
//       ) : (
//         <>
//           <p>Stay updated with the latest in tech and development. Subscribe to our newsletter now!</p>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </label>
//             <button type="submit">Subscribe</button>
//           </form>
//         </>
//       )}
//       </main>
//     </div>
//   );
// };

// export default NewsletterSignup;
import React, { useState } from 'react';
import axios from 'axios';
import './News.css'; // Import a separate CSS file for styling

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

// Determine API endpoint based on environment
  const apiEndpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://newsletter-7k3k5ervl-arpan1908.vercel.app';

  const subscribe = async () => {
    try {
      const response = await axios.post(`${apiEndpoint}/subscribe`, { email });
      if (response.data.success) {
        setSubscribed(true);
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe();
  };

  return (
    <div className="newsletter-container">
      <header></header>
      <main className="newsletter-content">
        <h1>
          Dev & Blog is a
          <mark>weekly newsletter</mark>, delivered every Sunday where I send weekly articles on various
          <mark>technical and book recommendations</mark>
        </h1>
        <p>
          Join a community of like-minded developers, where collaboration and knowledge-sharing thrive. Dive into
          expert tips, engaging discussions, and code snippets that will enhance your skills and streamline your
          development process. Whether you're a seasoned pro or just starting, there's something for everyone.
        </p>
        {subscribed ? (
          <p>Thank you for subscribing! 🎉</p>
        ) : (
          <>
            <p>Stay updated with the latest in tech and development. Subscribe to our newsletter now!</p>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <button type="submit">Subscribe</button>
            </form>
          </>
        )}
      </main>
    </div>
  );
};

export default NewsletterSignup;


 
