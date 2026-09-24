import { Pic } from "@/components/Pic";
import styles from "./Devices.module.css";

/**
 * Devices drawn in CSS around a real render (scripts/render.mjs). Every size
 * inside a device is in cqw of its outer box, so a device scales as one
 * object. The outer element declares the container; the parts inside size
 * themselves against it (an element cannot size itself in its own cqw).
 */

type Screen = { src: string; alt: string; width: number; height: number; widths?: number[]; sizes?: string; priority?: boolean };

type Tone = "graphite" | "silver";

export function Laptop({ screen, tone = "silver", className }: { screen: Screen; tone?: Tone; className?: string }) {
  return (
    <div className={`${styles.laptop} ${className ?? ""}`} data-tone={tone}>
      <div className={styles.lid}>
        <span className={styles.camera} aria-hidden="true" />
        <div className={styles.laptopScreen}>
          <Pic {...screen} widths={screen.widths ?? [1136, 1600, 2880]} sizes={screen.sizes ?? "60vw"} />
        </div>
      </div>
      <div className={styles.deck} aria-hidden="true" />
    </div>
  );
}

export function Phone({
  screen,
  status = "dark",
  statusBg = "#ffffff",
  bare = false,
  className,
  children,
}: {
  screen: Screen;
  /** Status-bar ink: "dark" on a light page, "light" on a dark one. */
  status?: "dark" | "light";
  statusBg?: string;
  /** The render already carries its own status bar (full-screen apps). */
  bare?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`${styles.phone} ${className ?? ""}`}>
      <div className={styles.phoneBody}>
        <div className={styles.phoneScreen}>
          {!bare && (
            <div className={styles.statusBar} data-ink={status} style={{ background: statusBg }} aria-hidden="true">
              <span>9:41</span>
              <StatusIcons />
            </div>
          )}
          <div className={bare ? styles.phoneFull : styles.phoneView}>
            <Pic {...screen} widths={screen.widths ?? [560, 1136]} sizes={screen.sizes ?? "320px"} />
          </div>
          <span className={styles.island} aria-hidden="true" />
          {children}
        </div>
      </div>
    </div>
  );
}

export function PosTerminal({ screen, className, children }: { screen: Screen; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`${styles.pos} ${className ?? ""}`}>
      <div className={styles.posHead}>
        <div className={styles.posScreen}>
          <Pic {...screen} widths={screen.widths ?? [1136, 1600, 2880]} sizes={screen.sizes ?? "50vw"} />
          {children}
        </div>
      </div>
      <div className={styles.posNeck} aria-hidden="true" />
      <div className={styles.posFoot} aria-hidden="true" />
    </div>
  );
}

/** A desktop monitor on a flat stand: the back-office PC of a shop or restaurant. */
export function Monitor({ screen, ratio = 16 / 10, className }: { screen: Screen; ratio?: number; className?: string }) {
  return (
    <div className={`${styles.monitor} ${className ?? ""}`}>
      <div className={styles.monitorHead}>
        <div className={styles.monitorScreen} style={{ aspectRatio: String(ratio) }}>
          <Pic {...screen} widths={screen.widths ?? [1136, 1600]} sizes={screen.sizes ?? "55vw"} />
        </div>
        <span className={styles.monitorChin} aria-hidden="true" />
      </div>
      <div className={styles.monitorNeck} aria-hidden="true" />
      <div className={styles.monitorFoot} aria-hidden="true" />
    </div>
  );
}

function StatusIcons() {
  return (
    <span className={styles.statusIcons}>
      <svg viewBox="0 0 18 12">
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" />
        <rect x="15" y="0" width="3" height="12" rx="1" />
      </svg>
      <svg viewBox="0 0 26 12">
        <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.45" />
        <rect x="2.5" y="2.5" width="16" height="7" rx="1.5" />
        <rect x="24" y="4" width="1.8" height="4" rx="0.9" opacity="0.45" />
      </svg>
    </span>
  );
}
