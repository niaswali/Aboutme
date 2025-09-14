import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Header from './components/Header';
import NavigationSection from './components/AccordionSection';
import ContentPage from './pages/ContentPage';
import { 
  navigationData as defaultNavData, 
  pagesData as defaultPagesData, 
  socialLinksData as defaultSocialLinks,
  taglinesData as defaultTaglines,
} from './constants';
import type { GalleryImage, NavData, PageData, SocialLink } from './types';
import StarryNightBackground from './components/StarryNightBackground';

// Client-side "admin" password for demo purposes.
const ADMIN_PASSWORD = 'admin';

// --- UI Components for Loading/Saving State ---

const LoadingOverlay: React.FC<{text?: string}> = ({ text = "Memuat Portfolio..."}) => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 bg-opacity-80 backdrop-blur-sm">
    <svg className="animate-spin h-10 w-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <div className="text-white text-xl font-bold">{text}</div>
  </div>
);

const IsometricBackground: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  // Warm, earthy tones for the background pattern
  const patternColor = isDarkMode ? 'rgba(245, 158, 11, 0.2)' : 'rgba(146, 64, 14, 0.3)'; // amber-400 and amber-800
  const patternId = 'isometric-pattern';
  
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="100" height="50" patternTransform="scale(1)">
            <path d="M50 0 L100 25 L50 50 L0 25 Z M0 25 L50 50 L50 100 L0 75 Z M50 50 L100 25 L100 75 L50 100 Z"
                  fill="none"
                  stroke={patternColor}
                  strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="200%" height="200%" fill={`url(#${patternId})`} className="animate-[background-pan]" style={{ willChange: 'transform' }}/>
      </svg>
    </div>
  );
};

const LockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002 2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
    </svg>
);

// Centralized data structure type
interface PortfolioData {
    navData: NavData[];
    pagesData: PageData[];
    socialLinks: SocialLink[];
    profilePic: string;
    profileCardBg: string | null;
    taglines: string[];
    customBackground: string | null;
}

// Helper to convert image file to base64 string
const imageFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pageStack, setPageStack] = useState(['home']);
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const bgInputRef = useRef<HTMLInputElement>(null);
  const activePage = pageStack[pageStack.length - 1];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // --- DATA MANAGEMENT ---

  const loadInitialData = useCallback(async () => {
    setIsLoading(true);
    try {
      if (sessionStorage.getItem('portfolio-is-logged-in') === 'true') {
        setIsEditMode(true);
      }
      
      const savedDataString = localStorage.getItem('portfolio-data');

      if (savedDataString) {
        const savedData = JSON.parse(savedDataString);
        setPortfolioData(savedData);
        setIsDirty(false); // Fresh data from localStorage
      } else {
        // No data in storage, load defaults
        setPortfolioData({
            navData: defaultNavData,
            pagesData: defaultPagesData,
            socialLinks: defaultSocialLinks,
            profilePic: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Ananias',
            profileCardBg: null,
            taglines: defaultTaglines,
            customBackground: null,
        });
        setIsDirty(true); // Needs to be saved for the first time
      }
    } catch (error) {
      console.error("Failed to load data from localStorage:", error);
      alert('Could not load portfolio data. Using default content.');
      setPortfolioData({
          navData: defaultNavData,
          pagesData: defaultPagesData,
          socialLinks: defaultSocialLinks,
          profilePic: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Ananias',
          profileCardBg: null,
          taglines: defaultTaglines,
          customBackground: null,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  // Initialize data on component mount
  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const handleSaveData = async () => {
    if (!portfolioData || isSaving || !isDirty) return;
    setIsSaving(true);
    try {
      localStorage.setItem('portfolio-data', JSON.stringify(portfolioData));
      // Simulate save time for user feedback
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsDirty(false);
    } catch (error) {
      console.error('Save failed:', error);
      alert('Error: Could not save your changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // --- AUTHENTICATION ---
  
  const enableEditMode = () => {
    if (sessionStorage.getItem('portfolio-is-logged-in') === 'true') {
        setIsEditMode(true);
        return;
    }
    setLoginError('');
    setPasswordInput('');
    setIsLoginModalOpen(true);
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
        sessionStorage.setItem('portfolio-is-logged-in', 'true');
        setIsEditMode(true);
        setIsLoginModalOpen(false);
    } else {
        setLoginError('Incorrect password.');
    }
  };

  const disableEditMode = () => {
    if (isDirty && !window.confirm("You have unsaved changes. Are you sure you want to exit? Your changes will be lost.")) {
      return;
    }
    sessionStorage.removeItem('portfolio-is-logged-in');
    setIsEditMode(false);
    setIsDirty(false);
    loadInitialData(); // Revert to last saved state
  };

  // --- DATA UPDATE HANDLERS ---
  const updatePortfolioData = (updater: (prevData: PortfolioData) => Partial<PortfolioData>) => {
    setPortfolioData(prev => prev ? { ...prev, ...updater(prev) } : null);
    setIsDirty(true);
  };
  
  const handleNavUpdate = (newNavData: NavData[]) => {
      updatePortfolioData(() => ({ navData: newNavData }));
  };
  
  const handlePageUpdate = (updatedPage: PageData) => {
      if (!portfolioData) return;
      const newPagesData = portfolioData.pagesData.map(p => p.id === updatedPage.id ? updatedPage : p);
      updatePortfolioData(() => ({ pagesData: newPagesData }));
  };

  const handleSocialsUpdate = (newSocials: SocialLink[]) => {
      updatePortfolioData(() => ({ socialLinks: newSocials }));
  };
  
  const handleProfilePicUpdate = async (file: File) => {
      try {
          const newSrc = await imageFileToBase64(file);
          updatePortfolioData(() => ({ profilePic: newSrc }));
      } catch (error) {
          alert(`Error processing file: ${error}`);
      }
  };

  const handleProfileCardBgUpdate = async (file: File | null) => {
      try {
          const newSrc = file ? await imageFileToBase64(file) : null;
          updatePortfolioData(() => ({ profileCardBg: newSrc }));
      } catch (error) {
          alert(`Error processing file: ${error}`);
      }
  };

  const handleTaglinesUpdate = (newTaglines: string[]) => {
      const filteredTaglines = newTaglines.filter(t => t.trim() !== '');
      updatePortfolioData(() => ({ taglines: filteredTaglines }));
  };
  
  const handleCustomBackgroundUpdate = async (file: File | null) => {
      try {
          const newBg = file ? await imageFileToBase64(file) : null;
          updatePortfolioData(() => ({ customBackground: newBg }));
      } catch (error) {
          alert(`Error processing file: ${error}`);
      }
  };

  const handleEditBgClick = () => {
    bgInputRef.current?.click();
  };

  const handleBgFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleCustomBackgroundUpdate(file);
    }
    if (event.target) event.target.value = '';
  };

  const handleNavigate = (pageId: string) => {
    setPageStack(prev => [...prev, pageId]);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (pageStack.length > 1) {
      setPageStack(prev => prev.slice(0, -1));
    }
  };

  const renderContent = () => {
    if (isLoading || !portfolioData) {
      return null; // The loading overlay will be shown
    }
    const { navData, pagesData, socialLinks, profilePic, profileCardBg, taglines } = portfolioData;

    if (activePage === 'home') {
      return (
        <div className="animate-[fade-in]">
          <Header 
            isDarkMode={isDarkMode} 
            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            socialLinks={socialLinks}
            isEditMode={isEditMode}
            onUpdateSocials={handleSocialsUpdate}
            profilePic={profilePic}
            onUpdateProfilePic={handleProfilePicUpdate}
            profileCardBg={profileCardBg}
            onUpdateProfileCardBg={handleProfileCardBgUpdate}
            taglines={taglines}
            onUpdateTaglines={handleTaglinesUpdate}
          />
          <div className="pt-20">
            <h2 className="text-center text-4xl md:text-5xl font-black text-gray-800 dark:text-white text-puzzle mb-12">
              ABOUT ME
            </h2>
            <NavigationSection 
              items={navData} 
              onNavigate={handleNavigate} 
              isEditMode={isEditMode} 
              onUpdate={handleNavUpdate} 
              isDarkMode={isDarkMode}
              uploadImage={imageFileToBase64}
            />
          </div>
        </div>
      );
    }
    
    const currentPageData = pagesData.find(p => p.id === activePage);
    
    const parentPageId = pageStack.find(id => navData.some(nav => nav.id === id));
    const currentColor = navData.find(n => n.id === parentPageId)?.color || '#000';

    if (currentPageData) {
      return <ContentPage page={currentPageData} color={currentColor} onBack={handleBack} onNavigate={handleNavigate} isEditMode={isEditMode} onUpdate={handlePageUpdate} isDarkMode={isDarkMode} uploadImage={imageFileToBase64} />;
    }

    handleBack();
    return null;
  }
  
  const mainContainerClasses = `
    min-h-screen 
    font-sans overflow-x-hidden
    bg-transparent
  `;

  return (
    <>
      {isLoading && <LoadingOverlay />}
      {isSaving && <LoadingOverlay text="Menyimpan perubahan..." />}
      
      <div className={mainContainerClasses}>
        {portfolioData?.customBackground ? (
          <>
            <div
              className="fixed inset-0 -z-20 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${portfolioData.customBackground})` }}
            />
            <div className="fixed inset-0 -z-10 bg-white/20 dark:bg-black/50 backdrop-blur-sm" />
          </>
        ) : (
          isDarkMode ? <StarryNightBackground /> : <IsometricBackground isDarkMode={isDarkMode} />
        )}
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {renderContent()}
        </main>

        {isLoginModalOpen && (
          <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-[fade-in]"
              onClick={() => setIsLoginModalOpen(false)}
          >
              <form 
                  onSubmit={handleLogin}
                  className={`relative w-full max-w-sm p-8 m-4 border-2 border-black dark:border-amber-200 rounded-lg bg-[#fdf6e3] dark:bg-[#2c2c2c] ${isDarkMode ? 'shadow-[8px_8px_0px_#f59e0b]' : 'shadow-[8px_8px_0px_#92400e]'}`}
                  onClick={e => e.stopPropagation()}
                  aria-modal="true"
                  role="dialog"
              >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-left">Admin Login</h3>
                  <div className="space-y-2">
                      <div>
                          <label htmlFor="password-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                          </label>
                          <input 
                              type="password" 
                              name="password" 
                              id="password-input" 
                              value={passwordInput} 
                              onChange={(e) => setPasswordInput(e.target.value)}
                              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-white"
                              placeholder="Enter password"
                              autoFocus
                              aria-describedby="password-error"
                              aria-invalid={!!loginError}
                          />
                      </div>
                      {loginError && <p id="password-error" className="text-sm text-red-500 dark:text-red-400">{loginError}</p>}
                  </div>
                  <div className="flex justify-end gap-4 mt-8">
                      <button type="button" onClick={() => setIsLoginModalOpen(false)} className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Cancel</button>
                      <button type="submit" className="px-4 py-2 font-semibold text-white rounded-md transition-colors bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:focus:ring-offset-slate-800">Login</button>
                  </div>
              </form>
          </div>
        )}

        <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
          {isEditMode ? (
              <div className="space-y-4">
                <p className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full inline-block">
                  You are in Edit Mode.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <button 
                      onClick={handleEditBgClick}
                      className="px-4 py-2 font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    >
                      Ubah Latar
                    </button>
                    {portfolioData?.customBackground && (
                        <button 
                          onClick={() => handleCustomBackgroundUpdate(null)}
                          className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700/50 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          Hapus Latar
                        </button>
                    )}
                  <button
                    onClick={handleSaveData}
                    disabled={!isDirty || isSaving}
                    className="px-6 py-2 font-semibold text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-slate-800"
                  >
                    {isSaving ? 'Menyimpan...' : (isDirty ? 'Simpan Perubahan' : 'Tersimpan')}
                  </button>
                  <button 
                    onClick={disableEditMode}
                    className="px-4 py-2 font-semibold text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/50 rounded-md hover:bg-red-200 dark:hover:bg-red-800/50 transition-colors"
                  >
                    Keluar Mode Edit
                  </button>
                </div>
                <input
                  type="file"
                  ref={bgInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleBgFileChange}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p>
                    Made with fun & code
                  </p>
                  <p className="mt-1 text-sm">
                    Created by <span className="font-bold">NiasWali</span>
                  </p>
                </div>
                <button
                  onClick={enableEditMode}
                  className="inline-flex items-center p-3 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  title="Admin Login"
                  aria-label="Open Admin Login Panel"
                >
                  <LockIcon />
                </button>
              </div>
            )}
        </footer>
      </div>
    </>
  );
};

export default App;