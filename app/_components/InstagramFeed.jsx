'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function InstagramEmbed() {
  useEffect(() => {
    // Ensure Instagram embed script is loaded
    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.instagram.com/embed.js');
    script.setAttribute('async', 'true');
    script.setAttribute('defer', 'true');
    document.body.appendChild(script);

    // Refresh embeds
    return () => {
      if ((window ).instgrm) {
        (window ).instgrm.Embeds.process();
      }
    };
  }, []);

  return (
    <section className="bg-[#111] text-white py-16 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Follow Us On Instagram
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          See our latest behind-the-scenes, photoshoots, and stories. Join the creative journey with <span className="text-white font-medium">@pixelkaar</span>.
        </p>

        {/* Instagram Embed */}
        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DKbcowoP3nm/" // change this URL to your own post
            data-instgrm-version="14"
            style={{ background: '#000', maxWidth: '540px', width: '100%' }}
          ></blockquote>
        </div>
      </motion.div>
    </section>
  );
}
