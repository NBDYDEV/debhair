export function MediaPlayer({ src }: { src: string }) {
    return (
        <video className="w-full h-full object-cover" autoPlay loop muted preload="auto">
            <source src={src} type="video/mp4" />
        </video>
    )
}