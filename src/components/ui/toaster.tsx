import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { cn } from "@/lib/utils"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        ...props
      }: {
        id: string
        title?: React.ReactNode
        description?: React.ReactNode
        action?: React.ReactNode
        variant?: "default" | "destructive" | "success"
        [key: string]: any
      }) {
        return (
          <Toast
            key={id}
            {...props}
            className={cn(
              "rounded-lg shadow-lg border text-white",
              variant === "success" && "bg-green-600",
              variant === "destructive" && "bg-red-600",
              !variant && "bg-slate-800"
            )}
          >
            <div className="grid gap-1  ">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
