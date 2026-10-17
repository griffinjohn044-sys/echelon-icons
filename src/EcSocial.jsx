import React from "react";

/** ECHELON Social icon: original artwork converted to scalable vector paths. */
export function EcSocial({ size = 48, title = "ECHELON Social", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="337 455 286 286"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      {...props}
    >
      <path d="M 393 469.5 H 567 C 592.5 469.5 612 489 612 515 V 682 C 612 707.5 592.5 727 567 727 H 393 C 367.5 727 348 707.5 348 682 V 515 C 348 489.5 367.5 469.5 393 469.5 Z" fill="none" stroke="#1c1c1c" strokeWidth={5} />
      <path d="M 522 502 L 514 505 L 513 523 L 511 525 L 418 525 L 415 529 L 415 562 L 418 565 L 508 565 L 512 570 L 512 588 L 510 591 L 421 591 L 415 595 L 415 624 L 418 628 L 507 628 L 510 630 L 510 651 L 508 653 L 413 653 L 412 657 L 440 686 L 551 686 L 554 682 L 554 529 Z M 521 505 L 550 529 L 550 682 L 548 684 L 442 684 L 419 660 L 418 656 L 511 656 L 514 653 L 514 628 L 511 626 L 422 626 L 419 624 L 419 596 L 421 594 L 512 594 L 515 591 L 515 565 L 512 563 L 421 563 L 419 561 L 419 530 L 421 528 L 512 528 L 517 525 L 517 508 Z" fill="#000000" fillRule="evenodd" />
      <path d="M 577 682 H 583 V 688 H 577 Z" fill="#ff0000" />
    </svg>
  );
}

export default EcSocial;
