import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

const Alert = ({ children, variant, ...props }) => {
  return (
    <div
      role="alert"
      className={`rounded-lg border p-4 ${
        variant === "destructive" 
          ? "border-red-200 bg-red-50 text-red-600"
          : "border-gray-200 bg-white"
      }`}
      {...props}
    >
      {children}
    </div>
  )
}

const AlertDescription = ({ children, ...props }) => {
  return (
    <div className="text-sm" {...props}>
      {children}
    </div>
  )
}

export { Alert, AlertDescription }
