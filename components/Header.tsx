import React, { useState, useEffect, useRef } from 'react';
import { SunIcon, MoonIcon } from './icons/ThemeIcons';
import { SocialIcon } from './icons/SocialIcons';
import type { SocialLink } from '../types';

const EditIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" />
    </svg>
);

const ImageIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

const AddIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const DeleteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  socialLinks: SocialLink[];
  isEditMode: boolean;
  onUpdateSocials: (links: SocialLink[]) => void;
  profilePic: string;
  onUpdateProfilePic: (file: File) => void;
  profileCardBg: string | null;
  onUpdateProfileCardBg: (file: File | null) => void;
  taglines: string[];
  onUpdateTaglines: (taglines: string[]) => void;
}

interface TaglineRotatorProps {
  taglines: string[];
  hasBackground: boolean;
}

const TaglineRotator: React.FC<TaglineRotatorProps> = ({ taglines, hasBackground }) => {
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('animate-[fade-in]');
    
    useEffect(() => {
        if (!taglines || taglines.length === 0) return;

        const interval = setInterval(() => {
            setAnimationClass('animate-[fade-out]'); // Start fade-out

            // Wait for the fade-out animation to complete before changing text and fading in
            setTimeout(() => {
                setTaglineIndex(prevIndex => (prevIndex + 1) % taglines.length);
                setAnimationClass('animate-[fade-in]'); // Start fade-in with new content
            }, 500); // This duration must match the CSS fade-out animation time

        }, 3500); // Display time (3.5s) + fade time (0.5s) = 4s total cycle

        return () => clearInterval(interval);
    }, [taglines]);

    if (!taglines || taglines.length === 0) {
      return (
        <span className="block text-lg md:text-xl font-mono text-gray-500 dark:text-gray-400">
          Add a tagline in edit mode!
        </span>
      );
    }
    
    const textColorClass = hasBackground ? 'text-white' : 'text-gray-700 dark:text-gray-300';

    return (
        <span
            className={`block text-lg md:text-xl font-mono ${textColorClass} ${animationClass}`}
        >
            {taglines[taglineIndex]}
        </span>
    );
};


const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, socialLinks, isEditMode, onUpdateSocials, profilePic, onUpdateProfilePic, profileCardBg, onUpdateProfileCardBg, taglines, onUpdateTaglines }) => {
  const [isSocialsModalOpen, setIsSocialsModalOpen] = useState(false);
  const [isTaglineModalOpen, setIsTaglineModalOpen] = useState(false);
  const [editableLinks, setEditableLinks] = useState<SocialLink[]>([]);
  const [editableTaglines, setEditableTaglines] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgFileInputRef = useRef<HTMLInputElement>(null);


  const handleEditSocialsClick = () => {
    // Deep copy to avoid mutating state directly
    setEditableLinks(JSON.parse(JSON.stringify(socialLinks)));
    setIsSocialsModalOpen(true);
  };
  
  const handleSaveSocials = () => {
    onUpdateSocials(editableLinks);
    setIsSocialsModalOpen(false);
  };
  
  const handleUrlChange = (id: string, newUrl: string) => {
    setEditableLinks(prev => prev.map(link => link.id === id ? {...link, url: newUrl} : link));
  }

  const handleEditPicClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        onUpdateProfilePic(file);
      }
      event.target.value = ''; // Reset input to allow re-uploading the same file
  };
  
  const handleEditBgClick = () => {
    bgFileInputRef.current?.click();
  };

  const handleBgFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
          onUpdateProfileCardBg(file);
      }
      event.target.value = '';
  };

  const handleRemoveBgClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onUpdateProfileCardBg(null);
  };


  const handleEditTaglinesClick = () => {
    setEditableTaglines([...taglines]);
    setIsTaglineModalOpen(true);
  };

  const handleSaveTaglines = () => {
    onUpdateTaglines(editableTaglines);
    setIsTaglineModalOpen(false);
  };

  const handleTaglineChange = (index: number, value: string) => {
    const newTaglines = [...editableTaglines];
    newTaglines[index] = value;
    setEditableTaglines(newTaglines);
  };

  const handleAddTagline = () => {
    setEditableTaglines([...editableTaglines, '']);
  };

  const handleDeleteTagline = (index: number) => {
    if (window.confirm('Are you sure you want to delete this tagline?')) {
      const newTaglines = editableTaglines.filter((_, i) => i !== index);
      setEditableTaglines(newTaglines);
    }
  };
  
  const cardStyle: React.CSSProperties = {};

  if (profileCardBg) {
    cardStyle.backgroundImage = `url(${profileCardBg})`;
    cardStyle.backgroundSize = 'cover';
    cardStyle.backgroundPosition = 'center';
  }

  return (
    <header className="relative flex flex-col items-center text-center pt-4 pb-12 mb-[-80px] z-20">
      {/* Light Beam Effect */}
      <div 
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[300px] sm:w-[500px] lg:w-[700px] 
          h-[400px] sm:h-[600px]
          bg-[radial-gradient(ellipse_at_50%_50%,_rgba(252,211,77,0.15)_0%,_transparent_70%)]
          pointer-events-none
          transition-opacity duration-1000 delay-300
          ${isDarkMode ? 'opacity-100' : 'opacity-0'}
        `}
      />

      <div 
        className={`relative w-full max-w-2xl p-8 border-2 border-black dark:border-amber-200 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] overflow-hidden ${!profileCardBg ? 'bg-amber-50/60 dark:bg-stone-800/60' : ''} ${isDarkMode ? 'shadow-[8px_8px_0px_#f59e0b] hover:shadow-[12px_12px_0px_#f59e0b]' : 'shadow-[8px_8px_0px_#92400e] hover:shadow-[12px_12px_0px_#92400e]'}`}
        style={cardStyle}
      >
        <button 
          onClick={toggleDarkMode} 
          className="absolute top-4 right-4 p-3 rounded-full bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400 z-30"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        
        {profileCardBg && <div className="absolute inset-0 bg-black/50 rounded-lg -z-0"></div>}
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
          
          <div className="relative group flex-shrink-0">
            <img 
              src={profilePic}
              alt="Profile" 
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-white/50 shadow-lg"
            />
            {isEditMode && (
              <>
                  <div 
                      onClick={handleEditPicClick} 
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-full"
                      aria-label="Change profile picture"
                  >
                      <EditIcon className="w-8 h-8 text-white" />
                      <span className="mt-1 text-white text-sm font-semibold">Change</span>
                  </div>
                  <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept="image/*" 
                      onChange={handleFileChange}
                  />
              </>
            )}
          </div>
          
          <div className="flex-grow">
            <h1 className={`text-3xl md:text-4xl font-black transition-colors duration-500 text-puzzle ${profileCardBg ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
              Ananias Lodja Wali, S.Kom <span className={`text-2xl ${profileCardBg ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>/ Nias</span>
            </h1>
            
            <div className="relative mt-3 min-h-14 flex items-center justify-center sm:justify-start gap-3">
              <TaglineRotator taglines={taglines} hasBackground={!!profileCardBg} />
               {isEditMode && (
                <button
                  onClick={handleEditTaglinesClick}
                  className="p-1.5 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
                  aria-label="Edit Taglines"
                >
                  <EditIcon className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="relative mt-8 flex justify-center sm:justify-start items-center gap-6">
              {socialLinks.map(link => (
                <a 
                  key={link.id} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-transform duration-300 hover:scale-125 ${profileCardBg ? 'text-gray-200 hover:text-white' : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'}`}
                  aria-label={link.name}
                >
                  <SocialIcon name={link.icon} className="w-7 h-7" />
                </a>
              ))}
              {isEditMode && (
                <button
                  onClick={handleEditSocialsClick}
                  className="absolute -right-2 -top-14 sm:-right-4 sm:-top-4 z-20 p-1.5 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
                  aria-label="Edit Social Links"
                >
                  <EditIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
        
        {isEditMode && (
          <>
            <div className="absolute bottom-2 right-2 z-20 flex items-center gap-2">
              <button onClick={handleEditBgClick} title={profileCardBg ? "Change background" : "Add background"} aria-label="Change card background" className="p-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-300">
                <ImageIcon className="w-4 h-4" />
              </button>
              {profileCardBg && (
                <button onClick={handleRemoveBgClick} title="Remove background" aria-label="Remove card background" className="p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-300">
                  <DeleteIcon className="w-4 h-4" />
                </button>
              )}
            </div>
            <input type="file" ref={bgFileInputRef} className="hidden" accept="image/*" onChange={handleBgFileChange} />
          </>
        )}
      </div>

      {isSocialsModalOpen && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-[fade-in]"
            onClick={() => setIsSocialsModalOpen(false)}
        >
            <div 
                className={`relative w-full max-w-md p-8 m-4 border-2 border-black dark:border-amber-200 rounded-lg bg-gray-100 dark:bg-slate-800 ${isDarkMode ? 'shadow-[8px_8px_0px_#f59e0b]' : 'shadow-[8px_8px_0px_#92400e]'}`}
                onClick={e => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-left">Edit Social Links</h3>
                <div className="space-y-4">
                    {editableLinks.map(link => (
                      <div key={link.id}>
                          <label htmlFor={link.id} className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            <SocialIcon name={link.icon} className="w-5 h-5" />
                            {link.name} URL
                          </label>
                          <input 
                            type="url" 
                            name={link.id} 
                            id={link.id} 
                            value={link.url} 
                            onChange={(e) => handleUrlChange(link.id, e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-white"
                            placeholder={`https://...`}
                          />
                      </div>
                    ))}
                </div>
                <div className="flex justify-end gap-4 mt-8">
                    <button onClick={() => setIsSocialsModalOpen(false)} className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Cancel</button>
                    <button onClick={handleSaveSocials} className="px-4 py-2 font-semibold text-white rounded-md transition-colors bg-amber-700 hover:bg-amber-800">Save Changes</button>
                </div>
            </div>
        </div>
      )}

      {isTaglineModalOpen && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-[fade-in]"
            onClick={() => setIsTaglineModalOpen(false)}
        >
            <div 
                className={`relative w-full max-w-lg p-8 m-4 border-2 border-black dark:border-amber-200 rounded-lg bg-gray-100 dark:bg-slate-800 ${isDarkMode ? 'shadow-[8px_8px_0px_#f59e0b]' : 'shadow-[8px_8px_0px_#92400e]'}`}
                onClick={e => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-left">Edit Taglines</h3>
                <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                    {editableTaglines.map((tagline, index) => (
                      <div key={index} className="flex items-center gap-2">
                          <input 
                            type="text" 
                            value={tagline} 
                            onChange={(e) => handleTaglineChange(index, e.target.value)}
                            className="flex-grow block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-white"
                            placeholder="Enter a fun tagline"
                          />
                          <button 
                            onClick={() => handleDeleteTagline(index)}
                            className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 dark:bg-red-900/50 dark:text-red-300 dark:hover:bg-red-800/60 transition-colors"
                            aria-label="Delete tagline"
                          >
                            <DeleteIcon className="w-5 h-5" />
                          </button>
                      </div>
                    ))}
                    <button 
                      onClick={handleAddTagline}
                      className="w-full flex items-center justify-center gap-2 mt-4 py-2 px-4 border-2 border-dashed border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors"
                    >
                        <AddIcon className="w-5 h-5" />
                        Add Tagline
                    </button>
                </div>
                <div className="flex justify-end gap-4 mt-8">
                    <button onClick={() => setIsTaglineModalOpen(false)} className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Cancel</button>
                    <button onClick={handleSaveTaglines} className="px-4 py-2 font-semibold text-white rounded-md transition-colors bg-amber-700 hover:bg-amber-800">Save Changes</button>
                </div>
            </div>
        </div>
      )}

    </header>
  );
};

export default Header;