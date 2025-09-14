
import React, { useState, useEffect } from 'react';
import type { PageData, ContentItem } from '../types';

interface ContentPageProps {
  page: PageData;
  color: string;
  onBack: () => void;
  onNavigate: (pageId: string) => void;
  isEditMode: boolean;
  onUpdate: (page: PageData) => void;
  isDarkMode: boolean;
  uploadImage: (file: File) => Promise<string>;
}

const EditIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" />
    </svg>
);
const DeleteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);
const AddIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const renderContentItemText = (item: ContentItem, hasBackground: boolean, color: string) => {
    const textColorClass = hasBackground ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300';
    if (item.type === 'quote') {
        return (
            <blockquote className={`border-l-4 pl-4 italic ${textColorClass}`} style={{ borderColor: color }}>
                {item.content}
            </blockquote>
        );
    }
    return <p className={`${textColorClass} whitespace-pre-wrap`}>{item.content}</p>;
};

const CardTextContent: React.FC<{
    item: ContentItem,
    index: number,
    hasBackground: boolean,
    color: string,
    isReviewOpen: boolean,
    toggleReview: (index: number) => void,
    isLessonOpen: boolean,
    toggleLesson: (index: number) => void,
    pageId: string, // Added pageId to determine context
}> = ({ item, index, hasBackground, color, isReviewOpen, toggleReview, isLessonOpen, toggleLesson, pageId }) => {
    const [activeTab, setActiveTab] = useState<'user' | 'chatgpt'>('user');
    const isGamePage = pageId === 'list-game-only';

    useEffect(() => {
        if (isReviewOpen) {
            setActiveTab(item.review ? 'user' : 'chatgpt');
        }
    }, [isReviewOpen, item.review]);

    return (
        <div className="flex-grow w-full">
            <h2 className={`text-2xl font-bold text-puzzle ${hasBackground ? 'text-white' : 'text-gray-800 dark:text-white'}`}>{item.title}</h2>
            {item.subtitle && <p className={`text-sm font-mono mt-1 ${hasBackground ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>{item.subtitle}</p>}
            <div className="mt-4 space-y-4">
                {renderContentItemText(item, hasBackground, color)}
            </div>
            
            <div className="mt-4 flex flex-wrap gap-3">
                {item.lesson && (
                    <button onClick={() => toggleLesson(index)} className="text-sm font-semibold rounded-full px-3 py-1 transition-colors duration-200" style={{backgroundColor: color, color: 'white'}}>
                        {isLessonOpen ? 'Tutup Pesan' : 'Lihat Pesan'}
                    </button>
                )}
                
                {(item.review || item.chatgptReview) && !item.linkId && (
                     <button onClick={() => toggleReview(index)} className="text-sm font-semibold rounded-full px-3 py-1 transition-colors duration-200" style={{backgroundColor: color, color: 'white'}}>
                        {isReviewOpen ? 'Tutup Review' : 'Lihat Review'}
                    </button>
                )}
            </div>

            <div className={`overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${isLessonOpen ? 'max-h-96 pt-4' : 'max-h-0'}`}>
                {item.lesson && (
                    <div className="p-3 rounded-md bg-gray-100/70 dark:bg-black/20 backdrop-blur-sm border-l-4" style={{borderColor: color}}>
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Pesan yang Didapat
                        </h3>
                        <p className="mt-2 text-sm italic text-gray-800 dark:text-white">
                            "{item.lesson}"
                        </p>
                    </div>
                )}
            </div>

            <div className={`overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${isReviewOpen ? 'max-h-[500px] pt-4' : 'max-h-0'}`}>
                {(item.review || item.chatgptReview) && (
                    <div className="p-3 rounded-md bg-gray-100/70 dark:bg-black/20 backdrop-blur-sm border-l-4 animate-[fade-in]" style={{borderColor: color}}>
                        <div className="flex mb-2">
                            {item.review && (
                                <button
                                    onClick={() => setActiveTab('user')}
                                    className={`px-3 py-1 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'user' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200'}`}
                                    style={{ borderColor: activeTab === 'user' ? color : 'transparent' }}
                                >
                                    {isGamePage ? 'Pengalaman Saya' : 'My Review'}
                                </button>
                            )}
                            {item.chatgptReview && (
                                <button
                                    onClick={() => setActiveTab('chatgpt')}
                                    className={`px-3 py-1 text-sm font-semibold border-b-2 transition-all duration-200 ${activeTab === 'chatgpt' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-800 dark:hover:text-gray-200'}`}
                                    style={{ borderColor: activeTab === 'chatgpt' ? color : 'transparent' }}
                                >
                                    {isGamePage ? 'Roasting dari ChatGPT 😈' : 'Fun Review ChatGPT'}
                                </button>
                            )}
                        </div>
                        <div className="min-h-[60px] pt-1">
                            {activeTab === 'user' && item.review && (
                                <p className="text-sm italic text-gray-800 dark:text-white animate-[fade-in]">{item.review}</p>
                            )}
                            {activeTab === 'chatgpt' && item.chatgptReview && (
                                <div className="animate-[fade-in] space-y-3">
                                    {isGamePage ? (
                                        <div className="flex items-center gap-2 text-xs text-yellow-800 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-500/20 p-2 rounded-md border border-yellow-300 dark:border-yellow-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 3.001-1.742 3.001H4.42c-1.53 0-2.493-1.667-1.743-3.001l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <span><b>Peringatan:</b> AI ini suka bercanda dan kadang menyakitkan.</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-xs text-yellow-800 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-500/20 p-2 rounded-md border border-yellow-300 dark:border-yellow-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 3.001-1.742 3.001H4.42c-1.53 0-2.493-1.667-1.743-3.001l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <span><b>Spoiler Alert:</b> Review ini dibuat oleh AI dan mungkin mengandung bocoran cerita.</span>
                                        </div>
                                    )}
                                    <p className="text-sm italic text-gray-800 dark:text-white">{item.chatgptReview}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {item.watchLink && item.watchLink.trim() !== '' && item.watchLink.trim() !== '#' && !item.linkId && (
                <div className="mt-4">
                    <a
                        href={item.watchLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold text-sm py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{
                            backgroundColor: color, 
                            color: 'white',
                            '--tw-ring-color': color,
                        } as React.CSSProperties}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                        Tonton Sekarang
                    </a>
                </div>
            )}
        </div>
    );
};


const ContentPage: React.FC<ContentPageProps> = ({ page, color, onBack, onNavigate, isEditMode, onUpdate, isDarkMode, uploadImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<ContentItem> | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [openReviewIndex, setOpenReviewIndex] = useState<number | null>(null);
  const [openLessonIndex, setOpenLessonIndex] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);


  const toggleReview = (index: number) => {
    setOpenReviewIndex(openReviewIndex === index ? null : index);
  }

  const toggleLesson = (index: number) => {
    setOpenLessonIndex(openLessonIndex === index ? null : index);
  }

  const openModalForEdit = (item: ContentItem, index: number) => {
    setCurrentItem({ ...item });
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  
  const openModalForAdd = () => {
    setCurrentItem({ title: '', subtitle: '', content: '', lesson: '', type: 'paragraph', review: '', chatgptReview: '', watchLink: '', posterSrc: '', cardBgImage: '' });
    setCurrentIndex(null);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
    setCurrentIndex(null);
  };

  const handleSave = () => {
    if (!currentItem) return;

    let newItems: ContentItem[];
    // Ensure the item has all required fields
    const finalItem: ContentItem = {
        title: currentItem.title || '',
        content: currentItem.content || '',
        subtitle: currentItem.subtitle,
        lesson: currentItem.lesson,
        linkId: currentItem.linkId,
        type: currentItem.type || 'paragraph',
        review: currentItem.review,
        chatgptReview: currentItem.chatgptReview,
        watchLink: currentItem.watchLink,
        posterSrc: currentItem.posterSrc,
        cardBgImage: currentItem.cardBgImage,
    };
    
    if (currentIndex !== null) { // Editing existing item
      newItems = page.items.map((item, index) => index === currentIndex ? finalItem : item);
    } else { // Adding new item
      newItems = [...page.items, finalItem];
    }
    onUpdate({ ...page, items: newItems });
    handleModalClose();
  };
  
  const handleDelete = (indexToDelete: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const newItems = page.items.filter((_, index) => index !== indexToDelete);
      onUpdate({ ...page, items: newItems });
    }
  };

  const handleEditClick = (e: React.MouseEvent, item: ContentItem, index: number) => {
    e.stopPropagation();
    openModalForEdit(item, index);
  };

  const handleDeleteClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    handleDelete(index);
  };
  
  const handleImageUpload = async (file: File, field: 'posterSrc' | 'cardBgImage') => {
      if (!file || !currentItem) return;
      setIsUploading(true);
      try {
          const imageUrl = await uploadImage(file);
          setCurrentItem({ ...currentItem, [field]: imageUrl });
      } catch (error) {
          alert(`Error uploading image: ${error}`);
      } finally {
          setIsUploading(false);
      }
  };


  return (
    <div className="animate-[fade-in]">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 font-semibold text-gray-700 dark:text-gray-300 mb-8 p-3 rounded-full bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Go back to previous page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
        <span>Kembali</span>
      </button>

      <header className="mb-12 text-center">
        <h1
          className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white transition-colors duration-500 text-puzzle-colored"
          style={{ '--shadow-color': color } as React.CSSProperties}
        >
          {page.title}
        </h1>
      </header>

      <div className="space-y-8">
        {page.items.map((item, index) => {
          const hasPoster = !!item.posterSrc;
          const hasCardBg = !hasPoster && !!item.cardBgImage;
          const hasBackground = hasPoster || hasCardBg;
          const shadowColor = isDarkMode ? '#f59e0b' : color;

          const rotationClass = index % 2 === 0 ? '-rotate-1' : 'rotate-1';
          const commonClasses = `relative group w-full border-2 border-black dark:border-gray-500 rounded-lg transition-all duration-300 hover:scale-105 hover:!rotate-0 hover:z-10 text-left ${rotationClass}`;
          const isReviewOpen = openReviewIndex === index;
          const isLessonOpen = openLessonIndex === index;

          const cardContent = (
             <>
                {hasPoster && (
                    <>
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-110"
                            style={{ backgroundImage: `url(${item.posterSrc})`, filter: 'blur(8px)' }}
                        ></div>
                        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                    </>
                )}

                {hasCardBg && (
                  <>
                     <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.cardBgImage})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
                  </>
                )}


                {hasPoster ? (
                    <div className="relative flex flex-col sm:flex-row gap-6 p-6 items-start">
                        <div className="w-full sm:w-1/3 lg:w-1/4 flex-shrink-0">
                            <img src={item.posterSrc!} alt={`Poster for ${item.title}`} className="rounded-lg shadow-xl w-full object-cover aspect-[2/3] transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <CardTextContent pageId={page.id} item={item} index={index} hasBackground={hasBackground} color={color} isReviewOpen={isReviewOpen} toggleReview={toggleReview} isLessonOpen={isLessonOpen} toggleLesson={toggleLesson} />
                    </div>
                ) : (
                    <div className="relative p-6">
                        <CardTextContent pageId={page.id} item={item} index={index} hasBackground={hasBackground} color={color} isReviewOpen={isReviewOpen} toggleReview={toggleReview} isLessonOpen={isLessonOpen} toggleLesson={toggleLesson} />
                    </div>
                )}


                {item.linkId && (
                <div className={`absolute bottom-6 right-6 transition-transform duration-300 group-hover:translate-x-1 ${hasBackground ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300'}`}>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
                )}
                {isEditMode && (
                    <div className="absolute -top-3 -right-3 z-30 flex gap-2">
                        <button onClick={(e) => handleEditClick(e, item, index)} className="p-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-300" aria-label="Edit item"><EditIcon className="w-4 h-4" /></button>
                        <button onClick={(e) => handleDeleteClick(e, index)} className="p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-300" aria-label="Delete item"><DeleteIcon className="w-4 h-4" /></button>
                    </div>
                )}
            </>
          );
          
          const cardBase = (
            <div
                className={`${commonClasses} ${!hasBackground ? `bg-amber-50/60 dark:bg-stone-800/60 backdrop-blur-md` : 'overflow-hidden'}`}
                style={{
                  '--shadow-color': shadowColor,
                  boxShadow: `8px 8px 0px var(--shadow-color)`,
                } as React.CSSProperties}
            >
                {cardContent}
            </div>
          );

          if (item.linkId && !isEditMode) {
            return (
              <button
                key={index}
                onClick={() => onNavigate(item.linkId!)}
                className={`block w-full text-left focus:outline-none focus:ring-2 focus:ring-offset-2 ${rotationClass}`}
                 style={{
                    '--tw-ring-color': color,
                    '--tw-ring-offset-color': 'bg-gray-100 dark:bg-slate-900'
                  } as React.CSSProperties}
              >
                {cardBase}
              </button>
            )
          }

          if (item.linkId && isEditMode) {
             return (
                <div key={index} className="relative">
                    <div 
                        onClick={(e) => {
                            // Prevent navigation if the click is on an edit/delete button
                            const target = e.target as HTMLElement;
                            if (!target.closest('button[aria-label^="Edit"], button[aria-label^="Delete"]')) {
                                onNavigate(item.linkId!);
                            }
                        }}
                        className={`cursor-pointer ${rotationClass}`}
                    >
                         {cardBase}
                    </div>
                </div>
             )
          }

          return (
            <div key={index}>
              {cardBase}
            </div>
          );
        })}
        {isEditMode && (
          <div className="flex justify-center pt-8">
            <button
                onClick={openModalForAdd}
                className="flex items-center gap-2 py-3 px-6 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 transform hover:scale-105"
            >
                <AddIcon className="w-5 h-5" />
                Add New Item
            </button>
          </div>
        )}
      </div>

      {isModalOpen && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-[fade-in]" onClick={handleModalClose}>
          <div 
            className="relative w-full max-w-lg p-8 m-4 border-2 border-black dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-slate-800"
            style={{ '--shadow-color': isDarkMode ? '#f59e0b' : color, boxShadow: `8px 8px 0px var(--shadow-color)`} as React.CSSProperties} 
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{currentIndex !== null ? 'Edit Item' : 'Add New Item'}</h3>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <InputField label="Title" name="title" value={currentItem.title || ''} onChange={(e) => setCurrentItem({...currentItem, title: e.target.value})} color={color} />
                <InputField label="Subtitle" name="subtitle" value={currentItem.subtitle || ''} onChange={(e) => setCurrentItem({...currentItem, subtitle: e.target.value})} color={color} />
                <TextAreaField label="Content" name="content" value={currentItem.content || ''} onChange={(e) => setCurrentItem({...currentItem, content: e.target.value})} color={color} />
                <TextAreaField label="Pesan yang Didapat (Opsional)" name="lesson" value={currentItem.lesson || ''} onChange={(e) => setCurrentItem({...currentItem, lesson: e.target.value})} color={color} />
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Poster Image (Optional)</label>
                  <input type="file" accept="image/*" onChange={(e) => e.target.files && handleImageUpload(e.target.files[0], 'posterSrc')} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900/50 file:text-violet-700 dark:file:text-violet-300 hover:file:bg-violet-100 dark:hover:file:bg-violet-900" disabled={isUploading}/>
                   {currentItem.posterSrc && (
                    <div className="mt-2 relative w-32">
                        <img src={currentItem.posterSrc} alt="Poster preview" className="w-full h-auto rounded-md shadow-md" />
                        <button onClick={() => setCurrentItem({...currentItem, posterSrc: ''})} className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 p-1 bg-red-500 text-white rounded-full text-xs" aria-label="Remove poster">
                            <DeleteIcon className="w-4 h-4"/>
                        </button>
                    </div>
                   )}
                </div>
                { !currentItem.posterSrc && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Card Background (Optional)</label>
                      <input type="file" accept="image/*" onChange={(e) => e.target.files && handleImageUpload(e.target.files[0], 'cardBgImage')} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900/50 file:text-violet-700 dark:file:text-violet-300 hover:file:bg-violet-100 dark:hover:file:bg-violet-900" disabled={isUploading}/>
                       {currentItem.cardBgImage && (
                        <div className="mt-2 relative w-32">
                            <img src={currentItem.cardBgImage} alt="Background preview" className="w-full h-auto rounded-md shadow-md" />
                            <button onClick={() => setCurrentItem({...currentItem, cardBgImage: ''})} className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 p-1 bg-red-500 text-white rounded-full text-xs" aria-label="Remove background">
                                <DeleteIcon className="w-4 h-4"/>
                            </button>
                        </div>
                       )}
                    </div>
                )}
                <TextAreaField label="My Review (Opsional)" name="review" value={currentItem.review || ''} onChange={(e) => setCurrentItem({...currentItem, review: e.target.value})} color={color} />
                <TextAreaField label="ChatGPT Review (Opsional)" name="chatgptReview" value={currentItem.chatgptReview || ''} onChange={(e) => setCurrentItem({...currentItem, chatgptReview: e.target.value})} color={color} />
                <InputField label="Watch Link (URL)" name="watchLink" value={currentItem.watchLink || ''} onChange={(e) => setCurrentItem({...currentItem, watchLink: e.target.value})} color={color} />
                <InputField label="Link ID (Optional)" name="linkId" value={currentItem.linkId || ''} onChange={(e) => setCurrentItem({...currentItem, linkId: e.target.value})} color={color} />
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content Type</label>
                  <select name="type" value={currentItem.type || 'paragraph'} onChange={(e) => setCurrentItem({...currentItem, type: e.target.value as 'paragraph' | 'quote'})} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 sm:text-sm rounded-md" style={{'--tw-ring-color': color} as React.CSSProperties}>
                    <option value="paragraph">Paragraph</option>
                    <option value="quote">Quote</option>
                  </select>
                </div>
            </div>
             <div className="flex justify-end gap-4 mt-8">
              <button onClick={handleModalClose} className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 font-semibold text-white rounded-md transition-colors" style={{backgroundColor: color}}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const InputField: React.FC<{label: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, color: string}> = ({label, name, value, onChange, color}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
    <input type="text" name={name} id={name} value={value} onChange={onChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 dark:text-white" style={{'--tw-ring-color': color} as React.CSSProperties} />
  </div>
);

const TextAreaField: React.FC<{label: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, color: string}> = ({label, name, value, onChange, color}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
    <textarea name={name} id={name} value={value} onChange={onChange} rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 dark:text-white" style={{'--tw-ring-color': color} as React.CSSProperties}></textarea>
  </div>
);

export default ContentPage;