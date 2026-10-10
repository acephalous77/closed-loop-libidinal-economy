import Image from "next/image";

/**
 * Faded seal watermark used in the body of cover/divider pages, per
 * the published-report's design language. The seal moves from
 * masthead (where I had it initially) to the center body as a
 * low-opacity background presence — the word-mark "OHCOSE" up top
 * carries the masthead role on its own.
 *
 * Use `prominent` for the landing's center body where the seal is
 * the main visual; `subtle` everywhere else.
 */

interface SealWatermarkProps {
  prominent?: boolean;
}

export function SealWatermark({ prominent = false }: SealWatermarkProps) {
  const size = prominent ? 320 : 220;
  const opacity = prominent ? 0.92 : 0.28;

  return (
    <div
      className="flex justify-center my-md"
      aria-hidden="true"
      style={{
        opacity,
      }}
    >
      <Image
        src="/ohcose/seal.webp"
        alt=""
        width={size}
        height={size}
        priority={prominent}
      />
    </div>
  );
}
