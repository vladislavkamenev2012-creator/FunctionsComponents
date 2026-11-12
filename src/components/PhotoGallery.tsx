import type { CityPhoto } from "../data/city";

type PhotoGalleryProps = {
  photos: CityPhoto[];
};

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <section className="photo-gallery" aria-label="Photos of the city">
      {photos.map((photo, index) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </section>
  );
}