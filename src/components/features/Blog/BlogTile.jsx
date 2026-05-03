import React from 'react';

const BlogTile = ({ 
  title,
  subtitle,
  children, 
  imageSrc = "/api/placeholder/1200/800", // Default to landscape aspect
  imageAlt = "Assessment image",
}) => {
  return (
    <article className="w-full text-slate-800 px-4 sm:px-6 md:px-10 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border-l-4 border-[#B25D3E] flex flex-col">
        
        {/* Top Section: Heading and Image row on Large screens */}
        <div className="flex flex-col lg:flex-row border-b border-slate-50">
          
          {/* Title Area */}
          <div className="lg:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
             <h2 className="text-2xl md:text-4xl font-cinzel text-[#B25D3E] mb-4 leading-tight">
                {title}
            </h2>
            {subtitle && (
              <p className="text-lg font-playfair text-[#B25D3E]/80 italic">
                {subtitle}
              </p>
            )}
          </div>

          {/* Landscape Image Area */}
          <div className="lg:w-1/2 relative min-h-[250px] md:min-h-[350px] bg-slate-100">
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#B25D3E]/5 mix-blend-multiply"></div>
          </div>
        </div>

        {/* Bottom Section: Content spans full width on Large screens */}
        <div className="p-6 sm:p-8 md:p-12 pt-8 lg:pt-10">
          <div className="max-w-none text-[#4B5563] text-sm md:text-base leading-relaxed">
            {children}
          </div>
        </div>
        
      </div>
    </article>
  );
};

export default BlogTile;