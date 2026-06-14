import Image from "next/image";

type Props = { src: string; alt: string; width?: number; priority?: boolean };

/** A single device frame around a real app screenshot. */
export default function PhoneShot({ src, alt, width = 300, priority = false }: Props) {
  return (
    <div className="device" style={{ width }}>
      <div className="device-frame">
        <Image
          className="device-screen"
          src={src}
          alt={alt}
          width={1320}
          height={2868}
          priority={priority}
          sizes={`${width}px`}
        />
      </div>
    </div>
  );
}
