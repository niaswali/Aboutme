import React, { useRef } from 'react';
import type { GalleryImage } from '../types';

interface GalleryProps {
  images: GalleryImage[];
  isEditMode: boolean;
  onUpdate: (images: GalleryImage[]) => void;
  uploadImage: (file: File) => Promise<string>;
}

const AddIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const DeleteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Gallery: React.FC<GalleryProps> = ({ images, isEditMode, onUpdate, uploadImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await uploadImage(file);
        const newImage: GalleryImage = {
          id: Date.now(), // Simple unique ID, backend might generate a better one
          src: imageUrl,
          alt: file.name, // Use file name as default alt text
        };
        onUpdate([...images, newImage]);
      } catch (error) {
        alert(`Error uploading image: ${error}`);
      }
    }
    event.target.value = ''; // Reset input to allow uploading the same file again
  };

  const handleDelete = (idToDelete: number) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedImages = images.filter(image => image.id !== idToDelete);
      onUpdate(updatedImages);
    }
  };


  return (
    <section>
      <div className="flex flex-wrap justify-center items-center text-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white w-full sm:w-auto text-puzzle">Gallery of Good Times</h2>
        {isEditMode && (
          <>
            <button
              onClick={handleAddClick}
              className="flex items-center gap-2 py-2 px-4 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75"
            >
              <AddIcon className="w-5 h-5" />
              Add Photo
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              accept="image/png, image/jpeg, image/gif, image/webp"
            />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative border-2 border-black dark:border-gray-500 rounded-lg p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_#f59e0b] transition-all duration-300 hover:shadow-[12px_12px_0px_#92400e] dark:hover:shadow-[12px_12px_0px_#f59e0b]"
          >
            {isEditMode && (
              <button
                onClick={() => handleDelete(image.id)}
                className="absolute top-0 right-0 z-20 m-1 p-1.5 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 transform group-hover:scale-110"
                aria-label="Delete image"
              >
                <DeleteIcon className="w-4 h-4" />
              </button>
            )}
            <div
              className="rounded-md overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full aspect-square object-cover rounded-md transform transition-transform duration-500 ease-out group-hover:[transform:translateZ(20px)_rotateY(-10deg)]"
              />
            </div>
          </div>
        ))}
         {images.length === 0 && (
            <div className="col-span-full text-center py-10 px-6 bg-white/30 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <p className="text-xl font-medium text-gray-600 dark:text-gray-400">The gallery is empty.</p>
                {isEditMode && <p className="mt-2 text-gray-500 dark:text-gray-500">Click "Add Photo" to get started!</p>}
            </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;