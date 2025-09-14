import React, { useState, useRef } from 'react';
import type { NavData } from '../types';
import { SchoolIcon, HobbyIcon, BulbIcon, ImageIcon as ContentImageIcon, CompassIcon } from './icons/ContentIcons';

interface NavigationSectionProps {
  items: NavData[];
  onNavigate: (pageId: string) => void;
  isEditMode: boolean;
  onUpdate: (items: NavData[]) => void;
  isDarkMode: boolean;
  uploadImage: (file: File) => Promise<string>;
}

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

const DeleteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);


const iconMap: { [key: string]: React.ReactNode } = {
    SchoolIcon: <SchoolIcon />,
    HobbyIcon: <HobbyIcon />,
    BulbIcon: <BulbIcon />,
    ImageIcon: <ContentImageIcon />,
    CompassIcon: <CompassIcon />,
};

const NavigationSection: React.FC<NavigationSectionProps> = ({ items, onNavigate, isEditMode, onUpdate, isDarkMode, uploadImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<NavData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editingBgItemId, setEditingBgItemId] = useState<string | null>(null);


  const handleEditClick = (item: NavData, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation
    setCurrentItem({ ...item });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!currentItem) return;
    const newItems = items.map(item => item.id === currentItem.id ? currentItem : item);
    onUpdate(newItems);
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!currentItem) return;
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleEditBgClick = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    setEditingBgItemId(itemId);
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && editingBgItemId) {
          try {
            const imageUrl = await uploadImage(file);
            const newItems = items.map(item =>
                item.id === editingBgItemId ? { ...item, backgroundImage: imageUrl } : item
            );
            onUpdate(newItems);
          } catch(error) {
            alert(`Error uploading image: ${error}`);
          }
      }
      setEditingBgItemId(null);
      event.target.value = ''; // Reset to allow re-uploading the same file
  };

  const handleRemoveBgClick = (e: React.MouseEvent, itemId: string) => {
      e.stopPropagation();
      const newItems = items.map(item =>
          item.id === itemId ? { ...item, backgroundImage: undefined } : item
      );
      onUpdate(newItems);
  };


  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => {
          const rotationClass = index % 2 === 0 ? 'rotate-2' : '-rotate-2';
          const hasBg = !!item.backgroundImage;
          const shadowColor = isDarkMode ? '#f59e0b' : item.color; // amber-400 for dark mode

          const cardStyle = {
            '--shadow-color': shadowColor,
            'boxShadow': `8px 8px 0px var(--shadow-color)`,
            '--tw-ring-color': shadowColor
          } as React.CSSProperties;

          if (hasBg) {
            cardStyle.backgroundImage = `url(${item.backgroundImage})`;
            cardStyle.backgroundSize = 'cover';
            cardStyle.backgroundPosition = 'center';
          }

          return (
            <div key={item.id} className={`relative transition-transform duration-300 ${isEditMode ? 'hover:!rotate-0' : ''} ${rotationClass}`}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`group relative flex flex-col h-full w-full p-8 border-2 border-black dark:border-gray-500 rounded-lg text-left transition-all duration-300 hover:scale-105 hover:!rotate-0 hover:z-10 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-200 dark:focus:ring-offset-gray-900 focus:ring-4 ${!hasBg ? 'bg-amber-50/60 dark:bg-stone-800/60 backdrop-blur-md' : 'overflow-hidden'}`}
                style={cardStyle}
              >
                {hasBg && <div className="absolute inset-0 bg-black/50 rounded-lg -z-0"></div>}
                <div className="absolute top-4 right-4 w-12 h-12 text-gray-400 dark:text-gray-500 opacity-50 transition-transform duration-300 group-hover:scale-110">
                  {item.icon && iconMap[item.icon]}
                </div>
                <div className="relative z-10 flex-grow">
                    <h3 className={`text-2xl font-bold text-puzzle ${hasBg ? 'text-white' : 'text-gray-800 dark:text-white'}`}>{item.title}</h3>
                    <p className={`mt-2 ${hasBg ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>{item.description}</p>
                </div>
              </button>
              {isEditMode && (
                  <>
                    <button
                      onClick={(e) => handleEditClick(item, e)}
                      className="absolute -top-3 -right-3 z-20 p-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
                      aria-label={`Edit ${item.title}`}
                    >
                        <EditIcon className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-2 right-2 z-20 flex items-center gap-2">
                        <button onClick={(e) => handleEditBgClick(e, item.id)} title={hasBg ? "Change background" : "Add background"} aria-label={hasBg ? "Change card background" : "Add card background"} className="p-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-300">
                          <ImageIcon className="w-4 h-4" />
                        </button>
                        {hasBg && (
                          <button onClick={(e) => handleRemoveBgClick(e, item.id)} title="Remove background" aria-label="Remove card background" className="p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-300">
                            <DeleteIcon className="w-4 h-4" />
                          </button>
                        )}
                    </div>
                  </>
              )}
            </div>
          )
        })}
      </div>
      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />

       {isModalOpen && currentItem && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-[fade-in]"
            onClick={handleModalClose}
            aria-modal="true"
            role="dialog"
        >
          <div 
            className="relative w-full max-w-lg p-8 m-4 border-2 border-black dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-slate-800"
            // FIX: Added 'as React.CSSProperties' to allow custom CSS properties.
            style={{ '--shadow-color': isDarkMode ? '#f59e0b' : currentItem.color, boxShadow: `8px 8px 0px var(--shadow-color)` } as React.CSSProperties}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Edit Section</h3>
            <div className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                    <input type="text" name="title" id="title" value={currentItem.title} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 dark:text-white" style={{'--tw-ring-color': currentItem.color} as React.CSSProperties} />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <textarea name="description" id="description" value={currentItem.description} onChange={handleInputChange} rows={3} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 dark:text-white" style={{'--tw-ring-color': currentItem.color} as React.CSSProperties}></textarea>
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button onClick={handleModalClose} className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 font-semibold text-white rounded-md transition-colors" style={{backgroundColor: currentItem.color}}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default NavigationSection;