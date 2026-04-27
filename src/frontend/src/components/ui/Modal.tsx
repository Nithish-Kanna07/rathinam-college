import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "../AppButton";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  "data-ocid"?: string;
}

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = "md",
  "data-ocid": ocid,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      ref.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
        role="button"
        tabIndex={0}
        aria-label="Close dialog"
      />

      {/* Panel */}
      <dialog
        ref={ref}
        open
        tabIndex={-1}
        className={cn(
          "relative z-10 w-full bg-card rounded-xl border border-border shadow-elevated animate-slide-up outline-none p-0 m-0",
          sizeMap[size],
        )}
        data-ocid={ocid}
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {/* Header */}
        {(title || description) && (
          <div className="px-6 pt-6 pb-4 border-b border-border">
            {title && (
              <h2
                id="modal-title"
                className="font-display text-lg font-semibold text-foreground"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
            <button
              type="button"
              onClick={onClose}
              data-ocid={ocid ? `${ocid}.close_button` : "modal.close_button"}
              aria-label="Close dialog"
              className="absolute top-4 right-4 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-5">{children}</div>
      </dialog>
    </div>
  );
}

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "default" | "destructive";
  loading?: boolean;
  "data-ocid"?: string;
}

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  loading = false,
  "data-ocid": ocid,
}: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      size="sm"
      data-ocid={ocid ?? "confirm.dialog"}
    >
      <div className="flex justify-end gap-3 mt-2">
        <Button
          variant="outline"
          onClick={onClose}
          data-ocid={ocid ? `${ocid}.cancel_button` : "confirm.cancel_button"}
        >
          {cancelLabel}
        </Button>
        <Button
          variant={variant === "destructive" ? "destructive" : "primary"}
          onClick={onConfirm}
          loading={loading}
          data-ocid={ocid ? `${ocid}.confirm_button` : "confirm.confirm_button"}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  );
}
