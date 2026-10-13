type VideoEmbedProps = {
  src: string;
  title?: string;
  aspect?: number;
  type?: "vimeo" | "youtube" | "file";
};

export function VideoEmbed({
  src,
  title = "Project video",
  aspect = 16 / 9,
  type = "vimeo",
}: VideoEmbedProps) {
  const paddingTop = `${(1 / aspect) * 100}%`;

  if (type === "file") {
    return (
      <div className="video-embed" style={{ paddingTop }}>
        <video controls playsInline preload="metadata" title={title}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  const embedSrc =
    type === "youtube"
      ? src.includes("embed")
        ? src
        : `https://www.youtube.com/embed/${src}`
      : src.includes("player.vimeo.com")
        ? src
        : `https://player.vimeo.com/video/${src}`;

  return (
    <div className="video-embed" style={{ paddingTop }}>
      <iframe
        src={embedSrc}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
