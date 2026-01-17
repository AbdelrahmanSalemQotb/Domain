import { Globe } from "lucide-react";

interface MarketplaceLogoProps {
  platform: string;
  className?: string;
}

export const MarketplaceLogo = ({ platform, className = "w-20 h-8" }: MarketplaceLogoProps) => {
  const normalizedPlatform = platform.toLowerCase();

  switch (normalizedPlatform) {
    case "atom":
      // Atom (formerly Squadhelp) Logo Representation
      return (
        <svg viewBox="0 0 100 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M15 15C15 7.82 20.82 2 28 2S41 7.82 41 15 35.18 28 28 28 15 22.18 15 15z" fill="currentColor" fillOpacity="0.2"/>
           <path d="M28 8C24.13 8 21 11.13 21 15S24.13 22 28 22 35 18.87 35 15 31.87 8 28 8z" fill="currentColor"/>
           <text x="45" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">Atom</text>
        </svg>
      );

    case "afternic":
      // Afternic Logo Representation
      return (
        <svg viewBox="0 0 120 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 25L15 5H22L27 25H22L21 20H16L15 25H10ZM17 16H20L18.5 9L17 16Z" fill="currentColor"/>
          <text x="30" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="18" letterSpacing="-1" fill="currentColor">afternic</text>
        </svg>
      );

    case "sedo":
      // Sedo Logo Representation
      return (
         <svg viewBox="0 0 100 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="10" fill="currentColor" fillOpacity="0.3"/>
            <path d="M15 15L22 8M15 15L22 22M15 15L8 8M15 15L8 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <text x="30" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">sedo</text>
         </svg>
      );

    case "godaddy":
        // GoDaddy Logo Representation
        return (
            <svg viewBox="0 0 120 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5C9.48 5 5 9.48 5 15S9.48 25 15 25 25 20.52 25 15 20.52 5 15 5ZM15 22C11.13 22 8 18.87 8 15S11.13 8 15 8 22 11.13 22 15 18.87 22 15 22Z" fill="currentColor"/>
                <path d="M18.5 13C17.67 13 17 13.67 17 14.5S17.67 16 18.5 16 20 15.33 20 14.5 19.33 13 18.5 13Z" fill="currentColor"/>
                <text x="30" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill="currentColor">GoDaddy</text>
            </svg>
        );
    
    case "spaceship":
         // Spaceship Logo Representation
         return (
             <svg viewBox="0 0 120 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M15 2L5 28H25L15 2Z" fill="currentColor"/>
                 <text x="30" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="currentColor">spaceship</text>
             </svg>
         );

    default:
      // Fallback
      return (
        <div className={`flex items-center gap-2 ${className}`}>
           <Globe className="w-5 h-5" />
           <span className="font-bold text-sm uppercase">{platform}</span>
        </div>
      );
  }
};
